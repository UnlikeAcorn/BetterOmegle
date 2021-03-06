(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["app~d0ae3f07"],
  {
    0: function (t, e, a) {
      t.exports = a("56d7");
    },
    "06a8": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "landing-hero" }, [
            a("div", { staticClass: "inner mt-32 md:mt-72 lg:mt-96" }, [
              a(
                "div",
                {
                  staticClass: "container mx-auto grid grid-cols-2 px-2 gap-20",
                },
                [
                  a("div", { staticClass: "col-span-2 md:col-span-1" }, [
                    a(
                      "h1",
                      {
                        staticClass:
                          "feature-font text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl",
                      },
                      [t._v("Coming Soon! by UnlikeAcorn Last Update April 18 2022")]
                    ),
                    a("p", { staticClass: "text-primary-400 mt-10" }, [
                      t._v(
                        "This site is currently being worked on for more information or to get in contact with me click the discord below. Note: All buttons and features will change and dont work example: link accounts store login etc will not work."
                      ),
                    ]),
                    a(
                      "div",
                      {
                        staticClass:
                          "flex gap-5 mt-10 flex-wrap md:flex-nowrap",
                      },
                      [
                        a(
                          "app-button",
                          {
                            staticClass: "flex-grow",
                            attrs: {
                              primary: "",
                              icon: "fab discord",
                              large: "",
                              block: "",
                              redirect: "",
                              href: "https://discord.gg/fPXDuKfH7y",
                            },
                          },
                          [t._v("Discord")]
                        ),
                        a(
                          "app-button",
                          {
                            staticClass: "flex-grow",
                            attrs: {
                              icon: "fab tiktok",
                              large: "",
                              block: "",
                              redirect: "",
                              href: "https://www.tiktok.com/@betteromegle",
                            },
                          },
                          [t._v("TikTok")]
                        ),
                      ],
                      1
                    ),
                  ]),
                  a(
                    "div",
                    {
                      staticClass:
                        "col-span-2 grid-cols-2 gap-5 grid md:col-span-1",
                    },
                    t._l(t.servers, function (e) {
                      return a(
                        "div",
                        {
                          key: e.ip,
                          staticClass:
                            "col-span-2 lg:col-span-1 bg-dark-600 bg-opacity-90 p-4 rounded flex flex-col justify-between",
                        },
                        [
                          a("div", { staticClass: "w-full" }, [
                            a("h2", { staticClass: "text-white" }, [
                              t._v(t._s(e.title)),
                            ]),
                            a("p", { staticClass: "text-gray-400 font-bold" }, [
                              t._v(
                                t._s(e.players) +
                                  " / " +
                                  t._s(e.maxPlayers) +
                                  " "
                              ),
                            ]),
                          ]),
                          a(
                            "app-button",
                            {
                              staticClass: "mt-3",
                              attrs: {
                                block: "",
                                icon: "external-link-alt",
                                href: "steam://connect/" + e.ip,
                              },
                            },
                            [t._v("Connect")]
                          ),
                        ],
                        1
                      );
                    }),
                    0
                  ),
                ]
              ),
            ]),
            a("div", { staticClass: "landing-video" }, [
              a("div", { staticClass: "gradient" }),
              a(
                "video",
                {
                  attrs: { autoplay: "", loop: "", muted: "" },
                  domProps: { muted: !0 },
                },
                [
                  a("source", {
                    attrs: {
                      src: "https://static.vitalrust.com/landing-video.mp4",
                      type: "video/mp4",
                    },
                  }),
                  t._v("Your browser does not support the video tag."),
                ]
              ),
            ]),
          ]);
        },
        i = [],
        r = a("1da1"),
        o = (a("96cf"), a("d3b7"), a("159b"), a("0bcb")),
        n = {
          name: "landing-hero",
          data: function () {
            return { servers: o };
          },
          methods: {
            fetchMetrics: function (t) {
              return Object(r["a"])(
                regeneratorRuntime.mark(function e() {
                  var a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fetch(
                                "https://api.battlemetrics.com/servers/" + t
                              ).then(function (t) {
                                return t.json();
                              })
                            );
                          case 3:
                            return (
                              (a = e.sent.data),
                              e.abrupt("return", {
                                players: a.attributes.players,
                                maxPlayers: a.attributes.maxPlayers,
                              })
                            );
                          case 7:
                            return (
                              (e.prev = 7),
                              (e.t0 = e["catch"](0)),
                              e.abrupt("return", {
                                players: "?",
                                maxPlayers: "?",
                              })
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
              )();
            },
          },
          mounted: function () {
            var t = this;
            return Object(r["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.servers.forEach(
                          (function () {
                            var e = Object(r["a"])(
                              regeneratorRuntime.mark(function e(a) {
                                var s;
                                return regeneratorRuntime.wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), t.fetchMetrics(a.id)
                                        );
                                      case 2:
                                        (s = e.sent),
                                          (a.players = s.players),
                                          (a.maxPlayers = s.maxPlayers);
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        },
        l = n,
        c = (a("dad0"), a("2877")),
        u = Object(c["a"])(l, s, i, !1, null, "8c1ef6b0", null);
      e["a"] = u.exports;
    },
    "09e5": function (t, e, a) {},
    "0bcb": function (t) {
    },
    2074: function (t, e, a) {
      t.exports = a.p + "img/wordmark_light.80c64b6a.svg";
    },
    2337: function (t, e, a) {
      t.exports = a.p + "img/lettermark_light.aad2813a.svg";
    },
    "2d32": function (t, e, a) {},
    "3b7e": function (t, e, a) {
      "use strict";
      a("cb8e");
    },
    "3dfd": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "min-h-screen flex flex-col", attrs: { id: "app" } },
            [
              a(
                "div",
                { staticClass: "flex-grow" },
                [
                  a("navigation"),
                  a(
                    "div",
                    { staticStyle: { padding: "0.05px" } },
                    [a("router-view")],
                    1
                  ),
                ],
                1
              ),
              a("app-footer"),
            ],
            1
          );
        },
        i = [],
        r = a("5de7"),
        o = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("footer", { staticClass: "bg-dark-600" }, [
            s(
              "div",
              {
                staticClass:
                  "container mx-auto px-2 grid grid-cols-4 py-12 gap-8 md:gap-28",
              },
              [
                s("div", { staticClass: "col-span-4 sm:col-span-2" }, [
                  s("img", {
                    staticClass: "w-32 -my-8",
                    attrs: { src: a("2074") },
                  }),
                  s(
                    "h3",
                    {
                      staticClass:
                        "feature-font text-primary-400 text-3xl mt-4",
                    },
                    [t._v("Better Omegle")]
                  ),
                  s("p", { staticClass: "text-gray-300 mt-2" }, [
                    t._v("Better Omegle ?? " + t._s(new Date().getFullYear())),
                  ]),
                ]),
                s(
                  "div",
                  {
                    staticClass:
                      "col-span-4 sm:col-span-2 text-left sm:text-right",
                  },
                  [
                    s(
                      "h3",
                      {
                        staticClass: "text-primary-400 mb-4 font-bold text-lg",
                      },
                      [t._v("Socials")]
                    ),
                    s("ul", { staticClass: "footer-list" }, [
                      s("li", [
                        s(
                          "a",
                          {
                            staticClass: "text-gray-300",
                            attrs: { href: "https://discord.gg/fPXDuKfH7y" },
                          },
                          [
                            s("app-icon", {
                              staticClass: "mr-3",
                              attrs: { icon: "fab discord" },
                            }),
                            t._v("Discord"),
                          ],
                          1
                        ),
                      ]),
                      s("li", [
                        s(
                          "a",
                          {
                            staticClass: "text-gray-300",
                            attrs: {
                              href: "https://twitter.com/BetterOmegle",
                            },
                          },
                          [
                            s("app-icon", {
                              staticClass: "mr-3",
                              attrs: { icon: "fab twitter" },
                            }),
                            t._v("Twitter"),
                          ],
                          1
                        ),
                      ]),
                      s("li", [
                        s(
                          "a",
                          {
                            staticClass: "text-gray-300",
                            attrs: {
                              href: "https://www.tiktok.com/@betteromegle",
                            },
                          },
                          [
                            s("app-icon", {
                              staticClass: "mr-3",
                              attrs: { icon: "fab tiktok" },
                            }),
                            t._v("TikTok"),
                          ],
                          1
                        ),
                      ]),
                      s("li", [
                        s(
                          "a",
                          {
                            staticClass: "text-gray-300",
                            attrs: {
                              href: "https://www.youtube.com/channel/UCCpTSEBoH71tlLkRApdVm4g",
                            },
                          },
                          [
                            s("app-icon", {
                              staticClass: "mr-3",
                              attrs: { icon: "fab youtube" },
                            }),
                            t._v("YouTube"),
                          ],
                          1
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
          ]);
        },
        n = [],
        l = { name: "app-footer" },
        c = l,
        u = (a("3b7e"), a("2877")),
        p = Object(u["a"])(c, o, n, !1, null, "ad81c106", null),
        d = p.exports,
        f = { components: { Navigation: r["a"], AppFooter: d } },
        m = f,
        v = Object(u["a"])(m, s, i, !1, null, null, null);
      e["a"] = v.exports;
    },
    4613: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            t.component,
            {
              tag: "component",
              staticClass: "btn",
              class: {
                primary: t.primary,
                secondary: t.secondary,
                fab: t.fab,
                text: t.text,
                large: t.large,
                block: t.block,
              },
              attrs: {
                to: t.to ? t.to : void 0,
                href: "a" === t.component ? t.href : void 0,
                disabled: t.disabled,
                tag: t.to ? "button" : void 0,
                title: t.title,
                target: t.href && t.redirect ? "_blank" : void 0,
              },
            },
            [
              t.icon
                ? a("app-icon", {
                    attrs: {
                      icon: t.loading ? "spinner" : t.icon,
                      spin: t.loading,
                      left: !t.fab,
                      large: t.fab,
                    },
                  })
                : t._e(),
              t._t("default"),
            ],
            2
          );
        },
        i = [],
        r = {
          name: "app-button",
          props: {
            loading: Boolean,
            text: Boolean,
            secondary: Boolean,
            to: String,
            href: String,
            disabled: Boolean,
            primary: Boolean,
            icon: String,
            fab: Boolean,
            large: Boolean,
            redirect: Boolean,
            block: Boolean,
            title: String,
          },
          computed: {
            component: function () {
              return this.disabled
                ? "button"
                : this.to
                ? "router-link"
                : this.href
                ? "a"
                : "button";
            },
          },
        },
        o = r,
        n = (a("b86f"), a("2877")),
        l = Object(n["a"])(o, s, i, !1, null, "fc6e1ac0", null);
      e["a"] = l.exports;
    },
    "47b0": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("font-awesome-icon", {
            staticClass: "icon",
            class: { "mr-3": t.left, "ml-3": t.right },
            attrs: {
              icon: t.icon.split(" ").length > 1 ? t.icon.split(" ") : t.icon,
              size: t.size,
              spin: t.spin,
            },
          });
        },
        i = [],
        r = a("ad3d"),
        o = {
          name: "app-icon",
          components: { FontAwesomeIcon: r["a"] },
          props: {
            spin: Boolean,
            icon: String,
            left: Boolean,
            right: Boolean,
            large: Boolean,
          },
          computed: {
            size: function () {
              return this.large ? "2x" : void 0;
            },
          },
        },
        n = o,
        l = a("2877"),
        c = Object(l["a"])(n, s, i, !1, null, null, null);
      e["a"] = c.exports;
    },
    "5de7": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "fixed md:relative left-0 right-0 z-50" },
            [
              s(
                "nav",
                {
                  staticClass:
                    "nav flex flex-wrap gap-5 pt-5 items-center justify-between container mx-auto",
                },
                [
                  s("img", {
                    staticClass: "w-14",
                    attrs: { src: a("2337"), alt: "Vital Rust" },
                  }),
                  s(
                    "div",
                    {
                      staticClass:
                        "bg-dark-600 rounded justify-between items-center h-10 flex-grow hidden md:flex",
                    },
                    [
                      s(
                        "div",
                        t._l(t.items, function (e) {
                          return s(
                            "app-button",
                            {
                              key: e.title,
                              attrs: {
                                icon: e.icon,
                                to: e.to,
                                href: e.href,
                                active: e,
                                primary: e.to === t.path,
                                secondary: e.to !== t.path,
                              },
                            },
                            [t._v(t._s(e.title))]
                          );
                        }),
                        1
                      ),
                      !t.loggedIn && t.authChecked
                        ? s(
                            "app-button",
                            {
                              attrs: {
                                icon: "fab steam",
                                href: t.steamAuthUrl,
                              },
                            },
                            [t._v("Login via Steam")]
                          )
                        : s(
                            "app-button",
                            {
                              attrs: {
                                icon: t.authChecked ? "user" : "spinner",
                                to: "/account",
                                primary: "/account" === t.path,
                              },
                            },
                            [
                              t.authChecked
                                ? [t._v(t._s(t.userInfo.username))]
                                : [t._v("Loading...")],
                            ],
                            2
                          ),
                    ],
                    1
                  ),
                  s(
                    "div",
                    {
                      directives: [
                        {
                          name: "click-outside",
                          rawName: "v-click-outside",
                          value: t.handleClickOutside,
                          expression: "handleClickOutside",
                        },
                      ],
                      staticClass: "md:hidden",
                    },
                    [
                      s("app-button", {
                        attrs: {
                          icon: t.showNavMenu ? "times" : "bars",
                          fab: "",
                        },
                        nativeOn: {
                          click: function (e) {
                            return t.toggleNavMenu.apply(null, arguments);
                          },
                        },
                      }),
                      s(
                        "div",
                        {
                          ref: "mobileNav",
                          staticClass:
                            "mobile-nav flex flex-col gap-4 opacity-0 hidden",
                        },
                        [
                          s(
                            "h1",
                            {
                              staticClass:
                                "text-white mb-2 text-4xl feature-font text-center",
                            },
                            [t._v("Menu")]
                          ),
                          t._l(t.items, function (e) {
                            return s(
                              "app-button",
                              {
                                key: e.title,
                                attrs: {
                                  block: "",
                                  icon: e.icon,
                                  to: e.to,
                                  href: e.href,
                                  active: e,
                                },
                              },
                              [t._v(t._s(e.title))]
                            );
                          }),
                          !t.loggedIn && t.authChecked
                            ? s(
                                "app-button",
                                {
                                  attrs: {
                                    icon: "fab steam",
                                    href: t.steamAuthUrl,
                                    block: "",
                                  },
                                },
                                [t._v("Login via Steam")]
                              )
                            : s(
                                "app-button",
                                {
                                  attrs: {
                                    icon: "user",
                                    to: "/account",
                                    block: "",
                                  },
                                },
                                [
                                  t.authChecked
                                    ? [t._v(t._s(t.userInfo.username))]
                                    : [t._v("Loading...")],
                                ],
                                2
                              ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          );
        },
        i = [],
        r = a("e67d"),
        o = a.n(r),
        n = a("2f62"),
        l = {
          name: "app-navigation",
          mounted: function () {
            var t;
            this.path =
              null !== (t = this.$route.path) && void 0 !== t ? t : null;
          },
          data: function () {
            return {
              items: [
                { title: "Home", icon: "home", to: "/" },
                { title: "Link Accounts", icon: "link", to: "/link-accounts" },
                {
                  title: "Store",
                  icon: "gem",
                  href: "https://unlikeacorn.com/",
                },
                {
                  title: "Stats",
                  icon: "chart-line",
                  href: "https://unlikeacorn.com/",
                },
              ],
              steamAuthUrl:
                "https://auth.rustclans.gg/login?callbackUrl=http://vitalrust.com/account&errorUrl=http://vitalrust.com/account",
              showNavMenu: !1,
              path: null,
            };
          },
          methods: {
            toggleNavMenu: function () {
              var t = this;
              (this.showNavMenu = !this.showNavMenu),
                this.showNavMenu
                  ? ((this.$refs.mobileNav.style.display = "flex"),
                    setTimeout(function () {
                      t.$refs.mobileNav.style.opacity = "100%";
                    }, 1))
                  : ((this.$refs.mobileNav.style.opacity = "0%"),
                    setTimeout(function () {
                      t.$refs.mobileNav.style.display = "none";
                    }, 200));
            },
            handleClickOutside: function () {
              this.showNavMenu && this.toggleNavMenu();
            },
          },
          computed: Object(n["c"])("user", [
            "loggedIn",
            "userInfo",
            "authChecked",
          ]),
          directives: { ClickOutside: o.a },
          watch: {
            $route: function (t, e) {
              this.path = t.path;
            },
          },
        },
        c = l,
        u = (a("d6f3"), a("2877")),
        p = Object(u["a"])(c, s, i, !1, null, "3feedb4b", null);
      e["a"] = p.exports;
    },
    6219: function (t, e, a) {
      "use strict";
      var s = a("ecee"),
        i = a("c074"),
        r = a("f2d1");
      s["c"].add(
        i["j"],
        i["e"],
        i["f"],
        i["a"],
        i["g"],
        r["b"],
        r["d"],
        r["e"],
        r["a"],
        r["f"],
        r["c"],
        i["d"],
        i["b"],
        i["i"],
        i["c"],
        i["h"]
      );
    },
    "73a1": function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass:
                "grid grid-cols-2 gap-16 items-center container mx-auto px-2 lg:grid-flow-col",
            },
            [
              a(
                "div",
                {
                  ref: "video",
                  staticClass: "col-span-2 video lg:col-span-1",
                  class: { "lg:col-start-2": t.flip },
                },
                [
                  t.youtube
                    ? a(
                        "iframe",
                        {
                          staticClass: "youtube-iframe",
                          attrs: {
                            src:
                              "https://www.youtube.com/embed/" +
                              t.youtube +
                              "?playlist=" +
                              t.youtube +
                              "&autoplay=1&loop=1&mute=1&disablekb=1a&iv_load_policy=3&modestbranding=1&playsinline=1&start=" +
                              t.start,
                            width: "100%",
                          },
                        },
                        [t._v("Your browser does not support the iframe tag.")]
                      )
                    : a(
                        "video",
                        {
                          attrs: { autoplay: "", loop: "", muted: "" },
                          domProps: { muted: !0 },
                        },
                        [
                          a("source", {
                            attrs: { src: t.video, type: "video/mp4" },
                          }),
                          t._v("Your browser does not support the video tag."),
                        ]
                      ),
                ]
              ),
              a(
                "div",
                {
                  staticClass: "col-span-2 lg:col-span-1",
                  class: { "lg:col-start-1": t.flip },
                },
                [t._t("default")],
                2
              ),
            ]
          );
        },
        i = [],
        r =
          (a("a9e3"),
          {
            name: "landing-video-text",
            props: {
              flip: Boolean,
              video: String,
              youtube: String,
              start: Number,
            },
            methods: {
              onResize: function () {
                var t = this.$refs.video.clientWidth,
                  e = Math.floor((t / 16) * 9) + 10 + "px";
                this.$refs.video.style.height = e;
              },
            },
            mounted: function () {
              this.onResize(), window.addEventListener("resize", this.onResize);
            },
            beforeDestroy: function () {
              window.removeEventListener("resize", this.onResize);
            },
          }),
        o = r,
        n = (a("ec5c"), a("2877")),
        l = Object(n["a"])(o, s, i, !1, null, "485d296a", null);
      e["a"] = l.exports;
    },
    "8b94": function (t, e, a) {
      t.exports = a.p + "img/aimlab-logo.c0b546d0.svg";
    },
    "8cc6": function (t, e, a) {},
    a4b6: function (t, e, a) {},
    a980: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "bg-dark-600" }, [
            a(
              "div",
              { staticClass: "container mx-auto px-2 py-24" },
              [
                a("h1", { staticClass: "feature-font text-6xl text-white" }, [
                  t._v("Become a supporter"),
                ]),
                a("p", { staticClass: "mt-6 text-primary-400 md:w-2/3" }, [
                  t._v(
                    "Filler Text."
                  ),
                ]),
                a("div", { staticClass: "mt-8" }),
                a(
                  "app-button",
                  {
                    attrs: {
                      icon: "gem",
                      primary: "",
                      large: "",
                      href: t.storeUrl,
                    },
                  },
                  [t._v("Store")]
                ),
              ],
              1
            ),
          ]);
        },
        i = [],
        r = {
          name: "landing-VIP",
          data: function () {
            return {
              storeUrl: "https://unlikeacorn.com/",
              packages: [
                {
                  title: "Queue Skip",
                  desc: "Skip the queue on our most popular servers.",
                  href: "",
                },
                {
                  title: "Weekly Pass",
                  desc: "Skip the queue on our most popular servers.",
                  href: "",
                },
                {
                  title: "Vital Supporter",
                  desc: "Skip the queue on our most popular servers.",
                  href: "",
                },
              ],
            };
          },
        },
        o = r,
        n = a("2877"),
        l = Object(n["a"])(o, s, i, !1, null, null, null);
      e["a"] = l.exports;
    },
    b86f: function (t, e, a) {
      "use strict";
      a("09e5");
    },
    cb8e: function (t, e, a) {},
    d6f3: function (t, e, a) {
      "use strict";
      a("a4b6");
    },
    dad0: function (t, e, a) {
      "use strict";
      a("2d32");
    },
    dee1: function (t, e, a) {
      "use strict";
      var s = a("4613");
      a.d(e, "a", function () {
        return s["a"];
      });
      a("5de7");
      var i = a("47b0");
      a.d(e, "b", function () {
        return i["a"];
      });
    },
    ec5c: function (t, e, a) {
      "use strict";
      a("8cc6");
    },
    ee9d: function (t, e, a) {
      t.exports = a.p + "img/gsk-logo.ecca029b.svg";
    },
  },
]);
//# sourceMappingURL=app~d0ae3f07.5d236dcd.js.map
