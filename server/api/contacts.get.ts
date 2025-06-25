import { query } from '~/lib/database'

export default defineEventHandler(async (event) => {
  try {
    // Get query parameters
    const queryParams = getQuery(event)
    const page = parseInt(queryParams.page as string) || 0
    const limit = parseInt(queryParams.limit as string) || 10
    const offset = page * limit

    // Get total count
    const countQuery = 'SELECT COUNT(*) as total FROM contacts'
    const countResult = await query(countQuery)
    const total = parseInt(countResult.rows[0].total)

    // Fetch contacts with pagination
    const selectQuery = `
      SELECT id, full_name, phone_number, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `
    
    const result = await query(selectQuery, [limit, offset])
    const contacts = result.rows.map(row => ({
      id: row.id,
      fullName: row.full_name,
      phoneNumber: row.phone_number,
      createdAt: row.created_at
    }))

    return {
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: (page + 1) * limit < total,
        hasPrev: page > 0
      }
    }

  } catch (error) {
    console.error('Error fetching contacts:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch contacts'
    })
  }
})