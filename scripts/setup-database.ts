  import dotenv from 'dotenv'
  import { query, testConnection } from '../lib/database'

  // Load environment variables
  dotenv.config({ path: '.env.local' })
  dotenv.config({ path: '.env' })

  console.log('Database URL loaded:', process.env.DATABASE_URL ? 'Yes' : 'No')

  async function setupDatabase() {
    try {
      console.log('Testing database connection...')
    
      // Test connection first
      const isConnected = await testConnection()
      if (!isConnected) {
        console.error('Failed to connect to database')
        process.exit(1)
      }
    
      console.log('Setting up database schema...')
    
      // Drop existing table if it exists (optional - remove if you want to keep existing data)
      const dropTableQuery = `DROP TABLE IF EXISTS contacts;`
      await query(dropTableQuery)
      console.log('✅ Existing table dropped (if existed)')
    
      // Create the contacts table with only full_name and phone_number
      const createTableQuery = `
        CREATE TABLE contacts (
          id SERIAL PRIMARY KEY,
          full_name VARCHAR(255) NOT NULL,
          phone_number VARCHAR(50) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `
    
      await query(createTableQuery)
      console.log('✅ Contacts table created successfully!')
    
      // Create an index on created_at for better query performance
      const createIndexQuery = `
        CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
      `
    
      await query(createIndexQuery)
      console.log('✅ Index created successfully!')
    
      // Verify table exists
      const verifyQuery = `
        SELECT table_name, column_name, data_type, is_nullable
        FROM information_schema.columns 
        WHERE table_name = 'contacts'
        ORDER BY ordinal_position;
      `
    
      const result = await query(verifyQuery)
      console.log('✅ Table structure verified:')
      result.rows.forEach(row => {
        console.log(`  - ${row.column_name}: ${row.data_type} ${row.is_nullable === 'NO' ? '(NOT NULL)' : '(NULLABLE)'}`)
      })
    
      console.log('🎉 Database setup completed successfully!')
    
    } catch (error) {
      console.error('❌ Error setting up database:', error)
    
      // More specific error messages
      if (error.code === 'ECONNREFUSED') {
        console.error('Connection refused. Please check:')
        console.error('1. Database URL is correct')
        console.error('2. Database server is running')
        console.error('3. Network connectivity')
      } else if (error.code === 'ENOTFOUND') {
        console.error('Host not found. Please check the database URL.')
      } else if (error.code === '28P01') {
        console.error('Authentication failed. Please check username and password.')
      }
    
      process.exit(1)
    } finally {
      // Close the connection pool
      process.exit(0)
    }
  }

  setupDatabase()