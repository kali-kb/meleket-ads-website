<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <main class="pt-16">
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div class="prose prose-lg max-w-none">
              <p class="text-gray-600 mb-8">
                <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
              </p>
              
              <div class="space-y-8">
                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p class="text-gray-600 mb-6">
                    By accessing and using Meleket's services, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
                  <p class="text-gray-600 mb-4">Meleket provides Meta advertising services including:</p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>Facebook and Instagram advertising campaign management</li>
                    <li>Ad creative development and optimization</li>
                    <li>Audience targeting and research</li>
                    <li>Performance monitoring and reporting</li>
                    <li>Strategic consultation and recommendations</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <p class="text-gray-600 mb-4">As a client, you agree to:</p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>Provide accurate and complete information about your business</li>
                    <li>Grant necessary access to advertising accounts and platforms</li>
                    <li>Comply with Meta's advertising policies and guidelines</li>
                    <li>Pay fees according to the agreed schedule</li>
                    <li>Communicate promptly regarding campaign requirements and changes</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                  <p class="text-gray-600 mb-6">
                    Payment terms will be specified in individual service agreements. Generally, payments are due 
                    according to the agreed schedule, and late payments may result in service suspension.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
                  <p class="text-gray-600 mb-6">
                    Meleket shall not be liable for any indirect, incidental, special, consequential, or punitive 
                    damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
                  <p class="text-gray-600 mb-6">
                    Either party may terminate the service agreement with appropriate notice as specified in the 
                    individual service contract. Upon termination, all outstanding fees become immediately due.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
                  <div class="bg-gray-50 p-6 rounded-lg">
                    <p class="text-gray-600 mb-2"><strong>Email:</strong> meleketads@outlook.com</p>
                    <p class="text-gray-600 mb-2"><strong>Phone:</strong> 0907608839</p>
                    <p class="text-gray-600"><strong>Business Name:</strong> Meleket</p>
                  </div>
                </section>
              </div>

              <div class="mt-12 pt-8 border-t border-gray-200">
                <NuxtLink to="/" class="btn-primary">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m0 0H3m0 0h7"></path>
                  </svg>
                  Back to Home
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Terms of Service - Meleket',
  meta: [
    { name: 'description', content: 'Terms of Service for Meleket Meta Ads Agency. Read our terms and conditions for using our services.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>