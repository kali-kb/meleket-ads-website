<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Scale Your Business?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us today and let's discuss how we can help you achieve profitable Meta advertising campaigns.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-2xl p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Request a Quote</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="form.fullName"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-meleket-green focus:border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  v-model="form.phoneNumber"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-meleket-green focus:border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="0907608839"
                />
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Request Quote</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-meleket-green/10 border border-meleket-green/20 rounded-lg">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-meleket-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-meleket-green font-medium">Thank you! We'll contact you.</span>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="showError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-red-700 font-medium">{{ errorMessage }}</span>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-6">Get in touch</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-meleket-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-meleket-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Email</h4>
                    <p class="text-gray-600">meleketads@outlook.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-meleket-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-meleket-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Phone</h4>
                    <p class="text-gray-600">0907608839</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-10 h-10 bg-meleket-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-meleket-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Response Time</h4>
                    <p class="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Box -->
            <div class="bg-gradient-to-br from-meleket-green to-meleket-green-dark rounded-2xl p-8 text-white">
              <h3 class="text-xl font-semibold mb-4">Ready to get started?</h3>
              <p class="mb-6 text-white/90">
                Let's discuss your Meta advertising goals and create a custom strategy for your business.
              </p>
              <a href="mailto:meleketads@outlook.com?subject=Meta Ads Consultation" class="inline-flex items-center bg-white text-meleket-green font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Email Us Directly
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  fullName: '',
  phoneNumber: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  showError.value = false
  showSuccess.value = false
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        fullName: form.value.fullName,
        phoneNumber: form.value.phoneNumber
      }
    })
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    form.value = {
      fullName: '',
      phoneNumber: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    showError.value = true
    errorMessage.value = error.data?.message || 'Something went wrong. Please try again.'
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>