"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var vueRouter = require("vue-router");
var serverRenderer = require("vue/server-renderer");
var serverRenderer$1 = require("@vue/server-renderer");
var pinia = require("pinia");
var Axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Axios__default = /* @__PURE__ */ _interopDefaultLegacy(Axios);
var _imports_0 = "/assets/logo.7d4875d8.png";
var header_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => 'header {\n  width: 100%;\n  position: relative;\n  z-index: 120px;\n  background: #fff;\n}\nheader .navbar {\n  height: 66px;\n  border-bottom: 1px solid #e6e6e6;\n  margin-bottom: 0;\n  border-radius: 0;\n  min-height: 50px;\n}\nheader .navbar .container {\n  width: 94%;\n  margin: 0 auto;\n  height: auto;\n  position: relative;\n}\nheader .navbar .container .logo-navbar {\n  float: left;\n}\nheader .navbar .container .logo-navbar img {\n  height: 55px;\n  padding-top: 5px;\n}\nheader .navbar .container .nav-bar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: inherit;\n  overflow: visible;\n  padding-bottom: 0;\n  transition: all 0.3s;\n}\nheader .navbar .container .nav-bar .list-nav {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 0;\n}\nheader .navbar .container .nav-bar .list-nav .menu-list {\n  display: inline-block;\n  float: none;\n  padding: 0 1.3%;\n  margin: 0;\n  line-height: 66px;\n  width: 160px;\n  position: relative;\n  cursor: pointer;\n}\nheader .navbar .container .nav-bar .list-nav .menu-list a {\n  text-decoration: none;\n  color: #000;\n  display: block;\n}\nheader .navbar .container .nav-bar .list-nav .menu-list:before {\n  position: absolute;\n  top: -24px;\n  left: 50%;\n  width: calc(100% - 39px);\n  height: 5px;\n  background-color: #40ba40;\n  transform: translate(-50%);\n  opacity: 0;\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  content: "";\n}\nheader .navbar .container .nav-bar .list-nav .menu-list:hover:before {\n  top: 0px;\n  left: 50%;\n  opacity: 1;\n}\nheader .navbar .container .nav-bar .list-nav .menu-list:hover a {\n  color: #40ba40;\n}\nheader .navbar .container .nav-bar .list-nav .itemSelected {\n  border-color: #40ba40;\n}\nheader .navbar .container .nav-bar .list-nav .itemSelected:before {\n  top: 0px;\n  left: 50%;\n  opacity: 1;\n}\nheader .navbar .container .nav-bar .list-nav .itemSelected a {\n  color: #40ba40;\n}\nheader .nav {\n  display: none;\n}\n@media only screen and (max-width: 832px) {\nheader .navbar .container .nav-bar {\n    display: block;\n    top: 60px;\n    left: 100%;\n    background: #fff;\n    color: #000;\n    z-index: 99;\n    position: fixed;\n    height: 100%;\n    transition: all 0.5s;\n}\nheader .navbar .container .m-nav-bar {\n    top: 60px;\n    left: 0px;\n    transition: all 0.5s;\n}\nheader .navbar .container .m-nav-bar .list-nav {\n    text-align: left;\n}\nheader .navbar .container .m-nav-bar .list-nav .menu-list {\n    width: 100%;\n    margin: 0 20px;\n    line-height: 50px;\n    border-bottom: 1px solid #d4d4d4;\n}\nheader .navbar .container .m-nav-bar .list-nav .menu-list:before {\n    display: none;\n}\nheader .navbar .container .nav {\n    position: absolute;\n    right: 0px;\n    top: 16px;\n    display: block;\n}\n}')();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = vue.defineComponent({
  setup() {
    const navlist = [
      {
        name: "\u9996\u9875",
        url: "/"
      },
      {
        name: "\u65E9\u62A5",
        url: "/skill"
      },
      {
        name: "\u6280\u672F",
        url: "/skill"
      },
      {
        name: "\u5173\u4E8E",
        url: "/about"
      }
    ];
    const route = vueRouter.useRoute();
    const usePath = vue.computed(() => {
      return route.path;
    });
    const showNav = vue.ref(false);
    return { navlist, showNav, usePath };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<header${serverRenderer.ssrRenderAttrs(_attrs)}><div class="navbar"><div class="container"><div class="logo-navbar"><img${serverRenderer.ssrRenderAttr("src", _imports_0)}></div><div id="ptx-navbar" class="${serverRenderer.ssrRenderClass([{ "m-nav-bar": _ctx.showNav }, "nav-bar"])}"><ul class="list-nav"><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.navlist, (item, index2) => {
    _push(`<li class="${serverRenderer.ssrRenderClass([{ itemSelected: _ctx.usePath === item.url }, "menu-list"])}">`);
    _push(serverRenderer.ssrRenderComponent(_component_router_link, {
      to: item.url,
      class: "title"
    }, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.ssrInterpolate(item.name)}`);
        } else {
          return [
            vue.createTextVNode(vue.toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div class="nav">`);
  if (!_ctx.showNav) {
    _push(`<span class="iconfont" style="${serverRenderer.ssrRenderStyle({ "font-size": "28px" })}">\uE677</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.showNav) {
    _push(`<span class="iconfont" style="${serverRenderer.ssrRenderStyle({ "font-size": "28px" })}">\uE668</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var headerItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
var app_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.logo[data-v-1ace726e] {\n  text-align: center;\n}\n.container[data-v-1ace726e] {\n  padding-top: 20px;\n}\n.footer[data-v-1ace726e] {\n  width: 100%;\n  height: 20px;\n  font-size: 14px;\n  text-align: center;\n}\n@media only screen and (max-width: 832px) {\n.footer[data-v-1ace726e] {\n    font-size: 12px;\n}\n}\n")();
const _sfc_main$2 = vue.defineComponent({
  name: "App",
  components: {
    "header-item": headerItem
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_item = vue.resolveComponent("header-item");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_header_item, null, null, _parent));
  _push(`<div class="container" data-v-1ace726e>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSuspense(_push2, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          },
          _: 2
        });
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer" data-v-1ace726e> \xA9 2022-2010 ilongfei.cn \u7248\u6743\u6240\u6709 <a href="https://beian.miit.gov.cn/" target="_blank" data-v-1ace726e>\u7CA4ICP\u590720025571\u53F7</a></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1ace726e"]]);
const isPromise = (obj) => !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
function createRouter() {
  const routerHistory = vueRouter.createMemoryHistory();
  return vueRouter.createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "index",
        component: () => Promise.resolve().then(function() {
          return index$1;
        })
      },
      {
        path: "/skill",
        name: "skill",
        component: () => Promise.resolve().then(function() {
          return skill$1;
        })
      },
      {
        path: "/404",
        name: "user",
        component: () => Promise.resolve().then(function() {
          return index$1;
        })
      },
      {
        path: "/:catchAll(.*)",
        redirect: "/404"
      }
    ]
  });
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
async function render(url, manifest) {
  const router = createRouter();
  const store = pinia.createPinia();
  const app = vue.createSSRApp(App);
  app.use(router).use(store);
  router.push(url);
  try {
    await router.isReady();
    const to = router.currentRoute;
    const matchedRoute = to.value.matched;
    if (to.value.matched.length === 0) {
      return "";
    }
    const matchedComponents = [];
    matchedRoute.map((route) => {
      matchedComponents.push(...Object.values(route.components));
    });
    const asyncDataFuncs = matchedComponents.map((component) => {
      const asyncData = component.asyncData || null;
      if (asyncData) {
        const config = {
          store,
          route: to
        };
        if (isPromise(asyncData) === false) {
          const result = asyncData(config);
          return Promise.resolve(result);
        }
        return asyncData(config);
      }
    });
    await Promise.all(asyncDataFuncs);
    const ctx = {};
    const html = await serverRenderer$1.renderToString(app, ctx);
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    const state = JSON.stringify(store.state.value);
    return [html, state, preloadLinks];
  } catch (error) {
    console.log(error);
  }
}
var index_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".home {\n  padding: 50px 0px;\n  min-width: 1200px;\n  margin: 0 auto;\n  min-height: 500px;\n}\n.home .detail {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 28px;\n}\n.home .detail .title {\n  font-size: 22px;\n  font-weight: bold;\n  margin: 20px 0px;\n}\n@media only screen and (max-width: 832px) {\n.home {\n    width: 100%;\n    min-width: 100%;\n}\n}")();
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}><div class="detail"><div class="title">2022\u5E74\u4E0D\u8D1F\u5E74\u534E</div><p>\u5148\u884C\u52A8\uFF0C\u518D\u7B49\u5F85\u673A\u4F1A\uFF0C\u800C\u4E0D\u662F\u7B49\u5F85\u673A\u4F1A\u518D\u884C\u52A8</p><p>\u53EA\u8981\u8BA4\u4E3A\u662F\u5BF9\u7684\u5C31\u53BB\u505A\uFF0C\u575A\u6301\u53BB\u505A\uFF0C\u4E0D\u8981\u5728\u4E4E\u522B\u4EBA\u7684\u770B\u6CD5\uFF0C\u54EA\u6015\u662F\u9519\uFF0C\u81F3\u5C11\u4F60\u6709\u53BB\u505A\u8FC7\uFF0C\u8BC1\u660E\u66FE\u7ECF\u4F60\u52AA\u529B\u8FC7</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const getFruitList = async () => {
  const { data } = await Axios__default["default"].get("/xxxx");
  if (data.code === 0) {
    return data.data;
  }
  return [];
};
const getNotice = async () => {
  const { data } = await Axios__default["default"].get("https://www.ilongfei.cn/api/dingNoticeLog");
  if (data.code === 0) {
    return data.data;
  }
  return "";
};
const useMarket = pinia.defineStore("market", {
  state() {
    return {
      fruitList: [],
      moyuStr: ""
    };
  },
  actions: {
    async getList() {
      try {
        const data = await getFruitList();
        this.fruitList = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getMoyuList() {
      try {
        const data = await getNotice();
        this.moyuStr = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
var skill_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".skill-detail[data-v-78ce4f6c] {\n  font-size: 12px;\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n}\n.skill-detail h1[data-v-78ce4f6c] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.skill-detail .box-list[data-v-78ce4f6c] {\n  color: #333;\n  text-align: left;\n}\n.skill-detail .box-list .name[data-v-78ce4f6c] {\n  font-size: 16px;\n  line-height: 32px;\n  font-weight: bold;\n}\n.skill-detail .box-list .desc[data-v-78ce4f6c] {\n  margin-top: 5px;\n  font-size: 14px;\n  width: 100%;\n  max-width: 100%;\n}\n.skill-detail .box-list .desc pre[data-v-78ce4f6c] {\n  width: 100%;\n  white-space: pre-wrap;\n}\n.skill-detail .box-list .copyable[data-v-78ce4f6c] {\n  background: #f8f8f8;\n  font-size: 12px;\n}")();
const _sfc_main = vue.defineComponent({
  name: "Skill",
  async setup() {
    const marketStore = useMarket();
    await marketStore.getMoyuList();
    const { moyuStr } = marketStore;
    return { moyuStr };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "skill-detail" }, _attrs))} data-v-78ce4f6c><div class="box-list" data-v-78ce4f6c><p class="name" data-v-78ce4f6c>1. \u6478\u9C7C\u65E5\u5FD7</p><div class="desc" data-v-78ce4f6c><pre data-v-78ce4f6c>          ${serverRenderer.ssrInterpolate(_ctx.moyuStr)}
        </pre></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/skill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var skill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78ce4f6c"]]);
var skill$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": skill
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
