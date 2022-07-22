"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
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
  _push(`</div><div class="footer"> \xA9 2022-2010 ilongfei.cn \u7248\u6743\u6240\u6709 <a href="https://beian.miit.gov.cn/" target="_blank">\u7CA4ICP\u590720025571\u53F7</a></div><!--]-->`);
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
const getFruitList = async () => {
  return [];
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
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
var skill_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = vue.defineComponent({
  name: "Skill",
  async setup() {
    return {};
  },
  data() {
    var cityArr = [
      {
        name: "\u5317\u4EAC",
        value: "\u4E00\u6863"
      },
      {
        name: "\u4E0A\u6D77",
        value: "\u4E00\u6863"
      },
      {
        name: "\u5E7F\u5DDE",
        value: "\u4E00\u6863"
      },
      {
        name: "\u6DF1\u5733",
        value: "\u4E00\u6863"
      },
      {
        name: "\u676D\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5B81\u6CE2",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6E29\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u7ECD\u5174",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u53F0\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u91D1\u534E",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5609\u5174",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5357\u4EAC",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5F90\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u82CF\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u65E0\u9521",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5E38\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u626C\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u9547\u6C5F",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5357\u901A",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u798F\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6CC9\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u53A6\u95E8",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u957F\u6C99",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5357\u660C",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6B66\u6C49",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5B9C\u660C",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u90D1\u5DDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u897F\u5B89",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5408\u80A5",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6C88\u9633",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5927\u8FDE",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u957F\u6625",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u54C8\u5C14\u6EE8",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5929\u6D25",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u77F3\u5BB6\u5E84",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6D4E\u5357",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u9752\u5C9B",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u4F5B\u5C71",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u4E1C\u839E",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u4E2D\u5C71",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u73E0\u6D77",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u5357\u5B81",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u91CD\u5E86",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6210\u90FD",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u6606\u660E",
        value: "\u4E8C\u6863"
      },
      {
        name: "\u8D35\u9633",
        value: "\u4E8C\u6863"
      }
    ];
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var today = year + "/" + month + "/" + day;
    return {
      cityArr,
      d4: "2022/07/31",
      c6: "\u5317\u4EAC",
      c7: "1\u661FBD",
      c8: "2022/7/2",
      c9: "\u662F",
      c10: 0,
      c11: 0,
      c12: 0,
      c13: 0,
      c14: 0,
      c15: 0,
      c16: 0,
      c17: 0,
      c18: 0,
      c19: 0,
      e6: "\u4E00\u6863",
      today
    };
  },
  computed: {
    e7() {
      switch (this.c7) {
        case "2\u661FBD":
          return 50;
        case "3\u661FBD":
          return 100;
        case "4\u661FBD":
          return 150;
        case "5\u661FBD":
          return 200;
        case "6\u661FBD":
          return 250;
      }
      return 0;
    },
    e8() {
      var day = this.getDaysBetween(this.c8, this.d4);
      if (day < 31) {
        return "\u65B0\u4EBA\u9996\u6708";
      }
      if (day < 61) {
        return "\u65B0\u4EBA\u6B21\u6708";
      }
      return "\u8001\u4EBA";
    },
    e9() {
      return Math.max(Number(this.c11) + Number(this.c12) - Number(this.c13), 0);
    },
    e10() {
      let sum = Number(this.e9) - Number(this.c13) - Number(this.c14) * 0.5 - Number(this.c15) * 0.5 - Number(this.c16) * 0.5;
      return Math.max(sum.toFixed(2), 0);
    },
    e11() {
      var day = this.getDaysBetween(this.c8, this.d4) + 1;
      if (day < 61 && Number(this.e9) >= 2 && Number(this.e9) <= 4 && this.e6 == "\u4E00\u6863") {
        return 300;
      } else if (day < 61 && Number(this.e9) >= 2 && Number(this.e9) <= 4 && this.e6 == "\u4E8C\u6863") {
        return 250;
      } else if (Number(this.e9) < 5) {
        return 0;
      } else if (Number(this.e9) < 7 && this.e6 == "\u4E00\u6863") {
        return 350;
      } else if (Number(this.e9) < 9 && this.e6 == "\u4E00\u6863") {
        return 450;
      } else if (Number(this.e9) < 11 && this.e6 == "\u4E00\u6863") {
        return 500;
      } else if (Number(this.e9) < 16 && this.e6 == "\u4E00\u6863") {
        return 550;
      } else if (Number(this.e9) >= 16 && this.e6 == "\u4E00\u6863") {
        return 600;
      } else if (Number(this.e9) < 7 && this.e6 == "\u4E8C\u6863") {
        return 300;
      } else if (Number(this.e9) < 9 && this.e6 == "\u4E8C\u6863") {
        return 400;
      } else if (Number(this.e9) < 11 && this.e6 == "\u4E8C\u6863") {
        return 450;
      } else if (Number(this.e9) < 16 && this.e6 == "\u4E8C\u6863") {
        return 500;
      } else {
        return 550;
      }
    },
    e12() {
      return Number(this.e11) + Number(this.e7);
    },
    performance() {
      if (this.c7 == "4\u661FBD" || this.c7 == "5\u661FBD" || this.c7 == "6\u661FBD") {
        return 1e3;
      }
      if (this.c9 == "\u5426") {
        return 0;
      }
      if (this.e8 == "\u65B0\u4EBA\u9996\u6708") {
        var day = this.getDaysBetween(this.c8, this.today) + 1;
        let num3 = Number(this.c10) > day * 4 - 12 ? 1 : 0;
        let num22 = Number(this.e9) >= 2 ? 1 : 0;
        var day2 = this.getDaysBetween(this.c8, this.d4);
        return ((2e3 * 0.2 * num3 + 2e3 * 0.8 * num22) * (day2 / 31)).toFixed(2);
      }
      if (this.e8 == "\u65B0\u4EBA\u6B21\u6708") {
        let num3 = Number(this.c10) > 83 ? 1 : 0;
        let num22 = Number(this.e9) >= 4 ? 1 : 0;
        return 2e3 * 0.2 * num3 + 2e3 * 0.8 * num22;
      }
      var num = Number(this.c10) > 83 ? 1 : 0;
      var num2 = Number(this.e9) >= 5 ? 1 : 0;
      console.log(num, num2);
      return 1e3 * 0.2 * num + 1e3 * 0.8 * num2;
    },
    commission() {
      if (this.e8 == "\u8001\u4EBA" && Number(this.e9) < 5) {
        return Number(this.c18) - Number(this.c19);
      }
      return Number(this.e10) * Number(this.e12) + Number(this.c18) - Number(this.c19);
    }
  },
  methods: {
    onChangeCity() {
      this.e6 = this.cityArr.filter((o) => o.name == this.c6)[0].value;
    },
    getDaysBetween(date1, date2) {
      var startDate = Date.parse(date1);
      var endDate = Date.parse(date2);
      if (startDate > endDate) {
        return 0;
      }
      if (startDate == endDate) {
        return 1;
      }
      var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1e3);
      return days;
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "skill-detail" }, _attrs))} data-v-764e3aa2><h1 data-v-764e3aa2>BD\u7EE9\u6548\u63D0\u6210\u9884\u4F30\u8BA1\u7B97\u5668</h1><div data-v-764e3aa2><h2 data-v-764e3aa2>\u8BA1\u7B97\u6708\u4EFD:2022\u5E747\u6708</h2><div class="list" data-v-764e3aa2><div class="enter-boxs" data-v-764e3aa2><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u4F60\u7684\u57CE\u5E02:</label><select data-v-764e3aa2><!--[-->`);
  serverRenderer.ssrRenderList(_ctx.cityArr, (item, index2) => {
    _push(`<option${serverRenderer.ssrRenderAttr("value", item.name)} data-v-764e3aa2>${serverRenderer.ssrInterpolate(item.name)}</option>`);
  });
  _push(`<!--]--></select></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u4F60\u7684\u5C97\u4F4D:</label><select data-v-764e3aa2><option value="1\u661FBD" data-v-764e3aa2>1\u661FBD</option><option value="2\u661FBD" data-v-764e3aa2>2\u661FBD</option><option value="3\u661FBD" data-v-764e3aa2>3\u661FBD</option><option value="4\u661FBD" data-v-764e3aa2>4\u661FBD</option><option value="5\u661FBD" data-v-764e3aa2>5\u661FBD</option><option value="6\u661FBD" data-v-764e3aa2>6\u661FBD</option><option value="BDM" data-v-764e3aa2>BDM</option><option value="CM" data-v-764e3aa2>CM</option></select></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u4F60\u7684\u5165\u804C\u65E5\u671F:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c8)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u5F53\u6708\u8003\u6838\u662F\u5426\u8FBE\u6807:</label><select data-v-764e3aa2><option value="\u662F" data-v-764e3aa2>\u662F</option><option value="\u5426" data-v-764e3aa2>\u5426</option></select></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6709\u6548\u62DC\u8BBF\u91CF:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c10)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u4E0A\u6708\u63D0\u4EA4\u6FC0\u6D3B\u672C\u6708\u5BF9\u8D4C\u6210\u529F\u5546\u673A:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c11)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u603B\u6FC0\u6D3B\u91CF:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c12)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u63D0\u4EA4\u6FC0\u6D3B\u5BF9\u8D4C\u671F\u95F4\u5546\u673A:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c13)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u5185\u90E8\u70B9\u4F4D:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c14)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u6E20\u9053\u5546\u673A:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c15)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u540C\u5C42\u70B9\u4F4D\u5546\u673A:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c16)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u65B0\u573A\u666F\u5546\u673A:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c17)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u52A0\u9879\uFF08\u6FC0\u52B1\u3001\u6B21\u6708\u9AD8\u9500\uFF09:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c18)} data-v-764e3aa2></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6263\u9879\uFF08\u64A4\u67B6\u3001\u5BF9\u8D4C\u3001\u6B21\u6708\u4F4E\u9500\uFF09:</label><input type="text"${serverRenderer.ssrRenderAttr("value", _ctx.c19)} data-v-764e3aa2></div></div><div class="available-boxs" data-v-764e3aa2><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u7EE9\u6548\u9884\u4F30\u53EF\u5F97:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.performance)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u63D0\u6210\u9884\u4F30\u53EF\u5F97:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.commission)}</p></div></div><div class="right-boxs" data-v-764e3aa2><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u57CE\u5E02\u6240\u5C5E\u6863\u4F4D:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e6)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u661F\u7EA7BD\u63D0\u6210\u6807\u51C6\u52A0\u6210:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e7)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u5F53\u6708\u72B6\u6001:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e8)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u5546\u673A-\u6298\u524D:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e9)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u672C\u6708\u6FC0\u6D3B\u5546\u673A-\u6298\u540E:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e10)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u89C4\u5219\u9636\u68AF\u5956\u91D1\u6807\u51C6:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e11)}</p></div><div class="item" data-v-764e3aa2><label data-v-764e3aa2>\u63D0\u6210\u9636\u6BB5\u5956\u91D1\u5B9E\u9645\u6807\u51C6:</label><p data-v-764e3aa2>${serverRenderer.ssrInterpolate(_ctx.e12)}</p></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/skill.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var skill = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-764e3aa2"]]);
var skill$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": skill
});
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
var morningPaper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = vue.defineComponent({
  name: "Morning",
  async setup() {
    const marketStore = useMarket();
    await marketStore.getMoyuList();
    const { moyuStr } = marketStore;
    return { moyuStr };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "skill-detail" }, _attrs))} data-v-51e51e5e><div class="box-list" data-v-51e51e5e><p class="name" data-v-51e51e5e>1. \u6478\u9C7C\u65E5\u5FD7</p><div class="desc" data-v-51e51e5e><pre data-v-51e51e5e>          ${serverRenderer.ssrInterpolate(_ctx.moyuStr)}
        </pre></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/morning-paper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var morningPaper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-51e51e5e"]]);
var morningPaper$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": morningPaper
});
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
var about$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": about
});
exports.render = render;
