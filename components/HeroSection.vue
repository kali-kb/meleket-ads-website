<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-72 h-72 bg-meleket-green rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-meleket-green-light rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-meleket-green rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Your partner for 
            <span class="text-meleket-green">profitable</span> 
            Meta ads campaign
          </h1>
          
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your business with data-driven Meta advertising strategies. We help brands achieve measurable growth through expertly crafted Facebook and Instagram ad campaigns.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" class="btn-primary">
              Start Your Campaign
              <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a href="#services" class="btn-secondary">Learn More</a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
 
            <div class="text-center">
              <div class="text-2xl lg:text-3xl font-bold text-meleket-green mb-1">24/7</div>
              <div class="text-sm text-gray-600">Support Available</div>
            </div>
            <div class="text-center">
              <div class="text-2xl lg:text-3xl font-bold text-meleket-green mb-1">100%</div>
              <div class="text-sm text-gray-600">Dedicated Service</div>
            </div>
          </div>
        </div>

        <!-- Hero Image/Illustration -->
        <div class="relative animate-fade-in">
          <div class="relative bg-gradient-to-br from-meleket-green/10 to-meleket-green-light/10 rounded-3xl p-8 lg:p-12">
            <!-- Meta Icons -->
            <div class="absolute top-4 right-4 flex space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">f</span>
              </div>
              <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">IG</span>
              </div>
            </div>

            <!-- Dashboard Mockup -->
            <div class="bg-white rounded-2xl shadow-2xl p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-gray-800">Campaign Performance</h3>
                <div class="flex items-center text-meleket-green">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm font-medium">+24%</span>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">ROAS</span>
                  <span class="font-semibold text-meleket-green">4.2x</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">CTR</span>
                  <span class="font-semibold">2.8%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Conversions</span>
                  <span class="font-semibold">1,247</span>
                </div>
              </div>

              <!-- Chart representation -->
              <div class="mt-6">
                <div class="flex items-end space-x-1 h-20">
                  <div class="bg-meleket-green/20 w-full h-8 rounded-sm"></div>
                  <div class="bg-meleket-green/40 w-full h-12 rounded-sm"></div>
                  <div class="bg-meleket-green/60 w-full h-16 rounded-sm"></div>
                  <div class="bg-meleket-green w-full h-20 rounded-sm"></div>
                  <div class="bg-meleket-green/80 w-full h-14 rounded-sm"></div>
                  <div class="bg-meleket-green/60 w-full h-10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
      <svg class="w-6 h-6 text-meleket-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>