<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <main class="pt-16">
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div class="prose prose-lg max-w-none">
              <p class="text-gray-600 mb-8">
                <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
              </p>
              
              <div class="space-y-8">
                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p class="text-gray-600 mb-4">
                    At Meleket, we collect information that you provide directly to us when using our Meta advertising services, including:
                  </p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>Contact information (full name, email address, phone number)</li>
                    <li>Business information and advertising goals</li>
                    <li>Communication preferences</li>
                    <li>Technical information about your website and current advertising efforts</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p class="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>Providing and improving our Meta advertising services</li>
                    <li>Communicating with you about your campaigns and our services</li>
                    <li>Sending you updates, newsletters, and promotional materials (with your consent)</li>
                    <li>Analyzing and optimizing our service delivery</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p class="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>With Meta (Facebook/Instagram) for advertising campaign management</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                  <p class="text-gray-600 mb-6">
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                    storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                  <p class="text-gray-600 mb-6">
                    We retain your personal information for as long as necessary to provide our services and fulfill the 
                    purposes outlined in this privacy policy, unless a longer retention period is required by law.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                  <p class="text-gray-600 mb-4">You have the right to:</p>
                  <ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict the processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p class="text-gray-600 mb-6">
                    Our website may use cookies and similar tracking technologies to enhance your experience and analyze 
                    website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
                  <p class="text-gray-600 mb-6">
                    We may use third-party services such as Meta Business Manager, analytics tools, and communication 
                    platforms. These services have their own privacy policies, and we encourage you to review them.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                  <p class="text-gray-600 mb-6">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting 
                    the new privacy policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                  <p class="text-gray-600 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
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
  title: 'Privacy Policy - Meleket',
  meta: [
    { name: 'description', content: 'Privacy Policy for Meleket Meta Ads Agency. Learn how we collect, use, and protect your personal information.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>