import { Pool } from 'pg';

let pool = null;
function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      },
      // Add connection timeout and retry settings
      connectionTimeoutMillis: 1e4,
      idleTimeoutMillis: 3e4,
      max: 10
    });
    pool.on("error", (err) => {
      console.error("Unexpected error on idle client", err);
    });
  }
  return pool;
}
async function query(text, params) {
  const pool2 = getPool();
  const client = await pool2.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

export { query as q };
//# sourceMappingURL=database.mjs.map
