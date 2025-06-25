<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img 
            src="/meleket-logo-website.png" 
            alt="Meleket Logo" 
            class="h-8 lg:h-10 w-auto"
          />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Home</a>
          <a href="#services" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Services</a>
          <a href="#about" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">About</a>
          <a href="#contact" class="btn-primary">Get Started</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-meleket-green transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="flex flex-col space-y-4">
          <a href="#home" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Home</a>
          <a href="#services" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Services</a>
          <a href="#about" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">About</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="btn-primary inline-block text-center">Get Started</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  })
})
</script>