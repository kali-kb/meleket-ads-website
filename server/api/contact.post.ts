import { query } from '~/lib/database'

export default defineEventHandler(async (event) => {
  try {
    // Only allow POST requests
    if (event.node.req.method !== 'POST') {
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed'
      })
    }

    // Parse request body
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.fullName || !body.phoneNumber) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Full name and phone number are required'
      })
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    if (!phoneRegex.test(body.phoneNumber.replace(/\s/g, ''))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid phone number format'
      })
    }

    // Validate full name (basic validation)
    if (body.fullName.trim().length < 2) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Full name must be at least 2 characters long'
      })
    }

    // Check if contact already exists (optional - remove if you want to allow duplicates)
    const checkExistingQuery = `
      SELECT id FROM contacts 
      WHERE full_name = $1 AND phone_number = $2
    `
    const existingContact = await query(checkExistingQuery, [
      body.fullName.trim(),
      body.phoneNumber.trim()
    ])

    if (existingContact.rows.length > 0) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Contact with this name and phone number already exists'
      })
    }

    // Insert data into PostgreSQL database
    const insertQuery = `
      INSERT INTO contacts (full_name, phone_number)
      VALUES ($1, $2)
      RETURNING id, full_name, phone_number, created_at;
    `
    
    const values = [
      body.fullName.trim(),
      body.phoneNumber.trim()
    ]

    const result = await query(insertQuery, values)
    const savedContact = result.rows[0]

    console.log('Contact saved:', savedContact.id)

    // Return success response
    return {
      success: true,
      message: 'Contact information saved successfully',
      data: {
        id: savedContact.id,
        fullName: savedContact.full_name,
        phoneNumber: savedContact.phone_number,
        createdAt: savedContact.created_at
      }
    }

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    // If it's already a createError, throw it as is
    if (error.statusCode) {
      throw error
    }
    
    // Handle PostgreSQL errors
    if (error.code === '23505') { // Unique violation
      throw createError({
        statusCode: 409,
        statusMessage: 'Contact already exists'
      })
    }
    
    if (error.code === '42P01') { // Table does not exist
      throw createError({
        statusCode: 500,
        statusMessage: 'Database not properly configured. Please run setup.'
      })
    }
    
    // Generic server error
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error. Please try again later.'
    })
  }
})