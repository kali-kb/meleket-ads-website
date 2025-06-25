import { _ as __nuxt_component_0, a as _sfc_main$1, b as __nuxt_component_3 } from './Footer-DodHqiGT.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BVR7gBbi.mjs';
import { withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "terms-of-service",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Terms of Service - Meleket",
      meta: [
        { name: "description", content: "Terms of Service for Meleket Meta Ads Agency. Read our terms and conditions for using our services." },
        { name: "robots", content: "index, follow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtRouteAnnouncer = __nuxt_component_0;
      const _component_Header = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtRouteAnnouncer, null, null, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="pt-16"><section class="section-padding bg-white"><div class="container-custom"><div class="max-w-4xl mx-auto"><h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1><div class="prose prose-lg max-w-none"><p class="text-gray-600 mb-8"><strong>Last updated:</strong> ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleDateString())}</p><div class="space-y-8"><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2><p class="text-gray-600 mb-6"> By accessing and using Meleket&#39;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. </p></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2><p class="text-gray-600 mb-4">Meleket provides Meta advertising services including:</p><ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2"><li>Facebook and Instagram advertising campaign management</li><li>Ad creative development and optimization</li><li>Audience targeting and research</li><li>Performance monitoring and reporting</li><li>Strategic consultation and recommendations</li></ul></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2><p class="text-gray-600 mb-4">As a client, you agree to:</p><ul class="list-disc ml-6 mb-6 text-gray-600 space-y-2"><li>Provide accurate and complete information about your business</li><li>Grant necessary access to advertising accounts and platforms</li><li>Comply with Meta&#39;s advertising policies and guidelines</li><li>Pay fees according to the agreed schedule</li><li>Communicate promptly regarding campaign requirements and changes</li></ul></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2><p class="text-gray-600 mb-6"> Payment terms will be specified in individual service agreements. Generally, payments are due according to the agreed schedule, and late payments may result in service suspension. </p></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2><p class="text-gray-600 mb-6"> Meleket shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses. </p></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2><p class="text-gray-600 mb-6"> Either party may terminate the service agreement with appropriate notice as specified in the individual service contract. Upon termination, all outstanding fees become immediately due. </p></section><section><h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2><div class="bg-gray-50 p-6 rounded-lg"><p class="text-gray-600 mb-2"><strong>Email:</strong> meleketads@outlook.com</p><p class="text-gray-600 mb-2"><strong>Phone:</strong> 0907608839</p><p class="text-gray-600"><strong>Business Name:</strong> Meleket</p></div></section></div><div class="mt-12 pt-8 border-t border-gray-200">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m0 0H3m0 0h7"${_scopeId}></path></svg> Back to Home `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10 19l-7-7m0 0l7-7m0 0H3m0 0h7"
                })
              ])),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms-of-service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-of-service-3jTwWi5T.mjs.map
