(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~5a11b65b"],
  {
    4360: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      });
      n("99af"), n("d3b7");
      var r,
        a = n("2b0e"),
        o = n("2f62"),
        i = n("ade3"),
        s = n("1da1"),
        c = (n("96cf"), n("d4ec")),
        u = n("bee2"),
        d = n("5d18"),
        l = (function () {
          function e() {
            Object(c["a"])(this, e);
          }
          return (
            Object(u["a"])(e, [
              {
                key: "fetchUserInfo",
                value: (function () {
                  var e = Object(s["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  d["a"].get("Profiles/@self")
                                );
                              case 3:
                                return (
                                  (t = e.sent.data.data),
                                  e.abrupt("return", {
                                    username: t.personaName,
                                    steamId: t.steamId,
                                    avatar: t.avatarFull,
                                    discordId:
                                      (t.discord && t.discord.id) || "",
                                    discordName:
                                      (t.discord && t.discord.userName) || "",
                                  })
                                );
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e["catch"](0)),
                                  e.abrupt("return", !1)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
            ]),
            e
          );
        })(),
        h = new l(),
        p = n("9962"),
        f = n("5cac"),
        m = "setUser",
        v = function () {
          return {
            username: "",
            steamId: "",
            discordId: "",
            discordName: "",
            avatar: "",
          };
        },
        b = { authed: void 0, info: v() },
        k = {
          authChecked: function (e) {
            return void 0 !== e.authed;
          },
          loggedIn: function (e) {
            return e.authed;
          },
          userInfo: function (e) {
            return !!e.authed && e.info;
          },
        },
        g =
          ((r = {}),
          Object(i["a"])(r, f["a"], function (e) {
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), h.fetchUserInfo();
                      case 3:
                        (r = t.sent), n(m, r);
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          }),
          Object(i["a"])(r, f["c"], function (e) {
            return Object(s["a"])(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), p["a"].logout();
                      case 3:
                        n(m, !1);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          }),
          Object(i["a"])(r, f["d"], function (e) {
            var t = e.commit;
            p["a"].unlinkDiscord(), t(m, { discordId: "" });
          }),
          Object(i["a"])(r, f["b"], function () {
            p["a"].linkDiscord();
          }),
          r),
        x = Object(i["a"])({}, m, function (e, t) {
          if (!t) return Object.assign(e.info, v()), void (e.authed = !1);
          (e.authed = !0), Object.assign(e.info, t);
        }),
        w = { namespaced: !0, state: b, getters: k, actions: g, mutations: x };
      a["a"].use(o["a"]);
      var T = new o["a"].Store({
          state: {
            steamAuthLink: ""
              .concat("https://api.rustclans.gg", "/login?callbackUrl=")
              .concat("http://vitalrust.com", "&errorUrl=")
              .concat("http://vitalrust.com"),
          },
          mutations: {},
          actions: {},
          modules: { user: w },
        }),
        y = new Promise(function (e) {
          T.watch(
            function (e, t) {
              return t["user/loggedIn"];
            },
            function (t) {
              e(t);
            }
          );
        });
      t["b"] = T;
    },
    "56d7": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("1da1"),
        a =
          (n("e260"),
          n("e6cf"),
          n("cca6"),
          n("a79d"),
          n("96cf"),
          n("139c"),
          n("2b0e")),
        o = n("3dfd"),
        i = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f")),
        s = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            [
              n("landing-hero"),
              n(
                "landing-video-text",
                { staticClass: "mt-48", attrs: { youtube: "AuIifzyzWkE" } },
                [
                  n("h1", { staticClass: "text-5xl text-white feature-font" }, [
                    e._v("Coming Soon Filler"),
                  ]),
                  n("p", { staticClass: "text-primary-400 mt-6" }, [
                    e._v(
                      " Filler text 1 "
                    ),
                    n("br"),
                    n("br"),
                    e._v(
                      " Filler text 2 "
                    ),
                    n("br"),
                    n("br"),
                    e._v(
                      " Filler text 3"
                    ),
                  ]),
                  n(
                    "h2",
                    {
                      staticClass: "text-lg mt-8 mb-4 text-white feature-font",
                    },
                    [e._v("Connect Here")]
                  ),
                  n(
                    "app-button",
                    {
                      attrs: {
                        icon: "fab steam",
                        href: "https://unlikeacorn.com/",
                        redirect: "",
                      },
                    },
                    [e._v("Filler 1")]
                  ),
                  n(
                    "app-button",
                    {
                      staticClass: "ml-4",
                      attrs: {
                        icon: "fab steam",
                        href: "https://unlikeacorn.com/",
                        redirect: "",
                      },
                    },
                    [e._v("Filler 2")]
                  ),
                  n(
                    "app-button",
                    {
                      staticClass: "ml-4",
                      attrs: {
                        icon: "fab steam",
                        href: "https://unlikeacorn.com/",
                        redirect: "",
                      },
                    },
                    [e._v("Filler 3")]
                  ),
                ],
                1
              ),
              n("landing-VIP", { staticClass: "mt-48" }),
              n(
                "landing-video-text",
                {
                  staticClass: "mt-48",
                  attrs: { flip: "", youtube: "AuIifzyzWkE", start: 18 },
                },
                [
                  n("h1", { staticClass: "text-5xl text-white feature-font" }, [
                    e._v("Comming Soon!"),
                  ]),
                  n("p", { staticClass: "text-primary-400 mt-6" }, [
                    e._v(
                      "Filler Text."
                    ),
                  ]),
                  n("div", { staticClass: "mt-8" }),
                  n(
                    "app-button",
                    {
                      attrs: {
                        icon: "fab youtube",
                        href: "https://www.youtube.com/channel/UCU-J2vOThrGveDYZGxNpv8g",
                        redirect: "",
                      },
                    },
                    [e._v("Filler Text")]
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "bg-dark-600 mt-48 py-24" },
                [
                  n(
                    "landing-video-text",
                    {
                      staticClass: "py-24",
                      attrs: { youtube: "AuIifzyzWkE", start: 1946 },
                    },
                    [
                      n(
                        "h1",
                        { staticClass: "text-5xl text-white feature-font" },
                        [e._v("Comming Soon!")]
                      ),
                      n("p", { staticClass: "text-primary-400 mt-6" }, [
                        e._v(
                          'Filler Text.'
                        ),
                      ]),
                      n("div", { staticClass: "mt-8" }),
                      n(
                        "app-button",
                        {
                          attrs: {
                            icon: "fab youtube",
                            href: "https://www.youtube.com/channel/UCU-J2vOThrGveDYZGxNpv8g",
                            redirect: "",
                          },
                        },
                        [e._v("Filler Text")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "container mx-auto px-2 py-24" },
                [
                  n("h1", { staticClass: "text-5xl feature-font text-white" }, [
                    e._v("Our Partners"),
                  ]),
                  n(
                    "carousel",
                    {
                      staticClass: "mt-12",
                      attrs: {
                        "per-page": e.carouselPerPage,
                        autoplay: "",
                        autoplayHoverPause: "",
                        "pagination-active-color": "#F9D56A",
                        "pagination-color": "#141414",
                      },
                    },
                    e._l(e.happening, function (e, t) {
                      return n(
                        "slide",
                        {
                          key: t,
                          staticClass:
                            "flex justify-center align-center max-w-5xl",
                        },
                        [
                          n(
                            "a",
                            {
                              staticClass: "flex",
                              attrs: { href: e.url, target: "_blank" },
                            },
                            [
                              n("img", {
                                staticClass:
                                  "object-contain rounded max-h-48 lg:w-60",
                                attrs: {
                                  src: e.image,
                                  width: e.width,
                                  height: "auto",
                                },
                              }),
                            ]
                          ),
                        ]
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        c = [],
        u = n("06a8"),
        d = n("73a1"),
        l = n("a980"),
        h = n("0a63"),
        p = {
          components: {
            LandingHero: u["a"],
            LandingVideoText: d["a"],
            LandingVIP: l["a"],
            Carousel: h["Carousel"],
            Slide: h["Slide"],
          },
          data: function () {
            return {
              carouselPerPage: 2,
              happening: [
                {
                  image: n("ee9d"),
                  width: "80%",
                  url: "https://gameserverkings.com",
                },
                {
                  image: n("8b94"),
                  width: "80%",
                  url: "https://aimlab.gg/rust/servers",
                },
              ],
            };
          },
          methods: {
            onWindowResized: function (e) {
              e.target.innerWidth < 640
                ? (this.carouselPerPage = 1)
                : (this.carouselPerPage = 2);
            },
          },
          beforeMount: function () {
            window.addEventListener("resize", this.onWindowResized);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.onWindowResized);
          },
        },
        f = p,
        m = n("2877"),
        v = Object(m["a"])(f, s, c, !1, null, null, null),
        b = v.exports,
        k = n("4360");
      a["a"].use(i["a"]);
      var g = [
          { path: "/", name: "Home", component: b, meta: { title: "Home" } },
          {
            path: "/account",
            name: "Account",
            component: function () {
              return Promise.all([
                n.e("npm.core-js~93acefaf"),
                n.e("npm.core-js~85de788a"),
                n.e("npm.core-js~eb28bb5f"),
                n.e("npm.core-js~216d6f1c"),
                n.e("npm.core-js~099fc0d6"),
                n.e("chunk-39a5c07d"),
              ]).then(n.bind(null, "77be"));
            },
            meta: { title: "Account", requiresAuth: !0 },
          },
          {
            path: "/link-accounts",
            name: "Link Accounts",
            component: function () {
              return Promise.all([
                n.e("npm.core-js~93acefaf"),
                n.e("npm.core-js~85de788a"),
                n.e("npm.core-js~eb28bb5f"),
                n.e("npm.core-js~216d6f1c"),
                n.e("npm.core-js~099fc0d6"),
                n.e("chunk-d3971f5c"),
              ]).then(n.bind(null, "1269"));
            },
            meta: { title: "Link Account" },
          },
          { path: "*", redirect: "/" },
        ],
        x = new i["a"]({ mode: "history", base: "/", routes: g });
      x.beforeEach(
        (function () {
          var e = Object(r["a"])(
            regeneratorRuntime.mark(function e(t, n, r) {
              var a, o;
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((document.title = t.meta.title
                          ? "Better Omegle ??? " + t.meta.title
                          : "Better Omegle"),
                        (a = k["b"].getters["user/loggedIn"]),
                        void 0 !== a ||
                          (!t.meta.requiresAuth && !t.meta.checkAuth))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 5), k["a"];
                    case 5:
                      (o = e.sent),
                        t.meta.requiresAuth &&
                          !o &&
                          r({ name: "Link Accounts" });
                    case 7:
                      r();
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })()
      );
      var w = x,
        T = n("9962"),
        y = (n("6219"), n("dee1"));
      a["a"].component("app-button", y["a"]),
        a["a"].component("app-icon", y["b"]),
        (a["a"].config.productionTip = !1);
      var j = new a["a"]({
        router: w,
        store: k["b"],
        render: function (e) {
          return e(o["a"]);
        },
        mounted: function () {
          return Object(r["a"])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), T["a"].initialize();
                    case 2:
                      k["b"].state.user.authed =
                        !!k["b"].state.user.info.username;
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
      }).$mount("#app");
      t["default"] = j;
    },
    "5cac": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        });
      var r = "fetchUserInfo",
        a = "logoutUser",
        o = "unlinkDiscord",
        i = "linkDiscord";
    },
    "5d18": function (e, t, n) {
      "use strict";
      var r = n("bc3a"),
        a = n.n(r),
        o = n("780a"),
        i = a.a.create({
          withCredentials: !0,
          baseURL: "https://auth.rustclans.gg/",
          crossDomain: !0,
        });
      i.interceptors.response.use(
        function (e) {
          return e;
        },
        function (e) {
          return e;
        }
      ),
        (t["a"] = new o["a"](i));
    },
    "780a": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("d4ec"),
        a = n("bee2"),
        o = n("ade3"),
        i = n("9962"),
        s = (function () {
          function e(t) {
            Object(r["a"])(this, e),
              Object(o["a"])(this, "axios", void 0),
              Object(o["a"])(this, "getAccessToken", void 0),
              (this.axios = t);
          }
          return (
            Object(a["a"])(e, [
              {
                key: "getAuthorizationHeader",
                value: function () {
                  return {
                    Authorization: i["a"].accessToken
                      ? "Bearer " + i["a"].accessToken
                      : void 0,
                  };
                },
              },
              {
                key: "log",
                value: function (e) {
                  0;
                },
              },
              {
                key: "query",
                value: function (e, t) {
                  return this.axios.get(e, {
                    params: t,
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this.axios.get(e, {
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
              {
                key: "post",
                value: function (e, t) {
                  return this.axios.post(e, t, {
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
              {
                key: "put",
                value: function (e, t) {
                  this.axios.put(e, t, {
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
              {
                key: "patch",
                value: function (e, t) {
                  this.axios.patch(e, t, {
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this.axios.delete(e, {
                    headers: this.getAuthorizationHeader(),
                  });
                },
              },
            ]),
            e
          );
        })();
    },
    9962: function (e, t, n) {
      "use strict";
      var r = n("1da1"),
        a = n("d4ec"),
        o = n("bee2"),
        i = n("ade3"),
        s =
          (n("d3b7"),
          n("3ca3"),
          n("ddb0"),
          n("2b3d"),
          n("ac1f"),
          n("841c"),
          n("96cf"),
          n("1232")),
        c = n("4360"),
        u = n("5cac"),
        d = n("5d18"),
        l = (function () {
          function e() {
            Object(a["a"])(this, e),
              Object(i["a"])(this, "accessToken", void 0),
              Object(i["a"])(this, "expiresAt", void 0),
              Object(i["a"])(this, "refreshToken", void 0),
              Object(i["a"])(this, "accessTokenExpiringTimeout", void 0),
              Object(i["a"])(this, "accessTokenExpiredTimeout", void 0);
          }
          return (
            Object(o["a"])(e, [
              {
                key: "storeAuthentication",
                value: (function () {
                  var t = Object(r["a"])(
                    regeneratorRuntime.mark(function t(n, r, a) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  window.localStorage.setItem(
                                    e.accessTokenLocalStorageKey,
                                    n
                                  ),
                                  window.localStorage.setItem(
                                    e.refreshTokenLocalStorageKey,
                                    a
                                  ),
                                  this.accessTokenExpiringTimeout &&
                                    clearTimeout(
                                      this.accessTokenExpiringTimeout
                                    ),
                                  (this.accessTokenExpiringTimeout = setTimeout(
                                    this.onAccessTokenExpiring,
                                    r - Date.now() - 6e4
                                  )),
                                  this.accessTokenExpiredTimeout &&
                                    clearTimeout(
                                      this.accessTokenExpiredTimeout
                                    ),
                                  (this.accessTokenExpiredTimeout = setTimeout(
                                    this.onAccessTokenExpired,
                                    r - Date.now()
                                  )),
                                  (this.accessToken = n),
                                  (this.expiration = r),
                                  (this.refreshToken = a),
                                  (t.next = 11),
                                  c["b"].dispatch("user/" + u["a"])
                                );
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function n(e, n, r) {
                    return t.apply(this, arguments);
                  }
                  return n;
                })(),
              },
              {
                key: "onAccessTokenExpiring",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t, n, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.refreshAccessToken(this.refreshToken)
                                );
                              case 3:
                                if (
                                  ((t = e.sent),
                                  (n = Object(s["a"])(t.accessToken)),
                                  (r = 1e3 * n.exp),
                                  !(r > Date.now()))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  this.storeAuthentication(
                                    t.accessToken,
                                    r,
                                    t.refreshToken
                                  )
                                );
                              case 9:
                                e.next = 13;
                                break;
                              case 11:
                                (e.prev = 11), (e.t0 = e["catch"](0));
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 11]]
                      );
                    })
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "onAccessTokenExpired",
                value: function () {
                  (this.accessToken = void 0),
                    (this.expiration = void 0),
                    (this.refreshToken = void 0),
                    c["b"].dispatch("user/" + u["c"]);
                },
              },
              {
                key: "refreshAccessToken",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  authService.post(
                                    "token/refresh?refresh-token=" + t
                                  )
                                );
                              case 3:
                                return (n = e.sent), e.abrupt("return", n.data);
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e["catch"](0)),
                                  e.abrupt("return", void 0)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "revokeAccessToken",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  authService.post(
                                    "token/revoke?refresh-token=" + t
                                  )
                                );
                              case 3:
                                e.next = 7;
                                break;
                              case 5:
                                (e.prev = 5), (e.t0 = e["catch"](0));
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 5]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "logout",
                value: (function () {
                  var t = Object(r["a"])(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.refreshToken) {
                                  t.next = 3;
                                  break;
                                }
                                return (
                                  (t.next = 3),
                                  this.revokeRefreshToken(this.refreshToken)
                                );
                              case 3:
                                this.accessTokenExpiringTimeout &&
                                  clearTimeout(this.accessTokenExpiringTimeout),
                                  this.accessTokenExpiredTimeout &&
                                    clearTimeout(
                                      this.accessTokenExpiredTimeout
                                    ),
                                  (this.accessToken = void 0),
                                  (this.refreshToken = void 0),
                                  (this.expiration = void 0),
                                  window.localStorage.removeItem(
                                    e.accessTokenLocalStorageKey
                                  ),
                                  window.localStorage.removeItem(
                                    e.refreshTokenLocalStorageKey
                                  );
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function n() {
                    return t.apply(this, arguments);
                  }
                  return n;
                })(),
              },
              {
                key: "revokeRefreshToken",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  authService.post(
                                    "token/revoke?refresh-token=" + t
                                  )
                                );
                              case 3:
                                e.next = 7;
                                break;
                              case 5:
                                (e.prev = 5), (e.t0 = e["catch"](0));
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 5]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "linkDiscord",
                value: function (e, t) {
                  var n, r;
                  (e =
                    null !== (n = e) && void 0 !== n
                      ? n
                      : window.location.origin + "/link-accounts"),
                    (t =
                      null !== (r = t) && void 0 !== r
                        ? r
                        : window.location.origin + "/error");
                  var a =
                    "https://auth.rustclans.gg/discord/link/process?callbackUrl=" +
                    encodeURIComponent(e) +
                    "&errorUrl=" +
                    encodeURIComponent(t);
                  return d["a"].get("discord/link").then(function (e) {
                    window.location =
                      a + "&code=" + encodeURIComponent(e.data.data.code);
                  });
                },
              },
              {
                key: "unlinkDiscord",
                value: function () {
                  return d["a"].get("discord/unlink");
                },
              },
              {
                key: "obtainInitialTokens",
                value: (function () {
                  var e = Object(r["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  d["a"].post("/token?code=" + t)
                                );
                              case 3:
                                return (
                                  (n = e.sent), e.abrupt("return", n.data.data)
                                );
                              case 7:
                                return (
                                  (e.prev = 7),
                                  (e.t0 = e["catch"](0)),
                                  e.abrupt("return", void 0)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "initialize",
                value: (function () {
                  var t = Object(r["a"])(
                    regeneratorRuntime.mark(function t() {
                      var n, r, a, o, i, c, u, d, l, h, p;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          while (1)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n = new URLSearchParams(
                                    window.location.search
                                  )),
                                  (r = n.get("code")),
                                  !r)
                                ) {
                                  t.next = 14;
                                  break;
                                }
                                return (
                                  n.delete("code"),
                                  window.history.pushState(
                                    null,
                                    document.title,
                                    window.location.origin
                                  ),
                                  (t.next = 7),
                                  this.obtainInitialTokens(r)
                                );
                              case 7:
                                if (((a = t.sent), a)) {
                                  t.next = 10;
                                  break;
                                }
                                return t.abrupt("return");
                              case 10:
                                return (
                                  (o = Object(s["a"])(a.accessToken)),
                                  (t.next = 13),
                                  this.storeAuthentication(
                                    a.accessToken,
                                    1e3 * o.exp,
                                    a.refreshToken
                                  )
                                );
                              case 13:
                                return t.abrupt("return");
                              case 14:
                                if (
                                  ((i = window.localStorage.getItem(
                                    e.accessTokenLocalStorageKey
                                  )),
                                  (c = window.localStorage.getItem(
                                    e.refreshTokenLocalStorageKey
                                  )),
                                  c)
                                ) {
                                  t.next = 18;
                                  break;
                                }
                                return t.abrupt("return");
                              case 18:
                                if (!i) {
                                  t.next = 30;
                                  break;
                                }
                                if (
                                  ((t.prev = 19),
                                  (u = Object(s["a"])(i)),
                                  (d = 1e3 * u.exp),
                                  !(d > Date.now()))
                                ) {
                                  t.next = 26;
                                  break;
                                }
                                return (
                                  (t.next = 25),
                                  this.storeAuthentication(i, d, c)
                                );
                              case 25:
                                return t.abrupt("return");
                              case 26:
                                t.next = 30;
                                break;
                              case 28:
                                (t.prev = 28), (t.t0 = t["catch"](19));
                              case 30:
                                return (
                                  (t.prev = 30),
                                  (t.next = 33),
                                  this.refreshAccessToken(c)
                                );
                              case 33:
                                if (
                                  ((l = t.sent),
                                  (h = Object(s["a"])(l.accessToken)),
                                  (p = 1e3 * h.exp),
                                  !(p > Date.now()))
                                ) {
                                  t.next = 40;
                                  break;
                                }
                                return (
                                  (t.next = 39),
                                  this.storeAuthentication(
                                    l.accessToken,
                                    p,
                                    l.refreshToken
                                  )
                                );
                              case 39:
                                return t.abrupt("return");
                              case 40:
                                t.next = 44;
                                break;
                              case 42:
                                (t.prev = 42), (t.t1 = t["catch"](30));
                              case 44:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [
                          [19, 28],
                          [30, 42],
                        ]
                      );
                    })
                  );
                  function n() {
                    return t.apply(this, arguments);
                  }
                  return n;
                })(),
              },
            ]),
            e
          );
        })();
      Object(i["a"])(l, "accessTokenLocalStorageKey", "access_token"),
        Object(i["a"])(l, "refreshTokenLocalStorageKey", "refresh_token"),
        (t["a"] = new l());
    },
  },
  [
    [
      0,
      "runtime~app",
      "npm.core-js~93acefaf",
      "npm.core-js~85de788a",
      "npm.core-js~eb28bb5f",
      "npm.core-js~216d6f1c",
      "npm.core-js~099fc0d6",
      "styles~612123df",
      "npm.axios~e4173fa2",
      "npm.fortawesome~b8ca4958",
      "npm.fortawesome~ac0f77ce",
      "npm.fortawesome~82b88a00",
      "npm.fortawesome~72c0f0b9",
      "npm.regenerator-runtime~ccfd30e1",
      "npm.vue-carousel~be033a10",
      "npm.vue-router~b1f96ece",
      "npm.vue~d2305125",
      "npm.vuex~87de5440",
      "chunk-vendors~253ae210",
      "app~d0ae3f07",
    ],
  ],
]);
//# sourceMappingURL=app~5a11b65b.5e2cfd72.js.map
