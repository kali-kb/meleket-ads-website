import { defineComponent, createElementBlock, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BVR7gBbi.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const __nuxt_component_0 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const _imports_0 = publicAssetsURL("/meleket-logo-website.png");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300" }, _attrs))}><nav class="container-custom"><div class="flex items-center justify-between h-16 lg:h-20"><div class="flex items-center"><img${ssrRenderAttr("src", _imports_0)} alt="Meleket Logo" class="h-8 lg:h-10 w-auto"></div><div class="hidden md:flex items-center space-x-8"><a href="#home" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Home</a><a href="#services" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Services</a><a href="#about" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">About</a><a href="#contact" class="btn-primary">Get Started</a></div><div class="md:hidden"><button class="text-gray-700 hover:text-meleket-green transition-colors duration-200"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div><div style="${ssrRenderStyle(unref(mobileMenuOpen) ? null : { display: "none" })}" class="md:hidden py-4 border-t border-gray-100"><div class="flex flex-col space-y-4"><a href="#home" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Home</a><a href="#services" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">Services</a><a href="#about" class="text-gray-700 hover:text-meleket-green transition-colors duration-200 font-medium">About</a><a href="#contact" class="btn-primary inline-block text-center">Get Started</a></div></div></nav></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white" }, _attrs))}><div class="container-custom py-12"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="lg:col-span-2"><img${ssrRenderAttr("src", _imports_0)} alt="Meleket Logo" class="h-8 w-auto mb-4 filter brightness-0 invert"><p class="text-gray-400 mb-6 max-w-md"> Your trusted partner for profitable Meta advertising campaigns. We help businesses achieve measurable growth through expert Facebook and Instagram advertising strategies. </p><div class="flex space-x-4"><a href="https://web.facebook.com/people/Meleket-Promotion/61572448179355/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-meleket-green transition-colors duration-200"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="https://instagram.com/meleket_promotion" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-meleket-green transition-colors duration-200"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a></div></div><div><h3 class="font-semibold mb-4">Contact Info</h3><ul class="space-y-2"><li class="text-gray-400">meleketads@outlook.com</li><li class="text-gray-400">0907608839</li><li><a href="https://web.facebook.com/people/Meleket-Promotion/61572448179355/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">Facebook Page</a></li><li><a href="https://instagram.com/meleket_promotion" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">@meleket_promotion</a></li></ul></div><div><h3 class="font-semibold mb-4">Services</h3><ul class="space-y-2"><li><span class="text-gray-400">Meta Ads Management</span></li><li><span class="text-gray-400">Facebook Advertising</span></li><li><span class="text-gray-400">Instagram Ads</span></li><li><span class="text-gray-400">Campaign Optimization</span></li></ul></div></div><div class="border-t border-gray-800 mt-12 pt-8"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-gray-400 text-sm"> \xA9 2025 Meleket. All rights reserved. </p><div class="flex space-x-6 mt-4 md:mt-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy-policy",
    class: "text-gray-400 hover:text-white text-sm transition-colors duration-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms-of-service",
    class: "text-gray-400 hover:text-white text-sm transition-colors duration-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of Service`);
      } else {
        return [
          createTextVNode("Terms of Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, _sfc_main$1 as a, __nuxt_component_3 as b };
//# sourceMappingURL=Footer-DodHqiGT.mjs.map
