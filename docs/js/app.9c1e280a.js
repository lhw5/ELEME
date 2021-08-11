(function (t) {
  function e(e) {
    for (var o, a, r = e[0], c = e[1], l = e[2], p = 0, h = []; p < r.length; p++) a = r[p], Object.prototype.hasOwnProperty.call(i, a) && i[a] && h.push(i[a][0]), i[a] = 0;
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
    u && u(e);
    while (h.length) h.shift()();
    return n.push.apply(n, l || []), s()
  }

  function s() {
    for (var t, e = 0; e < n.length; e++) {
      for (var s = n[e], o = !0, r = 1; r < s.length; r++) {
        var c = s[r];
        0 !== i[c] && (o = !1)
      }
      o && (n.splice(e--, 1), t = a(a.s = s[0]))
    }
    return t
  }
  var o = {},
    i = {
      app: 0
    },
    n = [];

  function a(e) {
    if (o[e]) return o[e].exports;
    var s = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(s.exports, s, s.exports, a), s.l = !0, s.exports
  }
  a.m = t, a.c = o, a.d = function (t, e, s) {
    a.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: s
    })
  }, a.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, a.t = function (t, e) {
    if (1 & e && (t = a(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var s = Object.create(null);
    if (a.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) a.d(s, o, function (e) {
        return t[e]
      }.bind(null, o));
    return s
  }, a.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return a.d(e, "a", e), e
  }, a.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, a.p = "";
  var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = r.push.bind(r);
  r.push = e, r = r.slice();
  for (var l = 0; l < r.length; l++) e(r[l]);
  var u = c;
  n.push([0, "chunk-vendors"]), s()
})({
  0: function (t, e, s) {
    t.exports = s("56d7")
  },
  "034f": function (t, e, s) {
    "use strict";
    s("85ec")
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var o = s("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          attrs: {
            id: "app"
          }
        }, [s("keep-alive", [t.$route.meta.keepAlive ? s("router-view") : t._e()], 1), t.$route.meta.keepAlive ? t._e() : s("router-view")], 1)
      },
      n = [],
      a = (s("034f"), s("2877")),
      r = {},
      c = Object(a["a"])(r, i, n, !1, null, null, null),
      l = c.exports,
      u = s("8c4f"),
      p = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "home"
        }, [s("header", [s("label", [s("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.keyword,
            expression: "keyword"
          }],
          attrs: {
            type: "search",
            placeholder: t.search_ico
          },
          domProps: {
            value: t.keyword
          },
          on: {
            input: function (e) {
              e.target.composing || (t.keyword = e.target.value)
            }
          }
        })]), s("button", {
          staticClass: "search-btn",
          on: {
            click: t.search
          }
        }, [t._v("搜索")])]), s("aside", [s("ul", t._l(t.goods_cls, (function (e, o) {
          return s("li", {
            key: o,
            class: {
              ac: t.cur_goods_cls == e.id
            },
            on: {
              click: function (e) {
                return t.changeMenu(o)
              }
            }
          }, [t._v(t._s(e.name))])
        })), 0)]), s("div", {
          staticStyle: {
            width: "100%",
            overflow: "hidden"
          }
        }, [s("div", {
          staticClass: "order-bar animated bounceInRight"
        }, t._l(t.goods_cls, (function (e, o) {
          return s("div", {
            key: o,
            staticClass: "order-class"
          }, [s("h3", [t._v(t._s(e.name))]), s("ul", {
            staticClass: "good-list"
          }, t._l(e.goods, (function (e, o) {
            return s("li", {
              key: o
            }, [s("router-link", {
              attrs: {
                to: {
                  name: "detail",
                  params: {
                    item: t.goods[e]
                  }
                }
              }
            }, [s("img", {
              attrs: {
                src: t.goods[e].img
              }
            })]), s("h4", [t._v(t._s(t.goods[e].name))]), s("p", {
              staticClass: "ellipsis"
            }, [t._v(t._s(t.goods[e].describe))]), s("strong", [t._v("￥" + t._s(t.goods[e].price))]), s("button", {
              class: ["pointer-btn", t.goods[e].checked ? "ac" : ""],
              attrs: {
                disabled: t.goods[e].checked
              },
              on: {
                click: function (s) {
                  return t.order(t.goods[e], s)
                }
              }
            }, [s("b", [t._v("点餐")]), s("i", [t._v("已点")])])], 1)
          })), 0)])
        })), 0)]), s("footer", [s("div", {
          staticClass: "shoping-cart animated",
          class: {
            bounceInUp: t.showShoppingCart, "shoping-list-slide": t.showShoppingCart
          }
        }, [s("div", {
          staticClass: "empty"
        }, [s("span", {
          staticClass: "icon-trash",
          on: {
            click: t.clearShopping
          }
        })]), t.shopping_cart.length > 0 ? s("ul", t._l(t.shopping_cart, (function (e, o) {
          return s("li", {
            key: o
          }, [t._v(" " + t._s(e.name) + " "), s("em", [t._v("￥" + t._s(e.price))]), s("div", [s("button", {
            staticClass: "shoping-sub icon-minus",
            on: {
              click: function (s) {
                return t.s_sub(e, o)
              }
            }
          }), s("span", [t._v(t._s(e.num))]), s("button", {
            staticClass: "shoping-ad icon-plus",
            on: {
              click: function (s) {
                return t.s_add(e)
              }
            }
          })])])
        })), 0) : s("ul", [s("li", {
          staticStyle: {
            "text-align": "center"
          }
        }, [t._v("你还没点菜哟！")])]), s("button", {
          staticClass: "shopping-btn icon-shopping-cart",
          attrs: {
            id: "shoppingBtn"
          },
          on: {
            click: function (e) {
              t.showShoppingCart = !t.showShoppingCart
            }
          }
        }), s("span", {
          staticClass: "count",
          class: {
            hide: 0 == t.totalNum
          }
        }, [t._v(t._s(t.totalNum))])]), s("div", {
          staticClass: "cont"
        }, [s("div", {
          staticClass: "order-pointer-footer"
        }, [s("div", {
          staticClass: "total"
        }, [s("em", [t._v("￥" + t._s(t.totalPrice))])]), t.totalNum > 0 ? s("a", {
          staticClass: "pay-btn",
          on: {
            click: t.pay
          }
        }, [t._v("去下单")]) : t._e()])])])])
      },
      h = [],
      d = (s("4160"), s("a434"), s("b0c0"), s("159b"), s("bc3a")),
      m = s.n(d),
      f = s("1157"),
      g = s.n(f),
      _ = function (t) {
        var e, s, o, i, n, a, r, c, l, u = 0,
          p = 15,
          h = null;
        this.config = t || {}, this.origin = g()(this.config.origin) || null, this.target = g()(this.config.target) || null, this.element = g()(this.config.element) || null, this.a = this.config.a || .001, this.time = this.config.time || 1e3, this.init = function () {
          return e = this.origin.offset().left, s = this.origin.offset().top, o = this.target.offset().left, i = this.target.offset().top, n = e, a = s, r = o - e, c = i - s, l = r / this.time, u = (c - this.a * r * r) / r, this.element.css({
            left: e,
            top: s
          }), this
        }, this.moveStyle = function () {
          var t = "position",
            e = document.createElement("div");
          return "placeholder" in e && ["", "ms", "moz", "webkit"].forEach((function (s) {
            var o = s + (s ? "T" : "t") + "ransform";
            o in e.style && (t = o)
          })), t
        }, this.move = function () {
          var t = (new Date).getTime(),
            e = this.moveStyle(),
            s = this;
          return h = setInterval((function () {
            if ((new Date).getTime() - t > s.time) return clearInterval(h), s.element.css({
              left: o,
              top: i
            }), void("function" === typeof s.config.callback && s.config.callback(s.element));
            var r = l * ((new Date).getTime() - t),
              c = s.a * r * r + u * r;
            "position" === e ? s.element.css({
              left: r + n,
              top: c + a
            }) : window.requestAnimationFrame ? window.requestAnimationFrame(s.element[0].style[e] = "translate(" + r + "px," + c + "px)") : s.element[0].style[e] = "translate(" + r + "px," + c + "px)"
          }), p), this
        }, this.init()
      },
      v = {
        parabola: _
      },
      b = {
        name: "home",
        data: function () {
          return {
            keyword: "",
            search_ico: " 请输入菜品名称",
            goods_cls: [],
            goods: [],
            cur_goods_cls: 0,
            showShoppingCart: !0,
            shopping_cart: [],
            totalNum: 0,
            totalPrice: 0
          }
        },
        watch: {
          shopping_cart: {
            handler: function (t) {
              var e = this;
              for (var s in this.totalNum = 0, this.totalPrice = 0, this.goods) this.goods[s].checked = !1;
              t.forEach((function (t) {
                e.totalNum += t.num, e.totalPrice += t.num * t.price, e.goods[t.id].checked = !0
              }))
            },
            deep: !0
          }
        },
        methods: {
          search: function () {
            this.$store.commit("update_keyword", this.keyword), this.$router.push("/list")
          },
          order: function (t, e) {
            this.shopping_cart.push({
              id: t.id,
              name: t.name,
              price: t.price,
              num: 1
            });
            var s = g()('<div class="parabola-el"></div>');
            g()(document.body).append(s), new v.parabola({
              origin: e.target,
              target: "#shoppingBtn",
              element: s,
              time: 500,
              a: .01,
              callback: function (t) {
                t.remove()
              }
            }).move(), this.$store.commit("update_shopping_cart", this.shopping_cart)
          },
          clearShopping: function () {
            this.showShoppingCart = !this.showShoppingCart, this.shopping_cart = []
          },
          s_sub: function (t, e) {
            t.num--, 0 == t.num && this.shopping_cart.splice(e, 1)
          },
          s_add: function (t) {
            t.num++
          },
          changeMenu: function (t) {
            var e = g()(".order-class");
            g()(window).scrollTop(e.eq(t).position().top)
          },
          pay: function () {
            this.$router.push({
              name: "pay",
              params: {
                totalPrice: this.totalPrice
              }
            })
          },
          winScroll: function () {
            var t = this,
              e = g()(window).scrollTop(),
              s = g()(".order-class");
            s.each((function (s) {
              g()(this).offset().top < e + 200 && (t.cur_goods_cls = s + 1)
            }))
          }
        },
        created: function () {
          var t = this;
          m.a.get("./data.json").then((function (e) {
            t.goods = e.data.goods, t.goods_cls = e.data.goods_cls, t.$store.commit("update_goods", t.goods)
          })), this.$router.beforeEach((function (e, s, o) {
            t.keyword = "", t.showShoppingCart = !1, o()
          }))
        },
        mounted: function () {
          window.addEventListener("scroll", this.winScroll)
        }
      },
      w = b,
      k = Object(a["a"])(w, p, h, !1, null, null, null),
      y = k.exports,
      C = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "list"
        }, [s("header", [s("h1", [t._v("搜索结果")]), s("router-link", {
          staticClass: "goback-btn icon-chevron-left",
          attrs: {
            to: "/home"
          }
        }), s("span", {
          staticClass: "total"
        }, [t._v("共" + t._s(t.search_list.length) + "条")])], 1), s("ul", {
          staticClass: "good-list",
          attrs: {
            id: "scrollMenu"
          }
        }, t._l(t.search_list, (function (e, o) {
          return s("li", {
            key: o
          }, [s("img", {
            attrs: {
              src: e.img
            },
            on: {
              click: function (s) {
                return t.show_detail(e)
              }
            }
          }), s("h4", [t._v(t._s(e.name))]), s("p", [t._v(t._s(e.description))]), s("strong", [t._v("￥" + t._s(e.price))]), s("button", {
            class: ["pointer-btn", e.checked ? "ac" : ""],
            attrs: {
              disabled: e.checked
            },
            on: {
              click: function (s) {
                return t.point(e)
              }
            }
          }, [s("b", [t._v("点餐")]), s("i", [t._v("已点")])])])
        })), 0), 0 == t.search_list.length ? s("div", {
          staticStyle: {}
        }, [t._v("没有搜到结果")]) : t._e()])
      },
      $ = [],
      S = (s("caad"), s("2532"), {
        name: "list",
        data: function () {
          return {
            shopping_cart: [],
            search_list: [],
            keyword: "",
            goods: []
          }
        },
        created: function () {
          for (var t in this.keyword = this.$store.state.keyword, this.goods = this.$store.state.goods, this.shopping_cart = this.$store.state.shopping_cart, this.goods) this.goods[t].name.includes(this.keyword) && "" != this.keyword && this.search_list.push(this.goods[t])
        },
        methods: {
          point: function (t) {
            this.shopping_cart.push({
              id: t.id,
              name: t.name,
              price: t.price,
              num: 1
            }), this.$store.commit("update_shopping_cart", this.shopping_cart)
          }
        }
      }),
      x = S,
      O = Object(a["a"])(x, C, $, !1, null, null, null),
      j = O.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "pay bounceInDown animated"
        }, [s("h2", [t._v("订单提交成功")]), s("p", [t._v(" 订单总额： "), s("em", {
          staticStyle: {
            color: "red"
          }
        }, [t._v(" " + t._s(t.$route.params.totalPrice) + "元 ")]), s("br")]), t._m(0), s("p", [s("button", {
          staticClass: "goback-btn",
          on: {
            click: t.goback
          }
        }, [t._v("返回主菜单")])])])
      },
      E = [function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("p", [s("button", {
          staticClass: "pay-btn"
        }, [t._v("去支付")])])
      }],
      T = {
        name: "pay",
        methods: {
          goback: function () {
            this.$router.push("home")
          }
        }
      },
      M = T,
      N = Object(a["a"])(M, P, E, !1, null, null, null),
      I = N.exports,
      A = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "detail"
        }, [s("header", [s("h1", [t._v("详情")]), s("a", {
          staticClass: "goback-btn icon-chevron-left",
          on: {
            click: t.goback
          }
        })]), s("div", {
          staticClass: "cont"
        }, [s("h4", [t._v(" " + t._s(t.$route.params.item.name) + " "), s("span", {
          staticClass: "price"
        }, [t._v("￥" + t._s(t.$route.params.item.price))])]), s("button", {
          staticClass: "plus-btn icon-shopping-cart",
          class: t.$route.params.item.checked ? "ac" : "",
          attrs: {
            disabled: t.$route.params.item.checked
          },
          on: {
            click: function (e) {
              return t.order()
            }
          }
        })]), s("div", {
          staticClass: "swiper-container"
        }, [s("div", {
          staticClass: "swiper-wrapper"
        }, [t._l(t.$route.params.item.slide, (function (t, e) {
          return s("div", {
            key: e,
            staticClass: "swiper-slide"
          }, [s("img", {
            staticClass: "slide-img",
            attrs: {
              src: t
            }
          })])
        })), s("div", {
          staticClass: "swiper-pagination"
        })], 2)]), s("div", {
          staticClass: "describe"
        }, [t._v(" " + t._s(t.$route.params.item.describe) + " ")])])
      },
      D = [],
      q = s("6d3b"),
      B = (s("bbe3"), {
        name: "detail",
        data: function () {
          return {
            shopping_cart: []
          }
        },
        methods: {
          goback: function () {
            this.$router.go(-1)
          },
          order: function () {
            this.shopping_cart.push({
              id: this.$route.params.item.id,
              name: this.$route.params.item.name,
              price: this.$route.params.item.price,
              num: 1
            }), this.$route.params.item.checked = !0
          }
        },
        created: function () {
          this.shopping_cart = this.$store.state.shopping_cart
        },
        mounted: function () {
          new q["a"](".swiper-container", {
            autoplay: {
              delay: 2500,
              disableOnInteraction: !1
            },
            pagination: {
              el: ".swiper-pagination"
            }
          })
        }
      }),
      F = B,
      J = Object(a["a"])(F, A, D, !1, null, null, null),
      z = J.exports;
    o["a"].use(u["a"]);
    var L = [{
        path: "/",
        redirect: "home"
      }, {
        path: "/home",
        name: "home",
        component: y,
        meta: {
          keepAlive: !0
        }
      }, {
        path: "/list",
        name: "list",
        component: j
      }, {
        path: "/pay",
        name: "pay",
        component: I
      }, {
        path: "/detail",
        name: "detail",
        component: z
      }],
      R = new u["a"]({
        //mode: "history",
        base: "",
        routes: L
      }),
      U = R,
      G = s("2f62");
    o["a"].use(G["a"]);
    var H = new G["a"].Store({
      state: {
        shopping_cart: [],
        goods: [],
        keyword: ""
      },
      mutations: {
        update_keyword: function (t, e) {
          t.keyword = e
        },
        update_goods: function (t, e) {
          t.goods = e
        },
        update_shopping_cart: function (t, e) {
          t.shopping_cart = e
        }
      },
      actions: {},
      modules: {}
    });
    o["a"].config.productionTip = !1, new o["a"]({
      store: H,
      router: U,
      render: function (t) {
        return t(l)
      }
    }).$mount("#app")
  },
  "85ec": function (t, e, s) {}
});
//# sourceMappingURL=app.9c1e280a.js.map