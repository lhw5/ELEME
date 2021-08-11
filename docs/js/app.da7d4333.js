(function (t) {
  function e(e) {
    for (var s, a, r = e[0], c = e[1], l = e[2], p = 0, h = []; p < r.length; p++) a = r[p], Object.prototype.hasOwnProperty.call(o, a) && o[a] && h.push(o[a][0]), o[a] = 0;
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    u && u(e);
    while (h.length) h.shift()();
    return i.push.apply(i, l || []), n()
  }

  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], s = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== o[c] && (s = !1)
      }
      s && (i.splice(e--, 1), t = a(a.s = n[0]))
    }
    return t
  }
  var s = {},
    o = {
      app: 0
    },
    i = [];

  function a(e) {
    if (s[e]) return s[e].exports;
    var n = s[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
  }
  a.m = t, a.c = s, a.d = function (t, e, n) {
    a.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
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
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var s in t) a.d(n, s, function (e) {
        return t[e]
      }.bind(null, s));
    return n
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
  i.push([0, "chunk-vendors"]), n()
})({
  0: function (t, e, n) {
    t.exports = n("56d7")
  },
  "034f": function (t, e, n) {
    "use strict";
    n("85ec")
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var s = n("2b0e"),
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", {
          attrs: {
            id: "app"
          }
        }, [n("keep-alive", [t.$route.meta.keepAlive ? n("router-view") : t._e()], 1), t.$route.meta.keepAlive ? t._e() : n("router-view")], 1)
      },
      i = [],
      a = (n("034f"), n("2877")),
      r = {},
      c = Object(a["a"])(r, o, i, !1, null, null, null),
      l = c.exports,
      u = n("8c4f"),
      p = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", {
          staticClass: "home"
        }, [n("header", [n("label", [n("input", {
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
            keyup: function (e) {
              return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.search(e)
            },
            input: function (e) {
              e.target.composing || (t.keyword = e.target.value)
            }
          }
        })]), n("button", {
          staticClass: "search-btn",
          on: {
            click: t.search
          }
        }, [t._v("搜索")])]), n("aside", [n("ul", t._l(t.goods_cls, (function (e, s) {
          return n("li", {
            key: s,
            class: {
              ac: t.cur_goods_cls == e.id
            },
            on: {
              click: function (e) {
                return t.changeMenu(s)
              }
            }
          }, [t._v(t._s(e.name))])
        })), 0)]), n("div", {
          staticStyle: {
            width: "100%",
            overflow: "hidden"
          }
        }, [n("div", {
          staticClass: "order-bar animated bounceInRight"
        }, t._l(t.goods_cls, (function (e, s) {
          return n("div", {
            key: s,
            staticClass: "order-class"
          }, [n("h3", [t._v(t._s(e.name))]), n("ul", {
            staticClass: "good-list"
          }, t._l(e.goods, (function (e, s) {
            return n("li", {
              key: s
            }, [n("router-link", {
              attrs: {
                to: {
                  name: "detail",
                  params: {
                    item: t.goods[e]
                  }
                }
              }
            }, [n("img", {
              attrs: {
                src: t.goods[e].img
              }
            })]), n("h4", [t._v(t._s(t.goods[e].name))]), n("p", {
              staticClass: "ellipsis"
            }, [t._v(t._s(t.goods[e].describe))]), n("strong", [t._v("￥" + t._s(t.goods[e].price))]), n("button", {
              class: ["pointer-btn", t.goods[e].checked ? "ac" : ""],
              attrs: {
                disabled: t.goods[e].checked
              },
              on: {
                click: function (n) {
                  return t.order(t.goods[e], n)
                }
              }
            }, [n("b", [t._v("点餐")]), n("i", [t._v("已点")])])], 1)
          })), 0)])
        })), 0)]), n("footer", [n("div", {
          staticClass: "shoping-cart animated",
          class: {
            bounceInUp: t.showShoppingCart, "shoping-list-slide": t.showShoppingCart
          }
        }, [n("div", {
          staticClass: "empty"
        }, [n("span", {
          staticClass: "icon-trash",
          on: {
            click: t.clearShopping
          }
        })]), t.shopping_cart.length > 0 ? n("ul", t._l(t.shopping_cart, (function (e, s) {
          return n("li", {
            key: s
          }, [t._v(" " + t._s(e.name) + " "), n("em", [t._v("￥" + t._s(e.price))]), n("div", [n("button", {
            staticClass: "shoping-sub icon-minus",
            on: {
              click: function (n) {
                return t.s_sub(e, s)
              }
            }
          }), n("span", [t._v(t._s(e.num))]), n("button", {
            staticClass: "shoping-ad icon-plus",
            on: {
              click: function (n) {
                return t.s_add(e)
              }
            }
          })])])
        })), 0) : n("ul", [n("li", {
          staticStyle: {
            "text-align": "center"
          }
        }, [t._v("你还没点菜哟！")])]), n("button", {
          staticClass: "shopping-btn icon-shopping-cart",
          attrs: {
            id: "shoppingBtn"
          },
          on: {
            click: function (e) {
              t.showShoppingCart = !t.showShoppingCart
            }
          }
        }), n("span", {
          staticClass: "count",
          class: {
            hide: 0 == t.totalNum
          }
        }, [t._v(t._s(t.totalNum))])]), n("div", {
          staticClass: "cont"
        }, [n("div", {
          staticClass: "order-pointer-footer"
        }, [n("div", {
          staticClass: "total"
        }, [n("em", [t._v("￥" + t._s(t.totalPrice))])]), t.totalNum > 0 ? n("a", {
          staticClass: "pay-btn",
          on: {
            click: t.pay
          }
        }, [t._v("去下单")]) : t._e()])])])])
      },
      h = [],
      d = (n("4160"), n("a434"), n("b0c0"), n("159b"), n("bc3a")),
      m = n.n(d),
      f = n("1157"),
      g = n.n(f),
      _ = function (t) {
        var e, n, s, o, i, a, r, c, l, u = 0,
          p = 15,
          h = null;
        this.config = t || {}, this.origin = g()(this.config.origin) || null, this.target = g()(this.config.target) || null, this.element = g()(this.config.element) || null, this.a = this.config.a || .001, this.time = this.config.time || 1e3, this.init = function () {
          return e = this.origin.offset().left, n = this.origin.offset().top, s = this.target.offset().left, o = this.target.offset().top, i = e, a = n, r = s - e, c = o - n, l = r / this.time, u = (c - this.a * r * r) / r, this.element.css({
            left: e,
            top: n
          }), this
        }, this.moveStyle = function () {
          var t = "position",
            e = document.createElement("div");
          return "placeholder" in e && ["", "ms", "moz", "webkit"].forEach((function (n) {
            var s = n + (n ? "T" : "t") + "ransform";
            s in e.style && (t = s)
          })), t
        }, this.move = function () {
          var t = (new Date).getTime(),
            e = this.moveStyle(),
            n = this;
          return h = setInterval((function () {
            if ((new Date).getTime() - t > n.time) return clearInterval(h), n.element.css({
              left: s,
              top: o
            }), void("function" === typeof n.config.callback && n.config.callback(n.element));
            var r = l * ((new Date).getTime() - t),
              c = n.a * r * r + u * r;
            "position" === e ? n.element.css({
              left: r + i,
              top: c + a
            }) : window.requestAnimationFrame ? window.requestAnimationFrame(n.element[0].style[e] = "translate(" + r + "px," + c + "px)") : n.element[0].style[e] = "translate(" + r + "px," + c + "px)"
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
              for (var n in this.totalNum = 0, this.totalPrice = 0, this.goods) this.goods[n].checked = !1;
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
            var n = g()('<div class="parabola-el"></div>');
            g()(document.body).append(n), new v.parabola({
              origin: e.target,
              target: "#shoppingBtn",
              element: n,
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
              n = g()(".order-class");
            n.each((function (n) {
              g()(this).offset().top < e + 200 && (t.cur_goods_cls = n + 1)
            }))
          }
        },
        created: function () {
          var t = this;
          m.a.get("./data.json").then((function (e) {
            t.goods = e.data.goods, t.goods_cls = e.data.goods_cls, t.$store.commit("update_goods", t.goods)
          })), this.$router.beforeEach((function (e, n, s) {
            t.keyword = "", t.showShoppingCart = !1, s()
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
          n = t._self._c || e;
        return n("div", {
          staticClass: "list"
        }, [n("header", [n("h1", [t._v("搜索结果")]), n("router-link", {
          staticClass: "goback-btn icon-chevron-left",
          attrs: {
            to: "/home"
          }
        }), n("span", {
          staticClass: "total"
        }, [t._v("共" + t._s(t.search_list.length) + "条")])], 1), n("ul", {
          staticClass: "good-list",
          attrs: {
            id: "scrollMenu"
          }
        }, t._l(t.search_list, (function (e, s) {
          return n("li", {
            key: s
          }, [n("img", {
            attrs: {
              src: e.img
            },
            on: {
              click: function (n) {
                return t.show_detail(e)
              }
            }
          }), n("h4", [t._v(t._s(e.name))]), n("p", [t._v(t._s(e.description))]), n("strong", [t._v("￥" + t._s(e.price))]), n("button", {
            class: ["pointer-btn", e.checked ? "ac" : ""],
            attrs: {
              disabled: e.checked
            },
            on: {
              click: function (n) {
                return t.point(e)
              }
            }
          }, [n("b", [t._v("点餐")]), n("i", [t._v("已点")])])])
        })), 0), 0 == t.search_list.length ? n("div", {
          staticStyle: {}
        }, [t._v("没有搜到结果")]) : t._e()])
      },
      $ = [],
      S = (n("caad"), n("2532"), {
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
          n = t._self._c || e;
        return n("div", {
          staticClass: "pay bounceInDown animated"
        }, [n("h2", [t._v("订单提交成功")]), n("p", [t._v(" 订单总额： "), n("em", {
          staticStyle: {
            color: "red"
          }
        }, [t._v(" " + t._s(t.$route.params.totalPrice) + "元 ")]), n("br")]), t._m(0), n("p", [n("button", {
          staticClass: "goback-btn",
          on: {
            click: t.goback
          }
        }, [t._v("返回主菜单")])])])
      },
      E = [function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("p", [n("button", {
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
          n = t._self._c || e;
        return n("div", {
          staticClass: "detail"
        }, [n("header", [n("h1", [t._v("详情")]), n("a", {
          staticClass: "goback-btn icon-chevron-left",
          on: {
            click: t.goback
          }
        })]), n("div", {
          staticClass: "cont"
        }, [n("h4", [t._v(" " + t._s(t.$route.params.item.name) + " "), n("span", {
          staticClass: "price"
        }, [t._v("￥" + t._s(t.$route.params.item.price))])]), n("button", {
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
        })]), n("div", {
          staticClass: "swiper-container"
        }, [n("div", {
          staticClass: "swiper-wrapper"
        }, [t._l(t.$route.params.item.slide, (function (t, e) {
          return n("div", {
            key: e,
            staticClass: "swiper-slide"
          }, [n("img", {
            staticClass: "slide-img",
            attrs: {
              src: t
            }
          })])
        })), n("div", {
          staticClass: "swiper-pagination"
        })], 2)]), n("div", {
          staticClass: "describe"
        }, [t._v(" " + t._s(t.$route.params.item.describe) + " ")])])
      },
      D = [],
      q = n("6d3b"),
      B = (n("bbe3"), {
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
    s["a"].use(u["a"]);
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
      G = n("2f62");
    s["a"].use(G["a"]);
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
    s["a"].config.productionTip = !1, new s["a"]({
      store: H,
      router: U,
      render: function (t) {
        return t(l)
      }
    }).$mount("#app")
  },
  "85ec": function (t, e, n) {}
});
//# sourceMappingURL=app.da7d4333.js.map