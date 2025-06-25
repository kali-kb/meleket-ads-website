import { Pool } from 'pg'

let pool: Pool | null = null
import 'dotenv/config'


export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL
    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false
      },
      // Add connection timeout and retry settings
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 30000,
      max: 10
    })

    // Add error handler
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err)
    })
  }
  return pool
}

export async function query(text: string, params?: any[]) {
  const pool = getPool()
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

// Test connection function
export async function testConnection() {
  try {
    const result = await query('SELECT NOW() as current_time')
    console.log('Database connected successfully:', result.rows[0].current_time)
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}