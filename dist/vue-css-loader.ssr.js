'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
var script = {
  name: "VueCssLoader",
  // vue component name
  props: {
    type: String,
    defaultValue: "Circle"
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {}, [_vm._ssrNode("<div class=\"circle\" data-v-60a49933></div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-60a49933_0", {
    source: ".box[data-v-60a49933]{width:calc(25% - 12px);height:10%;background-color:#fff;border-radius:4px;margin:16px 6px;box-shadow:0 0 10px 2px rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center}.dots[data-v-60a49933]{position:relative;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color);opacity:1;-webkit-animation:dot-middle-data-v-60a49933 1s infinite linear;animation:dot-middle-data-v-60a49933 1s infinite linear}.dots[data-v-60a49933]:after,.dots[data-v-60a49933]:before{content:\"\";position:absolute;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color)}.dots[data-v-60a49933]:before{left:-28px;opacity:.25;-webkit-animation:dot-left-data-v-60a49933 1s infinite linear;animation:dot-left-data-v-60a49933 1s infinite linear}.dots[data-v-60a49933]:after{left:28px;opacity:1;-webkit-animation:dot-right-data-v-60a49933 1s infinite linear;animation:dot-right-data-v-60a49933 1s infinite linear}@-webkit-keyframes dot-middle-data-v-60a49933{0%{opacity:1}33%{opacity:.25}66%{opacity:.25}100%{opacity:1}}@keyframes dot-middle-data-v-60a49933{0%{opacity:1}33%{opacity:.25}66%{opacity:.25}100%{opacity:1}}@-webkit-keyframes dot-left-data-v-60a49933{0%{opacity:.25}33%{opacity:1}66%{opacity:.25}}@keyframes dot-left-data-v-60a49933{0%{opacity:.25}33%{opacity:1}66%{opacity:.25}}@-webkit-keyframes dot-right-data-v-60a49933{33%{opacity:.25}66%{opacity:1}100%{opacity:.25}}@keyframes dot-right-data-v-60a49933{33%{opacity:.25}66%{opacity:1}100%{opacity:.25}}.twin_circles[data-v-60a49933]{position:relative}.twin_circles[data-v-60a49933]:after,.twin_circles[data-v-60a49933]:before{content:\"\";position:absolute;border-radius:50%;width:20px;height:20px;background:var(--icon-color);-webkit-animation:2s ease-in-out infinite;animation:2s ease-in-out infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.twin_circles[data-v-60a49933]:before{opacity:.7;-webkit-animation-name:moveLeft-data-v-60a49933;animation-name:moveLeft-data-v-60a49933}.twin_circles[data-v-60a49933]:after{opacity:.5;-webkit-animation-name:moveRight-data-v-60a49933;animation-name:moveRight-data-v-60a49933}@-webkit-keyframes moveLeft-data-v-60a49933{25%{transform:translatex(-50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(50%)}}@keyframes moveLeft-data-v-60a49933{25%{transform:translatex(-50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(50%)}}@-webkit-keyframes moveRight-data-v-60a49933{25%{transform:translatex(50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(-50%)}}@keyframes moveRight-data-v-60a49933{25%{transform:translatex(50%)}50%,60%{transform:translatex(0)}100%{transform:translatex(-50%)}}.wave[data-v-60a49933]{position:relative;border-radius:50%;width:40px;height:40px;opacity:1}.wave[data-v-60a49933]:after,.wave[data-v-60a49933]:before{content:\"\";position:absolute;border-radius:50%;border:1px var(--icon-color) solid;width:100%;height:100%;left:0}.wave[data-v-60a49933]:before{-webkit-animation:wave-outer-data-v-60a49933 .6s infinite linear;animation:wave-outer-data-v-60a49933 .6s infinite linear;transform:scale(1);opacity:1}.wave[data-v-60a49933]:after{-webkit-animation:wave-inner-data-v-60a49933 .6s infinite linear;animation:wave-inner-data-v-60a49933 .6s infinite linear;transform:scale(0);opacity:0}@-webkit-keyframes wave-outer-data-v-60a49933{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.5)}}@keyframes wave-outer-data-v-60a49933{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(1.5)}}@-webkit-keyframes wave-inner-data-v-60a49933{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes wave-inner-data-v-60a49933{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.circle[data-v-60a49933]{--icon-color:rgb(2, 90, 108);--icon-color-lighten:rgba(2, 90, 108, 0.25);width:80px;height:80px;border:6px var(--icon-color-lighten) solid;border-top:6px var(--icon-color) solid;border-radius:50%;-webkit-animation:spin-circle-data-v-60a49933 .8s infinite linear;animation:spin-circle-data-v-60a49933 .8s infinite linear}@-webkit-keyframes spin-circle-data-v-60a49933{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin-circle-data-v-60a49933{from{transform:rotate(0)}to{transform:rotate(360deg)}}.focus[data-v-60a49933]{position:relative;width:50px;height:50px;border-radius:50%;background-color:var(--icon-color)}.focus[data-v-60a49933]:before{content:\"\";position:absolute;width:100%;height:100%;border-radius:50%;border:6px solid #fff;top:-6px;left:-6px;-webkit-animation:focus-data-v-60a49933 1s infinite ease-in-out;animation:focus-data-v-60a49933 1s infinite ease-in-out}@-webkit-keyframes focus-data-v-60a49933{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes focus-data-v-60a49933{0%{transform:scale(0)}100%{transform:scale(1)}}.bouncing_bar[data-v-60a49933]{display:flex}.line[data-v-60a49933]{height:20px;width:4px;background:var(--icon-color);margin-right:4px;border-radius:6px;-webkit-animation:line-bounce-data-v-60a49933 1s infinite ease-in-out;animation:line-bounce-data-v-60a49933 1s infinite ease-in-out}.line[data-v-60a49933]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.line[data-v-60a49933]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.line[data-v-60a49933]:nth-child(3){-webkit-animation-delay:.3s;animation-delay:.3s}.line[data-v-60a49933]:nth-child(4){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes line-bounce-data-v-60a49933{0%{transform:scale(1)}20%{transform:scale(1,2)}40%{transform:scale(1)}}@keyframes line-bounce-data-v-60a49933{0%{transform:scale(1)}20%{transform:scale(1,2)}40%{transform:scale(1)}}.spinner_dots[data-v-60a49933]{position:relative;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color);opacity:1;transform-origin:50% 50%;-webkit-animation:spin-dot-data-v-60a49933 1s infinite linear;animation:spin-dot-data-v-60a49933 1s infinite linear}.spinner_dots[data-v-60a49933]:after,.spinner_dots[data-v-60a49933]:before{content:\"\";position:absolute;width:16px;height:16px;border-radius:50%;background-color:var(--icon-color)}.spinner_dots[data-v-60a49933]:before{left:-28px;opacity:.25}.spinner_dots[data-v-60a49933]:after{left:28px;opacity:.25}@-webkit-keyframes spin-dot-data-v-60a49933{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}@keyframes spin-dot-data-v-60a49933{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(180deg)}}.fading_lines[data-v-60a49933]{position:relative;background:var(--icon-color);width:4px;height:32px;border-radius:6px;-webkit-animation:jump-load-1-data-v-60a49933 1s ease infinite alternate;animation:jump-load-1-data-v-60a49933 1s ease infinite alternate;-webkit-animation-delay:.25s;animation-delay:.25s}.fading_lines[data-v-60a49933]:after,.fading_lines[data-v-60a49933]:before{content:\"\";position:absolute;background:var(--icon-color);width:4px;height:32px;border-radius:6px;top:0;-webkit-animation:jump-load-2-data-v-60a49933 1s ease infinite;animation:jump-load-2-data-v-60a49933 1s ease infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.fading_lines[data-v-60a49933]:before{left:-8px}.fading_lines[data-v-60a49933]:after{left:8px;-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes jump-load-1-data-v-60a49933{from{transform:translateY(20px)}to{transform:translateY(-16px)}}@keyframes jump-load-1-data-v-60a49933{from{transform:translateY(20px)}to{transform:translateY(-16px)}}@-webkit-keyframes jump-load-2-data-v-60a49933{from{transform:translateY(16px)}to{transform:translateY(-16x)}}@keyframes jump-load-2-data-v-60a49933{from{transform:translateY(16px)}to{transform:translateY(-16x)}}@media screen and (max-width:520px){.box[data-v-60a49933]{width:calc(50% - 20px)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-60a49933";
/* module identifier */

var __vue_module_identifier__ = "data-v-60a49933";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('VueCssLoader', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;