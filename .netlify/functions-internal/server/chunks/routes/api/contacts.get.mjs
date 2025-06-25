import { d as defineEventHandler, f as getQuery, e as createError } from '../../_/nitro.mjs';
import { q as query } from '../../_/database.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';

const contacts_get = defineEventHandler(async (event) => {
  try {
    const queryParams = getQuery(event);
    const page = parseInt(queryParams.page) || 0;
    const limit = parseInt(queryParams.limit) || 10;
    const offset = page * limit;
    const countQuery = "SELECT COUNT(*) as total FROM contacts";
    const countResult = await query(countQuery);
    const total = parseInt(countResult.rows[0].total);
    const selectQuery = `
      SELECT id, full_name, phone_number, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;
    const result = await query(selectQuery, [limit, offset]);
    const contacts = result.rows.map((row) => ({
      id: row.id,
      fullName: row.full_name,
      phoneNumber: row.phone_number,
      createdAt: row.created_at
    }));
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
    };
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch contacts"
    });
  }
});

export { contacts_get as default };
//# sourceMappingURL=contacts.get.mjs.map
