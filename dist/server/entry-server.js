"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var vueRouter = require("vue-router");
var serverRenderer = require("vue/server-renderer");
var serverRenderer$1 = require("@vue/server-renderer");
var pinia = require("pinia");
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
var _imports_0 = "/assets/logo.7d4875d8.png";
var header_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = vue.defineComponent({
  setup() {
    const navlist = [
      {
        name: "\u9996\u9875",
        url: "/"
      },
      {
        name: "\u65E9\u62A5",
        url: "/morning-paper"
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var headerItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
var app_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = vue.defineComponent({
  name: "App",
  components: {
    "header-item": headerItem
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_item = vue.resolveComponent("header-item");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_header_item, null, null, _parent));
  _push(`<div class="container">`);
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
  _push(`</div><div class="footer"> \xA9 2023-2010 ilongfei.cn \u7248\u6743\u6240\u6709 <a href="https://beian.miit.gov.cn/" target="_blank">\u7CA4ICP\u590720025571\u53F7</a></div><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
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
        path: "/morning-paper",
        name: "morning-paper",
        component: () => Promise.resolve().then(function() {
          return morningPaper$1;
        })
      },
      {
        path: "/about",
        name: "about",
        component: () => Promise.resolve().then(function() {
          return about$1;
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
const baseURL = "https://www.ilongfei.cn/";
axios__default["default"].interceptors.request.use((config) => {
  if (config.headers["Content-Type"] === "application/json") {
    if (config.data) {
      config.data = JSON.stringify(config.data);
    }
  }
  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});
axios__default["default"].interceptors.response.use((response) => {
  const res = response.data;
  return res;
}, (error) => {
  console.log("err", error, error.message);
  return Promise.reject(error);
});
const apiData = {
  getSentenceTypelist: "api/getSentenceTypelist",
  getReptile: "api/getReptile"
};
const getNotice = async () => {
  const { data } = await axios__default["default"].get("https://ilongfei.cn/api/dingNoticeLog");
  return data;
};
const getApi = async (key, params) => {
  const url = baseURL + apiData[key];
  const { data } = await axios__default["default"].post(url, params);
  return data;
};
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = vue.defineComponent({
  setup() {
    const typeList = vue.ref([]);
    const typeId = vue.ref(1);
    const sentenceList = vue.ref([]);
    let obj = {
      pageSize: 30,
      pageNo: 1,
      typeId: typeId.value
    };
    vue.onServerPrefetch(async () => {
      typeList.value = await getApi("getSentenceTypelist", {});
      sentenceList.value = await getApi("getReptile", obj);
    });
    vue.onMounted(async () => {
      typeList.value = await getApi("getSentenceTypelist", {});
      sentenceList.value = await getApi("getReptile", obj);
    });
    async function clickNav(id) {
      typeId.value = id;
      obj.typeId = id;
      sentenceList.value = await getApi("getReptile", obj);
    }
    return {
      typeId,
      typeList,
      clickNav,
      sentenceList
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}><div class="box-sentence"><div class="nav-list"><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.typeList, (item) => {
    _push(`<div class="${serverRenderer.ssrRenderClass([{ "active": item.id == _ctx.typeId }, "item"])}">${serverRenderer.ssrInterpolate(item.typeName)}</div>`);
  });
  _push(`<!--]--></div><div class="sentence-list"><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.sentenceList, (item, index2) => {
    _push(`<div class="item"><p>${serverRenderer.ssrInterpolate(index2 + 1)}:${serverRenderer.ssrInterpolate(item.content.substring(item.content.indexOf("\u3001") + 1))}</p></div>`);
  });
  _push(`<!--]-->`);
  if (_ctx.sentenceList.length < 1) {
    _push(`<div> \u6CA1\u6709\u6570\u636E </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="box-conn"><div class="title">2022\u5E74\u4E0D\u8D1F\u5E74\u534E</div><p>\u5148\u884C\u52A8\uFF0C\u518D\u7B49\u5F85\u673A\u4F1A\uFF0C\u800C\u4E0D\u662F\u7B49\u5F85\u673A\u4F1A\u518D\u884C\u52A8</p><p>\u53EA\u8981\u8BA4\u4E3A\u662F\u5BF9\u7684\u5C31\u53BB\u505A\uFF0C\u575A\u6301\u53BB\u505A\uFF0C\u4E0D\u8981\u5728\u4E4E\u522B\u4EBA\u7684\u770B\u6CD5\uFF0C\u54EA\u6015\u662F\u9519\uFF0C\u81F3\u5C11\u4F60\u6709\u53BB\u505A\u8FC7\uFF0C\u8BC1\u660E\u66FE\u7ECF\u4F60\u52AA\u529B\u8FC7</p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
var index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--> src/views/morning-paper.vue <div class="skill"><div class="slide-left"> ddd </div><div class="slide-right"> 222 </div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/skill.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var skill = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
var skill$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": skill
}, Symbol.toStringTag, { value: "Module" }));
const useMarket = pinia.defineStore("market", {
  state() {
    return {
      moyuStr: ""
    };
  },
  getters: {
    moyu: (state) => {
      console.log(state.moyuStr);
      return state.moyuStr;
    }
  },
  actions: {
    async getMoyuList() {
      try {
        const data = await getNotice();
        console.log(typeof data);
        this.moyuStr = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
var morningPaper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = vue.defineComponent({
  name: "Morning",
  async setup() {
    const moyuLog = vue.ref("");
    const marketStore = useMarket();
    vue.onMounted(async () => {
      await marketStore.getMoyuList();
      console.log(marketStore);
      const { moyu } = marketStore;
      moyuLog.value = moyu;
    });
    vue.onServerPrefetch(async () => {
      await marketStore.getMoyuList();
      const { moyu } = marketStore;
      moyuLog.value = moyu;
    });
    return {
      moyuLog
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "skill-detail" }, _attrs))} data-v-5584a7a9><div class="box-list" data-v-5584a7a9><p class="name" data-v-5584a7a9>\u6478\u9C7C\u65E5\u5FD7:</p><div class="desc" data-v-5584a7a9><pre data-v-5584a7a9>          ${serverRenderer.ssrInterpolate(_ctx.moyuLog)}
        </pre></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/morning-paper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var morningPaper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5584a7a9"]]);
var morningPaper$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": morningPaper
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>about</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var about$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": about
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
