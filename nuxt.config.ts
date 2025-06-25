// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  // Netlify deployment configuration
  nitro: {
    preset: 'netlify'
  },
  
  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    databaseUrl: process.env.DATABASE_URL,
    
    // Public keys (exposed to client-side)
    public: {
      // Add any public environment variables here if needed
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})