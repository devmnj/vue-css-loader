//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "VueCssLoader",
  // vue component name
  props: {
    animation: String,
    defaultValue: "Circle"
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm.animation === 'Dots' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "dots"
  })]) : _vm.animation === 'Circle' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "circle"
  })]) : _vm.animation === 'BouncingBars' ? _c('div', {
    staticClass: "ct"
  }, [_vm._m(0)]) : _vm.animation === 'SpinnerDots' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "spinner_dots"
  })]) : _vm.animation === 'Focus' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "focus"
  })]) : _vm.animation === 'TwinCircles' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "twin_circles"
  })]) : _vm.animation === 'Wave' ? _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "wave"
  })]) : _c('div', {
    staticClass: "ct"
  }, [_c('div', {
    staticClass: "wave"
  })])]);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "bouncing_bar"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]);
}];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-06f96e0c_0", {
    source: ".ct[data-v-06f96e0c]{padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:10px}.box[data-v-06f96e0c]{width:calc(25% - 12px);height:10%;background-color:#fff;border-radius:4px;margin:16px 6px;box-shadow:0 0 10px 2px rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center}.dots[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color);opacity:1;-webkit-animation:dot-middle-data-v-06f96e0c 1s infinite linear;animation:dot-middle-data-v-06f96e0c 1s infinite linear}.dots[data-v-06f96e0c]:after,.dots[data-v-06f96e0c]:before{content:\"\";position:absolute;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color)}.dots[data-v-06f96e0c]:before{left:-28px;opacity:.25;-webkit-animation:dot-left-data-v-06f96e0c 1s infinite linear;animation:dot-left-data-v-06f96e0c 1s infinite linear}.dots[data-v-06f96e0c]:after{left:28px;opacity:1;-webkit-animation:dot-right-data-v-06f96e0c 1s infinite linear;animation:dot-right-data-v-06f96e0c 1s infinite linear}@-webkit-keyframes dot-middle-data-v-06f96e0c{0%{opacity:1}33%{opacity:.25}66%{opacity:.25}100%{opacity:1}}@keyframes dot-middle-data-v-06f96e0c{0%{opacity:1}33%{opacity:.25}66%{opacity:.25}100%{opacity:1}}@-webkit-keyframes dot-left-data-v-06f96e0c{0%{opacity:.25}33%{opacity:1}66%{opacity:.25}}@keyframes dot-left-data-v-06f96e0c{0%{opacity:.25}33%{opacity:1}66%{opacity:.25}}@-webkit-keyframes dot-right-data-v-06f96e0c{33%{opacity:.25}66%{opacity:1}100%{opacity:.25}}@keyframes dot-right-data-v-06f96e0c{33%{opacity:.25}66%{opacity:1}100%{opacity:.25}}.twin_circles[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative}.twin_circles[data-v-06f96e0c]:after,.twin_circles[data-v-06f96e0c]:before{content:\"\";position:absolute;border-radius:50%;width:20px;height:20px;background:var(--icon-color);-webkit-animation:2s ease-in-out infinite;animation:2s ease-in-out infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.twin_circles[data-v-06f96e0c]:before{opacity:.7;-webkit-animation-name:moveLeft-data-v-06f96e0c;animation-name:moveLeft-data-v-06f96e0c}.twin_circles[data-v-06f96e0c]:after{opacity:.5;-webkit-animation-name:moveRight-data-v-06f96e0c;animation-name:moveRight-data-v-06f96e0c}@-webkit-keyframes moveLeft-data-v-06f96e0c{25%{transform:translatex(-50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(50%)}}@keyframes moveLeft-data-v-06f96e0c{25%{transform:translatex(-50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(50%)}}@-webkit-keyframes moveRight-data-v-06f96e0c{25%{transform:translatex(50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(-50%)}}@keyframes moveRight-data-v-06f96e0c{25%{transform:translatex(50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(-50%)}}.wave[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative;border-radius:50%;width:40px;height:40px;opacity:1}.wave[data-v-06f96e0c]:after,.wave[data-v-06f96e0c]:before{content:\"\";position:absolute;border-radius:50%;border:1px var(--icon-color) solid;width:100%;height:100%;left:0}.wave[data-v-06f96e0c]:before{-webkit-animation:wave-outer-data-v-06f96e0c .6s infinite linear;animation:wave-outer-data-v-06f96e0c .6s infinite linear;transform:scale(1);opacity:1}.wave[data-v-06f96e0c]:after{-webkit-animation:wave-inner-data-v-06f96e0c .6s infinite linear;animation:wave-inner-data-v-06f96e0c .6s infinite linear;transform:scale(0);opacity:0}@-webkit-keyframes wave-outer-data-v-06f96e0c{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.5)}}@keyframes wave-outer-data-v-06f96e0c{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.5)}}@-webkit-keyframes wave-inner-data-v-06f96e0c{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes wave-inner-data-v-06f96e0c{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.circle[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);width:50px;height:50px;border:6px var(--icon-color-lighten) solid;border-top:6px var(--icon-color) solid;border-radius:50%;-webkit-animation:spin-circle-data-v-06f96e0c .8s infinite linear;animation:spin-circle-data-v-06f96e0c .8s infinite linear}@-webkit-keyframes spin-circle-data-v-06f96e0c{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin-circle-data-v-06f96e0c{from{transform:rotate(0)}to{transform:rotate(360deg)}}.focus[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative;width:50px;height:50px;border-radius:50%;background-color:var(--icon-color)}.focus[data-v-06f96e0c]:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:50%;border:6px solid #fff;top:-6px;left:-6px;-webkit-animation:focus-data-v-06f96e0c 1s infinite ease-in-out;animation:focus-data-v-06f96e0c 1s infinite ease-in-out}@-webkit-keyframes focus-data-v-06f96e0c{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes focus-data-v-06f96e0c{0%{transform:scale(0)}100%{transform:scale(1)}}.bouncing_bar[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);display:flex}.line[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);height:20px;width:4px;background:var(--icon-color);margin-right:4px;border-radius:6px;-webkit-animation:line-bounce-data-v-06f96e0c 1s infinite ease-in-out;animation:line-bounce-data-v-06f96e0c 1s infinite ease-in-out}.line[data-v-06f96e0c]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.line[data-v-06f96e0c]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.line[data-v-06f96e0c]:nth-child(3){-webkit-animation-delay:.3s;animation-delay:.3s}.line[data-v-06f96e0c]:nth-child(4){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes line-bounce-data-v-06f96e0c{0%{transform:scale(1)}20%{transform:scale(1,2)}40%{transform:scale(1)}}@keyframes line-bounce-data-v-06f96e0c{0%{transform:scale(1)}20%{transform:scale(1,2)}40%{transform:scale(1)}}.spinner_dots[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color);opacity:1;transform-origin:50% 50%;-webkit-animation:spin-dot-data-v-06f96e0c 1s infinite linear;animation:spin-dot-data-v-06f96e0c 1s infinite linear}.spinner_dots[data-v-06f96e0c]:after,.spinner_dots[data-v-06f96e0c]:before{content:\"\";position:absolute;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color)}.spinner_dots[data-v-06f96e0c]:before{left:-28px;opacity:.25}.spinner_dots[data-v-06f96e0c]:after{left:28px;opacity:.25}@-webkit-keyframes spin-dot-data-v-06f96e0c{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}@keyframes spin-dot-data-v-06f96e0c{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}.fading_lines[data-v-06f96e0c]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);position:relative;background:var(--icon-color);width:4px;height:32px;border-radius:6px;-webkit-animation:jump-load-1-data-v-06f96e0c 1s ease infinite alternate;animation:jump-load-1-data-v-06f96e0c 1s ease infinite alternate;-webkit-animation-delay:.25s;animation-delay:.25s}.fading_lines[data-v-06f96e0c]:after,.fading_lines[data-v-06f96e0c]:before{content:\"\";position:absolute;background:var(--icon-color);width:4px;height:32px;border-radius:6px;top:0;-webkit-animation:jump-load-2-data-v-06f96e0c 1s ease infinite;animation:jump-load-2-data-v-06f96e0c 1s ease infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.fading_lines[data-v-06f96e0c]:before{left:-8px}.fading_lines[data-v-06f96e0c]:after{left:8px;-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes jump-load-1-data-v-06f96e0c{from{transform:translateY(20px)}to{transform:translateY(-16px)}}@keyframes jump-load-1-data-v-06f96e0c{from{transform:translateY(20px)}to{transform:translateY(-16px)}}@-webkit-keyframes jump-load-2-data-v-06f96e0c{from{transform:translateY(16px)}to{transform:translateY(-16x)}}@keyframes jump-load-2-data-v-06f96e0c{from{transform:translateY(16px)}to{transform:translateY(-16x)}}@media screen and (max-width:520px){.box[data-v-06f96e0c]{width:calc(50% - 20px)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-06f96e0c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueCssLoader', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
