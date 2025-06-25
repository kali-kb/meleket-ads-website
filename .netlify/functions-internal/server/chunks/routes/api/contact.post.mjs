import { d as defineEventHandler, e as createError, r as readBody } from '../../_/nitro.mjs';
import { q as query } from '../../_/database.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';

const contact_post = defineEventHandler(async (event) => {
  try {
    if (event.node.req.method !== "POST") {
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed"
      });
    }
    const body = await readBody(event);
    if (!body.fullName || !body.phoneNumber) {
      throw createError({
        statusCode: 400,
        statusMessage: "Full name and phone number are required"
      });
    }
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(body.phoneNumber.replace(/\s/g, ""))) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid phone number format"
      });
    }
    if (body.fullName.trim().length < 2) {
      throw createError({
        statusCode: 400,
        statusMessage: "Full name must be at least 2 characters long"
      });
    }
    const checkExistingQuery = `
      SELECT id FROM contacts 
      WHERE full_name = $1 AND phone_number = $2
    `;
    const existingContact = await query(checkExistingQuery, [
      body.fullName.trim(),
      body.phoneNumber.trim()
    ]);
    if (existingContact.rows.length > 0) {
      throw createError({
        statusCode: 409,
        statusMessage: "Contact with this name and phone number already exists"
      });
    }
    const insertQuery = `
      INSERT INTO contacts (full_name, phone_number)
      VALUES ($1, $2)
      RETURNING id, full_name, phone_number, created_at;
    `;
    const values = [
      body.fullName.trim(),
      body.phoneNumber.trim()
    ];
    const result = await query(insertQuery, values);
    const savedContact = result.rows[0];
    console.log("Contact saved:", savedContact.id);
    return {
      success: true,
      message: "Contact information saved successfully",
      data: {
        id: savedContact.id,
        fullName: savedContact.full_name,
        phoneNumber: savedContact.phone_number,
        createdAt: savedContact.created_at
      }
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    if (error.statusCode) {
      throw error;
    }
    if (error.code === "23505") {
      throw createError({
        statusCode: 409,
        statusMessage: "Contact already exists"
      });
    }
    if (error.code === "42P01") {
      throw createError({
        statusCode: 500,
        statusMessage: "Database not properly configured. Please run setup."
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error. Please try again later."
    });
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
