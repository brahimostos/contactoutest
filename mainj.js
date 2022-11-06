/*! For license information please see main.js.LICENSE.txt */
!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 237));
})({
  0: function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return i;
    }),
      n.d(e, "a", function () {
        return o;
      }),
      n.d(e, "d", function () {
        return a;
      }),
      n.d(e, "f", function () {
        return s;
      }),
      n.d(e, "c", function () {
        return c;
      }),
      n.d(e, "e", function () {
        return u;
      });
    var r = function (t, e) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function i(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var o = function () {
      return (o =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function a(t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]]);
      }
      return n;
    }
    function s(t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length)
        return {
          next: function () {
            return (
              t && r >= t.length && (t = void 0),
              { value: t && t[r++], done: !t }
            );
          },
        };
      throw new TypeError(
        e ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function c(t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        i,
        o = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
          a.push(r.value);
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    }
    function u() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t = t.concat(c(arguments[e]));
      return t;
    }
  },
  100: function (t, e, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (t, e, n, r) {
              void 0 === r && (r = n), (t[r] = e[n]);
            }),
      i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: !0, value: e });
            }
          : function (t, e) {
              t.default = e;
            }),
      o =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(t, n) &&
                r(e, t, n);
          return i(e, t), e;
        },
      a =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                c(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                c(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, s);
            }
            c((r = r.apply(t, e || [])).next());
          });
        },
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.checkExtensionAppLoaded = e.initSentry = void 0);
    const c = s(n(9)),
      u = o(n(29)),
      d = n(181);
    e.initSentry = (t = !0) => {
      u.init({
        dsn: c.default.sentry.dsn,
        environment: "production",
        release: c.default.appVersion,
        ignoreErrors: [
          "Page not supported",
          "ResizeObserver loop limit exceeded",
        ],
        integrations: [new d.Integrations.BrowserTracing()],
        tracesSampleRate: 0.5,
        beforeSend: (t) => (
          t.exception &&
            t.exception.values[0].stacktrace.frames.forEach((t) => {
              t.filename =
                "~" + t.filename.substring(t.filename.lastIndexOf("/"));
            }),
          t
        ),
      }),
        u.setExtra(
          "metadata",
          JSON.stringify({ appVersion: c.default.appVersion })
        );
    };
    e.checkExtensionAppLoaded = () =>
      a(void 0, void 0, void 0, function* () {
        if (!(yield fetch(c.default.iframeUrl)).ok) {
          const t = new Error("Extension app failed to load!");
          return Promise.reject(t);
        }
        return Promise.resolve(!0);
      });
  },
  11: function (t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", function () {
      return r;
    }),
      (function (t) {
        (t.Ok = "ok"),
          (t.DeadlineExceeded = "deadline_exceeded"),
          (t.Unauthenticated = "unauthenticated"),
          (t.PermissionDenied = "permission_denied"),
          (t.NotFound = "not_found"),
          (t.ResourceExhausted = "resource_exhausted"),
          (t.InvalidArgument = "invalid_argument"),
          (t.Unimplemented = "unimplemented"),
          (t.Unavailable = "unavailable"),
          (t.InternalError = "internal_error"),
          (t.UnknownError = "unknown_error"),
          (t.Cancelled = "cancelled"),
          (t.AlreadyExists = "already_exists"),
          (t.FailedPrecondition = "failed_precondition"),
          (t.Aborted = "aborted"),
          (t.OutOfRange = "out_of_range"),
          (t.DataLoss = "data_loss");
      })(r || (r = {})),
      (function (t) {
        t.fromHttpCode = function (e) {
          if (e < 400) return t.Ok;
          if (e >= 400 && e < 500)
            switch (e) {
              case 401:
                return t.Unauthenticated;
              case 403:
                return t.PermissionDenied;
              case 404:
                return t.NotFound;
              case 409:
                return t.AlreadyExists;
              case 413:
                return t.FailedPrecondition;
              case 429:
                return t.ResourceExhausted;
              default:
                return t.InvalidArgument;
            }
          if (e >= 500 && e < 600)
            switch (e) {
              case 501:
                return t.Unimplemented;
              case 503:
                return t.Unavailable;
              case 504:
                return t.DeadlineExceeded;
              default:
                return t.InternalError;
            }
          return t.UnknownError;
        };
      })(r || (r = {}));
  },
  12: function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "e", function () {
        return o;
      }),
        n.d(e, "j", function () {
          return a;
        }),
        n.d(e, "h", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return c;
        }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return l;
        }),
        n.d(e, "f", function () {
          return p;
        }),
        n.d(e, "g", function () {
          return f;
        }),
        n.d(e, "i", function () {
          return h;
        });
      var r = n(19),
        i = (n(28), {});
      function o() {
        return Object(r.b)()
          ? t
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : i;
      }
      function a() {
        var t = o(),
          e = t.crypto || t.msCrypto;
        if (void 0 !== e && e.getRandomValues) {
          var n = new Uint16Array(8);
          e.getRandomValues(n),
            (n[3] = (4095 & n[3]) | 16384),
            (n[4] = (16383 & n[4]) | 32768);
          var r = function (t) {
            for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
            return e;
          };
          return (
            r(n[0]) +
            r(n[1]) +
            r(n[2]) +
            r(n[3]) +
            r(n[4]) +
            r(n[5]) +
            r(n[6]) +
            r(n[7])
          );
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ("x" === t ? e : (3 & e) | 8).toString(16);
          }
        );
      }
      function s(t) {
        if (!t) return {};
        var e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        var n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          relative: e[5] + n + r,
        };
      }
      function c(t) {
        if (t.message) return t.message;
        if (t.exception && t.exception.values && t.exception.values[0]) {
          var e = t.exception.values[0];
          return e.type && e.value
            ? e.type + ": " + e.value
            : e.type || e.value || t.event_id || "<unknown>";
        }
        return t.event_id || "<unknown>";
      }
      function u(t) {
        var e = o();
        if (!("console" in e)) return t();
        var n = e.console,
          r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function (
          t
        ) {
          t in e.console &&
            n[t].__sentry_original__ &&
            ((r[t] = n[t]), (n[t] = n[t].__sentry_original__));
        });
        var i = t();
        return (
          Object.keys(r).forEach(function (t) {
            n[t] = r[t];
          }),
          i
        );
      }
      function d(t, e, n) {
        (t.exception = t.exception || {}),
          (t.exception.values = t.exception.values || []),
          (t.exception.values[0] = t.exception.values[0] || {}),
          (t.exception.values[0].value =
            t.exception.values[0].value || e || ""),
          (t.exception.values[0].type =
            t.exception.values[0].type || n || "Error");
      }
      function l(t, e) {
        void 0 === e && (e = {});
        try {
          (t.exception.values[0].mechanism =
            t.exception.values[0].mechanism || {}),
            Object.keys(e).forEach(function (n) {
              t.exception.values[0].mechanism[n] = e[n];
            });
        } catch (t) {}
      }
      function p() {
        var t = o();
        try {
          return t.document.location.href;
        } catch (t) {
          return "";
        }
      }
      function f(t, e) {
        if (!e) return 6e4;
        var n = parseInt("" + e, 10);
        if (!isNaN(n)) return 1e3 * n;
        var r = Date.parse("" + e);
        return isNaN(r) ? 6e4 : r - t;
      }
      function h(t) {
        return t.split(/[\?#]/, 1)[0];
      }
    }.call(this, n(7)));
  },
  13: function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "f", function () {
          return d;
        }),
        n.d(e, "e", function () {
          return f;
        }),
        n.d(e, "d", function () {
          return m;
        }),
        n.d(e, "b", function () {
          return v;
        }),
        n.d(e, "a", function () {
          return g;
        });
      var r = n(0),
        i = n(57),
        o = n(4),
        a = n(83),
        s = n(44),
        c = n(28);
      function u(t, e, n) {
        if (e in t) {
          var r = t[e],
            i = n(r);
          if ("function" == typeof i)
            try {
              (i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                  __sentry_original__: { enumerable: !1, value: r },
                });
            } catch (t) {}
          t[e] = i;
        }
      }
      function d(t) {
        return Object.keys(t)
          .map(function (e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
          })
          .join("&");
      }
      function l(t) {
        if (Object(o.d)(t)) {
          var e = t,
            n = { message: e.message, name: e.name, stack: e.stack };
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
          return n;
        }
        if (Object(o.f)(t)) {
          var a = t,
            s = {};
          s.type = a.type;
          try {
            s.target = Object(o.c)(a.target)
              ? Object(i.a)(a.target)
              : Object.prototype.toString.call(a.target);
          } catch (t) {
            s.target = "<unknown>";
          }
          try {
            s.currentTarget = Object(o.c)(a.currentTarget)
              ? Object(i.a)(a.currentTarget)
              : Object.prototype.toString.call(a.currentTarget);
          } catch (t) {
            s.currentTarget = "<unknown>";
          }
          for (var c in ("undefined" != typeof CustomEvent &&
            Object(o.g)(t, CustomEvent) &&
            (s.detail = a.detail),
          a))
            Object.prototype.hasOwnProperty.call(a, c) && (s[c] = a[c]);
          return s;
        }
        return t;
      }
      function p(t) {
        return (function (t) {
          return ~-encodeURI(t).split(/%..|./).length;
        })(JSON.stringify(t));
      }
      function f(t, e, n) {
        void 0 === e && (e = 3), void 0 === n && (n = 102400);
        var r = m(t, e);
        return p(r) > n ? f(t, e - 1, n) : r;
      }
      function h(e, n) {
        return "domain" === n && e && "object" == typeof e && e._events
          ? "[Domain]"
          : "domainEmitter" === n
          ? "[DomainEmitter]"
          : void 0 !== t && e === t
          ? "[Global]"
          : "undefined" != typeof window && e === window
          ? "[Window]"
          : "undefined" != typeof document && e === document
          ? "[Document]"
          : Object(o.l)(e)
          ? "[SyntheticEvent]"
          : "number" == typeof e && e != e
          ? "[NaN]"
          : void 0 === e
          ? "[undefined]"
          : "function" == typeof e
          ? "[Function: " + Object(s.a)(e) + "]"
          : "symbol" == typeof e
          ? "[" + String(e) + "]"
          : "bigint" == typeof e
          ? "[BigInt: " + String(e) + "]"
          : e;
      }
      function _(t, e, n, r) {
        if (
          (void 0 === n && (n = 1 / 0),
          void 0 === r && (r = new a.a()),
          0 === n)
        )
          return (function (t) {
            var e = Object.prototype.toString.call(t);
            if ("string" == typeof t) return t;
            if ("[object Object]" === e) return "[Object]";
            if ("[object Array]" === e) return "[Array]";
            var n = h(t);
            return Object(o.i)(n) ? n : e;
          })(e);
        if (null != e && "function" == typeof e.toJSON) return e.toJSON();
        var i = h(e, t);
        if (Object(o.i)(i)) return i;
        var s = l(e),
          c = Array.isArray(e) ? [] : {};
        if (r.memoize(e)) return "[Circular ~]";
        for (var u in s)
          Object.prototype.hasOwnProperty.call(s, u) &&
            (c[u] = _(u, s[u], n - 1, r));
        return r.unmemoize(e), c;
      }
      function m(t, e) {
        try {
          return JSON.parse(
            JSON.stringify(t, function (t, n) {
              return _(t, n, e);
            })
          );
        } catch (t) {
          return "**non-serializable**";
        }
      }
      function v(t, e) {
        void 0 === e && (e = 40);
        var n = Object.keys(l(t));
        if ((n.sort(), !n.length)) return "[object has no keys]";
        if (n[0].length >= e) return Object(c.d)(n[0], e);
        for (var r = n.length; r > 0; r--) {
          var i = n.slice(0, r).join(", ");
          if (!(i.length > e)) return r === n.length ? i : Object(c.d)(i, e);
        }
        return "";
      }
      function g(t) {
        var e, n;
        if (Object(o.h)(t)) {
          var i = t,
            a = {};
          try {
            for (
              var s = Object(r.f)(Object.keys(i)), c = s.next();
              !c.done;
              c = s.next()
            ) {
              var u = c.value;
              void 0 !== i[u] && (a[u] = g(i[u]));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              c && !c.done && (n = s.return) && n.call(s);
            } finally {
              if (e) throw e.error;
            }
          }
          return a;
        }
        return Array.isArray(t) ? t.map(g) : t;
      }
    }.call(this, n(7)));
  },
  14: function (t, e, n) {
    "use strict";
    var r =
      (this && this.__awaiter) ||
      function (t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.permissions =
        e.storageSync =
        e.cookies =
        e.storage =
        e.runtime =
        e.tabs =
          void 0);
    const i = [
      /https?:\/\/(.*\.)?linkedin\.com\/sales\/people/,
      /https?:\/\/(.*\.)?linkedin\.com\/sales\/lead/,
      /https?:\/\/(.*\.)?linkedin\.com\/recruiter\/profile/,
      /https?:\/\/(.*\.)?linkedin\.com\/talent\/profile/,
      /https?:\/\/(.*\.)?linkedin\.com\/in/,
    ];
    (e.tabs = {
      getLinkedInTabsInCurrentWindow: (t) =>
        r(void 0, void 0, void 0, function* () {
          const n = yield e.tabs.get(t);
          return (yield e.tabs.query({ windowId: n.windowId })).filter((t) => {
            for (let e = 0; e < i.length; e++) {
              const n = i[e];
              if (t.url && t.url.match(n)) return !0;
            }
            return !1;
          });
        }),
      sendMessage: (t, e) =>
        new Promise((n) => {
          chrome.tabs.sendMessage(t, e, (t) => {
            n(t);
          });
        }),
      get: (t) =>
        new Promise((e) => {
          chrome.tabs.get(t, (t) => {
            e(t);
          });
        }),
      query: (t) =>
        new Promise((e) => {
          chrome.tabs.query(t, (t) => {
            e(t);
          });
        }),
      update: (t, e) =>
        new Promise((n) => {
          chrome.tabs.update(t, e, function () {
            n();
          });
        }),
      create: (t) =>
        new Promise((e) => {
          chrome.tabs.create({ url: t }, function (t) {
            e(t);
          });
        }),
      remove: (t) =>
        new Promise((e) => {
          chrome.tabs.remove(t, function () {
            e();
          });
        }),
      reload: (t) =>
        new Promise((e) => {
          chrome.tabs.reload(t, {}, function () {
            e();
          });
        }),
    }),
      (e.runtime = {
        sendMessage: (t) =>
          new Promise((e) => {
            chrome.runtime.sendMessage(t, (t) => {
              e(t);
            });
          }),
      }),
      (e.storage = {
        set: (t) =>
          new Promise((e) => {
            chrome.storage.local.set(t), e();
          }),
        get: (t) =>
          new Promise((e) => {
            chrome.storage.local.get(t, (t) => {
              e(t);
            });
          }),
        remove: (t) =>
          new Promise((e) => {
            chrome.storage.local.remove(t, () => {
              e();
            });
          }),
      }),
      (e.cookies = {
        get: (t, e) =>
          new Promise((n) => {
            chrome.cookies.get({ url: t, name: e }, (t) =>
              n(t && t.value ? t.value : null)
            );
          }),
      }),
      (e.storageSync = {
        set: (t) =>
          new Promise((e) => {
            chrome.storage.sync.set(t), e();
          }),
        get: (t) =>
          new Promise((e) => {
            chrome.storage.sync.get(t, (t) => {
              e(t);
            });
          }),
      }),
      (e.permissions = {
        request: (t) =>
          new Promise((e) => {
            chrome.permissions.request(t, (t) => {
              e(t);
            });
          }),
      }),
      (e.default = {
        runtime: e.runtime,
        tabs: e.tabs,
        permissions: e.permissions,
        storage: e.storage,
      });
  },
  17: function (t, e) {
    var n,
      r,
      i = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var c,
      u = [],
      d = !1,
      l = -1;
    function p() {
      d &&
        c &&
        ((d = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && f());
    }
    function f() {
      if (!d) {
        var t = s(p);
        d = !0;
        for (var e = u.length; e; ) {
          for (c = u, u = []; ++l < e; ) c && c[l].run();
          (l = -1), (e = u.length);
        }
        (c = null),
          (d = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e);
    }
    function _() {}
    (i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      u.push(new h(t, e)), 1 !== u.length || d || s(f);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = _),
      (i.addListener = _),
      (i.once = _),
      (i.off = _),
      (i.removeListener = _),
      (i.removeAllListeners = _),
      (i.emit = _),
      (i.prependListener = _),
      (i.prependOnceListener = _),
      (i.listeners = function (t) {
        return [];
      }),
      (i.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  181: function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Integrations", function () {
        return K;
      }),
      n.d(e, "Span", function () {
        return z.a;
      }),
      n.d(e, "Transaction", function () {
        return Y.a;
      }),
      n.d(e, "registerRequestInstrumentation", function () {
        return C;
      }),
      n.d(e, "defaultRequestInstrumentationOptions", function () {
        return A;
      }),
      n.d(e, "SpanStatus", function () {
        return u.a;
      }),
      n.d(e, "IdleTransaction", function () {
        return c.b;
      }),
      n.d(e, "startIdleTransaction", function () {
        return s.b;
      }),
      n.d(e, "addExtensionMethods", function () {
        return s.a;
      }),
      n.d(e, "extractTraceparentData", function () {
        return d.b;
      }),
      n.d(e, "getActiveTransaction", function () {
        return d.c;
      }),
      n.d(e, "hasTracingEnabled", function () {
        return d.d;
      }),
      n.d(e, "stripUrlQueryAndFragment", function () {
        return a.i;
      }),
      n.d(e, "TRACEPARENT_REGEXP", function () {
        return d.a;
      });
    var r = {};
    n.r(r),
      n.d(r, "Express", function () {
        return P;
      }),
      n.d(r, "Postgres", function () {
        return B;
      }),
      n.d(r, "Mysql", function () {
        return G;
      }),
      n.d(r, "Mongo", function () {
        return W;
      });
    var i = n(0),
      o = n(3),
      a = n(12),
      s = n(26),
      c = n(30),
      u = n(11),
      d = n(2),
      l = Object(a.e)();
    var p = n(19),
      f = n(32),
      h = n(57),
      _ = function (t, e, n) {
        var r;
        return function (i) {
          e.value >= 0 &&
            (i || n) &&
            ((e.delta = e.value - (r || 0)),
            (e.delta || void 0 === r) && ((r = e.value), t(e)));
        };
      },
      m = function (t, e) {
        return {
          name: t,
          value: null != e ? e : -1,
          delta: 0,
          entries: [],
          id:
            "v2-" +
            Date.now() +
            "-" +
            (Math.floor(8999999999999 * Math.random()) + 1e12),
        };
      },
      v = function (t, e) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            if ("first-input" === t && !("PerformanceEventTiming" in self))
              return;
            var n = new PerformanceObserver(function (t) {
              return t.getEntries().map(e);
            });
            return n.observe({ type: t, buffered: !0 }), n;
          }
        } catch (t) {}
      },
      g = function (t, e) {
        var n = function (r) {
          ("pagehide" !== r.type &&
            "hidden" !== Object(a.e)().document.visibilityState) ||
            (t(r),
            e &&
              (removeEventListener("visibilitychange", n, !0),
              removeEventListener("pagehide", n, !0)));
        };
        addEventListener("visibilitychange", n, !0),
          addEventListener("pagehide", n, !0);
      },
      y = -1,
      b = function () {
        return (
          y < 0 &&
            ((y =
              "hidden" === Object(a.e)().document.visibilityState ? 0 : 1 / 0),
            g(function (t) {
              var e = t.timeStamp;
              y = e;
            }, !0)),
          {
            get firstHiddenTime() {
              return y;
            },
          }
        );
      },
      O = {},
      E = Object(a.e)(),
      S = { _reportAllChanges: !1 },
      j = (function () {
        function t(t) {
          var e, n;
          (this._measurements = {}),
            (this._performanceCursor = 0),
            !Object(p.b)() &&
              (null === (e = E) || void 0 === e ? void 0 : e.performance) &&
              (null === (n = E) || void 0 === n ? void 0 : n.document) &&
              (E.performance.mark && E.performance.mark("sentry-tracing-init"),
              this._trackCLS(),
              this._trackLCP(t._reportAllChanges),
              this._trackFID());
        }
        return (
          (t.prototype.addPerformanceEntries = function (t) {
            var e = this;
            if (E && E.performance && E.performance.getEntries && f.a) {
              o.a.log(
                "[Tracing] Adding & adjusting spans using Performance API"
              );
              var n,
                r,
                i,
                a,
                s,
                c = Object(d.e)(f.a);
              if (E.document && E.document.scripts)
                for (var u = 0; u < E.document.scripts.length; u++)
                  if ("true" === E.document.scripts[u].dataset.entry) {
                    n = E.document.scripts[u].src;
                    break;
                  }
              if (
                (E.performance
                  .getEntries()
                  .slice(this._performanceCursor)
                  .forEach(function (u) {
                    var l = Object(d.e)(u.startTime),
                      p = Object(d.e)(u.duration);
                    if (!("navigation" === t.op && c + l < t.startTimestamp))
                      switch (u.entryType) {
                        case "navigation":
                          !(function (t, e, n) {
                            T({
                              transaction: t,
                              entry: e,
                              event: "unloadEvent",
                              timeOrigin: n,
                            }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "redirect",
                                timeOrigin: n,
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "domContentLoadedEvent",
                                timeOrigin: n,
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "loadEvent",
                                timeOrigin: n,
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "connect",
                                timeOrigin: n,
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "secureConnection",
                                timeOrigin: n,
                                eventEnd: "connectEnd",
                                description: "TLS/SSL",
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "fetch",
                                timeOrigin: n,
                                eventEnd: "domainLookupStart",
                                description: "cache",
                              }),
                              T({
                                transaction: t,
                                entry: e,
                                event: "domainLookup",
                                timeOrigin: n,
                                description: "DNS",
                              }),
                              (function (t, e, n) {
                                w(t, {
                                  op: "browser",
                                  description: "request",
                                  startTimestamp:
                                    n + Object(d.e)(e.requestStart),
                                  endTimestamp: n + Object(d.e)(e.responseEnd),
                                }),
                                  w(t, {
                                    op: "browser",
                                    description: "response",
                                    startTimestamp:
                                      n + Object(d.e)(e.responseStart),
                                    endTimestamp:
                                      n + Object(d.e)(e.responseEnd),
                                  });
                              })(t, e, n);
                          })(t, u, c),
                            (a = c + Object(d.e)(u.responseStart)),
                            (s = c + Object(d.e)(u.requestStart));
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          var f = (function (t, e, n, r, i) {
                            var o = i + n,
                              a = o + r;
                            return (
                              w(t, {
                                description: e.name,
                                endTimestamp: a,
                                op: e.entryType,
                                startTimestamp: o,
                              }),
                              o
                            );
                          })(t, u, l, p, c);
                          void 0 === i &&
                            "sentry-tracing-init" === u.name &&
                            (i = f);
                          var h = b(),
                            _ = u.startTime < h.firstHiddenTime;
                          "first-paint" === u.name &&
                            _ &&
                            (o.a.log("[Measurements] Adding FP"),
                            (e._measurements.fp = { value: u.startTime }),
                            (e._measurements["mark.fp"] = { value: f })),
                            "first-contentful-paint" === u.name &&
                              _ &&
                              (o.a.log("[Measurements] Adding FCP"),
                              (e._measurements.fcp = { value: u.startTime }),
                              (e._measurements["mark.fcp"] = { value: f }));
                          break;
                        case "resource":
                          var m = u.name.replace(E.location.origin, ""),
                            v = (function (t, e, n, r, i, o) {
                              if (
                                "xmlhttprequest" === e.initiatorType ||
                                "fetch" === e.initiatorType
                              )
                                return;
                              var a = {};
                              "transferSize" in e &&
                                (a["Transfer Size"] = e.transferSize);
                              "encodedBodySize" in e &&
                                (a["Encoded Body Size"] = e.encodedBodySize);
                              "decodedBodySize" in e &&
                                (a["Decoded Body Size"] = e.decodedBodySize);
                              var s = o + r,
                                c = s + i;
                              return (
                                w(t, {
                                  description: n,
                                  endTimestamp: c,
                                  op: e.initiatorType
                                    ? "resource." + e.initiatorType
                                    : "resource",
                                  startTimestamp: s,
                                  data: a,
                                }),
                                c
                              );
                            })(t, u, m, l, p, c);
                          void 0 === r && (n || "").indexOf(m) > -1 && (r = v);
                      }
                  }),
                void 0 !== r &&
                  void 0 !== i &&
                  w(t, {
                    description: "evaluation",
                    endTimestamp: i,
                    op: "script",
                    startTimestamp: r,
                  }),
                (this._performanceCursor = Math.max(
                  performance.getEntries().length - 1,
                  0
                )),
                this._trackNavigator(t),
                "pageload" === t.op)
              ) {
                var l = Object(d.e)(f.a);
                "number" == typeof a &&
                  (o.a.log("[Measurements] Adding TTFB"),
                  (this._measurements.ttfb = {
                    value: 1e3 * (a - t.startTimestamp),
                  }),
                  "number" == typeof s &&
                    s <= a &&
                    (this._measurements["ttfb.requestTime"] = {
                      value: 1e3 * (a - s),
                    })),
                  ["fcp", "fp", "lcp"].forEach(function (n) {
                    if (e._measurements[n] && !(l >= t.startTimestamp)) {
                      var r = e._measurements[n].value,
                        i = l + Object(d.e)(r),
                        a = Math.abs(1e3 * (i - t.startTimestamp)),
                        s = a - r;
                      o.a.log(
                        "[Measurements] Normalized " +
                          n +
                          " from " +
                          r +
                          " to " +
                          a +
                          " (" +
                          s +
                          ")"
                      ),
                        (e._measurements[n].value = a);
                    }
                  }),
                  this._measurements["mark.fid"] &&
                    this._measurements.fid &&
                    w(t, {
                      description: "first input delay",
                      endTimestamp:
                        this._measurements["mark.fid"].value +
                        Object(d.e)(this._measurements.fid.value),
                      op: "web.vitals",
                      startTimestamp: this._measurements["mark.fid"].value,
                    }),
                  "fcp" in this._measurements || delete this._measurements.cls,
                  t.setMeasurements(this._measurements),
                  this._tagMetricInfo(t);
              }
            }
          }),
          (t.prototype._tagMetricInfo = function (t) {
            this._lcpEntry &&
              (o.a.log("[Measurements] Adding LCP Data"),
              this._lcpEntry.element &&
                t.setTag("lcp.element", Object(h.a)(this._lcpEntry.element)),
              this._lcpEntry.id && t.setTag("lcp.id", this._lcpEntry.id),
              this._lcpEntry.url &&
                t.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200)),
              t.setTag("lcp.size", this._lcpEntry.size)),
              this._clsEntry &&
                this._clsEntry.sources &&
                (o.a.log("[Measurements] Adding CLS Data"),
                this._clsEntry.sources.forEach(function (e, n) {
                  return t.setTag("cls.source." + (n + 1), Object(h.a)(e.node));
                }));
          }),
          (t.prototype._trackCLS = function () {
            var t = this;
            !(function (t, e) {
              var n,
                r = m("CLS", 0),
                i = 0,
                o = [],
                a = function (t) {
                  if (t && !t.hadRecentInput) {
                    var e = o[0],
                      a = o[o.length - 1];
                    i &&
                    0 !== o.length &&
                    t.startTime - a.startTime < 1e3 &&
                    t.startTime - e.startTime < 5e3
                      ? ((i += t.value), o.push(t))
                      : ((i = t.value), (o = [t])),
                      i > r.value && ((r.value = i), (r.entries = o), n && n());
                  }
                },
                s = v("layout-shift", a);
              s &&
                ((n = _(t, r, e)),
                g(function () {
                  s.takeRecords().map(a), n(!0);
                }));
            })(function (e) {
              var n = e.entries.pop();
              n &&
                (o.a.log("[Measurements] Adding CLS"),
                (t._measurements.cls = { value: e.value }),
                (t._clsEntry = n));
            });
          }),
          (t.prototype._trackNavigator = function (t) {
            var e = E.navigator;
            if (e) {
              var n = e.connection;
              n &&
                (n.effectiveType &&
                  t.setTag("effectiveConnectionType", n.effectiveType),
                n.type && t.setTag("connectionType", n.type),
                x(n.rtt) &&
                  (this._measurements["connection.rtt"] = { value: n.rtt }),
                x(n.downlink) &&
                  (this._measurements["connection.downlink"] = {
                    value: n.downlink,
                  })),
                x(e.deviceMemory) &&
                  t.setTag("deviceMemory", String(e.deviceMemory)),
                x(e.hardwareConcurrency) &&
                  t.setTag(
                    "hardwareConcurrency",
                    String(e.hardwareConcurrency)
                  );
            }
          }),
          (t.prototype._trackLCP = function (t) {
            var e = this;
            !(function (t, e) {
              var n,
                r = b(),
                i = m("LCP"),
                o = function (t) {
                  var e = t.startTime;
                  e < r.firstHiddenTime && ((i.value = e), i.entries.push(t)),
                    n && n();
                },
                a = v("largest-contentful-paint", o);
              if (a) {
                n = _(t, i, e);
                var s = function () {
                  O[i.id] ||
                    (a.takeRecords().map(o),
                    a.disconnect(),
                    (O[i.id] = !0),
                    n(!0));
                };
                ["keydown", "click"].forEach(function (t) {
                  addEventListener(t, s, { once: !0, capture: !0 });
                }),
                  g(s, !0);
              }
            })(function (t) {
              var n = t.entries.pop();
              if (n) {
                var r = Object(d.e)(f.a),
                  i = Object(d.e)(n.startTime);
                o.a.log("[Measurements] Adding LCP"),
                  (e._measurements.lcp = { value: t.value }),
                  (e._measurements["mark.lcp"] = { value: r + i }),
                  (e._lcpEntry = n);
              }
            }, t);
          }),
          (t.prototype._trackFID = function () {
            var t = this;
            !(function (t, e) {
              var n,
                r = b(),
                i = m("FID"),
                o = function (t) {
                  n &&
                    t.startTime < r.firstHiddenTime &&
                    ((i.value = t.processingStart - t.startTime),
                    i.entries.push(t),
                    n(!0));
                },
                a = v("first-input", o);
              a &&
                ((n = _(t, i, e)),
                g(function () {
                  a.takeRecords().map(o), a.disconnect();
                }, !0));
            })(function (e) {
              var n = e.entries.pop();
              if (n) {
                var r = Object(d.e)(f.a),
                  i = Object(d.e)(n.startTime);
                o.a.log("[Measurements] Adding FID"),
                  (t._measurements.fid = { value: e.value }),
                  (t._measurements["mark.fid"] = { value: r + i });
              }
            });
          }),
          t
        );
      })();
    function T(t) {
      var e = t.transaction,
        n = t.entry,
        r = t.event,
        i = t.timeOrigin,
        o = t.eventEnd,
        a = t.description,
        s = o ? n[o] : n[r + "End"],
        c = n[r + "Start"];
      c &&
        s &&
        w(e, {
          op: "browser",
          description: null != a ? a : r,
          startTimestamp: i + Object(d.e)(c),
          endTimestamp: i + Object(d.e)(s),
        });
    }
    function w(t, e) {
      var n = e.startTimestamp,
        r = Object(i.d)(e, ["startTimestamp"]);
      return (
        n && t.startTimestamp > n && (t.startTimestamp = n),
        t.startChild(Object(i.a)({ startTimestamp: n }, r))
      );
    }
    function x(t) {
      return "number" == typeof t && isFinite(t);
    }
    var I = n(28),
      k = n(85),
      R = n(4),
      A = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: ["localhost", /^\//],
      };
    function C(t) {
      var e = Object(i.a)(Object(i.a)({}, A), t),
        n = e.traceFetch,
        r = e.traceXHR,
        o = e.tracingOrigins,
        a = e.shouldCreateSpanForRequest,
        s = {},
        c = function (t) {
          if (s[t]) return s[t];
          var e = o;
          return (
            (s[t] =
              e.some(function (e) {
                return Object(I.a)(t, e);
              }) && !Object(I.a)(t, "sentry_key")),
            s[t]
          );
        },
        l = c;
      "function" == typeof a &&
        (l = function (t) {
          return c(t) && a(t);
        });
      var p = {};
      n &&
        Object(k.a)({
          callback: function (t) {
            !(function (t, e, n) {
              if (!Object(d.d)() || !t.fetchData || !e(t.fetchData.url)) return;
              if (t.endTimestamp && t.fetchData.__span) {
                return void (
                  (o = n[t.fetchData.__span]) &&
                  (t.response
                    ? o.setHttpStatus(t.response.status)
                    : t.error && o.setStatus(u.a.InternalError),
                  o.finish(),
                  delete n[t.fetchData.__span])
                );
              }
              var r = Object(d.c)();
              if (r) {
                var o = r.startChild({
                  data: Object(i.a)(Object(i.a)({}, t.fetchData), {
                    type: "fetch",
                  }),
                  description: t.fetchData.method + " " + t.fetchData.url,
                  op: "http.client",
                });
                (t.fetchData.__span = o.spanId), (n[o.spanId] = o);
                var a = (t.args[0] = t.args[0]),
                  s = (t.args[1] = t.args[1] || {}),
                  c = s.headers;
                Object(R.g)(a, Request) && (c = a.headers),
                  c
                    ? "function" == typeof c.append
                      ? c.append("sentry-trace", o.toTraceparent())
                      : (c = Array.isArray(c)
                          ? Object(i.e)(c, [
                              ["sentry-trace", o.toTraceparent()],
                            ])
                          : Object(i.a)(Object(i.a)({}, c), {
                              "sentry-trace": o.toTraceparent(),
                            }))
                    : (c = { "sentry-trace": o.toTraceparent() }),
                  (s.headers = c);
              }
            })(t, l, p);
          },
          type: "fetch",
        }),
        r &&
          Object(k.a)({
            callback: function (t) {
              !(function (t, e, n) {
                var r, o;
                if (
                  !Object(d.d)() ||
                  (null === (r = t.xhr) || void 0 === r
                    ? void 0
                    : r.__sentry_own_request__) ||
                  !(null === (o = t.xhr) || void 0 === o
                    ? void 0
                    : o.__sentry_xhr__) ||
                  !e(t.xhr.__sentry_xhr__.url)
                )
                  return;
                var a = t.xhr.__sentry_xhr__;
                if (t.endTimestamp && t.xhr.__sentry_xhr_span_id__) {
                  return void (
                    (c = n[t.xhr.__sentry_xhr_span_id__]) &&
                    (c.setHttpStatus(a.status_code),
                    c.finish(),
                    delete n[t.xhr.__sentry_xhr_span_id__])
                  );
                }
                var s = Object(d.c)();
                if (s) {
                  var c = s.startChild({
                    data: Object(i.a)(Object(i.a)({}, a.data), {
                      type: "xhr",
                      method: a.method,
                      url: a.url,
                    }),
                    description: a.method + " " + a.url,
                    op: "http.client",
                  });
                  if (
                    ((t.xhr.__sentry_xhr_span_id__ = c.spanId),
                    (n[t.xhr.__sentry_xhr_span_id__] = c),
                    t.xhr.setRequestHeader)
                  )
                    try {
                      t.xhr.setRequestHeader("sentry-trace", c.toTraceparent());
                    } catch (t) {}
                }
              })(t, l, p);
            },
            type: "xhr",
          });
    }
    var N = Object(a.e)();
    var D = Object(i.a)(
        {
          idleTimeout: c.a,
          markBackgroundTransactions: !0,
          maxTransactionDuration: 600,
          routingInstrumentation: function (t, e, n) {
            if (
              (void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              N && N.location)
            ) {
              var r,
                i = N.location.href;
              e && (r = t({ name: N.location.pathname, op: "pageload" })),
                n &&
                  Object(k.a)({
                    callback: function (e) {
                      var n = e.to,
                        a = e.from;
                      void 0 === a && i && -1 !== i.indexOf(n)
                        ? (i = void 0)
                        : a !== n &&
                          ((i = void 0),
                          r &&
                            (o.a.log(
                              "[Tracing] Finishing current transaction with op: " +
                                r.op
                            ),
                            r.finish()),
                          (r = t({
                            name: N.location.pathname,
                            op: "navigation",
                          })));
                    },
                    type: "history",
                  });
            } else
              o.a.warn(
                "Could not initialize routing instrumentation due to invalid location"
              );
          },
          startTransactionOnLocationChange: !0,
          startTransactionOnPageLoad: !0,
        },
        A
      ),
      L = (function () {
        function t(e) {
          (this.name = t.id), (this._emitOptionsWarning = !1);
          var n = A.tracingOrigins;
          e &&
          e.tracingOrigins &&
          Array.isArray(e.tracingOrigins) &&
          0 !== e.tracingOrigins.length
            ? (n = e.tracingOrigins)
            : (this._emitOptionsWarning = !0),
            (this.options = Object(i.a)(Object(i.a)(Object(i.a)({}, D), e), {
              tracingOrigins: n,
            })),
            (this._metrics = new j(
              Object(i.a)(Object(i.a)({}, S), this.options._metricOptions)
            ));
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n = this;
            (this._getCurrentHub = e),
              this._emitOptionsWarning &&
                (o.a.warn(
                  "[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."
                ),
                o.a.warn(
                  "[Tracing] We added a reasonable default for you: " +
                    A.tracingOrigins
                ));
            var r = this.options,
              i = r.routingInstrumentation,
              a = r.startTransactionOnLocationChange,
              s = r.startTransactionOnPageLoad,
              c = r.markBackgroundTransactions,
              p = r.traceFetch,
              f = r.traceXHR,
              h = r.tracingOrigins,
              _ = r.shouldCreateSpanForRequest;
            i(
              function (t) {
                return n._createRouteTransaction(t);
              },
              s,
              a
            ),
              c &&
                (l && l.document
                  ? l.document.addEventListener(
                      "visibilitychange",
                      function () {
                        var t = Object(d.c)();
                        l.document.hidden &&
                          t &&
                          (o.a.log(
                            "[Tracing] Transaction: " +
                              u.a.Cancelled +
                              " -> since tab moved to the background, op: " +
                              t.op
                          ),
                          t.status || t.setStatus(u.a.Cancelled),
                          t.setTag("visibilitychange", "document.hidden"),
                          t.finish());
                      }
                    )
                  : o.a.warn(
                      "[Tracing] Could not set up background tab detection due to lack of global document"
                    )),
              C({
                traceFetch: p,
                traceXHR: f,
                tracingOrigins: h,
                shouldCreateSpanForRequest: _,
              });
          }),
          (t.prototype._createRouteTransaction = function (t) {
            var e = this;
            if (this._getCurrentHub) {
              var n = this.options,
                r = n.beforeNavigate,
                c = n.idleTimeout,
                l = n.maxTransactionDuration,
                p =
                  "pageload" === t.op
                    ? (function () {
                        var t =
                          ((e = "sentry-trace"),
                          (n = Object(a.e)().document.querySelector(
                            "meta[name=" + e + "]"
                          )),
                          n ? n.getAttribute("content") : null);
                        var e, n;
                        if (t) return Object(d.b)(t);
                        return;
                      })()
                    : void 0,
                f = Object(i.a)(Object(i.a)(Object(i.a)({}, t), p), {
                  trimEnd: !0,
                }),
                h = "function" == typeof r ? r(f) : f,
                _ =
                  void 0 === h
                    ? Object(i.a)(Object(i.a)({}, f), { sampled: !1 })
                    : h;
              !1 === _.sampled &&
                o.a.log(
                  "[Tracing] Will not send " +
                    _.op +
                    " transaction because of beforeNavigate."
                ),
                o.a.log("[Tracing] Starting " + _.op + " transaction on scope");
              var m = this._getCurrentHub(),
                v = Object(a.e)().location,
                g = Object(s.b)(m, _, c, !0, { location: v });
              return (
                g.registerBeforeFinishCallback(function (t, n) {
                  e._metrics.addPerformanceEntries(t),
                    (function (t, e, n) {
                      var r = n - e.startTimestamp;
                      n &&
                        (r > t || r < 0) &&
                        (e.setStatus(u.a.DeadlineExceeded),
                        e.setTag("maxTransactionDurationExceeded", "true"));
                    })(Object(d.f)(l), t, n);
                }),
                g
              );
            }
            o.a.warn(
              "[Tracing] Did not create " +
                t.op +
                " transaction because _getCurrentHub is invalid."
            );
          }),
          (t.id = "BrowserTracing"),
          t
        );
      })();
    var P = (function () {
      function t(e) {
        void 0 === e && (e = {}),
          (this.name = t.id),
          (this._router = e.router || e.app),
          (this._methods = (Array.isArray(e.methods) ? e.methods : []).concat(
            "use"
          ));
      }
      return (
        (t.prototype.setupOnce = function () {
          this._router
            ? (function (t, e) {
                void 0 === e && (e = []);
                e.forEach(function (e) {
                  return (function (t, e) {
                    var n = t[e];
                    return (
                      (t[e] = function () {
                        for (var t = [], r = 0; r < arguments.length; r++)
                          t[r] = arguments[r];
                        return n.call.apply(n, Object(i.e)([this], M(t, e)));
                      }),
                      t
                    );
                  })(t, e);
                });
              })(this._router, this._methods)
            : o.a.error("ExpressIntegration is missing an Express instance");
        }),
        (t.id = "Express"),
        t
      );
    })();
    function U(t, e) {
      var n = t.length;
      switch (n) {
        case 2:
          return function (n, r) {
            var i = r.__sentry_transaction;
            if (i) {
              var o = i.startChild({
                description: t.name,
                op: "middleware." + e,
              });
              r.once("finish", function () {
                o.finish();
              });
            }
            return t.call(this, n, r);
          };
        case 3:
          return function (n, r, o) {
            var a,
              s =
                null === (a = r.__sentry_transaction) || void 0 === a
                  ? void 0
                  : a.startChild({
                      description: t.name,
                      op: "middleware." + e,
                    });
            t.call(this, n, r, function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              null === (t = s) || void 0 === t || t.finish(),
                o.call.apply(o, Object(i.e)([this], e));
            });
          };
        case 4:
          return function (n, r, o, a) {
            var s,
              c =
                null === (s = o.__sentry_transaction) || void 0 === s
                  ? void 0
                  : s.startChild({
                      description: t.name,
                      op: "middleware." + e,
                    });
            t.call(this, n, r, o, function () {
              for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              null === (t = c) || void 0 === t || t.finish(),
                a.call.apply(a, Object(i.e)([this], e));
            });
          };
        default:
          throw new Error("Express middleware takes 2-4 arguments. Got: " + n);
      }
    }
    function M(t, e) {
      return t.map(function (t) {
        return "function" == typeof t
          ? U(t, e)
          : Array.isArray(t)
          ? t.map(function (t) {
              return "function" == typeof t ? U(t, e) : t;
            })
          : t;
      });
    }
    var F = n(13),
      B = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._usePgNative = !!e.usePgNative);
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n,
              r = Object(p.c)("pg");
            if (r)
              if (
                !this._usePgNative ||
                (null === (n = r.native) || void 0 === n ? void 0 : n.Client)
              ) {
                var i = (this._usePgNative ? r.native : r).Client;
                Object(F.c)(i.prototype, "query", function (t) {
                  return function (n, r, i) {
                    var o,
                      a,
                      s,
                      c =
                        null ===
                          (a =
                            null === (o = e().getScope()) || void 0 === o
                              ? void 0
                              : o.getSpan()) || void 0 === a
                          ? void 0
                          : a.startChild({
                              description: "string" == typeof n ? n : n.text,
                              op: "db",
                            });
                    if ("function" == typeof i)
                      return t.call(this, n, r, function (t, e) {
                        var n;
                        null === (n = c) || void 0 === n || n.finish(), i(t, e);
                      });
                    if ("function" == typeof r)
                      return t.call(this, n, function (t, e) {
                        var n;
                        null === (n = c) || void 0 === n || n.finish(), r(t, e);
                      });
                    var u = void 0 !== r ? t.call(this, n, r) : t.call(this, n);
                    return Object(R.m)(u)
                      ? u.then(function (t) {
                          var e;
                          return (
                            null === (e = c) || void 0 === e || e.finish(), t
                          );
                        })
                      : (null === (s = c) || void 0 === s || s.finish(), u);
                  };
                });
              } else
                o.a.error(
                  "Postgres Integration was unable to access 'pg-native' bindings."
                );
            else
              o.a.error(
                "Postgres Integration was unable to require `pg` package."
              );
          }),
          (t.id = "Postgres"),
          t
        );
      })(),
      G = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n = Object(p.c)("mysql/lib/Connection.js");
            n
              ? Object(F.c)(n, "createQuery", function (t) {
                  return function (n, r, i) {
                    var o,
                      a,
                      s =
                        null ===
                          (a =
                            null === (o = e().getScope()) || void 0 === o
                              ? void 0
                              : o.getSpan()) || void 0 === a
                          ? void 0
                          : a.startChild({
                              description: "string" == typeof n ? n : n.sql,
                              op: "db",
                            });
                    return "function" == typeof i
                      ? t.call(this, n, r, function (t, e, n) {
                          var r;
                          null === (r = s) || void 0 === r || r.finish(),
                            i(t, e, n);
                        })
                      : "function" == typeof r
                      ? t.call(this, n, function (t, e, n) {
                          var i;
                          null === (i = s) || void 0 === i || i.finish(),
                            r(t, e, n);
                        })
                      : t.call(this, n, r, i);
                  };
                })
              : o.a.error(
                  "Mysql Integration was unable to require `mysql` package."
                );
          }),
          (t.id = "Mysql"),
          t
        );
      })(),
      q = [
        "aggregate",
        "bulkWrite",
        "countDocuments",
        "createIndex",
        "createIndexes",
        "deleteMany",
        "deleteOne",
        "distinct",
        "drop",
        "dropIndex",
        "dropIndexes",
        "estimatedDocumentCount",
        "find",
        "findOne",
        "findOneAndDelete",
        "findOneAndReplace",
        "findOneAndUpdate",
        "indexes",
        "indexExists",
        "indexInformation",
        "initializeOrderedBulkOp",
        "insertMany",
        "insertOne",
        "isCapped",
        "mapReduce",
        "options",
        "parallelCollectionScan",
        "rename",
        "replaceOne",
        "stats",
        "updateMany",
        "updateOne",
      ],
      H = {
        bulkWrite: ["operations"],
        countDocuments: ["query"],
        createIndex: ["fieldOrSpec"],
        createIndexes: ["indexSpecs"],
        deleteMany: ["filter"],
        deleteOne: ["filter"],
        distinct: ["key", "query"],
        dropIndex: ["indexName"],
        find: ["query"],
        findOne: ["query"],
        findOneAndDelete: ["filter"],
        findOneAndReplace: ["filter", "replacement"],
        findOneAndUpdate: ["filter", "update"],
        indexExists: ["indexes"],
        insertMany: ["docs"],
        insertOne: ["doc"],
        mapReduce: ["map", "reduce"],
        rename: ["newName"],
        replaceOne: ["filter", "doc"],
        updateMany: ["filter", "update"],
        updateOne: ["filter", "update"],
      },
      W = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._operations = Array.isArray(e.operations) ? e.operations : q),
            (this._describeOperations =
              !("describeOperations" in e) || e.describeOperations),
            (this._useMongoose = !!e.useMongoose);
        }
        return (
          (t.prototype.setupOnce = function (t, e) {
            var n = this._useMongoose ? "mongoose" : "mongodb",
              r = Object(p.c)(n);
            r
              ? this._instrumentOperations(r.Collection, this._operations, e)
              : o.a.error(
                  "Mongo Integration was unable to require `" + n + "` package."
                );
          }),
          (t.prototype._instrumentOperations = function (t, e, n) {
            var r = this;
            e.forEach(function (e) {
              return r._patchOperation(t, e, n);
            });
          }),
          (t.prototype._patchOperation = function (t, e, n) {
            if (e in t.prototype) {
              var r = this._getSpanContextFromOperationArguments.bind(this);
              Object(F.c)(t.prototype, e, function (t) {
                return function () {
                  for (var o, a, s, c, u = [], d = 0; d < arguments.length; d++)
                    u[d] = arguments[d];
                  var l = u[u.length - 1],
                    p = n().getScope(),
                    f = null === (o = p) || void 0 === o ? void 0 : o.getSpan();
                  if (
                    "function" != typeof l ||
                    ("mapReduce" === e && 2 === u.length)
                  ) {
                    var h =
                        null === (a = f) || void 0 === a
                          ? void 0
                          : a.startChild(r(this, e, u)),
                      _ = t.call.apply(t, Object(i.e)([this], u));
                    return Object(R.m)(_)
                      ? _.then(function (t) {
                          var e;
                          return (
                            null === (e = h) || void 0 === e || e.finish(), t
                          );
                        })
                      : (null === (s = h) || void 0 === s || s.finish(), _);
                  }
                  var m =
                    null === (c = f) || void 0 === c
                      ? void 0
                      : c.startChild(r(this, e, u.slice(0, -1)));
                  return t.call.apply(
                    t,
                    Object(i.e)([this], u.slice(0, -1), [
                      function (t, e) {
                        var n;
                        null === (n = m) || void 0 === n || n.finish(), l(t, e);
                      },
                    ])
                  );
                };
              });
            }
          }),
          (t.prototype._getSpanContextFromOperationArguments = function (
            t,
            e,
            n
          ) {
            var r = {
                collectionName: t.collectionName,
                dbName: t.dbName,
                namespace: t.namespace,
              },
              o = { op: "db", description: e, data: r },
              a = H[e],
              s = Array.isArray(this._describeOperations)
                ? this._describeOperations.includes(e)
                : this._describeOperations;
            if (!a || !s) return o;
            try {
              if ("mapReduce" === e) {
                var c = Object(i.c)(n, 2),
                  u = c[0],
                  d = c[1];
                (r[a[0]] = "string" == typeof u ? u : u.name || "<anonymous>"),
                  (r[a[1]] =
                    "string" == typeof d ? d : d.name || "<anonymous>");
              } else
                for (var l = 0; l < a.length; l++)
                  r[a[l]] = JSON.stringify(n[l]);
            } catch (t) {}
            return o;
          }),
          (t.id = "Mongo"),
          t
        );
      })(),
      z = n(27),
      Y = n(31),
      K = Object(i.a)(Object(i.a)({}, r), { BrowserTracing: L });
    Object(s.a)();
  },
  182: function (t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", function () {
      return r;
    }),
      (function (t) {
        (t.BeforeSend = "before_send"),
          (t.EventProcessor = "event_processor"),
          (t.NetworkError = "network_error"),
          (t.QueueOverflow = "queue_overflow"),
          (t.RateLimitBackoff = "ratelimit_backoff"),
          (t.SampleRate = "sample_rate");
      })(r || (r = {}));
  },
  19: function (t, e, n) {
    "use strict";
    (function (t, r) {
      function i() {
        return (
          "[object process]" ===
          Object.prototype.toString.call(void 0 !== t ? t : 0)
        );
      }
      function o(t, e) {
        return t.require(e);
      }
      function a(t) {
        var e;
        try {
          e = o(r, t);
        } catch (t) {}
        try {
          var n = o(r, "process").cwd;
          e = o(r, n() + "/node_modules/" + t);
        } catch (t) {}
        return e;
      }
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return a;
        });
    }.call(this, n(17), n(50)(t)));
  },
  2: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "d", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "c", function () {
        return s;
      }),
      n.d(e, "e", function () {
        return c;
      }),
      n.d(e, "f", function () {
        return u;
      });
    var r = n(33),
      i = new RegExp(
        "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
      );
    function o(t) {
      var e;
      return (
        void 0 === t &&
          (t =
            null === (e = Object(r.b)().getClient()) || void 0 === e
              ? void 0
              : e.getOptions()),
        !!t && ("tracesSampleRate" in t || "tracesSampler" in t)
      );
    }
    function a(t) {
      var e = t.match(i);
      if (e) {
        var n = void 0;
        return (
          "1" === e[3] ? (n = !0) : "0" === e[3] && (n = !1),
          { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
        );
      }
    }
    function s(t) {
      var e, n;
      return (
        void 0 === t && (t = Object(r.b)()),
        null ===
          (n = null === (e = t) || void 0 === e ? void 0 : e.getScope()) ||
        void 0 === n
          ? void 0
          : n.getTransaction()
      );
    }
    function c(t) {
      return t / 1e3;
    }
    function u(t) {
      return 1e3 * t;
    }
  },
  20: function (t, e, n) {
    (function (t) {
      ("undefined" != typeof window
        ? window
        : void 0 !== t
        ? t
        : "undefined" != typeof self
        ? self
        : {}
      ).SENTRY_RELEASE = { id: "141e9638da3253081d4144814c66a283c05ff393" };
    }.call(this, n(7)));
  },
  21: function (t, e, n) {
    "use strict";
    var r =
      (this && this.__awaiter) ||
      function (t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.defaultUser = void 0);
    const i = n(14);
    e.defaultUser = {
      userId: -1,
      email: null,
      domain: null,
      credit: null,
      allowSearch: !0,
      showCredit: !0,
      authored: !1,
      activeSheet: "",
      referCode: "",
      tk: "",
      needLi: 0,
      premium: "false",
      r1: 0,
      r2: 0,
      r3: 0,
      uuid: null,
      atsIntegrationStatus: { greenhouse: !1, salesforce: !1, lever: !1 },
      atsIntegrations: {
        greenhouse: { authURL: "", disconnectURL: "", isConnected: !1 },
        salesforce: { authURL: "", disconnectURL: "", isConnected: !1 },
        lever: { authURL: "", disconnectURL: "", isConnected: !1 },
      },
      enableDebug: 0,
      enableSidebar: 1,
      lcl: "",
      enableLinkedinShare: 1,
    };
    const o = () =>
        r(void 0, void 0, void 0, function* () {
          var t;
          try {
            return null !== (t = (yield i.storage.get("user")).user) &&
              void 0 !== t
              ? t
              : Object.assign({}, e.defaultUser);
          } catch (t) {}
          return Object.assign({}, e.defaultUser);
        }),
      a = (t) =>
        r(void 0, void 0, void 0, function* () {
          yield i.storage.set({ user: t });
        }),
      s = {
        get: o,
        set: a,
        update: (t) =>
          r(void 0, void 0, void 0, function* () {
            const e = yield o(),
              n = Object.assign(Object.assign({}, e), t);
            return yield a(n), n;
          }),
        logout: () =>
          r(void 0, void 0, void 0, function* () {
            yield i.storage.remove("user");
          }),
      };
    e.default = s;
  },
  237: function (t, e, n) {
    n(20), (t.exports = n(238));
  },
  238: function (t, e, n) {
    "use strict";
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, e, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (t, e, n, r) {
              void 0 === r && (r = n), (t[r] = e[n]);
            }),
      i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: !0, value: e });
            }
          : function (t, e) {
              t.default = e;
            }),
      o =
        (this && this.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(t, n) &&
                r(e, t, n);
          return i(e, t), e;
        },
      a =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                c(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                c(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, s);
            }
            c((r = r.apply(t, e || [])).next());
          });
        },
      s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    const c = n(8),
      u = o(n(8)),
      d = n(14),
      l = s(n(9)),
      p = s(n(5)),
      f = n(100),
      h = o(n(29));
    let _ = !1,
      m = 100,
      v = null,
      g = null;
    a(void 0, void 0, void 0, function* () {
      const t = yield d.runtime.sendMessage({
        command: p.default.commands.GET_USER_INFO,
      });
      (0, f.initSentry)(), (0, c.initGoogleAnalytics)(t.userId);
      const e = yield d.storage
          .get("extension_app_version")
          .then((t) => t.extension_app_version || "default"),
        n = document.querySelector(".loading-container");
      if (
        !(yield (0, f.checkExtensionAppLoaded)().catch((t) => {
          const e = document.createElement("p");
          return (
            (e.innerText = "Extension app failed to load!"),
            n.appendChild(e),
            h.captureException(t),
            !1
          );
        }))
      )
        return;
      const r = document.createElement("iframe");
      let i;
      (r.style.height = "525px"),
        (r.style.width = "310px"),
        (r.style.display = "none"),
        (r.id = "main-iframe"),
        (r.src = `${l.default.iframeUrl}?source=popup&uuid=${t.uuid}&v=${e}`),
        document.body.appendChild(r),
        (r.onload = function () {
          i = setInterval(
            () =>
              a(this, void 0, void 0, function* () {
                document
                  .getElementById("main-iframe")
                  .contentWindow.postMessage(
                    { type: p.default.commands.PING },
                    l.default.serverDomain
                  );
              }),
            10
          );
        });
      const o = () =>
        a(void 0, void 0, void 0, function* () {
          if (!v) {
            const t = yield d.tabs.query({ active: !0, currentWindow: !0 });
            (v = t[0].id), (g = t[0].url);
          }
          return v;
        });
      setTimeout(() => {
        a(void 0, void 0, void 0, function* () {
          const t = yield o(),
            e = { type: p.default.commands.MINIMIZE_SIDEBAR };
          yield d.tabs.sendMessage(t, e);
        });
      }, 400),
        setTimeout(() => {
          a(void 0, void 0, void 0, function* () {
            (r.style.display = "block"), (n.style.display = "none");
          });
        }, 100);
      const s = {
          isNewlyInstalled: !1,
          intendedProfileName: null,
          intendedProfileVanity: null,
        },
        y = yield d.storage.get("first_open_app");
      y.first_open_app &&
        (s.isNewlyInstalled = u.isNewlyInstalled(y.first_open_app));
      const b = yield d.runtime.sendMessage({
        command: p.default.commands.GET_COOKIE_DATA,
      });
      (s.intendedProfileName = unescape(b.intendedProfileName)),
        (s.intendedProfileVanity = b.intendedProfileVanity),
        window.addEventListener("message", (e) =>
          a(void 0, void 0, void 0, function* () {
            const { data: n } = e,
              r = document.getElementById("main-iframe");
            if (n.type === p.default.commands.PING_ACKNOWLEDGED)
              return (
                (_ = !0),
                r.contentWindow.postMessage(
                  {
                    type: p.default.commands.SET_USER,
                    payload: { userInfo: t },
                  },
                  l.default.serverDomain
                ),
                void clearInterval(i)
              );
            if (n.type === p.default.commands.CREATE_LOGIN_WINDOW)
              return yield d.runtime.sendMessage({
                command: p.default.commands.CREATE_LOGIN_WINDOW,
              });
            if (n.type === p.default.commands.GET_EXTENSION_CONFIG) {
              const t = yield d.storageSync.get("showSidebar"),
                e = yield d.cookies.get(
                  l.default.serverDomain,
                  "enable_extension_app_dev_features"
                );
              return void r.contentWindow.postMessage(
                {
                  type: p.default.commands.SET_IFRAME_EXTENSION_CONFIG,
                  payload: {
                    showSidebar: t.showSidebar,
                    showDevFeatures: e ? parseInt(e) : 0,
                  },
                },
                l.default.serverDomain
              );
            }
            if (n.type === p.default.commands.CLOSE_TABS_BY_ID)
              return d.runtime.sendMessage({
                command: p.default.commands.CLOSE_TABS_BY_ID,
                data: n.payload,
              });
            const a = yield o();
            if (n.type === p.default.commands.REDIRECT_PAGE_TO_LINK)
              return yield d.runtime.sendMessage({
                command: p.default.commands.REDIRECT_PAGE_TO_LINK,
                data: { id: a, url: n.payload.link },
              });
            if (n.type === p.default.commands.CLOSE_EXTENSION_TOOLBAR_TOOLTIP)
              return yield d.runtime.sendMessage({
                command: p.default.commands.CLOSE_EXTENSION_TOOLBAR_TOOLTIP,
              });
            if (n.type === p.default.commands.SET_SIDEBAR_CONFIG_TO_MAXIMIZED)
              return yield d.runtime.sendMessage({
                command: p.default.commands.SET_SIDEBAR_CONFIG_TO_MAXIMIZED,
              });
            if (
              n.type ===
              p.default.commands.REQUEST_INDIVIDUAL_OPENED_PROFILE_PAGE_DATA
            ) {
              const t = yield d.runtime.sendMessage({
                command:
                  p.default.commands
                    .REQUEST_INDIVIDUAL_OPENED_PROFILE_PAGE_DATA,
                tabId: a,
              });
              return void r.contentWindow.postMessage(
                {
                  type: p.default.commands.POST_OPEN_PROFILES_PAGE_DATA,
                  payload: t,
                },
                "*"
              );
            }
            const s = yield d.tabs.sendMessage(a, n);
            s && r.contentWindow.postMessage(s, e.origin);
          })
        );
      const O = () =>
        a(void 0, void 0, void 0, function* () {
          var t, e;
          if (!_) return void setTimeout(O, 10);
          if (
            (g || (yield o()),
            !l.default.trustedWebsites.reduce((t, e) => e.test(g) || t, !1))
          )
            return (
              document
                .getElementById("main-iframe")
                .contentWindow.postMessage(
                  {
                    type: p.default.commands.SHOW_UNRECOGNIZED_PAGE,
                    payload: Object.assign({}, s),
                  },
                  l.default.serverDomain
                ),
              void ga("all_installs.send", {
                hitType: "event",
                eventCategory: "Open App",
                eventAction: "not_supported_profile",
              })
            );
          const n = { type: p.default.commands.PAGE_DATA_REQUEST },
            r = yield o(),
            i = yield d.tabs.sendMessage(r, n);
          m--,
            i
              ? (document
                  .getElementById("main-iframe")
                  .contentWindow.postMessage(i, l.default.serverDomain),
                (null ===
                  (e =
                    null === (t = i.payload) || void 0 === t
                      ? void 0
                      : t.data) || void 0 === e
                  ? void 0
                  : e.profileType) &&
                  ga("all_installs.send", {
                    hitType: "event",
                    eventCategory: "Open App",
                    eventAction: i.payload.data.profileType,
                  }))
              : m < 0
              ? document
                  .getElementById("main-iframe")
                  .contentWindow.postMessage(
                    { type: p.default.commands.SHOW_REFRESH_PAGE },
                    l.default.serverDomain
                  )
              : setTimeout(O, 10);
        });
      O();
    });
  },
  239: function (t, e, n) {
    "use strict";
    var r, i;
    n.d(e, "a", function () {
      return r;
    }),
      (function (t) {
        (t.Ok = "ok"),
          (t.Exited = "exited"),
          (t.Crashed = "crashed"),
          (t.Abnormal = "abnormal");
      })(r || (r = {})),
      (function (t) {
        (t.Ok = "ok"), (t.Errored = "errored"), (t.Crashed = "crashed");
      })(i || (i = {}));
  },
  25: function (t, e) {
    t.exports = function (t, e) {
      function n() {
        return new RegExp(
          /(.*?)\.?([^\.]*?)\.(gl|com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/
        );
      }
      function r(t, e) {
        var n = t.charAt(0),
          r = e.split(n);
        return n === t
          ? r
          : r[(t = parseInt(t.substring(1), 10)) < 0 ? r.length + t : t - 1];
      }
      function i(t, e) {
        for (
          var n,
            r = t.charAt(0),
            i = e.split("&"),
            o = [],
            a = {},
            s = [],
            c = t.substring(1),
            u = 0,
            d = i.length;
          u < d;
          u++
        )
          if (
            ((o = i[u].match(/(.*?)=(.*)/)) || (o = [i[u], i[u], ""]),
            "" !== o[1].replace(/\s/g, ""))
          ) {
            if (
              ((o[2] =
                ((n = o[2] || ""), decodeURIComponent(n.replace(/\+/g, " ")))),
              c === o[1])
            )
              return o[2];
            (s = o[1].match(/(.*)\[([0-9]+)\]/))
              ? ((a[s[1]] = a[s[1]] || []), (a[s[1]][s[2]] = o[2]))
              : (a[o[1]] = o[2]);
          }
        return r === t ? a : a[c];
      }
      var o,
        a = {};
      if ("tld?" === t) return n();
      if (((e = e || window.location.toString()), !t)) return e;
      if (((t = t.toString()), (o = e.match(/^mailto:([^\/].+)/))))
        (a.protocol = "mailto"), (a.email = o[1]);
      else {
        if (
          ((o = e.match(/(.*?)\/#\!(.*)/)) && (e = o[1] + o[2]),
          (o = e.match(/(.*?)#(.*)/)) && ((a.hash = o[2]), (e = o[1])),
          a.hash && t.match(/^#/))
        )
          return i(t, a.hash);
        if (
          ((o = e.match(/(.*?)\?(.*)/)) && ((a.query = o[2]), (e = o[1])),
          a.query && t.match(/^\?/))
        )
          return i(t, a.query);
        if (
          ((o = e.match(/(.*?)\:?\/\/(.*)/)) &&
            ((a.protocol = o[1].toLowerCase()), (e = o[2])),
          (o = e.match(/(.*?)(\/.*)/)) && ((a.path = o[2]), (e = o[1])),
          (a.path = (a.path || "").replace(/^([^\/])/, "/$1")),
          t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")),
          t.match(/^\//))
        )
          return r(t, a.path.substring(1));
        if (
          ((o = r("/-1", a.path.substring(1))) &&
            (o = o.match(/(.*?)\.([^.]+)$/)) &&
            ((a.file = o[0]), (a.filename = o[1]), (a.fileext = o[2])),
          (o = e.match(/(.*)\:([0-9]+)$/)) && ((a.port = o[2]), (e = o[1])),
          (o = e.match(/(.*?)@(.*)/)) && ((a.auth = o[1]), (e = o[2])),
          a.auth &&
            ((o = a.auth.match(/(.*)\:(.*)/)),
            (a.user = o ? o[1] : a.auth),
            (a.pass = o ? o[2] : void 0)),
          (a.hostname = e.toLowerCase()),
          "." === t.charAt(0))
        )
          return r(t, a.hostname);
        n() &&
          (o = a.hostname.match(n())) &&
          ((a.tld = o[3]),
          (a.domain = o[2] ? o[2] + "." + o[3] : void 0),
          (a.sub = o[1] || void 0)),
          (a.port = a.port || ("https" === a.protocol ? "443" : "80")),
          (a.protocol = a.protocol || ("443" === a.port ? "https" : "http"));
      }
      return t in a ? a[t] : "{}" === t ? a : void 0;
    };
  },
  26: function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "b", function () {
        return _;
      }),
        n.d(e, "a", function () {
          return m;
        });
      var r = n(0),
        i = n(33),
        o = n(46),
        a = n(3),
        s = n(19),
        c = n(84),
        u = n(30),
        d = n(31),
        l = n(2);
      function p() {
        var t = this.getScope();
        if (t) {
          var e = t.getSpan();
          if (e) return { "sentry-trace": e.toTraceparent() };
        }
        return {};
      }
      function f(t, e, n) {
        return Object(l.d)(e)
          ? void 0 !== t.sampled
            ? (t.setMetadata({ transactionSampling: { method: o.a.Explicit } }),
              t)
            : ("function" == typeof e.tracesSampler
                ? ((r = e.tracesSampler(n)),
                  t.setMetadata({
                    transactionSampling: {
                      method: o.a.Sampler,
                      rate: Number(r),
                    },
                  }))
                : void 0 !== n.parentSampled
                ? ((r = n.parentSampled),
                  t.setMetadata({
                    transactionSampling: { method: o.a.Inheritance },
                  }))
                : ((r = e.tracesSampleRate),
                  t.setMetadata({
                    transactionSampling: { method: o.a.Rate, rate: Number(r) },
                  })),
              (function (t) {
                if (isNaN(t) || ("number" != typeof t && "boolean" != typeof t))
                  return (
                    a.a.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                        JSON.stringify(t) +
                        " of type " +
                        JSON.stringify(typeof t) +
                        "."
                    ),
                    !1
                  );
                if (t < 0 || t > 1)
                  return (
                    a.a.warn(
                      "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " +
                        t +
                        "."
                    ),
                    !1
                  );
                return !0;
              })(r)
                ? r
                  ? ((t.sampled = Math.random() < r),
                    t.sampled
                      ? (a.a.log(
                          "[Tracing] starting " +
                            t.op +
                            " transaction - " +
                            t.name
                        ),
                        t)
                      : (a.a.log(
                          "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                            Number(r) +
                            ")"
                        ),
                        t))
                  : (a.a.log(
                      "[Tracing] Discarding transaction because " +
                        ("function" == typeof e.tracesSampler
                          ? "tracesSampler returned 0 or false"
                          : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                    ),
                    (t.sampled = !1),
                    t)
                : (a.a.warn(
                    "[Tracing] Discarding transaction because of invalid sample rate."
                  ),
                  (t.sampled = !1),
                  t))
          : ((t.sampled = !1), t);
        var r;
      }
      function h(t, e) {
        var n,
          i,
          o =
            (null === (n = this.getClient()) || void 0 === n
              ? void 0
              : n.getOptions()) || {},
          a = new d.a(t, this);
        return (
          (a = f(
            a,
            o,
            Object(r.a)(
              { parentSampled: t.parentSampled, transactionContext: t },
              e
            )
          )).sampled &&
            a.initSpanRecorder(
              null === (i = o._experiments) || void 0 === i
                ? void 0
                : i.maxSpans
            ),
          a
        );
      }
      function _(t, e, n, i, o) {
        var a,
          s,
          c =
            (null === (a = t.getClient()) || void 0 === a
              ? void 0
              : a.getOptions()) || {},
          d = new u.b(e, t, n, i);
        return (
          (d = f(
            d,
            c,
            Object(r.a)(
              { parentSampled: e.parentSampled, transactionContext: e },
              o
            )
          )).sampled &&
            d.initSpanRecorder(
              null === (s = c._experiments) || void 0 === s
                ? void 0
                : s.maxSpans
            ),
          d
        );
      }
      function m() {
        var e;
        (e = Object(i.d)()).__SENTRY__ &&
          ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
          e.__SENTRY__.extensions.startTransaction ||
            (e.__SENTRY__.extensions.startTransaction = h),
          e.__SENTRY__.extensions.traceHeaders ||
            (e.__SENTRY__.extensions.traceHeaders = p)),
          Object(s.b)() &&
            (function () {
              var e = Object(i.d)();
              if (e.__SENTRY__) {
                var n = {
                    mongodb: function () {
                      return new (Object(s.a)(
                        t,
                        "./integrations/mongo"
                      ).Mongo)();
                    },
                    mongoose: function () {
                      return new (Object(s.a)(t, "./integrations/mongo").Mongo)(
                        { mongoose: !0 }
                      );
                    },
                    mysql: function () {
                      return new (Object(s.a)(
                        t,
                        "./integrations/mysql"
                      ).Mysql)();
                    },
                    pg: function () {
                      return new (Object(s.a)(
                        t,
                        "./integrations/postgres"
                      ).Postgres)();
                    },
                  },
                  o = Object.keys(n)
                    .filter(function (t) {
                      return !!Object(s.c)(t);
                    })
                    .map(function (t) {
                      try {
                        return n[t]();
                      } catch (t) {
                        return;
                      }
                    })
                    .filter(function (t) {
                      return t;
                    });
                o.length > 0 &&
                  (e.__SENTRY__.integrations = Object(r.e)(
                    e.__SENTRY__.integrations || [],
                    o
                  ));
              }
            })(),
          Object(c.a)();
      }
    }.call(this, n(50)(t)));
  },
  27: function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return c;
    }),
      n.d(e, "a", function () {
        return u;
      });
    var r = n(0),
      i = n(12),
      o = n(32),
      a = n(13),
      s = n(11),
      c = (function () {
        function t(t) {
          void 0 === t && (t = 1e3), (this.spans = []), (this._maxlen = t);
        }
        return (
          (t.prototype.add = function (t) {
            this.spans.length > this._maxlen
              ? (t.spanRecorder = void 0)
              : this.spans.push(t);
          }),
          t
        );
      })(),
      u = (function () {
        function t(t) {
          if (
            ((this.traceId = Object(i.j)()),
            (this.spanId = Object(i.j)().substring(16)),
            (this.startTimestamp = Object(o.d)()),
            (this.tags = {}),
            (this.data = {}),
            !t)
          )
            return this;
          t.traceId && (this.traceId = t.traceId),
            t.spanId && (this.spanId = t.spanId),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled" in t && (this.sampled = t.sampled),
            t.op && (this.op = t.op),
            t.description && (this.description = t.description),
            t.data && (this.data = t.data),
            t.tags && (this.tags = t.tags),
            t.status && (this.status = t.status),
            t.startTimestamp && (this.startTimestamp = t.startTimestamp),
            t.endTimestamp && (this.endTimestamp = t.endTimestamp);
        }
        return (
          (t.prototype.child = function (t) {
            return this.startChild(t);
          }),
          (t.prototype.startChild = function (e) {
            var n = new t(
              Object(r.a)(Object(r.a)({}, e), {
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId,
              })
            );
            return (
              (n.spanRecorder = this.spanRecorder),
              n.spanRecorder && n.spanRecorder.add(n),
              (n.transaction = this.transaction),
              n
            );
          }),
          (t.prototype.setTag = function (t, e) {
            var n;
            return (
              (this.tags = Object(r.a)(
                Object(r.a)({}, this.tags),
                (((n = {})[t] = e), n)
              )),
              this
            );
          }),
          (t.prototype.setData = function (t, e) {
            var n;
            return (
              (this.data = Object(r.a)(
                Object(r.a)({}, this.data),
                (((n = {})[t] = e), n)
              )),
              this
            );
          }),
          (t.prototype.setStatus = function (t) {
            return (this.status = t), this;
          }),
          (t.prototype.setHttpStatus = function (t) {
            this.setTag("http.status_code", String(t));
            var e = s.a.fromHttpCode(t);
            return e !== s.a.UnknownError && this.setStatus(e), this;
          }),
          (t.prototype.isSuccess = function () {
            return this.status === s.a.Ok;
          }),
          (t.prototype.finish = function (t) {
            this.endTimestamp = "number" == typeof t ? t : Object(o.d)();
          }),
          (t.prototype.toTraceparent = function () {
            var t = "";
            return (
              void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
              this.traceId + "-" + this.spanId + t
            );
          }),
          (t.prototype.toContext = function () {
            return Object(a.a)({
              data: this.data,
              description: this.description,
              endTimestamp: this.endTimestamp,
              op: this.op,
              parentSpanId: this.parentSpanId,
              sampled: this.sampled,
              spanId: this.spanId,
              startTimestamp: this.startTimestamp,
              status: this.status,
              tags: this.tags,
              traceId: this.traceId,
            });
          }),
          (t.prototype.updateWithContext = function (t) {
            var e, n, r, i, o;
            return (
              (this.data = null != (e = t.data) ? e : {}),
              (this.description = t.description),
              (this.endTimestamp = t.endTimestamp),
              (this.op = t.op),
              (this.parentSpanId = t.parentSpanId),
              (this.sampled = t.sampled),
              (this.spanId = null != (n = t.spanId) ? n : this.spanId),
              (this.startTimestamp =
                null != (r = t.startTimestamp) ? r : this.startTimestamp),
              (this.status = t.status),
              (this.tags = null != (i = t.tags) ? i : {}),
              (this.traceId = null != (o = t.traceId) ? o : this.traceId),
              this
            );
          }),
          (t.prototype.getTraceContext = function () {
            return Object(a.a)({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              trace_id: this.traceId,
            });
          }),
          (t.prototype.toJSON = function () {
            return Object(a.a)({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              start_timestamp: this.startTimestamp,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              timestamp: this.endTimestamp,
              trace_id: this.traceId,
            });
          }),
          t
        );
      })();
  },
  28: function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return i;
    }),
      n.d(e, "c", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "a", function () {
        return s;
      });
    var r = n(4);
    function i(t, e) {
      return (
        void 0 === e && (e = 0),
        "string" != typeof t || 0 === e || t.length <= e
          ? t
          : t.substr(0, e) + "..."
      );
    }
    function o(t, e) {
      var n = t,
        r = n.length;
      if (r <= 150) return n;
      e > r && (e = r);
      var i = Math.max(e - 60, 0);
      i < 5 && (i = 0);
      var o = Math.min(i + 140, r);
      return (
        o > r - 5 && (o = r),
        o === r && (i = Math.max(o - 140, 0)),
        (n = n.slice(i, o)),
        i > 0 && (n = "'{snip} " + n),
        o < r && (n += " {snip}"),
        n
      );
    }
    function a(t, e) {
      if (!Array.isArray(t)) return "";
      for (var n = [], r = 0; r < t.length; r++) {
        var i = t[r];
        try {
          n.push(String(i));
        } catch (t) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(e);
    }
    function s(t, e) {
      return (
        !!Object(r.k)(t) &&
        (Object(r.j)(e)
          ? e.test(t)
          : "string" == typeof e && -1 !== t.indexOf(e))
      );
    }
  },
  29: function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Severity", function () {
        return a;
      }),
      n.d(e, "Status", function () {
        return s;
      }),
      n.d(e, "addGlobalEventProcessor", function () {
        return u.b;
      }),
      n.d(e, "addBreadcrumb", function () {
        return m;
      }),
      n.d(e, "captureException", function () {
        return p;
      }),
      n.d(e, "captureEvent", function () {
        return h;
      }),
      n.d(e, "captureMessage", function () {
        return f;
      }),
      n.d(e, "configureScope", function () {
        return _;
      }),
      n.d(e, "getHubFromCarrier", function () {
        return d.c;
      }),
      n.d(e, "getCurrentHub", function () {
        return d.b;
      }),
      n.d(e, "Hub", function () {
        return d.a;
      }),
      n.d(e, "makeMain", function () {
        return d.e;
      }),
      n.d(e, "Scope", function () {
        return u.a;
      }),
      n.d(e, "startTransaction", function () {
        return j;
      }),
      n.d(e, "SDK_VERSION", function () {
        return T;
      }),
      n.d(e, "setContext", function () {
        return v;
      }),
      n.d(e, "setExtra", function () {
        return b;
      }),
      n.d(e, "setExtras", function () {
        return g;
      }),
      n.d(e, "setTag", function () {
        return O;
      }),
      n.d(e, "setTags", function () {
        return y;
      }),
      n.d(e, "setUser", function () {
        return E;
      }),
      n.d(e, "withScope", function () {
        return S;
      }),
      n.d(e, "BrowserClient", function () {
        return Dt;
      }),
      n.d(e, "injectReportDialog", function () {
        return kt;
      }),
      n.d(e, "eventFromException", function () {
        return ot;
      }),
      n.d(e, "eventFromMessage", function () {
        return at;
      }),
      n.d(e, "defaultIntegrations", function () {
        return Yt;
      }),
      n.d(e, "forceLoad", function () {
        return Jt;
      }),
      n.d(e, "init", function () {
        return Kt;
      }),
      n.d(e, "lastEventId", function () {
        return Vt;
      }),
      n.d(e, "onLoad", function () {
        return $t;
      }),
      n.d(e, "showReportDialog", function () {
        return Xt;
      }),
      n.d(e, "flush", function () {
        return Zt;
      }),
      n.d(e, "close", function () {
        return Qt;
      }),
      n.d(e, "wrap", function () {
        return te;
      }),
      n.d(e, "SDK_NAME", function () {
        return ee;
      }),
      n.d(e, "Integrations", function () {
        return ie;
      }),
      n.d(e, "Transports", function () {
        return o;
      });
    var r = {};
    n.r(r),
      n.d(r, "FunctionToString", function () {
        return Lt;
      }),
      n.d(r, "InboundFilters", function () {
        return Ut;
      });
    var i = {};
    n.r(i),
      n.d(i, "GlobalHandlers", function () {
        return Gt;
      }),
      n.d(i, "TryCatch", function () {
        return Bt;
      }),
      n.d(i, "Breadcrumbs", function () {
        return Nt;
      }),
      n.d(i, "LinkedErrors", function () {
        return qt;
      }),
      n.d(i, "UserAgent", function () {
        return zt;
      }),
      n.d(i, "Dedupe", function () {
        return Ht;
      });
    var o = {};
    n.r(o),
      n.d(o, "BaseTransport", function () {
        return bt;
      }),
      n.d(o, "FetchTransport", function () {
        return Ot;
      }),
      n.d(o, "XHRTransport", function () {
        return Et;
      });
    var a,
      s,
      c = n(0);
    !(function (t) {
      (t.Fatal = "fatal"),
        (t.Error = "error"),
        (t.Warning = "warning"),
        (t.Log = "log"),
        (t.Info = "info"),
        (t.Debug = "debug"),
        (t.Critical = "critical");
    })(a || (a = {})),
      (function (t) {
        t.fromString = function (e) {
          switch (e) {
            case "debug":
              return t.Debug;
            case "info":
              return t.Info;
            case "warn":
            case "warning":
              return t.Warning;
            case "error":
              return t.Error;
            case "fatal":
              return t.Fatal;
            case "critical":
              return t.Critical;
            case "log":
            default:
              return t.Log;
          }
        };
      })(a || (a = {})),
      (function (t) {
        (t.Unknown = "unknown"),
          (t.Skipped = "skipped"),
          (t.Success = "success"),
          (t.RateLimit = "rate_limit"),
          (t.Invalid = "invalid"),
          (t.Failed = "failed");
      })(s || (s = {})),
      (function (t) {
        t.fromHttpCode = function (e) {
          return e >= 200 && e < 300
            ? t.Success
            : 429 === e
            ? t.RateLimit
            : e >= 400 && e < 500
            ? t.Invalid
            : e >= 500
            ? t.Failed
            : t.Unknown;
        };
      })(s || (s = {}));
    var u = n(45),
      d = n(33);
    function l(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      var r = Object(d.b)();
      if (r && r[t]) return r[t].apply(r, Object(c.e)(e));
      throw new Error(
        "No hub defined or " +
          t +
          " was not found on the hub, please open a bug report."
      );
    }
    function p(t, e) {
      var n;
      try {
        throw new Error("Sentry syntheticException");
      } catch (t) {
        n = t;
      }
      return l("captureException", t, {
        captureContext: e,
        originalException: t,
        syntheticException: n,
      });
    }
    function f(t, e) {
      var n;
      try {
        throw new Error(t);
      } catch (t) {
        n = t;
      }
      var r = "string" != typeof e ? { captureContext: e } : void 0;
      return l(
        "captureMessage",
        t,
        "string" == typeof e ? e : void 0,
        Object(c.a)({ originalException: t, syntheticException: n }, r)
      );
    }
    function h(t) {
      return l("captureEvent", t);
    }
    function _(t) {
      l("configureScope", t);
    }
    function m(t) {
      l("addBreadcrumb", t);
    }
    function v(t, e) {
      l("setContext", t, e);
    }
    function g(t) {
      l("setExtras", t);
    }
    function y(t) {
      l("setTags", t);
    }
    function b(t, e) {
      l("setExtra", t, e);
    }
    function O(t, e) {
      l("setTag", t, e);
    }
    function E(t) {
      l("setUser", t);
    }
    function S(t) {
      l("withScope", t);
    }
    function j(t, e) {
      return l("startTransaction", Object(c.a)({}, t), e);
    }
    var T = "6.13.3",
      w = n(239),
      x = n(182),
      I =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array
          ? function (t, e) {
              return (t.__proto__ = e), t;
            }
          : function (t, e) {
              for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
              return t;
            });
    var k = (function (t) {
        function e(e) {
          var n = this.constructor,
            r = t.call(this, e) || this;
          return (
            (r.message = e),
            (r.name = n.prototype.constructor.name),
            I(r, n.prototype),
            r
          );
        }
        return Object(c.b)(e, t), e;
      })(Error),
      R = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
      A = (function () {
        function t(t) {
          "string" == typeof t ? this._fromString(t) : this._fromComponents(t),
            this._validate();
        }
        return (
          (t.prototype.toString = function (t) {
            void 0 === t && (t = !1);
            var e = this,
              n = e.host,
              r = e.path,
              i = e.pass,
              o = e.port,
              a = e.projectId;
            return (
              e.protocol +
              "://" +
              e.publicKey +
              (t && i ? ":" + i : "") +
              "@" +
              n +
              (o ? ":" + o : "") +
              "/" +
              (r ? r + "/" : r) +
              a
            );
          }),
          (t.prototype._fromString = function (t) {
            var e = R.exec(t);
            if (!e) throw new k("Invalid Dsn");
            var n = Object(c.c)(e.slice(1), 6),
              r = n[0],
              i = n[1],
              o = n[2],
              a = void 0 === o ? "" : o,
              s = n[3],
              u = n[4],
              d = void 0 === u ? "" : u,
              l = "",
              p = n[5],
              f = p.split("/");
            if (
              (f.length > 1 && ((l = f.slice(0, -1).join("/")), (p = f.pop())),
              p)
            ) {
              var h = p.match(/^\d+/);
              h && (p = h[0]);
            }
            this._fromComponents({
              host: s,
              pass: a,
              path: l,
              projectId: p,
              port: d,
              protocol: r,
              publicKey: i,
            });
          }),
          (t.prototype._fromComponents = function (t) {
            "user" in t && !("publicKey" in t) && (t.publicKey = t.user),
              (this.user = t.publicKey || ""),
              (this.protocol = t.protocol),
              (this.publicKey = t.publicKey || ""),
              (this.pass = t.pass || ""),
              (this.host = t.host),
              (this.port = t.port || ""),
              (this.path = t.path || ""),
              (this.projectId = t.projectId);
          }),
          (t.prototype._validate = function () {
            var t = this;
            if (
              (["protocol", "publicKey", "host", "projectId"].forEach(function (
                e
              ) {
                if (!t[e]) throw new k("Invalid Dsn: " + e + " missing");
              }),
              !this.projectId.match(/^\d+$/))
            )
              throw new k("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
              throw new k("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
              throw new k("Invalid Dsn: Invalid port " + this.port);
          }),
          t
        );
      })(),
      C = n(4),
      N = n(3),
      D = n(38),
      L = n(12),
      P = n(32),
      U = n(13),
      M = n(28),
      F = [];
    function B(t) {
      return t.reduce(function (t, e) {
        return (
          t.every(function (t) {
            return e.name !== t.name;
          }) && t.push(e),
          t
        );
      }, []);
    }
    function G(t) {
      var e = {};
      return (
        (function (t) {
          var e =
              (t.defaultIntegrations && Object(c.e)(t.defaultIntegrations)) ||
              [],
            n = t.integrations,
            r = Object(c.e)(B(e));
          Array.isArray(n)
            ? (r = Object(c.e)(
                r.filter(function (t) {
                  return n.every(function (e) {
                    return e.name !== t.name;
                  });
                }),
                B(n)
              ))
            : "function" == typeof n &&
              ((r = n(r)), (r = Array.isArray(r) ? r : [r]));
          var i = r.map(function (t) {
            return t.name;
          });
          return (
            -1 !== i.indexOf("Debug") &&
              r.push.apply(r, Object(c.e)(r.splice(i.indexOf("Debug"), 1))),
            r
          );
        })(t).forEach(function (t) {
          (e[t.name] = t),
            (function (t) {
              -1 === F.indexOf(t.name) &&
                (t.setupOnce(u.b, d.b),
                F.push(t.name),
                N.a.log("Integration installed: " + t.name));
            })(t);
        }),
        Object.defineProperty(e, "initialized", { value: !0 }),
        e
      );
    }
    var q = (function () {
        function t(t, e) {
          (this._integrations = {}),
            (this._numProcessing = 0),
            (this._backend = new t(e)),
            (this._options = e),
            e.dsn && (this._dsn = new A(e.dsn));
        }
        return (
          (t.prototype.captureException = function (t, e, n) {
            var r = this,
              i = e && e.event_id;
            return (
              this._process(
                this._getBackend()
                  .eventFromException(t, e)
                  .then(function (t) {
                    return r._captureEvent(t, e, n);
                  })
                  .then(function (t) {
                    i = t;
                  })
              ),
              i
            );
          }),
          (t.prototype.captureMessage = function (t, e, n, r) {
            var i = this,
              o = n && n.event_id,
              a = Object(C.i)(t)
                ? this._getBackend().eventFromMessage(String(t), e, n)
                : this._getBackend().eventFromException(t, n);
            return (
              this._process(
                a
                  .then(function (t) {
                    return i._captureEvent(t, n, r);
                  })
                  .then(function (t) {
                    o = t;
                  })
              ),
              o
            );
          }),
          (t.prototype.captureEvent = function (t, e, n) {
            var r = e && e.event_id;
            return (
              this._process(
                this._captureEvent(t, e, n).then(function (t) {
                  r = t;
                })
              ),
              r
            );
          }),
          (t.prototype.captureSession = function (t) {
            this._isEnabled()
              ? "string" != typeof t.release
                ? N.a.warn(
                    "Discarded session because of missing or non-string release"
                  )
                : (this._sendSession(t), t.update({ init: !1 }))
              : N.a.warn("SDK not enabled, will not capture session.");
          }),
          (t.prototype.getDsn = function () {
            return this._dsn;
          }),
          (t.prototype.getOptions = function () {
            return this._options;
          }),
          (t.prototype.getTransport = function () {
            return this._getBackend().getTransport();
          }),
          (t.prototype.flush = function (t) {
            var e = this;
            return this._isClientDoneProcessing(t).then(function (n) {
              return e
                .getTransport()
                .close(t)
                .then(function (t) {
                  return n && t;
                });
            });
          }),
          (t.prototype.close = function (t) {
            var e = this;
            return this.flush(t).then(function (t) {
              return (e.getOptions().enabled = !1), t;
            });
          }),
          (t.prototype.setupIntegrations = function () {
            this._isEnabled() &&
              !this._integrations.initialized &&
              (this._integrations = G(this._options));
          }),
          (t.prototype.getIntegration = function (t) {
            try {
              return this._integrations[t.id] || null;
            } catch (e) {
              return (
                N.a.warn(
                  "Cannot retrieve integration " +
                    t.id +
                    " from the current Client"
                ),
                null
              );
            }
          }),
          (t.prototype._updateSessionFromEvent = function (t, e) {
            var n,
              r,
              i = !1,
              o = !1,
              a = e.exception && e.exception.values;
            if (a) {
              o = !0;
              try {
                for (
                  var s = Object(c.f)(a), u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var d = u.value.mechanism;
                  if (d && !1 === d.handled) {
                    i = !0;
                    break;
                  }
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  u && !u.done && (r = s.return) && r.call(s);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            var l = t.status === w.a.Ok;
            ((l && 0 === t.errors) || (l && i)) &&
              (t.update(
                Object(c.a)(Object(c.a)({}, i && { status: w.a.Crashed }), {
                  errors: t.errors || Number(o || i),
                })
              ),
              this.captureSession(t));
          }),
          (t.prototype._sendSession = function (t) {
            this._getBackend().sendSession(t);
          }),
          (t.prototype._isClientDoneProcessing = function (t) {
            var e = this;
            return new D.a(function (n) {
              var r = 0,
                i = setInterval(function () {
                  0 == e._numProcessing
                    ? (clearInterval(i), n(!0))
                    : ((r += 1), t && r >= t && (clearInterval(i), n(!1)));
                }, 1);
            });
          }),
          (t.prototype._getBackend = function () {
            return this._backend;
          }),
          (t.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (t.prototype._prepareEvent = function (t, e, n) {
            var r = this,
              i = this.getOptions().normalizeDepth,
              o = void 0 === i ? 3 : i,
              a = Object(c.a)(Object(c.a)({}, t), {
                event_id:
                  t.event_id || (n && n.event_id ? n.event_id : Object(L.j)()),
                timestamp: t.timestamp || Object(P.b)(),
              });
            this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
            var s = e;
            n &&
              n.captureContext &&
              (s = u.a.clone(s).update(n.captureContext));
            var d = D.a.resolve(a);
            return (
              s && (d = s.applyToEvent(a, n)),
              d.then(function (t) {
                return "number" == typeof o && o > 0
                  ? r._normalizeEvent(t, o)
                  : t;
              })
            );
          }),
          (t.prototype._normalizeEvent = function (t, e) {
            if (!t) return null;
            var n = Object(c.a)(
              Object(c.a)(
                Object(c.a)(
                  Object(c.a)(
                    Object(c.a)({}, t),
                    t.breadcrumbs && {
                      breadcrumbs: t.breadcrumbs.map(function (t) {
                        return Object(c.a)(
                          Object(c.a)({}, t),
                          t.data && { data: Object(U.d)(t.data, e) }
                        );
                      }),
                    }
                  ),
                  t.user && { user: Object(U.d)(t.user, e) }
                ),
                t.contexts && { contexts: Object(U.d)(t.contexts, e) }
              ),
              t.extra && { extra: Object(U.d)(t.extra, e) }
            );
            t.contexts &&
              t.contexts.trace &&
              (n.contexts.trace = t.contexts.trace);
            var r = this.getOptions()._experiments;
            return (void 0 === r ? {} : r).ensureNoCircularStructures
              ? Object(U.d)(n)
              : n;
          }),
          (t.prototype._applyClientOptions = function (t) {
            var e = this.getOptions(),
              n = e.environment,
              r = e.release,
              i = e.dist,
              o = e.maxValueLength,
              a = void 0 === o ? 250 : o;
            "environment" in t ||
              (t.environment = "environment" in e ? n : "production"),
              void 0 === t.release && void 0 !== r && (t.release = r),
              void 0 === t.dist && void 0 !== i && (t.dist = i),
              t.message && (t.message = Object(M.d)(t.message, a));
            var s = t.exception && t.exception.values && t.exception.values[0];
            s && s.value && (s.value = Object(M.d)(s.value, a));
            var c = t.request;
            c && c.url && (c.url = Object(M.d)(c.url, a));
          }),
          (t.prototype._applyIntegrationsMetadata = function (t) {
            var e = Object.keys(this._integrations);
            e.length > 0 &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.integrations = Object(c.e)(t.sdk.integrations || [], e)));
          }),
          (t.prototype._sendEvent = function (t) {
            this._getBackend().sendEvent(t);
          }),
          (t.prototype._captureEvent = function (t, e, n) {
            return this._processEvent(t, e, n).then(
              function (t) {
                return t.event_id;
              },
              function (t) {
                N.a.error(t);
              }
            );
          }),
          (t.prototype._processEvent = function (t, e, n) {
            var r,
              i,
              o = this,
              a = this.getOptions(),
              s = a.beforeSend,
              c = a.sampleRate,
              u = this.getTransport();
            if (!this._isEnabled())
              return D.a.reject(
                new k("SDK not enabled, will not capture event.")
              );
            var d = "transaction" === t.type;
            return !d && "number" == typeof c && Math.random() > c
              ? (null === (i = (r = u).recordLostEvent) ||
                  void 0 === i ||
                  i.call(r, x.a.SampleRate, "event"),
                D.a.reject(
                  new k(
                    "Discarding event because it's not included in the random sample (sampling rate = " +
                      c +
                      ")"
                  )
                ))
              : this._prepareEvent(t, n, e)
                  .then(function (n) {
                    var r, i;
                    if (null === n)
                      throw (
                        (null === (i = (r = u).recordLostEvent) ||
                          void 0 === i ||
                          i.call(r, x.a.EventProcessor, t.type || "event"),
                        new k(
                          "An event processor returned null, will not send event."
                        ))
                      );
                    if ((e && e.data && !0 === e.data.__sentry__) || d || !s)
                      return n;
                    var a = s(n, e);
                    return o._ensureBeforeSendRv(a);
                  })
                  .then(function (e) {
                    var r, i;
                    if (null === e)
                      throw (
                        (null === (i = (r = u).recordLostEvent) ||
                          void 0 === i ||
                          i.call(r, x.a.BeforeSend, t.type || "event"),
                        new k(
                          "`beforeSend` returned `null`, will not send event."
                        ))
                      );
                    var a = n && n.getSession && n.getSession();
                    return (
                      !d && a && o._updateSessionFromEvent(a, e),
                      o._sendEvent(e),
                      e
                    );
                  })
                  .then(null, function (t) {
                    if (t instanceof k) throw t;
                    throw (
                      (o.captureException(t, {
                        data: { __sentry__: !0 },
                        originalException: t,
                      }),
                      new k(
                        "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                          t
                      ))
                    );
                  });
          }),
          (t.prototype._process = function (t) {
            var e = this;
            (this._numProcessing += 1),
              t.then(
                function (t) {
                  return (e._numProcessing -= 1), t;
                },
                function (t) {
                  return (e._numProcessing -= 1), t;
                }
              );
          }),
          (t.prototype._ensureBeforeSendRv = function (t) {
            var e =
              "`beforeSend` method has to return `null` or a valid event.";
            if (Object(C.m)(t))
              return t.then(
                function (t) {
                  if (!Object(C.h)(t) && null !== t) throw new k(e);
                  return t;
                },
                function (t) {
                  throw new k("beforeSend rejected with " + t);
                }
              );
            if (!Object(C.h)(t) && null !== t) throw new k(e);
            return t;
          }),
          t
        );
      })(),
      H = (function () {
        function t() {}
        return (
          (t.prototype.sendEvent = function (t) {
            return D.a.resolve({
              reason:
                "NoopTransport: Event has been skipped because no Dsn is configured.",
              status: s.Skipped,
            });
          }),
          (t.prototype.close = function (t) {
            return D.a.resolve(!0);
          }),
          t
        );
      })(),
      W = (function () {
        function t(t) {
          (this._options = t),
            this._options.dsn ||
              N.a.warn("No DSN provided, backend will not do anything."),
            (this._transport = this._setupTransport());
        }
        return (
          (t.prototype.eventFromException = function (t, e) {
            throw new k("Backend has to implement `eventFromException` method");
          }),
          (t.prototype.eventFromMessage = function (t, e, n) {
            throw new k("Backend has to implement `eventFromMessage` method");
          }),
          (t.prototype.sendEvent = function (t) {
            this._transport.sendEvent(t).then(null, function (t) {
              N.a.error("Error while sending event: " + t);
            });
          }),
          (t.prototype.sendSession = function (t) {
            this._transport.sendSession
              ? this._transport.sendSession(t).then(null, function (t) {
                  N.a.error("Error while sending session: " + t);
                })
              : N.a.warn(
                  "Dropping session because custom transport doesn't implement sendSession"
                );
          }),
          (t.prototype.getTransport = function () {
            return this._transport;
          }),
          (t.prototype._setupTransport = function () {
            return new H();
          }),
          t
        );
      })(),
      z = n(58),
      Y =
        /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      K =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      X =
        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      V = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      J = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      $ = /Minified React error #\d+;/i;
    function Z(t) {
      var e = null,
        n = 0;
      t &&
        ("number" == typeof t.framesToPop
          ? (n = t.framesToPop)
          : $.test(t.message) && (n = 1));
      try {
        if (
          (e = (function (t) {
            if (!t || !t.stacktrace) return null;
            for (
              var e,
                n = t.stacktrace,
                r =
                  / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                i =
                  / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
                o = n.split("\n"),
                a = [],
                s = 0;
              s < o.length;
              s += 2
            ) {
              var c = null;
              (e = r.exec(o[s]))
                ? (c = {
                    url: e[2],
                    func: e[3],
                    args: [],
                    line: +e[1],
                    column: null,
                  })
                : (e = i.exec(o[s])) &&
                  (c = {
                    url: e[6],
                    func: e[3] || e[4],
                    args: e[5] ? e[5].split(",") : [],
                    line: +e[1],
                    column: +e[2],
                  }),
                c && (!c.func && c.line && (c.func = "?"), a.push(c));
            }
            if (!a.length) return null;
            return { message: et(t), name: t.name, stack: a };
          })(t))
        )
          return tt(e, n);
      } catch (t) {}
      try {
        if (
          (e = (function (t) {
            var e, n;
            if (!t || !t.stack) return null;
            for (
              var r, i, o, a = [], s = t.stack.split("\n"), u = 0;
              u < s.length;
              ++u
            ) {
              if ((i = Y.exec(s[u]))) {
                var d = i[2] && 0 === i[2].indexOf("native");
                i[2] &&
                  0 === i[2].indexOf("eval") &&
                  (r = J.exec(i[2])) &&
                  ((i[2] = r[1]), (i[3] = r[2]), (i[4] = r[3]));
                var l =
                    i[2] && 0 === i[2].indexOf("address at ")
                      ? i[2].substr("address at ".length)
                      : i[2],
                  p = i[1] || "?";
                (e = Object(c.c)(Q(p, l), 2)),
                  (p = e[0]),
                  (l = e[1]),
                  (o = {
                    url: l,
                    func: p,
                    args: d ? [i[2]] : [],
                    line: i[3] ? +i[3] : null,
                    column: i[4] ? +i[4] : null,
                  });
              } else if ((i = X.exec(s[u])))
                o = {
                  url: i[2],
                  func: i[1] || "?",
                  args: [],
                  line: +i[3],
                  column: i[4] ? +i[4] : null,
                };
              else {
                if (!(i = K.exec(s[u]))) continue;
                i[3] && i[3].indexOf(" > eval") > -1 && (r = V.exec(i[3]))
                  ? ((i[1] = i[1] || "eval"),
                    (i[3] = r[1]),
                    (i[4] = r[2]),
                    (i[5] = ""))
                  : 0 !== u ||
                    i[5] ||
                    void 0 === t.columnNumber ||
                    (a[0].column = t.columnNumber + 1);
                (l = i[3]), (p = i[1] || "?");
                (n = Object(c.c)(Q(p, l), 2)),
                  (p = n[0]),
                  (l = n[1]),
                  (o = {
                    url: l,
                    func: p,
                    args: i[2] ? i[2].split(",") : [],
                    line: i[4] ? +i[4] : null,
                    column: i[5] ? +i[5] : null,
                  });
              }
              !o.func && o.line && (o.func = "?"), a.push(o);
            }
            if (!a.length) return null;
            return { message: et(t), name: t.name, stack: a };
          })(t))
        )
          return tt(e, n);
      } catch (t) {}
      return { message: et(t), name: t && t.name, stack: [], failed: !0 };
    }
    var Q = function (t, e) {
      var n = -1 !== t.indexOf("safari-extension"),
        r = -1 !== t.indexOf("safari-web-extension");
      return n || r
        ? [
            -1 !== t.indexOf("@") ? t.split("@")[0] : "?",
            n ? "safari-extension:" + e : "safari-web-extension:" + e,
          ]
        : [t, e];
    };
    function tt(t, e) {
      try {
        return Object(c.a)(Object(c.a)({}, t), { stack: t.stack.slice(e) });
      } catch (e) {
        return t;
      }
    }
    function et(t) {
      var e = t && t.message;
      return e
        ? e.error && "string" == typeof e.error.message
          ? e.error.message
          : e
        : "No error message";
    }
    function nt(t) {
      var e = it(t.stack),
        n = { type: t.name, value: t.message };
      return (
        e && e.length && (n.stacktrace = { frames: e }),
        void 0 === n.type &&
          "" === n.value &&
          (n.value = "Unrecoverable error caught"),
        n
      );
    }
    function rt(t) {
      return { exception: { values: [nt(t)] } };
    }
    function it(t) {
      if (!t || !t.length) return [];
      var e = t,
        n = e[0].func || "",
        r = e[e.length - 1].func || "";
      return (
        (-1 === n.indexOf("captureMessage") &&
          -1 === n.indexOf("captureException")) ||
          (e = e.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
        e
          .slice(0, 50)
          .map(function (t) {
            return {
              colno: null === t.column ? void 0 : t.column,
              filename: t.url || e[0].url,
              function: t.func || "?",
              in_app: !0,
              lineno: null === t.line ? void 0 : t.line,
            };
          })
          .reverse()
      );
    }
    function ot(t, e, n) {
      var r = st(e, (n && n.syntheticException) || void 0, {
        attachStacktrace: t.attachStacktrace,
      });
      return (
        Object(L.a)(r, { handled: !0, type: "generic" }),
        (r.level = a.Error),
        n && n.event_id && (r.event_id = n.event_id),
        D.a.resolve(r)
      );
    }
    function at(t, e, n, r) {
      void 0 === n && (n = a.Info);
      var i = ct(e, (r && r.syntheticException) || void 0, {
        attachStacktrace: t.attachStacktrace,
      });
      return (
        (i.level = n),
        r && r.event_id && (i.event_id = r.event_id),
        D.a.resolve(i)
      );
    }
    function st(t, e, n) {
      var r;
      if ((void 0 === n && (n = {}), Object(C.e)(t) && t.error))
        return (r = rt(Z((t = t.error))));
      if (Object(C.a)(t) || Object(C.b)(t)) {
        var i = t,
          o = i.name || (Object(C.a)(i) ? "DOMError" : "DOMException"),
          a = i.message ? o + ": " + i.message : o;
        return (
          (r = ct(a, e, n)),
          Object(L.b)(r, a),
          "code" in i &&
            (r.tags = Object(c.a)(Object(c.a)({}, r.tags), {
              "DOMException.code": "" + i.code,
            })),
          r
        );
      }
      return Object(C.d)(t)
        ? (r = rt(Z(t)))
        : Object(C.h)(t) || Object(C.f)(t)
        ? ((r = (function (t, e, n) {
            var r = {
              exception: {
                values: [
                  {
                    type: Object(C.f)(t)
                      ? t.constructor.name
                      : n
                      ? "UnhandledRejection"
                      : "Error",
                    value:
                      "Non-Error " +
                      (n ? "promise rejection" : "exception") +
                      " captured with keys: " +
                      Object(U.b)(t),
                  },
                ],
              },
              extra: { __serialized__: Object(U.e)(t) },
            };
            if (e) {
              var i = it(Z(e).stack);
              r.stacktrace = { frames: i };
            }
            return r;
          })(t, e, n.rejection)),
          Object(L.a)(r, { synthetic: !0 }),
          r)
        : ((r = ct(t, e, n)),
          Object(L.b)(r, "" + t, void 0),
          Object(L.a)(r, { synthetic: !0 }),
          r);
    }
    function ct(t, e, n) {
      void 0 === n && (n = {});
      var r = { message: t };
      if (n.attachStacktrace && e) {
        var i = it(Z(e).stack);
        r.stacktrace = { frames: i };
      }
      return r;
    }
    function ut(t) {
      if (t.metadata && t.metadata.sdk) {
        var e = t.metadata.sdk;
        return { name: e.name, version: e.version };
      }
    }
    function dt(t, e) {
      return e
        ? ((t.sdk = t.sdk || {}),
          (t.sdk.name = t.sdk.name || e.name),
          (t.sdk.version = t.sdk.version || e.version),
          (t.sdk.integrations = Object(c.e)(
            t.sdk.integrations || [],
            e.integrations || []
          )),
          (t.sdk.packages = Object(c.e)(
            t.sdk.packages || [],
            e.packages || []
          )),
          t)
        : t;
    }
    function lt(t, e) {
      var n = ut(e),
        r = "aggregates" in t ? "sessions" : "session";
      return {
        body:
          JSON.stringify(
            Object(c.a)(
              Object(c.a)(
                { sent_at: new Date().toISOString() },
                n && { sdk: n }
              ),
              e.forceEnvelope() && { dsn: e.getDsn().toString() }
            )
          ) +
          "\n" +
          JSON.stringify({ type: r }) +
          "\n" +
          JSON.stringify(t),
        type: r,
        url: e.getEnvelopeEndpointWithUrlEncodedAuth(),
      };
    }
    function pt(t, e) {
      var n = ut(e),
        r = t.type || "event",
        i = "transaction" === r || e.forceEnvelope(),
        o = t.debug_meta || {},
        a = o.transactionSampling,
        s = Object(c.d)(o, ["transactionSampling"]),
        u = a || {},
        d = u.method,
        l = u.rate;
      0 === Object.keys(s).length ? delete t.debug_meta : (t.debug_meta = s);
      var p = {
        body: JSON.stringify(n ? dt(t, e.metadata.sdk) : t),
        type: r,
        url: i
          ? e.getEnvelopeEndpointWithUrlEncodedAuth()
          : e.getStoreEndpointWithUrlEncodedAuth(),
      };
      if (i) {
        var f =
          JSON.stringify(
            Object(c.a)(
              Object(c.a)(
                { event_id: t.event_id, sent_at: new Date().toISOString() },
                n && { sdk: n }
              ),
              e.forceEnvelope() && { dsn: e.getDsn().toString() }
            )
          ) +
          "\n" +
          JSON.stringify({ type: r, sample_rates: [{ id: d, rate: l }] }) +
          "\n" +
          p.body;
        p.body = f;
      }
      return p;
    }
    var ft = (function () {
        function t(t, e, n) {
          void 0 === e && (e = {}),
            (this.dsn = t),
            (this._dsnObject = new A(t)),
            (this.metadata = e),
            (this._tunnel = n);
        }
        return (
          (t.prototype.getDsn = function () {
            return this._dsnObject;
          }),
          (t.prototype.forceEnvelope = function () {
            return !!this._tunnel;
          }),
          (t.prototype.getBaseApiEndpoint = function () {
            var t = this.getDsn(),
              e = t.protocol ? t.protocol + ":" : "",
              n = t.port ? ":" + t.port : "";
            return (
              e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
            );
          }),
          (t.prototype.getStoreEndpoint = function () {
            return this._getIngestEndpoint("store");
          }),
          (t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return this.getStoreEndpoint() + "?" + this._encodedAuth();
          }),
          (t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return this.forceEnvelope()
              ? this._tunnel
              : this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
          }),
          (t.prototype.getStoreEndpointPath = function () {
            var t = this.getDsn();
            return (
              (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            );
          }),
          (t.prototype.getRequestHeaders = function (t, e) {
            var n = this.getDsn(),
              r = ["Sentry sentry_version=7"];
            return (
              r.push("sentry_client=" + t + "/" + e),
              r.push("sentry_key=" + n.publicKey),
              n.pass && r.push("sentry_secret=" + n.pass),
              {
                "Content-Type": "application/json",
                "X-Sentry-Auth": r.join(", "),
              }
            );
          }),
          (t.prototype.getReportDialogEndpoint = function (t) {
            void 0 === t && (t = {});
            var e = this.getDsn(),
              n = this.getBaseApiEndpoint() + "embed/error-page/",
              r = [];
            for (var i in (r.push("dsn=" + e.toString()), t))
              if ("dsn" !== i)
                if ("user" === i) {
                  if (!t.user) continue;
                  t.user.name &&
                    r.push("name=" + encodeURIComponent(t.user.name)),
                    t.user.email &&
                      r.push("email=" + encodeURIComponent(t.user.email));
                } else
                  r.push(
                    encodeURIComponent(i) + "=" + encodeURIComponent(t[i])
                  );
            return r.length ? n + "?" + r.join("&") : n;
          }),
          (t.prototype._getEnvelopeEndpoint = function () {
            return this._getIngestEndpoint("envelope");
          }),
          (t.prototype._getIngestEndpoint = function (t) {
            return this._tunnel
              ? this._tunnel
              : "" +
                  this.getBaseApiEndpoint() +
                  this.getDsn().projectId +
                  "/" +
                  t +
                  "/";
          }),
          (t.prototype._encodedAuth = function () {
            var t = {
              sentry_key: this.getDsn().publicKey,
              sentry_version: "7",
            };
            return Object(U.f)(t);
          }),
          t
        );
      })(),
      ht = (function () {
        function t(t) {
          (this._limit = t), (this._buffer = []);
        }
        return (
          (t.prototype.isReady = function () {
            return void 0 === this._limit || this.length() < this._limit;
          }),
          (t.prototype.add = function (t) {
            var e = this;
            if (!this.isReady())
              return D.a.reject(
                new k("Not adding Promise due to buffer limit reached.")
              );
            var n = t();
            return (
              -1 === this._buffer.indexOf(n) && this._buffer.push(n),
              n
                .then(function () {
                  return e.remove(n);
                })
                .then(null, function () {
                  return e.remove(n).then(null, function () {});
                }),
              n
            );
          }),
          (t.prototype.remove = function (t) {
            return this._buffer.splice(this._buffer.indexOf(t), 1)[0];
          }),
          (t.prototype.length = function () {
            return this._buffer.length;
          }),
          (t.prototype.drain = function (t) {
            var e = this;
            return new D.a(function (n) {
              var r = setTimeout(function () {
                t && t > 0 && n(!1);
              }, t);
              D.a
                .all(e._buffer)
                .then(function () {
                  clearTimeout(r), n(!0);
                })
                .then(null, function () {
                  n(!0);
                });
            });
          }),
          t
        );
      })();
    var _t,
      mt = Object(L.e)();
    function vt() {
      var t, e;
      if (_t) return _t;
      if (Object(z.a)(mt.fetch)) return (_t = mt.fetch.bind(mt));
      var n = mt.document,
        r = mt.fetch;
      if (
        "function" ==
        typeof (null === (t = n) || void 0 === t ? void 0 : t.createElement)
      )
        try {
          var i = n.createElement("iframe");
          (i.hidden = !0),
            n.head.appendChild(i),
            (null === (e = i.contentWindow) || void 0 === e
              ? void 0
              : e.fetch) && (r = i.contentWindow.fetch),
            n.head.removeChild(i);
        } catch (t) {
          N.a.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            t
          );
        }
      return (_t = r.bind(mt));
    }
    var gt = {
        event: "error",
        transaction: "transaction",
        session: "session",
        attachment: "attachment",
      },
      yt = Object(L.e)(),
      bt = (function () {
        function t(t) {
          var e = this;
          (this.options = t),
            (this._buffer = new ht(30)),
            (this._rateLimits = {}),
            (this._outcomes = {}),
            (this._api = new ft(t.dsn, t._metadata, t.tunnel)),
            (this.url = this._api.getStoreEndpointWithUrlEncodedAuth()),
            this.options.sendClientReports &&
              yt.document &&
              yt.document.addEventListener("visibilitychange", function () {
                "hidden" === yt.document.visibilityState && e._flushOutcomes();
              });
        }
        return (
          (t.prototype.sendEvent = function (t) {
            throw new k("Transport Class has to implement `sendEvent` method");
          }),
          (t.prototype.close = function (t) {
            return this._buffer.drain(t);
          }),
          (t.prototype.recordLostEvent = function (t, e) {
            var n;
            if (this.options.sendClientReports) {
              var r = gt[e] + ":" + t;
              N.a.log("Adding outcome: " + r),
                (this._outcomes[r] =
                  (null != (n = this._outcomes[r]) ? n : 0) + 1);
            }
          }),
          (t.prototype._flushOutcomes = function () {
            if (this.options.sendClientReports) {
              var t = this._outcomes;
              if (((this._outcomes = {}), Object.keys(t).length)) {
                N.a.log("Flushing outcomes:\n" + JSON.stringify(t, null, 2));
                var e = this._api.getEnvelopeEndpointWithUrlEncodedAuth(),
                  n =
                    JSON.stringify({}) +
                    "\n" +
                    JSON.stringify({ type: "client_report" }) +
                    "\n" +
                    JSON.stringify({
                      timestamp: Object(P.b)(),
                      discarded_events: Object.keys(t).map(function (e) {
                        var n = Object(c.c)(e.split(":"), 2),
                          r = n[0];
                        return { reason: n[1], category: r, quantity: t[e] };
                      }),
                    });
                try {
                  !(function (t, e) {
                    if (
                      "[object Navigator]" ===
                        Object.prototype.toString.call(mt && mt.navigator) &&
                      "function" == typeof mt.navigator.sendBeacon
                    )
                      return mt.navigator.sendBeacon.bind(mt.navigator)(t, e);
                    if (Object(z.b)()) {
                      var n = vt();
                      n(t, {
                        body: e,
                        method: "POST",
                        credentials: "omit",
                        keepalive: !0,
                      }).then(null, function (t) {});
                    } else;
                  })(e, n);
                } catch (t) {
                  N.a.error(t);
                }
              } else N.a.log("No outcomes to flush");
            }
          }),
          (t.prototype._handleResponse = function (t) {
            var e = t.requestType,
              n = t.response,
              r = t.headers,
              i = t.resolve,
              o = t.reject,
              a = s.fromHttpCode(n.status);
            this._handleRateLimit(r) &&
              N.a.warn(
                "Too many " +
                  e +
                  " requests, backing off until: " +
                  this._disabledUntil(e)
              ),
              a !== s.Success ? o(n) : i({ status: a });
          }),
          (t.prototype._disabledUntil = function (t) {
            var e = gt[t];
            return this._rateLimits[e] || this._rateLimits.all;
          }),
          (t.prototype._isRateLimited = function (t) {
            return this._disabledUntil(t) > new Date(Date.now());
          }),
          (t.prototype._handleRateLimit = function (t) {
            var e,
              n,
              r,
              i,
              o = Date.now(),
              a = t["x-sentry-rate-limits"],
              s = t["retry-after"];
            if (a) {
              try {
                for (
                  var u = Object(c.f)(a.trim().split(",")), d = u.next();
                  !d.done;
                  d = u.next()
                ) {
                  var l = d.value.split(":", 2),
                    p = parseInt(l[0], 10),
                    f = 1e3 * (isNaN(p) ? 60 : p);
                  try {
                    for (
                      var h = ((r = void 0), Object(c.f)(l[1].split(";"))),
                        _ = h.next();
                      !_.done;
                      _ = h.next()
                    ) {
                      var m = _.value;
                      this._rateLimits[m || "all"] = new Date(o + f);
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      _ && !_.done && (i = h.return) && i.call(h);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  d && !d.done && (n = u.return) && n.call(u);
                } finally {
                  if (e) throw e.error;
                }
              }
              return !0;
            }
            return (
              !!s &&
              ((this._rateLimits.all = new Date(o + Object(L.g)(o, s))), !0)
            );
          }),
          t
        );
      })(),
      Ot = (function (t) {
        function e(e, n) {
          void 0 === n && (n = vt());
          var r = t.call(this, e) || this;
          return (r._fetch = n), r;
        }
        return (
          Object(c.b)(e, t),
          (e.prototype.sendEvent = function (t) {
            return this._sendRequest(pt(t, this._api), t);
          }),
          (e.prototype.sendSession = function (t) {
            return this._sendRequest(lt(t, this._api), t);
          }),
          (e.prototype._sendRequest = function (t, e) {
            var n = this;
            if (this._isRateLimited(t.type))
              return (
                this.recordLostEvent(x.a.RateLimitBackoff, t.type),
                Promise.reject({
                  event: e,
                  type: t.type,
                  reason:
                    "Transport for " +
                    t.type +
                    " requests locked till " +
                    this._disabledUntil(t.type) +
                    " due to too many requests.",
                  status: 429,
                })
              );
            var r = {
              body: t.body,
              method: "POST",
              referrerPolicy: Object(z.e)() ? "origin" : "",
            };
            return (
              void 0 !== this.options.fetchParameters &&
                Object.assign(r, this.options.fetchParameters),
              void 0 !== this.options.headers &&
                (r.headers = this.options.headers),
              this._buffer
                .add(function () {
                  return new D.a(function (e, i) {
                    n._fetch(t.url, r)
                      .then(function (r) {
                        var o = {
                          "x-sentry-rate-limits": r.headers.get(
                            "X-Sentry-Rate-Limits"
                          ),
                          "retry-after": r.headers.get("Retry-After"),
                        };
                        n._handleResponse({
                          requestType: t.type,
                          response: r,
                          headers: o,
                          resolve: e,
                          reject: i,
                        });
                      })
                      .catch(i);
                  });
                })
                .then(void 0, function (e) {
                  throw (
                    (e instanceof k
                      ? n.recordLostEvent(x.a.QueueOverflow, t.type)
                      : n.recordLostEvent(x.a.NetworkError, t.type),
                    e)
                  );
                })
            );
          }),
          e
        );
      })(bt),
      Et = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(c.b)(e, t),
          (e.prototype.sendEvent = function (t) {
            return this._sendRequest(pt(t, this._api), t);
          }),
          (e.prototype.sendSession = function (t) {
            return this._sendRequest(lt(t, this._api), t);
          }),
          (e.prototype._sendRequest = function (t, e) {
            var n = this;
            return this._isRateLimited(t.type)
              ? (this.recordLostEvent(x.a.RateLimitBackoff, t.type),
                Promise.reject({
                  event: e,
                  type: t.type,
                  reason:
                    "Transport for " +
                    t.type +
                    " requests locked till " +
                    this._disabledUntil(t.type) +
                    " due to too many requests.",
                  status: 429,
                }))
              : this._buffer
                  .add(function () {
                    return new D.a(function (e, r) {
                      var i = new XMLHttpRequest();
                      for (var o in ((i.onreadystatechange = function () {
                        if (4 === i.readyState) {
                          var o = {
                            "x-sentry-rate-limits": i.getResponseHeader(
                              "X-Sentry-Rate-Limits"
                            ),
                            "retry-after": i.getResponseHeader("Retry-After"),
                          };
                          n._handleResponse({
                            requestType: t.type,
                            response: i,
                            headers: o,
                            resolve: e,
                            reject: r,
                          });
                        }
                      }),
                      i.open("POST", t.url),
                      n.options.headers))
                        n.options.headers.hasOwnProperty(o) &&
                          i.setRequestHeader(o, n.options.headers[o]);
                      i.send(t.body);
                    });
                  })
                  .then(void 0, function (e) {
                    throw (
                      (e instanceof k
                        ? n.recordLostEvent(x.a.QueueOverflow, t.type)
                        : n.recordLostEvent(x.a.NetworkError, t.type),
                      e)
                    );
                  });
          }),
          e
        );
      })(bt),
      St = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(c.b)(e, t),
          (e.prototype.eventFromException = function (t, e) {
            return ot(this._options, t, e);
          }),
          (e.prototype.eventFromMessage = function (t, e, n) {
            return void 0 === e && (e = a.Info), at(this._options, t, e, n);
          }),
          (e.prototype._setupTransport = function () {
            if (!this._options.dsn)
              return t.prototype._setupTransport.call(this);
            var e = Object(c.a)(
              Object(c.a)({}, this._options.transportOptions),
              {
                dsn: this._options.dsn,
                tunnel: this._options.tunnel,
                sendClientReports: this._options.sendClientReports,
                _metadata: this._options._metadata,
              }
            );
            return this._options.transport
              ? new this._options.transport(e)
              : Object(z.b)()
              ? new Ot(e)
              : new Et(e);
          }),
          e
        );
      })(W),
      jt = Object(L.e)(),
      Tt = 0;
    function wt() {
      return Tt > 0;
    }
    function xt() {
      (Tt += 1),
        setTimeout(function () {
          Tt -= 1;
        });
    }
    function It(t, e, n) {
      if ((void 0 === e && (e = {}), "function" != typeof t)) return t;
      try {
        if (t.__sentry__) return t;
        if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
      } catch (e) {
        return t;
      }
      var r = function () {
        var r = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var i = r.map(function (t) {
            return It(t, e);
          });
          return t.handleEvent
            ? t.handleEvent.apply(this, i)
            : t.apply(this, i);
        } catch (t) {
          throw (
            (xt(),
            S(function (n) {
              n.addEventProcessor(function (t) {
                var n = Object(c.a)({}, t);
                return (
                  e.mechanism &&
                    (Object(L.b)(n, void 0, void 0),
                    Object(L.a)(n, e.mechanism)),
                  (n.extra = Object(c.a)(Object(c.a)({}, n.extra), {
                    arguments: r,
                  })),
                  n
                );
              }),
                p(t);
            }),
            t)
          );
        }
      };
      try {
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
      } catch (t) {}
      (t.prototype = t.prototype || {}),
        (r.prototype = t.prototype),
        Object.defineProperty(t, "__sentry_wrapped__", {
          enumerable: !1,
          value: r,
        }),
        Object.defineProperties(r, {
          __sentry__: { enumerable: !1, value: !0 },
          __sentry_original__: { enumerable: !1, value: t },
        });
      try {
        Object.getOwnPropertyDescriptor(r, "name").configurable &&
          Object.defineProperty(r, "name", {
            get: function () {
              return t.name;
            },
          });
      } catch (t) {}
      return r;
    }
    function kt(t) {
      if ((void 0 === t && (t = {}), jt.document))
        if (t.eventId)
          if (t.dsn) {
            var e = jt.document.createElement("script");
            (e.async = !0),
              (e.src = new ft(t.dsn).getReportDialogEndpoint(t)),
              t.onLoad && (e.onload = t.onLoad);
            var n = jt.document.head || jt.document.body;
            n && n.appendChild(e);
          } else N.a.error("Missing dsn option in showReportDialog call");
        else N.a.error("Missing eventId option in showReportDialog call");
    }
    var Rt,
      At = n(85),
      Ct = n(57),
      Nt = (function () {
        function t(e) {
          (this.name = t.id),
            (this._options = Object(c.a)(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              e
            ));
        }
        return (
          (t.prototype.addSentryBreadcrumb = function (t) {
            this._options.sentry &&
              Object(d.b)().addBreadcrumb(
                {
                  category:
                    "sentry." +
                    ("transaction" === t.type ? "transaction" : "event"),
                  event_id: t.event_id,
                  level: t.level,
                  message: Object(L.d)(t),
                },
                { event: t }
              );
          }),
          (t.prototype.setupOnce = function () {
            var t = this;
            this._options.console &&
              Object(At.a)({
                callback: function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  t._consoleBreadcrumb.apply(t, Object(c.e)(e));
                },
                type: "console",
              }),
              this._options.dom &&
                Object(At.a)({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    t._domBreadcrumb.apply(t, Object(c.e)(e));
                  },
                  type: "dom",
                }),
              this._options.xhr &&
                Object(At.a)({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    t._xhrBreadcrumb.apply(t, Object(c.e)(e));
                  },
                  type: "xhr",
                }),
              this._options.fetch &&
                Object(At.a)({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    t._fetchBreadcrumb.apply(t, Object(c.e)(e));
                  },
                  type: "fetch",
                }),
              this._options.history &&
                Object(At.a)({
                  callback: function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    t._historyBreadcrumb.apply(t, Object(c.e)(e));
                  },
                  type: "history",
                });
          }),
          (t.prototype._consoleBreadcrumb = function (t) {
            var e = {
              category: "console",
              data: { arguments: t.args, logger: "console" },
              level: a.fromString(t.level),
              message: Object(M.b)(t.args, " "),
            };
            if ("assert" === t.level) {
              if (!1 !== t.args[0]) return;
              (e.message =
                "Assertion failed: " +
                (Object(M.b)(t.args.slice(1), " ") || "console.assert")),
                (e.data.arguments = t.args.slice(1));
            }
            Object(d.b)().addBreadcrumb(e, { input: t.args, level: t.level });
          }),
          (t.prototype._domBreadcrumb = function (t) {
            var e,
              n =
                "object" == typeof this._options.dom
                  ? this._options.dom.serializeAttribute
                  : void 0;
            "string" == typeof n && (n = [n]);
            try {
              e = t.event.target
                ? Object(Ct.a)(t.event.target, n)
                : Object(Ct.a)(t.event, n);
            } catch (t) {
              e = "<unknown>";
            }
            0 !== e.length &&
              Object(d.b)().addBreadcrumb(
                { category: "ui." + t.name, message: e },
                { event: t.event, name: t.name, global: t.global }
              );
          }),
          (t.prototype._xhrBreadcrumb = function (t) {
            if (t.endTimestamp) {
              if (t.xhr.__sentry_own_request__) return;
              var e = t.xhr.__sentry_xhr__ || {},
                n = e.method,
                r = e.url,
                i = e.status_code,
                o = e.body;
              Object(d.b)().addBreadcrumb(
                {
                  category: "xhr",
                  data: { method: n, url: r, status_code: i },
                  type: "http",
                },
                { xhr: t.xhr, input: o }
              );
            } else;
          }),
          (t.prototype._fetchBreadcrumb = function (t) {
            t.endTimestamp &&
              ((t.fetchData.url.match(/sentry_key/) &&
                "POST" === t.fetchData.method) ||
                (t.error
                  ? Object(d.b)().addBreadcrumb(
                      {
                        category: "fetch",
                        data: t.fetchData,
                        level: a.Error,
                        type: "http",
                      },
                      { data: t.error, input: t.args }
                    )
                  : Object(d.b)().addBreadcrumb(
                      {
                        category: "fetch",
                        data: Object(c.a)(Object(c.a)({}, t.fetchData), {
                          status_code: t.response.status,
                        }),
                        type: "http",
                      },
                      { input: t.args, response: t.response }
                    )));
          }),
          (t.prototype._historyBreadcrumb = function (t) {
            var e = Object(L.e)(),
              n = t.from,
              r = t.to,
              i = Object(L.h)(e.location.href),
              o = Object(L.h)(n),
              a = Object(L.h)(r);
            o.path || (o = i),
              i.protocol === a.protocol &&
                i.host === a.host &&
                (r = a.relative),
              i.protocol === o.protocol &&
                i.host === o.host &&
                (n = o.relative),
              Object(d.b)().addBreadcrumb({
                category: "navigation",
                data: { from: n, to: r },
              });
          }),
          (t.id = "Breadcrumbs"),
          t
        );
      })(),
      Dt = (function (t) {
        function e(e) {
          void 0 === e && (e = {});
          return (
            (e._metadata = e._metadata || {}),
            (e._metadata.sdk = e._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [{ name: "npm:@sentry/browser", version: T }],
              version: T,
            }),
            t.call(this, St, e) || this
          );
        }
        return (
          Object(c.b)(e, t),
          (e.prototype.showReportDialog = function (t) {
            void 0 === t && (t = {}),
              Object(L.e)().document &&
                (this._isEnabled()
                  ? kt(
                      Object(c.a)(Object(c.a)({}, t), {
                        dsn: t.dsn || this.getDsn(),
                      })
                    )
                  : N.a.error(
                      "Trying to call showReportDialog with Sentry Client disabled"
                    ));
          }),
          (e.prototype._prepareEvent = function (e, n, r) {
            return (
              (e.platform = e.platform || "javascript"),
              t.prototype._prepareEvent.call(this, e, n, r)
            );
          }),
          (e.prototype._sendEvent = function (e) {
            var n = this.getIntegration(Nt);
            n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e);
          }),
          e
        );
      })(q),
      Lt = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function () {
            (Rt = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                var n = this.__sentry_original__ || this;
                return Rt.apply(n, t);
              });
          }),
          (t.id = "FunctionToString"),
          t
        );
      })(),
      Pt = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
      ],
      Ut = (function () {
        function t(e) {
          void 0 === e && (e = {}), (this._options = e), (this.name = t.id);
        }
        return (
          (t.prototype.setupOnce = function () {
            Object(u.b)(function (e) {
              var n = Object(d.b)();
              if (!n) return e;
              var r = n.getIntegration(t);
              if (r) {
                var i = n.getClient(),
                  o = i ? i.getOptions() : {},
                  a =
                    "function" == typeof r._mergeOptions
                      ? r._mergeOptions(o)
                      : {};
                return "function" != typeof r._shouldDropEvent
                  ? e
                  : r._shouldDropEvent(e, a)
                  ? null
                  : e;
              }
              return e;
            });
          }),
          (t.prototype._shouldDropEvent = function (t, e) {
            return this._isSentryError(t, e)
              ? (N.a.warn(
                  "Event dropped due to being internal Sentry Error.\nEvent: " +
                    Object(L.d)(t)
                ),
                !0)
              : this._isIgnoredError(t, e)
              ? (N.a.warn(
                  "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                    Object(L.d)(t)
                ),
                !0)
              : this._isDeniedUrl(t, e)
              ? (N.a.warn(
                  "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                    Object(L.d)(t) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(t)
                ),
                !0)
              : !this._isAllowedUrl(t, e) &&
                (N.a.warn(
                  "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                    Object(L.d)(t) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(t)
                ),
                !0);
          }),
          (t.prototype._isSentryError = function (t, e) {
            if (!e.ignoreInternal) return !1;
            try {
              return (
                (t &&
                  t.exception &&
                  t.exception.values &&
                  t.exception.values[0] &&
                  "SentryError" === t.exception.values[0].type) ||
                !1
              );
            } catch (t) {
              return !1;
            }
          }),
          (t.prototype._isIgnoredError = function (t, e) {
            return (
              !(!e.ignoreErrors || !e.ignoreErrors.length) &&
              this._getPossibleEventMessages(t).some(function (t) {
                return e.ignoreErrors.some(function (e) {
                  return Object(M.a)(t, e);
                });
              })
            );
          }),
          (t.prototype._isDeniedUrl = function (t, e) {
            if (!e.denyUrls || !e.denyUrls.length) return !1;
            var n = this._getEventFilterUrl(t);
            return (
              !!n &&
              e.denyUrls.some(function (t) {
                return Object(M.a)(n, t);
              })
            );
          }),
          (t.prototype._isAllowedUrl = function (t, e) {
            if (!e.allowUrls || !e.allowUrls.length) return !0;
            var n = this._getEventFilterUrl(t);
            return (
              !n ||
              e.allowUrls.some(function (t) {
                return Object(M.a)(n, t);
              })
            );
          }),
          (t.prototype._mergeOptions = function (t) {
            return (
              void 0 === t && (t = {}),
              {
                allowUrls: Object(c.e)(
                  this._options.whitelistUrls || [],
                  this._options.allowUrls || [],
                  t.whitelistUrls || [],
                  t.allowUrls || []
                ),
                denyUrls: Object(c.e)(
                  this._options.blacklistUrls || [],
                  this._options.denyUrls || [],
                  t.blacklistUrls || [],
                  t.denyUrls || []
                ),
                ignoreErrors: Object(c.e)(
                  this._options.ignoreErrors || [],
                  t.ignoreErrors || [],
                  Pt
                ),
                ignoreInternal:
                  void 0 === this._options.ignoreInternal ||
                  this._options.ignoreInternal,
              }
            );
          }),
          (t.prototype._getPossibleEventMessages = function (t) {
            if (t.message) return [t.message];
            if (t.exception)
              try {
                var e = (t.exception.values && t.exception.values[0]) || {},
                  n = e.type,
                  r = void 0 === n ? "" : n,
                  i = e.value,
                  o = void 0 === i ? "" : i;
                return ["" + o, r + ": " + o];
              } catch (e) {
                return (
                  N.a.error(
                    "Cannot extract message for event " + Object(L.d)(t)
                  ),
                  []
                );
              }
            return [];
          }),
          (t.prototype._getLastValidUrl = function (t) {
            var e, n;
            void 0 === t && (t = []);
            for (var r = t.length - 1; r >= 0; r--) {
              var i = t[r];
              if (
                "<anonymous>" !==
                  (null === (e = i) || void 0 === e ? void 0 : e.filename) &&
                "[native code]" !==
                  (null === (n = i) || void 0 === n ? void 0 : n.filename)
              )
                return i.filename || null;
            }
            return null;
          }),
          (t.prototype._getEventFilterUrl = function (t) {
            try {
              if (t.stacktrace) {
                var e = t.stacktrace.frames;
                return this._getLastValidUrl(e);
              }
              if (t.exception) {
                var n =
                  t.exception.values &&
                  t.exception.values[0].stacktrace &&
                  t.exception.values[0].stacktrace.frames;
                return this._getLastValidUrl(n);
              }
              return null;
            } catch (e) {
              return (
                N.a.error("Cannot extract url for event " + Object(L.d)(t)),
                null
              );
            }
          }),
          (t.id = "InboundFilters"),
          t
        );
      })();
    var Mt = n(44),
      Ft = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
      ],
      Bt = (function () {
        function t(e) {
          (this.name = t.id),
            (this._options = Object(c.a)(
              {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
              },
              e
            ));
        }
        return (
          (t.prototype.setupOnce = function () {
            var t = Object(L.e)();
            (this._options.setTimeout &&
              Object(U.c)(t, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval &&
              Object(U.c)(t, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame &&
              Object(U.c)(t, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest &&
              "XMLHttpRequest" in t &&
              Object(U.c)(
                XMLHttpRequest.prototype,
                "send",
                this._wrapXHR.bind(this)
              ),
            this._options.eventTarget) &&
              (Array.isArray(this._options.eventTarget)
                ? this._options.eventTarget
                : Ft
              ).forEach(this._wrapEventTarget.bind(this));
          }),
          (t.prototype._wrapTimeFunction = function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              var r = e[0];
              return (
                (e[0] = It(r, {
                  mechanism: {
                    data: { function: Object(Mt.a)(t) },
                    handled: !0,
                    type: "instrument",
                  },
                })),
                t.apply(this, e)
              );
            };
          }),
          (t.prototype._wrapRAF = function (t) {
            return function (e) {
              return t.call(
                this,
                It(e, {
                  mechanism: {
                    data: {
                      function: "requestAnimationFrame",
                      handler: Object(Mt.a)(t),
                    },
                    handled: !0,
                    type: "instrument",
                  },
                })
              );
            };
          }),
          (t.prototype._wrapEventTarget = function (t) {
            var e = Object(L.e)(),
              n = e[t] && e[t].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (Object(U.c)(n, "addEventListener", function (e) {
                return function (n, r, i) {
                  try {
                    "function" == typeof r.handleEvent &&
                      (r.handleEvent = It(r.handleEvent.bind(r), {
                        mechanism: {
                          data: {
                            function: "handleEvent",
                            handler: Object(Mt.a)(r),
                            target: t,
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      }));
                  } catch (t) {}
                  return e.call(
                    this,
                    n,
                    It(r, {
                      mechanism: {
                        data: {
                          function: "addEventListener",
                          handler: Object(Mt.a)(r),
                          target: t,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }),
                    i
                  );
                };
              }),
              Object(U.c)(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  var i,
                    o = n;
                  try {
                    var a =
                      null === (i = o) || void 0 === i
                        ? void 0
                        : i.__sentry_wrapped__;
                    a && t.call(this, e, a, r);
                  } catch (t) {}
                  return t.call(this, e, o, r);
                };
              }));
          }),
          (t.prototype._wrapXHR = function (t) {
            return function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              var r = this,
                i = ["onload", "onerror", "onprogress", "onreadystatechange"];
              return (
                i.forEach(function (t) {
                  t in r &&
                    "function" == typeof r[t] &&
                    Object(U.c)(r, t, function (e) {
                      var n = {
                        mechanism: {
                          data: { function: t, handler: Object(Mt.a)(e) },
                          handled: !0,
                          type: "instrument",
                        },
                      };
                      return (
                        e.__sentry_original__ &&
                          (n.mechanism.data.handler = Object(Mt.a)(
                            e.__sentry_original__
                          )),
                        It(e, n)
                      );
                    });
                }),
                t.apply(this, e)
              );
            };
          }),
          (t.id = "TryCatch"),
          t
        );
      })(),
      Gt = (function () {
        function t(e) {
          (this.name = t.id),
            (this._onErrorHandlerInstalled = !1),
            (this._onUnhandledRejectionHandlerInstalled = !1),
            (this._options = Object(c.a)(
              { onerror: !0, onunhandledrejection: !0 },
              e
            ));
        }
        return (
          (t.prototype.setupOnce = function () {
            (Error.stackTraceLimit = 50),
              this._options.onerror &&
                (N.a.log("Global Handler attached: onerror"),
                this._installGlobalOnErrorHandler()),
              this._options.onunhandledrejection &&
                (N.a.log("Global Handler attached: onunhandledrejection"),
                this._installGlobalOnUnhandledRejectionHandler());
          }),
          (t.prototype._installGlobalOnErrorHandler = function () {
            var e = this;
            this._onErrorHandlerInstalled ||
              (Object(At.a)({
                callback: function (n) {
                  var r = n.error,
                    i = Object(d.b)(),
                    o = i.getIntegration(t),
                    a = r && !0 === r.__sentry_own_request__;
                  if (o && !wt() && !a) {
                    var s = i.getClient(),
                      c =
                        void 0 === r && Object(C.k)(n.msg)
                          ? e._eventFromIncompleteOnError(
                              n.msg,
                              n.url,
                              n.line,
                              n.column
                            )
                          : e._enhanceEventWithInitialFrame(
                              st(r || n.msg, void 0, {
                                attachStacktrace:
                                  s && s.getOptions().attachStacktrace,
                                rejection: !1,
                              }),
                              n.url,
                              n.line,
                              n.column
                            );
                    Object(L.a)(c, { handled: !1, type: "onerror" }),
                      i.captureEvent(c, { originalException: r });
                  }
                },
                type: "error",
              }),
              (this._onErrorHandlerInstalled = !0));
          }),
          (t.prototype._installGlobalOnUnhandledRejectionHandler = function () {
            var e = this;
            this._onUnhandledRejectionHandlerInstalled ||
              (Object(At.a)({
                callback: function (n) {
                  var r = n;
                  try {
                    "reason" in n
                      ? (r = n.reason)
                      : "detail" in n &&
                        "reason" in n.detail &&
                        (r = n.detail.reason);
                  } catch (t) {}
                  var i = Object(d.b)(),
                    o = i.getIntegration(t),
                    s = r && !0 === r.__sentry_own_request__;
                  if (!o || wt() || s) return !0;
                  var c = i.getClient(),
                    u = Object(C.i)(r)
                      ? e._eventFromRejectionWithPrimitive(r)
                      : st(r, void 0, {
                          attachStacktrace:
                            c && c.getOptions().attachStacktrace,
                          rejection: !0,
                        });
                  (u.level = a.Error),
                    Object(L.a)(u, {
                      handled: !1,
                      type: "onunhandledrejection",
                    }),
                    i.captureEvent(u, { originalException: r });
                },
                type: "unhandledrejection",
              }),
              (this._onUnhandledRejectionHandlerInstalled = !0));
          }),
          (t.prototype._eventFromIncompleteOnError = function (t, e, n, r) {
            var i,
              o = Object(C.e)(t) ? t.message : t,
              a = o.match(
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
              );
            a && ((i = a[1]), (o = a[2]));
            var s = {
              exception: { values: [{ type: i || "Error", value: o }] },
            };
            return this._enhanceEventWithInitialFrame(s, e, n, r);
          }),
          (t.prototype._eventFromRejectionWithPrimitive = function (t) {
            return {
              exception: {
                values: [
                  {
                    type: "UnhandledRejection",
                    value:
                      "Non-Error promise rejection captured with value: " +
                      String(t),
                  },
                ],
              },
            };
          }),
          (t.prototype._enhanceEventWithInitialFrame = function (t, e, n, r) {
            (t.exception = t.exception || {}),
              (t.exception.values = t.exception.values || []),
              (t.exception.values[0] = t.exception.values[0] || {}),
              (t.exception.values[0].stacktrace =
                t.exception.values[0].stacktrace || {}),
              (t.exception.values[0].stacktrace.frames =
                t.exception.values[0].stacktrace.frames || []);
            var i = isNaN(parseInt(r, 10)) ? void 0 : r,
              o = isNaN(parseInt(n, 10)) ? void 0 : n,
              a = Object(C.k)(e) && e.length > 0 ? e : Object(L.f)();
            return (
              0 === t.exception.values[0].stacktrace.frames.length &&
                t.exception.values[0].stacktrace.frames.push({
                  colno: i,
                  filename: a,
                  function: "?",
                  in_app: !0,
                  lineno: o,
                }),
              t
            );
          }),
          (t.id = "GlobalHandlers"),
          t
        );
      })(),
      qt = (function () {
        function t(e) {
          void 0 === e && (e = {}),
            (this.name = t.id),
            (this._key = e.key || "cause"),
            (this._limit = e.limit || 5);
        }
        return (
          (t.prototype.setupOnce = function () {
            Object(u.b)(function (e, n) {
              var r = Object(d.b)().getIntegration(t);
              if (r) {
                var i = r._handler && r._handler.bind(r);
                return "function" == typeof i ? i(e, n) : e;
              }
              return e;
            });
          }),
          (t.prototype._handler = function (t, e) {
            if (
              !(
                t.exception &&
                t.exception.values &&
                e &&
                Object(C.g)(e.originalException, Error)
              )
            )
              return t;
            var n = this._walkErrorTree(e.originalException, this._key);
            return (t.exception.values = Object(c.e)(n, t.exception.values)), t;
          }),
          (t.prototype._walkErrorTree = function (t, e, n) {
            if (
              (void 0 === n && (n = []),
              !Object(C.g)(t[e], Error) || n.length + 1 >= this._limit)
            )
              return n;
            var r = nt(Z(t[e]));
            return this._walkErrorTree(t[e], e, Object(c.e)([r], n));
          }),
          (t.id = "LinkedErrors"),
          t
        );
      })(),
      Ht = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function (e, n) {
            e(function (e) {
              var r = n().getIntegration(t);
              if (r) {
                try {
                  if (r._shouldDropEvent(e, r._previousEvent))
                    return (
                      N.a.warn(
                        "Event dropped due to being a duplicate of previously captured event."
                      ),
                      null
                    );
                } catch (t) {
                  return (r._previousEvent = e);
                }
                return (r._previousEvent = e);
              }
              return e;
            });
          }),
          (t.prototype._shouldDropEvent = function (t, e) {
            return (
              !!e &&
              (!!this._isSameMessageEvent(t, e) ||
                !!this._isSameExceptionEvent(t, e))
            );
          }),
          (t.prototype._isSameMessageEvent = function (t, e) {
            var n = t.message,
              r = e.message;
            return (
              !(!n && !r) &&
              !((n && !r) || (!n && r)) &&
              n === r &&
              !!this._isSameFingerprint(t, e) &&
              !!this._isSameStacktrace(t, e)
            );
          }),
          (t.prototype._getFramesFromEvent = function (t) {
            var e = t.exception;
            if (e)
              try {
                return e.values[0].stacktrace.frames;
              } catch (t) {
                return;
              }
            else if (t.stacktrace) return t.stacktrace.frames;
          }),
          (t.prototype._isSameStacktrace = function (t, e) {
            var n = this._getFramesFromEvent(t),
              r = this._getFramesFromEvent(e);
            if (!n && !r) return !0;
            if ((n && !r) || (!n && r)) return !1;
            if (((n = n), (r = r).length !== n.length)) return !1;
            for (var i = 0; i < r.length; i++) {
              var o = r[i],
                a = n[i];
              if (
                o.filename !== a.filename ||
                o.lineno !== a.lineno ||
                o.colno !== a.colno ||
                o.function !== a.function
              )
                return !1;
            }
            return !0;
          }),
          (t.prototype._getExceptionFromEvent = function (t) {
            return t.exception && t.exception.values && t.exception.values[0];
          }),
          (t.prototype._isSameExceptionEvent = function (t, e) {
            var n = this._getExceptionFromEvent(e),
              r = this._getExceptionFromEvent(t);
            return (
              !(!n || !r) &&
              n.type === r.type &&
              n.value === r.value &&
              !!this._isSameFingerprint(t, e) &&
              !!this._isSameStacktrace(t, e)
            );
          }),
          (t.prototype._isSameFingerprint = function (t, e) {
            var n = t.fingerprint,
              r = e.fingerprint;
            if (!n && !r) return !0;
            if ((n && !r) || (!n && r)) return !1;
            (n = n), (r = r);
            try {
              return !(n.join("") !== r.join(""));
            } catch (t) {
              return !1;
            }
          }),
          (t.id = "Dedupe"),
          t
        );
      })(),
      Wt = Object(L.e)(),
      zt = (function () {
        function t() {
          this.name = t.id;
        }
        return (
          (t.prototype.setupOnce = function () {
            Object(u.b)(function (e) {
              var n, r, i;
              if (Object(d.b)().getIntegration(t)) {
                if (!Wt.navigator && !Wt.location && !Wt.document) return e;
                var o =
                    (null === (n = e.request) || void 0 === n
                      ? void 0
                      : n.url) ||
                    (null === (r = Wt.location) || void 0 === r
                      ? void 0
                      : r.href),
                  a = (Wt.document || {}).referrer,
                  s = (Wt.navigator || {}).userAgent,
                  u = Object(c.a)(
                    Object(c.a)(
                      Object(c.a)(
                        {},
                        null === (i = e.request) || void 0 === i
                          ? void 0
                          : i.headers
                      ),
                      a && { Referer: a }
                    ),
                    s && { "User-Agent": s }
                  ),
                  l = Object(c.a)(Object(c.a)({}, o && { url: o }), {
                    headers: u,
                  });
                return Object(c.a)(Object(c.a)({}, e), { request: l });
              }
              return e;
            });
          }),
          (t.id = "UserAgent"),
          t
        );
      })(),
      Yt = [
        new r.InboundFilters(),
        new r.FunctionToString(),
        new Bt(),
        new Nt(),
        new Gt(),
        new qt(),
        new Ht(),
        new zt(),
      ];
    function Kt(t) {
      if (
        (void 0 === t && (t = {}),
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = Yt),
        void 0 === t.release)
      ) {
        var e = Object(L.e)();
        e.SENTRY_RELEASE &&
          e.SENTRY_RELEASE.id &&
          (t.release = e.SENTRY_RELEASE.id);
      }
      void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        void 0 === t.sendClientReports && (t.sendClientReports = !0),
        (function (t, e) {
          var n;
          !0 === e.debug && N.a.enable();
          var r = Object(d.b)();
          null === (n = r.getScope()) ||
            void 0 === n ||
            n.update(e.initialScope);
          var i = new t(e);
          r.bindClient(i);
        })(Dt, t),
        t.autoSessionTracking &&
          (function () {
            if (void 0 === Object(L.e)().document)
              return void N.a.warn(
                "Session tracking in non-browser environment with @sentry/browser is not supported."
              );
            var t = Object(d.b)();
            if (
              "function" != typeof t.startSession ||
              "function" != typeof t.captureSession
            )
              return;
            t.startSession({ ignoreDuration: !0 }),
              t.captureSession(),
              Object(At.a)({
                callback: function (e) {
                  var n = e.from,
                    r = e.to;
                  void 0 !== n &&
                    n !== r &&
                    (t.startSession({ ignoreDuration: !0 }),
                    t.captureSession());
                },
                type: "history",
              });
          })();
    }
    function Xt(t) {
      void 0 === t && (t = {});
      var e = Object(d.b)(),
        n = e.getScope();
      n && (t.user = Object(c.a)(Object(c.a)({}, n.getUser()), t.user)),
        t.eventId || (t.eventId = e.lastEventId());
      var r = e.getClient();
      r && r.showReportDialog(t);
    }
    function Vt() {
      return Object(d.b)().lastEventId();
    }
    function Jt() {}
    function $t(t) {
      t();
    }
    function Zt(t) {
      var e = Object(d.b)().getClient();
      return e
        ? e.flush(t)
        : (N.a.warn("Cannot flush events. No client defined."),
          D.a.resolve(!1));
    }
    function Qt(t) {
      var e = Object(d.b)().getClient();
      return e
        ? e.close(t)
        : (N.a.warn("Cannot flush events and disable SDK. No client defined."),
          D.a.resolve(!1));
    }
    function te(t) {
      return It(t)();
    }
    var ee = "sentry.javascript.browser",
      ne = {},
      re = Object(L.e)();
    re.Sentry && re.Sentry.Integrations && (ne = re.Sentry.Integrations);
    var ie = Object(c.a)(Object(c.a)(Object(c.a)({}, ne), r), i);
  },
  3: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var r = n(12),
      i = Object(r.e)(),
      o = "Sentry Logger ",
      a = (function () {
        function t() {
          this._enabled = !1;
        }
        return (
          (t.prototype.disable = function () {
            this._enabled = !1;
          }),
          (t.prototype.enable = function () {
            this._enabled = !0;
          }),
          (t.prototype.log = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._enabled &&
              Object(r.c)(function () {
                i.console.log(o + "[Log]: " + t.join(" "));
              });
          }),
          (t.prototype.warn = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._enabled &&
              Object(r.c)(function () {
                i.console.warn(o + "[Warn]: " + t.join(" "));
              });
          }),
          (t.prototype.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._enabled &&
              Object(r.c)(function () {
                i.console.error(o + "[Error]: " + t.join(" "));
              });
          }),
          t
        );
      })();
    i.__SENTRY__ = i.__SENTRY__ || {};
    var s = i.__SENTRY__.logger || (i.__SENTRY__.logger = new a());
  },
  30: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return u;
    }),
      n.d(e, "b", function () {
        return l;
      });
    var r = n(0),
      i = n(32),
      o = n(3),
      a = n(27),
      s = n(11),
      c = n(31),
      u = 1e3,
      d = (function (t) {
        function e(e, n, r, i) {
          void 0 === r && (r = "");
          var o = t.call(this, i) || this;
          return (
            (o._pushActivity = e),
            (o._popActivity = n),
            (o.transactionSpanId = r),
            o
          );
        }
        return (
          Object(r.b)(e, t),
          (e.prototype.add = function (e) {
            var n = this;
            e.spanId !== this.transactionSpanId &&
              ((e.finish = function (t) {
                (e.endTimestamp = "number" == typeof t ? t : Object(i.d)()),
                  n._popActivity(e.spanId);
              }),
              void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
              t.prototype.add.call(this, e);
          }),
          e
        );
      })(a.b),
      l = (function (t) {
        function e(e, n, r, i) {
          void 0 === r && (r = u), void 0 === i && (i = !1);
          var a = t.call(this, e, n) || this;
          return (
            (a._idleHub = n),
            (a._idleTimeout = r),
            (a._onScope = i),
            (a.activities = {}),
            (a._heartbeatCounter = 0),
            (a._finished = !1),
            (a._beforeFinishCallbacks = []),
            n &&
              i &&
              (p(n),
              o.a.log(
                "Setting idle transaction on scope. Span ID: " + a.spanId
              ),
              n.configureScope(function (t) {
                return t.setSpan(a);
              })),
            (a._initTimeout = setTimeout(function () {
              a._finished || a.finish();
            }, a._idleTimeout)),
            a
          );
        }
        return (
          Object(r.b)(e, t),
          (e.prototype.finish = function (e) {
            var n,
              a,
              c = this;
            if (
              (void 0 === e && (e = Object(i.d)()),
              (this._finished = !0),
              (this.activities = {}),
              this.spanRecorder)
            ) {
              o.a.log(
                "[Tracing] finishing IdleTransaction",
                new Date(1e3 * e).toISOString(),
                this.op
              );
              try {
                for (
                  var u = Object(r.f)(this._beforeFinishCallbacks),
                    d = u.next();
                  !d.done;
                  d = u.next()
                ) {
                  (0, d.value)(this, e);
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  d && !d.done && (a = u.return) && a.call(u);
                } finally {
                  if (n) throw n.error;
                }
              }
              (this.spanRecorder.spans = this.spanRecorder.spans.filter(
                function (t) {
                  if (t.spanId === c.spanId) return !0;
                  t.endTimestamp ||
                    ((t.endTimestamp = e),
                    t.setStatus(s.a.Cancelled),
                    o.a.log(
                      "[Tracing] cancelling span since transaction ended early",
                      JSON.stringify(t, void 0, 2)
                    ));
                  var n = t.startTimestamp < e;
                  return (
                    n ||
                      o.a.log(
                        "[Tracing] discarding Span since it happened after Transaction was finished",
                        JSON.stringify(t, void 0, 2)
                      ),
                    n
                  );
                }
              )),
                o.a.log("[Tracing] flushing IdleTransaction");
            } else o.a.log("[Tracing] No active IdleTransaction");
            return (
              this._onScope && p(this._idleHub),
              t.prototype.finish.call(this, e)
            );
          }),
          (e.prototype.registerBeforeFinishCallback = function (t) {
            this._beforeFinishCallbacks.push(t);
          }),
          (e.prototype.initSpanRecorder = function (t) {
            var e = this;
            if (!this.spanRecorder) {
              (this.spanRecorder = new d(
                function (t) {
                  e._finished || e._pushActivity(t);
                },
                function (t) {
                  e._finished || e._popActivity(t);
                },
                this.spanId,
                t
              )),
                o.a.log("Starting heartbeat"),
                this._pingHeartbeat();
            }
            this.spanRecorder.add(this);
          }),
          (e.prototype._pushActivity = function (t) {
            this._initTimeout &&
              (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
              o.a.log("[Tracing] pushActivity: " + t),
              (this.activities[t] = !0),
              o.a.log(
                "[Tracing] new activities count",
                Object.keys(this.activities).length
              );
          }),
          (e.prototype._popActivity = function (t) {
            var e = this;
            if (
              (this.activities[t] &&
                (o.a.log("[Tracing] popActivity " + t),
                delete this.activities[t],
                o.a.log(
                  "[Tracing] new activities count",
                  Object.keys(this.activities).length
                )),
              0 === Object.keys(this.activities).length)
            ) {
              var n = this._idleTimeout,
                r = Object(i.d)() + n / 1e3;
              setTimeout(function () {
                e._finished || e.finish(r);
              }, n);
            }
          }),
          (e.prototype._beat = function () {
            if (!this._finished) {
              var t = Object.keys(this.activities).join("");
              t === this._prevHeartbeatString
                ? (this._heartbeatCounter += 1)
                : (this._heartbeatCounter = 1),
                (this._prevHeartbeatString = t),
                this._heartbeatCounter >= 3
                  ? (o.a.log(
                      "[Tracing] Transaction finished because of no change for 3 heart beats"
                    ),
                    this.setStatus(s.a.DeadlineExceeded),
                    this.setTag("heartbeat", "failed"),
                    this.finish())
                  : this._pingHeartbeat();
            }
          }),
          (e.prototype._pingHeartbeat = function () {
            var t = this;
            o.a.log(
              "pinging Heartbeat -> current counter: " + this._heartbeatCounter
            ),
              setTimeout(function () {
                t._beat();
              }, 5e3);
          }),
          e
        );
      })(c.a);
    function p(t) {
      if (t) {
        var e = t.getScope();
        if (e) e.getTransaction() && e.setSpan(void 0);
      }
    }
  },
  31: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    var r = n(0),
      i = n(33),
      o = n(182),
      a = n(4),
      s = n(3),
      c = n(13),
      u = n(27),
      d = (function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          return (
            (r._measurements = {}),
            (r._hub = Object(i.b)()),
            Object(a.g)(n, i.a) && (r._hub = n),
            (r.name = e.name || ""),
            (r.metadata = e.metadata || {}),
            (r._trimEnd = e.trimEnd),
            (r.transaction = r),
            r
          );
        }
        return (
          Object(r.b)(e, t),
          (e.prototype.setName = function (t) {
            this.name = t;
          }),
          (e.prototype.initSpanRecorder = function (t) {
            void 0 === t && (t = 1e3),
              this.spanRecorder || (this.spanRecorder = new u.b(t)),
              this.spanRecorder.add(this);
          }),
          (e.prototype.setMeasurements = function (t) {
            this._measurements = Object(r.a)({}, t);
          }),
          (e.prototype.setMetadata = function (t) {
            this.metadata = Object(r.a)(Object(r.a)({}, this.metadata), t);
          }),
          (e.prototype.finish = function (e) {
            var n,
              r,
              i,
              a,
              c,
              u = this;
            if (void 0 === this.endTimestamp) {
              if (
                (this.name ||
                  (s.a.warn(
                    "Transaction has no name, falling back to `<unlabeled transaction>`."
                  ),
                  (this.name = "<unlabeled transaction>")),
                t.prototype.finish.call(this, e),
                !0 !== this.sampled)
              )
                return (
                  s.a.log(
                    "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
                  ),
                  void (
                    null ===
                      (c =
                        null ===
                          (i =
                            null === (n = this._hub.getClient()) || void 0 === n
                              ? void 0
                              : (r = n).getTransport) || void 0 === i
                          ? void 0
                          : (a = i.call(r)).recordLostEvent) ||
                    void 0 === c ||
                    c.call(a, o.a.SampleRate, "transaction")
                  )
                );
              var d = this.spanRecorder
                ? this.spanRecorder.spans.filter(function (t) {
                    return t !== u && t.endTimestamp;
                  })
                : [];
              this._trimEnd &&
                d.length > 0 &&
                (this.endTimestamp = d.reduce(function (t, e) {
                  return t.endTimestamp && e.endTimestamp
                    ? t.endTimestamp > e.endTimestamp
                      ? t
                      : e
                    : t;
                }).endTimestamp);
              var l = {
                contexts: { trace: this.getTraceContext() },
                spans: d,
                start_timestamp: this.startTimestamp,
                tags: this.tags,
                timestamp: this.endTimestamp,
                transaction: this.name,
                type: "transaction",
                debug_meta: this.metadata,
              };
              return (
                Object.keys(this._measurements).length > 0 &&
                  (s.a.log(
                    "[Measurements] Adding measurements to transaction",
                    JSON.stringify(this._measurements, void 0, 2)
                  ),
                  (l.measurements = this._measurements)),
                s.a.log(
                  "[Tracing] Finishing " +
                    this.op +
                    " transaction: " +
                    this.name +
                    "."
                ),
                this._hub.captureEvent(l)
              );
            }
          }),
          (e.prototype.toContext = function () {
            var e = t.prototype.toContext.call(this);
            return Object(c.a)(
              Object(r.a)(Object(r.a)({}, e), {
                name: this.name,
                trimEnd: this._trimEnd,
              })
            );
          }),
          (e.prototype.updateWithContext = function (e) {
            var n;
            return (
              t.prototype.updateWithContext.call(this, e),
              (this.name = null != (n = e.name) ? n : ""),
              (this._trimEnd = e.trimEnd),
              this
            );
          }),
          e
        );
      })(u.a);
  },
  32: function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "c", function () {
          return u;
        }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(12),
        i = n(19),
        o = {
          nowSeconds: function () {
            return Date.now() / 1e3;
          },
        };
      var a = Object(i.b)()
          ? (function () {
              try {
                return Object(i.a)(t, "perf_hooks").performance;
              } catch (t) {
                return;
              }
            })()
          : (function () {
              var t = Object(r.e)().performance;
              if (t && t.now)
                return {
                  now: function () {
                    return t.now();
                  },
                  timeOrigin: Date.now() - t.now(),
                };
            })(),
        s =
          void 0 === a
            ? o
            : {
                nowSeconds: function () {
                  return (a.timeOrigin + a.now()) / 1e3;
                },
              },
        c = o.nowSeconds.bind(o),
        u = s.nowSeconds.bind(s),
        d = u,
        l = (function () {
          var t = Object(r.e)().performance;
          if (t && t.now) {
            var e = t.now(),
              n = Date.now(),
              i = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
              o = i < 36e5,
              a = t.timing && t.timing.navigationStart,
              s = "number" == typeof a ? Math.abs(a + e - n) : 36e5;
            return o || s < 36e5
              ? i <= s
                ? ("timeOrigin", t.timeOrigin)
                : ("navigationStart", a)
              : ("dateNow", n);
          }
          ("none");
        })();
    }.call(this, n(50)(t)));
  },
  33: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return p;
    }),
      n.d(e, "d", function () {
        return f;
      }),
      n.d(e, "e", function () {
        return h;
      }),
      n.d(e, "b", function () {
        return _;
      }),
      n.d(e, "c", function () {
        return v;
      });
    var r = n(0),
      i = n(239),
      o = n(12),
      a = n(32),
      s = n(3),
      c = n(19),
      u = n(45),
      d = n(13),
      l = (function () {
        function t(t) {
          (this.errors = 0),
            (this.sid = Object(o.j)()),
            (this.duration = 0),
            (this.status = i.a.Ok),
            (this.init = !0),
            (this.ignoreDuration = !1);
          var e = Object(a.c)();
          (this.timestamp = e), (this.started = e), t && this.update(t);
        }
        return (
          (t.prototype.update = function (t) {
            if (
              (void 0 === t && (t = {}),
              t.user &&
                (!this.ipAddress &&
                  t.user.ip_address &&
                  (this.ipAddress = t.user.ip_address),
                this.did ||
                  t.did ||
                  (this.did = t.user.id || t.user.email || t.user.username)),
              (this.timestamp = t.timestamp || Object(a.c)()),
              t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
              t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(o.j)()),
              void 0 !== t.init && (this.init = t.init),
              !this.did && t.did && (this.did = "" + t.did),
              "number" == typeof t.started && (this.started = t.started),
              this.ignoreDuration)
            )
              this.duration = void 0;
            else if ("number" == typeof t.duration) this.duration = t.duration;
            else {
              var e = this.timestamp - this.started;
              this.duration = e >= 0 ? e : 0;
            }
            t.release && (this.release = t.release),
              t.environment && (this.environment = t.environment),
              !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
              !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
              "number" == typeof t.errors && (this.errors = t.errors),
              t.status && (this.status = t.status);
          }),
          (t.prototype.close = function (t) {
            t
              ? this.update({ status: t })
              : this.status === i.a.Ok
              ? this.update({ status: i.a.Exited })
              : this.update();
          }),
          (t.prototype.toJSON = function () {
            return Object(d.a)({
              sid: "" + this.sid,
              init: this.init,
              started: new Date(1e3 * this.started).toISOString(),
              timestamp: new Date(1e3 * this.timestamp).toISOString(),
              status: this.status,
              errors: this.errors,
              did:
                "number" == typeof this.did || "string" == typeof this.did
                  ? "" + this.did
                  : void 0,
              duration: this.duration,
              attrs: Object(d.a)({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
              }),
            });
          }),
          t
        );
      })(),
      p = (function () {
        function t(t, e, n) {
          void 0 === e && (e = new u.a()),
            void 0 === n && (n = 4),
            (this._version = n),
            (this._stack = [{}]),
            (this.getStackTop().scope = e),
            t && this.bindClient(t);
        }
        return (
          (t.prototype.isOlderThan = function (t) {
            return this._version < t;
          }),
          (t.prototype.bindClient = function (t) {
            (this.getStackTop().client = t),
              t && t.setupIntegrations && t.setupIntegrations();
          }),
          (t.prototype.pushScope = function () {
            var t = u.a.clone(this.getScope());
            return (
              this.getStack().push({ client: this.getClient(), scope: t }), t
            );
          }),
          (t.prototype.popScope = function () {
            return !(this.getStack().length <= 1) && !!this.getStack().pop();
          }),
          (t.prototype.withScope = function (t) {
            var e = this.pushScope();
            try {
              t(e);
            } finally {
              this.popScope();
            }
          }),
          (t.prototype.getClient = function () {
            return this.getStackTop().client;
          }),
          (t.prototype.getScope = function () {
            return this.getStackTop().scope;
          }),
          (t.prototype.getStack = function () {
            return this._stack;
          }),
          (t.prototype.getStackTop = function () {
            return this._stack[this._stack.length - 1];
          }),
          (t.prototype.captureException = function (t, e) {
            var n = (this._lastEventId = Object(o.j)()),
              i = e;
            if (!e) {
              var a = void 0;
              try {
                throw new Error("Sentry syntheticException");
              } catch (t) {
                a = t;
              }
              i = { originalException: t, syntheticException: a };
            }
            return (
              this._invokeClient(
                "captureException",
                t,
                Object(r.a)(Object(r.a)({}, i), { event_id: n })
              ),
              n
            );
          }),
          (t.prototype.captureMessage = function (t, e, n) {
            var i = (this._lastEventId = Object(o.j)()),
              a = n;
            if (!n) {
              var s = void 0;
              try {
                throw new Error(t);
              } catch (t) {
                s = t;
              }
              a = { originalException: t, syntheticException: s };
            }
            return (
              this._invokeClient(
                "captureMessage",
                t,
                e,
                Object(r.a)(Object(r.a)({}, a), { event_id: i })
              ),
              i
            );
          }),
          (t.prototype.captureEvent = function (t, e) {
            var n = Object(o.j)();
            return (
              "transaction" !== t.type && (this._lastEventId = n),
              this._invokeClient(
                "captureEvent",
                t,
                Object(r.a)(Object(r.a)({}, e), { event_id: n })
              ),
              n
            );
          }),
          (t.prototype.lastEventId = function () {
            return this._lastEventId;
          }),
          (t.prototype.addBreadcrumb = function (t, e) {
            var n = this.getStackTop(),
              i = n.scope,
              s = n.client;
            if (i && s) {
              var c = (s.getOptions && s.getOptions()) || {},
                u = c.beforeBreadcrumb,
                d = void 0 === u ? null : u,
                l = c.maxBreadcrumbs,
                p = void 0 === l ? 100 : l;
              if (!(p <= 0)) {
                var f = Object(a.b)(),
                  h = Object(r.a)({ timestamp: f }, t),
                  _ = d
                    ? Object(o.c)(function () {
                        return d(h, e);
                      })
                    : h;
                null !== _ && i.addBreadcrumb(_, p);
              }
            }
          }),
          (t.prototype.setUser = function (t) {
            var e = this.getScope();
            e && e.setUser(t);
          }),
          (t.prototype.setTags = function (t) {
            var e = this.getScope();
            e && e.setTags(t);
          }),
          (t.prototype.setExtras = function (t) {
            var e = this.getScope();
            e && e.setExtras(t);
          }),
          (t.prototype.setTag = function (t, e) {
            var n = this.getScope();
            n && n.setTag(t, e);
          }),
          (t.prototype.setExtra = function (t, e) {
            var n = this.getScope();
            n && n.setExtra(t, e);
          }),
          (t.prototype.setContext = function (t, e) {
            var n = this.getScope();
            n && n.setContext(t, e);
          }),
          (t.prototype.configureScope = function (t) {
            var e = this.getStackTop(),
              n = e.scope,
              r = e.client;
            n && r && t(n);
          }),
          (t.prototype.run = function (t) {
            var e = h(this);
            try {
              t(this);
            } finally {
              h(e);
            }
          }),
          (t.prototype.getIntegration = function (t) {
            var e = this.getClient();
            if (!e) return null;
            try {
              return e.getIntegration(t);
            } catch (e) {
              return (
                s.a.warn(
                  "Cannot retrieve integration " +
                    t.id +
                    " from the current Hub"
                ),
                null
              );
            }
          }),
          (t.prototype.startSpan = function (t) {
            return this._callExtensionMethod("startSpan", t);
          }),
          (t.prototype.startTransaction = function (t, e) {
            return this._callExtensionMethod("startTransaction", t, e);
          }),
          (t.prototype.traceHeaders = function () {
            return this._callExtensionMethod("traceHeaders");
          }),
          (t.prototype.captureSession = function (t) {
            if ((void 0 === t && (t = !1), t)) return this.endSession();
            this._sendSessionUpdate();
          }),
          (t.prototype.endSession = function () {
            var t, e, n, r, i;
            null ===
              (n =
                null ===
                  (e =
                    null === (t = this.getStackTop()) || void 0 === t
                      ? void 0
                      : t.scope) || void 0 === e
                  ? void 0
                  : e.getSession()) ||
              void 0 === n ||
              n.close(),
              this._sendSessionUpdate(),
              null ===
                (i =
                  null === (r = this.getStackTop()) || void 0 === r
                    ? void 0
                    : r.scope) ||
                void 0 === i ||
                i.setSession();
          }),
          (t.prototype.startSession = function (t) {
            var e = this.getStackTop(),
              n = e.scope,
              a = e.client,
              s = (a && a.getOptions()) || {},
              c = s.release,
              u = s.environment,
              d = (Object(o.e)().navigator || {}).userAgent,
              p = new l(
                Object(r.a)(
                  Object(r.a)(
                    Object(r.a)(
                      { release: c, environment: u },
                      n && { user: n.getUser() }
                    ),
                    d && { userAgent: d }
                  ),
                  t
                )
              );
            if (n) {
              var f = n.getSession && n.getSession();
              f && f.status === i.a.Ok && f.update({ status: i.a.Exited }),
                this.endSession(),
                n.setSession(p);
            }
            return p;
          }),
          (t.prototype._sendSessionUpdate = function () {
            var t = this.getStackTop(),
              e = t.scope,
              n = t.client;
            if (e) {
              var r = e.getSession && e.getSession();
              r && n && n.captureSession && n.captureSession(r);
            }
          }),
          (t.prototype._invokeClient = function (t) {
            for (var e, n = [], i = 1; i < arguments.length; i++)
              n[i - 1] = arguments[i];
            var o = this.getStackTop(),
              a = o.scope,
              s = o.client;
            s && s[t] && (e = s)[t].apply(e, Object(r.e)(n, [a]));
          }),
          (t.prototype._callExtensionMethod = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            var r = f(),
              i = r.__SENTRY__;
            if (i && i.extensions && "function" == typeof i.extensions[t])
              return i.extensions[t].apply(this, e);
            s.a.warn(
              "Extension method " + t + " couldn't be found, doing nothing."
            );
          }),
          t
        );
      })();
    function f() {
      var t = Object(o.e)();
      return (
        (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t
      );
    }
    function h(t) {
      var e = f(),
        n = v(e);
      return g(e, t), n;
    }
    function _() {
      var t = f();
      return (
        (m(t) && !v(t).isOlderThan(4)) || g(t, new p()),
        Object(c.b)()
          ? (function (t) {
              var e, n, r;
              try {
                var i =
                  null ===
                    (r =
                      null ===
                        (n =
                          null === (e = f().__SENTRY__) || void 0 === e
                            ? void 0
                            : e.extensions) || void 0 === n
                        ? void 0
                        : n.domain) || void 0 === r
                    ? void 0
                    : r.active;
                if (!i) return v(t);
                if (!m(i) || v(i).isOlderThan(4)) {
                  var o = v(t).getStackTop();
                  g(i, new p(o.client, u.a.clone(o.scope)));
                }
                return v(i);
              } catch (e) {
                return v(t);
              }
            })(t)
          : v(t)
      );
    }
    function m(t) {
      return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
    }
    function v(t) {
      return (
        (t && t.__SENTRY__ && t.__SENTRY__.hub) ||
          ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = new p())),
        t.__SENTRY__.hub
      );
    }
    function g(t, e) {
      return (
        !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0)
      );
    }
  },
  37: function (t, e, n) {
    var r,
      i = (function () {
        var t = String.fromCharCode,
          e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          n =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
          r = {};
        function i(t, e) {
          if (!r[t]) {
            r[t] = {};
            for (var n = 0; n < t.length; n++) r[t][t.charAt(n)] = n;
          }
          return r[t][e];
        }
        var o = {
          compressToBase64: function (t) {
            if (null == t) return "";
            var n = o._compress(t, 6, function (t) {
              return e.charAt(t);
            });
            switch (n.length % 4) {
              default:
              case 0:
                return n;
              case 1:
                return n + "===";
              case 2:
                return n + "==";
              case 3:
                return n + "=";
            }
          },
          decompressFromBase64: function (t) {
            return null == t
              ? ""
              : "" == t
              ? null
              : o._decompress(t.length, 32, function (n) {
                  return i(e, t.charAt(n));
                });
          },
          compressToUTF16: function (e) {
            return null == e
              ? ""
              : o._compress(e, 15, function (e) {
                  return t(e + 32);
                }) + " ";
          },
          decompressFromUTF16: function (t) {
            return null == t
              ? ""
              : "" == t
              ? null
              : o._decompress(t.length, 16384, function (e) {
                  return t.charCodeAt(e) - 32;
                });
          },
          compressToUint8Array: function (t) {
            for (
              var e = o.compress(t),
                n = new Uint8Array(2 * e.length),
                r = 0,
                i = e.length;
              r < i;
              r++
            ) {
              var a = e.charCodeAt(r);
              (n[2 * r] = a >>> 8), (n[2 * r + 1] = a % 256);
            }
            return n;
          },
          decompressFromUint8Array: function (e) {
            if (null == e) return o.decompress(e);
            for (
              var n = new Array(e.length / 2), r = 0, i = n.length;
              r < i;
              r++
            )
              n[r] = 256 * e[2 * r] + e[2 * r + 1];
            var a = [];
            return (
              n.forEach(function (e) {
                a.push(t(e));
              }),
              o.decompress(a.join(""))
            );
          },
          compressToEncodedURIComponent: function (t) {
            return null == t
              ? ""
              : o._compress(t, 6, function (t) {
                  return n.charAt(t);
                });
          },
          decompressFromEncodedURIComponent: function (t) {
            return null == t
              ? ""
              : "" == t
              ? null
              : ((t = t.replace(/ /g, "+")),
                o._decompress(t.length, 32, function (e) {
                  return i(n, t.charAt(e));
                }));
          },
          compress: function (e) {
            return o._compress(e, 16, function (e) {
              return t(e);
            });
          },
          _compress: function (t, e, n) {
            if (null == t) return "";
            var r,
              i,
              o,
              a = {},
              s = {},
              c = "",
              u = "",
              d = "",
              l = 2,
              p = 3,
              f = 2,
              h = [],
              _ = 0,
              m = 0;
            for (o = 0; o < t.length; o += 1)
              if (
                ((c = t.charAt(o)),
                Object.prototype.hasOwnProperty.call(a, c) ||
                  ((a[c] = p++), (s[c] = !0)),
                (u = d + c),
                Object.prototype.hasOwnProperty.call(a, u))
              )
                d = u;
              else {
                if (Object.prototype.hasOwnProperty.call(s, d)) {
                  if (d.charCodeAt(0) < 256) {
                    for (r = 0; r < f; r++)
                      (_ <<= 1),
                        m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++;
                    for (i = d.charCodeAt(0), r = 0; r < 8; r++)
                      (_ = (_ << 1) | (1 & i)),
                        m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                        (i >>= 1);
                  } else {
                    for (i = 1, r = 0; r < f; r++)
                      (_ = (_ << 1) | i),
                        m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                        (i = 0);
                    for (i = d.charCodeAt(0), r = 0; r < 16; r++)
                      (_ = (_ << 1) | (1 & i)),
                        m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                        (i >>= 1);
                  }
                  0 == --l && ((l = Math.pow(2, f)), f++), delete s[d];
                } else
                  for (i = a[d], r = 0; r < f; r++)
                    (_ = (_ << 1) | (1 & i)),
                      m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                      (i >>= 1);
                0 == --l && ((l = Math.pow(2, f)), f++),
                  (a[u] = p++),
                  (d = String(c));
              }
            if ("" !== d) {
              if (Object.prototype.hasOwnProperty.call(s, d)) {
                if (d.charCodeAt(0) < 256) {
                  for (r = 0; r < f; r++)
                    (_ <<= 1),
                      m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++;
                  for (i = d.charCodeAt(0), r = 0; r < 8; r++)
                    (_ = (_ << 1) | (1 & i)),
                      m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                      (i >>= 1);
                } else {
                  for (i = 1, r = 0; r < f; r++)
                    (_ = (_ << 1) | i),
                      m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                      (i = 0);
                  for (i = d.charCodeAt(0), r = 0; r < 16; r++)
                    (_ = (_ << 1) | (1 & i)),
                      m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                      (i >>= 1);
                }
                0 == --l && ((l = Math.pow(2, f)), f++), delete s[d];
              } else
                for (i = a[d], r = 0; r < f; r++)
                  (_ = (_ << 1) | (1 & i)),
                    m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                    (i >>= 1);
              0 == --l && ((l = Math.pow(2, f)), f++);
            }
            for (i = 2, r = 0; r < f; r++)
              (_ = (_ << 1) | (1 & i)),
                m == e - 1 ? ((m = 0), h.push(n(_)), (_ = 0)) : m++,
                (i >>= 1);
            for (;;) {
              if (((_ <<= 1), m == e - 1)) {
                h.push(n(_));
                break;
              }
              m++;
            }
            return h.join("");
          },
          decompress: function (t) {
            return null == t
              ? ""
              : "" == t
              ? null
              : o._decompress(t.length, 32768, function (e) {
                  return t.charCodeAt(e);
                });
          },
          _decompress: function (e, n, r) {
            var i,
              o,
              a,
              s,
              c,
              u,
              d,
              l = [],
              p = 4,
              f = 4,
              h = 3,
              _ = "",
              m = [],
              v = { val: r(0), position: n, index: 1 };
            for (i = 0; i < 3; i += 1) l[i] = i;
            for (a = 0, c = Math.pow(2, 2), u = 1; u != c; )
              (s = v.val & v.position),
                (v.position >>= 1),
                0 == v.position && ((v.position = n), (v.val = r(v.index++))),
                (a |= (s > 0 ? 1 : 0) * u),
                (u <<= 1);
            switch (a) {
              case 0:
                for (a = 0, c = Math.pow(2, 8), u = 1; u != c; )
                  (s = v.val & v.position),
                    (v.position >>= 1),
                    0 == v.position &&
                      ((v.position = n), (v.val = r(v.index++))),
                    (a |= (s > 0 ? 1 : 0) * u),
                    (u <<= 1);
                d = t(a);
                break;
              case 1:
                for (a = 0, c = Math.pow(2, 16), u = 1; u != c; )
                  (s = v.val & v.position),
                    (v.position >>= 1),
                    0 == v.position &&
                      ((v.position = n), (v.val = r(v.index++))),
                    (a |= (s > 0 ? 1 : 0) * u),
                    (u <<= 1);
                d = t(a);
                break;
              case 2:
                return "";
            }
            for (l[3] = d, o = d, m.push(d); ; ) {
              if (v.index > e) return "";
              for (a = 0, c = Math.pow(2, h), u = 1; u != c; )
                (s = v.val & v.position),
                  (v.position >>= 1),
                  0 == v.position && ((v.position = n), (v.val = r(v.index++))),
                  (a |= (s > 0 ? 1 : 0) * u),
                  (u <<= 1);
              switch ((d = a)) {
                case 0:
                  for (a = 0, c = Math.pow(2, 8), u = 1; u != c; )
                    (s = v.val & v.position),
                      (v.position >>= 1),
                      0 == v.position &&
                        ((v.position = n), (v.val = r(v.index++))),
                      (a |= (s > 0 ? 1 : 0) * u),
                      (u <<= 1);
                  (l[f++] = t(a)), (d = f - 1), p--;
                  break;
                case 1:
                  for (a = 0, c = Math.pow(2, 16), u = 1; u != c; )
                    (s = v.val & v.position),
                      (v.position >>= 1),
                      0 == v.position &&
                        ((v.position = n), (v.val = r(v.index++))),
                      (a |= (s > 0 ? 1 : 0) * u),
                      (u <<= 1);
                  (l[f++] = t(a)), (d = f - 1), p--;
                  break;
                case 2:
                  return m.join("");
              }
              if ((0 == p && ((p = Math.pow(2, h)), h++), l[d])) _ = l[d];
              else {
                if (d !== f) return null;
                _ = o + o.charAt(0);
              }
              m.push(_),
                (l[f++] = o + _.charAt(0)),
                (o = _),
                0 == --p && ((p = Math.pow(2, h)), h++);
            }
          },
        };
        return o;
      })();
    void 0 ===
      (r = function () {
        return i;
      }.call(e, n, e, t)) || (t.exports = r);
  },
  38: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return o;
    });
    var r,
      i = n(4);
    !(function (t) {
      (t.PENDING = "PENDING"),
        (t.RESOLVED = "RESOLVED"),
        (t.REJECTED = "REJECTED");
    })(r || (r = {}));
    var o = (function () {
      function t(t) {
        var e = this;
        (this._state = r.PENDING),
          (this._handlers = []),
          (this._resolve = function (t) {
            e._setResult(r.RESOLVED, t);
          }),
          (this._reject = function (t) {
            e._setResult(r.REJECTED, t);
          }),
          (this._setResult = function (t, n) {
            e._state === r.PENDING &&
              (Object(i.m)(n)
                ? n.then(e._resolve, e._reject)
                : ((e._state = t), (e._value = n), e._executeHandlers()));
          }),
          (this._attachHandler = function (t) {
            (e._handlers = e._handlers.concat(t)), e._executeHandlers();
          }),
          (this._executeHandlers = function () {
            if (e._state !== r.PENDING) {
              var t = e._handlers.slice();
              (e._handlers = []),
                t.forEach(function (t) {
                  t.done ||
                    (e._state === r.RESOLVED &&
                      t.onfulfilled &&
                      t.onfulfilled(e._value),
                    e._state === r.REJECTED &&
                      t.onrejected &&
                      t.onrejected(e._value),
                    (t.done = !0));
                });
            }
          });
        try {
          t(this._resolve, this._reject);
        } catch (t) {
          this._reject(t);
        }
      }
      return (
        (t.resolve = function (e) {
          return new t(function (t) {
            t(e);
          });
        }),
        (t.reject = function (e) {
          return new t(function (t, n) {
            n(e);
          });
        }),
        (t.all = function (e) {
          return new t(function (n, r) {
            if (Array.isArray(e))
              if (0 !== e.length) {
                var i = e.length,
                  o = [];
                e.forEach(function (e, a) {
                  t.resolve(e)
                    .then(function (t) {
                      (o[a] = t), 0 === (i -= 1) && n(o);
                    })
                    .then(null, r);
                });
              } else n([]);
            else r(new TypeError("Promise.all requires an array as input."));
          });
        }),
        (t.prototype.then = function (e, n) {
          var r = this;
          return new t(function (t, i) {
            r._attachHandler({
              done: !1,
              onfulfilled: function (n) {
                if (e)
                  try {
                    return void t(e(n));
                  } catch (t) {
                    return void i(t);
                  }
                else t(n);
              },
              onrejected: function (e) {
                if (n)
                  try {
                    return void t(n(e));
                  } catch (t) {
                    return void i(t);
                  }
                else i(e);
              },
            });
          });
        }),
        (t.prototype.catch = function (t) {
          return this.then(function (t) {
            return t;
          }, t);
        }),
        (t.prototype.finally = function (e) {
          var n = this;
          return new t(function (t, r) {
            var i, o;
            return n
              .then(
                function (t) {
                  (o = !1), (i = t), e && e();
                },
                function (t) {
                  (o = !0), (i = t), e && e();
                }
              )
              .then(function () {
                o ? r(i) : t(i);
              });
          });
        }),
        (t.prototype.toString = function () {
          return "[object SyncPromise]";
        }),
        t
      );
    })();
  },
  4: function (t, e, n) {
    "use strict";
    function r(t) {
      switch (Object.prototype.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return _(t, Error);
      }
    }
    function i(t) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(t);
    }
    function o(t) {
      return "[object DOMError]" === Object.prototype.toString.call(t);
    }
    function a(t) {
      return "[object DOMException]" === Object.prototype.toString.call(t);
    }
    function s(t) {
      return "[object String]" === Object.prototype.toString.call(t);
    }
    function c(t) {
      return null === t || ("object" != typeof t && "function" != typeof t);
    }
    function u(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }
    function d(t) {
      return "undefined" != typeof Event && _(t, Event);
    }
    function l(t) {
      return "undefined" != typeof Element && _(t, Element);
    }
    function p(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    }
    function f(t) {
      return Boolean(t && t.then && "function" == typeof t.then);
    }
    function h(t) {
      return (
        u(t) &&
        "nativeEvent" in t &&
        "preventDefault" in t &&
        "stopPropagation" in t
      );
    }
    function _(t, e) {
      try {
        return t instanceof e;
      } catch (t) {
        return !1;
      }
    }
    n.d(e, "d", function () {
      return r;
    }),
      n.d(e, "e", function () {
        return i;
      }),
      n.d(e, "a", function () {
        return o;
      }),
      n.d(e, "b", function () {
        return a;
      }),
      n.d(e, "k", function () {
        return s;
      }),
      n.d(e, "i", function () {
        return c;
      }),
      n.d(e, "h", function () {
        return u;
      }),
      n.d(e, "f", function () {
        return d;
      }),
      n.d(e, "c", function () {
        return l;
      }),
      n.d(e, "j", function () {
        return p;
      }),
      n.d(e, "m", function () {
        return f;
      }),
      n.d(e, "l", function () {
        return h;
      }),
      n.d(e, "g", function () {
        return _;
      });
  },
  44: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    function r(t) {
      try {
        return (t && "function" == typeof t && t.name) || "<anonymous>";
      } catch (t) {
        return "<anonymous>";
      }
    }
  },
  45: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    }),
      n.d(e, "b", function () {
        return d;
      });
    var r = n(0),
      i = n(4),
      o = n(32),
      a = n(38),
      s = n(12),
      c = (function () {
        function t() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {});
        }
        return (
          (t.clone = function (e) {
            var n = new t();
            return (
              e &&
                ((n._breadcrumbs = Object(r.e)(e._breadcrumbs)),
                (n._tags = Object(r.a)({}, e._tags)),
                (n._extra = Object(r.a)({}, e._extra)),
                (n._contexts = Object(r.a)({}, e._contexts)),
                (n._user = e._user),
                (n._level = e._level),
                (n._span = e._span),
                (n._session = e._session),
                (n._transactionName = e._transactionName),
                (n._fingerprint = e._fingerprint),
                (n._eventProcessors = Object(r.e)(e._eventProcessors)),
                (n._requestSession = e._requestSession)),
              n
            );
          }),
          (t.prototype.addScopeListener = function (t) {
            this._scopeListeners.push(t);
          }),
          (t.prototype.addEventProcessor = function (t) {
            return this._eventProcessors.push(t), this;
          }),
          (t.prototype.setUser = function (t) {
            return (
              (this._user = t || {}),
              this._session && this._session.update({ user: t }),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.getUser = function () {
            return this._user;
          }),
          (t.prototype.getRequestSession = function () {
            return this._requestSession;
          }),
          (t.prototype.setRequestSession = function (t) {
            return (this._requestSession = t), this;
          }),
          (t.prototype.setTags = function (t) {
            return (
              (this._tags = Object(r.a)(Object(r.a)({}, this._tags), t)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setTag = function (t, e) {
            var n;
            return (
              (this._tags = Object(r.a)(
                Object(r.a)({}, this._tags),
                (((n = {})[t] = e), n)
              )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setExtras = function (t) {
            return (
              (this._extra = Object(r.a)(Object(r.a)({}, this._extra), t)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setExtra = function (t, e) {
            var n;
            return (
              (this._extra = Object(r.a)(
                Object(r.a)({}, this._extra),
                (((n = {})[t] = e), n)
              )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setFingerprint = function (t) {
            return (this._fingerprint = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.setLevel = function (t) {
            return (this._level = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.setTransactionName = function (t) {
            return (
              (this._transactionName = t), this._notifyScopeListeners(), this
            );
          }),
          (t.prototype.setTransaction = function (t) {
            return this.setTransactionName(t);
          }),
          (t.prototype.setContext = function (t, e) {
            var n;
            return (
              null === e
                ? delete this._contexts[t]
                : (this._contexts = Object(r.a)(
                    Object(r.a)({}, this._contexts),
                    (((n = {})[t] = e), n)
                  )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.setSpan = function (t) {
            return (this._span = t), this._notifyScopeListeners(), this;
          }),
          (t.prototype.getSpan = function () {
            return this._span;
          }),
          (t.prototype.getTransaction = function () {
            var t,
              e,
              n,
              r,
              i = this.getSpan();
            return (null === (t = i) || void 0 === t ? void 0 : t.transaction)
              ? null === (e = i) || void 0 === e
                ? void 0
                : e.transaction
              : (
                  null ===
                    (r =
                      null === (n = i) || void 0 === n
                        ? void 0
                        : n.spanRecorder) || void 0 === r
                    ? void 0
                    : r.spans[0]
                )
              ? i.spanRecorder.spans[0]
              : void 0;
          }),
          (t.prototype.setSession = function (t) {
            return (
              t ? (this._session = t) : delete this._session,
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.getSession = function () {
            return this._session;
          }),
          (t.prototype.update = function (e) {
            if (!e) return this;
            if ("function" == typeof e) {
              var n = e(this);
              return n instanceof t ? n : this;
            }
            return (
              e instanceof t
                ? ((this._tags = Object(r.a)(
                    Object(r.a)({}, this._tags),
                    e._tags
                  )),
                  (this._extra = Object(r.a)(
                    Object(r.a)({}, this._extra),
                    e._extra
                  )),
                  (this._contexts = Object(r.a)(
                    Object(r.a)({}, this._contexts),
                    e._contexts
                  )),
                  e._user &&
                    Object.keys(e._user).length &&
                    (this._user = e._user),
                  e._level && (this._level = e._level),
                  e._fingerprint && (this._fingerprint = e._fingerprint),
                  e._requestSession &&
                    (this._requestSession = e._requestSession))
                : Object(i.h)(e) &&
                  ((e = e),
                  (this._tags = Object(r.a)(
                    Object(r.a)({}, this._tags),
                    e.tags
                  )),
                  (this._extra = Object(r.a)(
                    Object(r.a)({}, this._extra),
                    e.extra
                  )),
                  (this._contexts = Object(r.a)(
                    Object(r.a)({}, this._contexts),
                    e.contexts
                  )),
                  e.user && (this._user = e.user),
                  e.level && (this._level = e.level),
                  e.fingerprint && (this._fingerprint = e.fingerprint),
                  e.requestSession &&
                    (this._requestSession = e.requestSession)),
              this
            );
          }),
          (t.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._requestSession = void 0),
              (this._span = void 0),
              (this._session = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.addBreadcrumb = function (t, e) {
            var n = "number" == typeof e ? Math.min(e, 100) : 100;
            if (n <= 0) return this;
            var i = Object(r.a)({ timestamp: Object(o.b)() }, t);
            return (
              (this._breadcrumbs = Object(r.e)(this._breadcrumbs, [i]).slice(
                -n
              )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (t.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (t.prototype.applyToEvent = function (t, e) {
            var n;
            if (
              (this._extra &&
                Object.keys(this._extra).length &&
                (t.extra = Object(r.a)(Object(r.a)({}, this._extra), t.extra)),
              this._tags &&
                Object.keys(this._tags).length &&
                (t.tags = Object(r.a)(Object(r.a)({}, this._tags), t.tags)),
              this._user &&
                Object.keys(this._user).length &&
                (t.user = Object(r.a)(Object(r.a)({}, this._user), t.user)),
              this._contexts &&
                Object.keys(this._contexts).length &&
                (t.contexts = Object(r.a)(
                  Object(r.a)({}, this._contexts),
                  t.contexts
                )),
              this._level && (t.level = this._level),
              this._transactionName && (t.transaction = this._transactionName),
              this._span)
            ) {
              t.contexts = Object(r.a)(
                { trace: this._span.getTraceContext() },
                t.contexts
              );
              var i =
                null === (n = this._span.transaction) || void 0 === n
                  ? void 0
                  : n.name;
              i && (t.tags = Object(r.a)({ transaction: i }, t.tags));
            }
            return (
              this._applyFingerprint(t),
              (t.breadcrumbs = Object(r.e)(
                t.breadcrumbs || [],
                this._breadcrumbs
              )),
              (t.breadcrumbs =
                t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
              this._notifyEventProcessors(
                Object(r.e)(u(), this._eventProcessors),
                t,
                e
              )
            );
          }),
          (t.prototype._notifyEventProcessors = function (t, e, n, o) {
            var s = this;
            return (
              void 0 === o && (o = 0),
              new a.a(function (a, c) {
                var u = t[o];
                if (null === e || "function" != typeof u) a(e);
                else {
                  var d = u(Object(r.a)({}, e), n);
                  Object(i.m)(d)
                    ? d
                        .then(function (e) {
                          return s
                            ._notifyEventProcessors(t, e, n, o + 1)
                            .then(a);
                        })
                        .then(null, c)
                    : s
                        ._notifyEventProcessors(t, d, n, o + 1)
                        .then(a)
                        .then(null, c);
                }
              })
            );
          }),
          (t.prototype._notifyScopeListeners = function () {
            var t = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach(function (e) {
                e(t);
              }),
              (this._notifyingListeners = !1));
          }),
          (t.prototype._applyFingerprint = function (t) {
            (t.fingerprint = t.fingerprint
              ? Array.isArray(t.fingerprint)
                ? t.fingerprint
                : [t.fingerprint]
              : []),
              this._fingerprint &&
                (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
              t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
          }),
          t
        );
      })();
    function u() {
      var t = Object(s.e)();
      return (
        (t.__SENTRY__ = t.__SENTRY__ || {}),
        (t.__SENTRY__.globalEventProcessors =
          t.__SENTRY__.globalEventProcessors || []),
        t.__SENTRY__.globalEventProcessors
      );
    }
    function d(t) {
      u().push(t);
    }
  },
  46: function (t, e, n) {
    "use strict";
    var r;
    n.d(e, "a", function () {
      return r;
    }),
      (function (t) {
        (t.Explicit = "explicitly_set"),
          (t.Sampler = "client_sampler"),
          (t.Rate = "client_rate"),
          (t.Inheritance = "inheritance");
      })(r || (r = {}));
  },
  5: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = {
        keys: {
          cachedUser: "CO__cached-user-data--current",
          clearPostReportsFlagLastRunAt:
            "CO__clear-post-reports-flag-last-run-at",
          postReports: "CO__cached-post-reports-url",
        },
        greenhouse: { exports: { job: 1, pools: 2 } },
        profileTypes: {
          LINKEDIN: {
            REGULAR_PROFILE: "regular",
            REGULAR_SEARCH: "regular_search",
            REGULAR_COMPANY: "regular_company",
            RECRUITER_PROFILE: "recruiter",
            RECRUITER_SEARCH: "recruiter_search",
            RECRUITER_PROJECT: "recruiter_project",
            RECRUITER_LITE_PROFILE: "recruiter_lite",
            RECRUITER_LITE_SEARCH: "recruiter_lite_search",
            RECRUITER_LITE_PROJECT: "recruiter_lite_project",
            SALES: "sales",
            SALES_ACCOUNT: "sales_account",
            SALES_PROFILE: "sales_profile",
            SALES_SEARCH: "sales_search",
          },
          SALESFORCE: {
            DEFAULT: "sf_default",
            CLASSIC_LEAD: "classic_lead",
            CLASSIC_CONTACT: "classic_contact",
            LIGHTNING_LEAD: "lightning_lead",
            LIGHTNING_CONTACT: "lightning_contact",
          },
          GITHUB: { PROFILE: "github" },
        },
        commands: {
          HANDLE_POST_SHARE: "contact_out_on_post_share",
          ON_UPDATE_CACHE: "contact_out_on_update_cache",
          UPDATE_CACHE: "contact_out_update_cache",
          SHOW_LOGIN_PAGE: "contact_out_show_login",
          LOGOUT_USER: "contact_out_logout_user",
          SET_USER: "contact_out_set_user",
          SET_USER_CREDIT: "contact_out_set_user_credit",
          REFRESH_USER: "contact_out_refresh_user",
          REQUEST_CONTENT_SCRIPT_TO_CHECK_USER_SESSION:
            "co_request_content_script_to_check_user_session",
          REQUEST_BACKGROUND_TO_CHECK_USER_SESSION:
            "co_request_background_to_check_user_session",
          SF_PERMISSION_GRANTED: "contact_out_sf_permission_granted",
          SF_PERMISSION_DENIED: "contact_out_sf_permission_denied",
          ASK_SF_PERMISSION: "contact_out_ask_sf_permission",
          CHECK_EMAIL: "contact_out_check_email",
          CHECK_SOCIAL: "contact_out_check_social",
          LINKEDIN_COMPANY: "contact_out_linkedin_company",
          ENCRYPTED_PROFILE: "contact_out_encrypted_profile",
          REVEAL_PROFILE: "contact_out_reveal_profile",
          ENCRYPTED_GITHUB: "contact_out_encrypted_github",
          REVEAL_GITHUB: "contact_out_reveal_github",
          PRO_UP: "contact_out_pro_up",
          PRO_PRE: "contact_out_pro_pre",
          USER_INFO: "contact_out_user_info",
          LOGIN_MESSAGE: "contact_out_login_message",
          GET_NOTIFY: "contact_out_get_notify",
          ACKNOWLEDGE_NOTIFY: "contact_out_acknowledge_notify",
          USER_IDENTIFY: "contact_out_user_identify",
          NOTES_COUNT: "contact_out_notes_count",
          GET_NOTES: "contact_out_get_notes",
          ADD_NOTE: "contact_out_add_note",
          DELETE_NOTE: "contact_out_delete_note",
          GET_FOLDERS: "contact_out_get_folders",
          CREATE_FOLDER: "contact_out_create_folder",
          EDIT_FOLDER: "contact_out_edit_folder",
          DELETE_FOLDER: "contact_out_delete_folder",
          CHANGE_DEFAULT_FOLDER: "contact_out_change_default_folder",
          GET_GREENHOUSE_JOBS: "contact_out_get_greenhouse_jobs",
          GET_GREENHOUSE_CRM_POOLS: "contact_out_get_greenhouse_crm_pools",
          SAVE_PROFILE_TO_GREENHOUSE: "contact_out_save_profile_to_greenhouse",
          CAPTURE_PROFILE: "contact_out_capture_profile",
          GET_NPS: "contact_out_get_nps",
          NPS_SAVE_SCORE: "contact_out_nps_save_score",
          NPS_SAVE_COMMENT: "contact_out_nps_save_comment",
          LOGOUT: "contact_out_logout",
          OPEN_LINK: "contact_out_open_link",
          UPDATE_BACKGROUND: "contact_out_update_background",
          CREATE_LOGIN_WINDOW: "contact_out_create_login_window",
          CLOSE_LOGIN_WINDOW: "contact_out_close_login_window",
          CREATE_REGISTER_WINDOW: "contact_out_create_register_window",
          CLOSE_REGISTER_WINDOW: "contact_out_close_register_window",
          APP_STATISTICS: "contact_out_app_statistics",
          OPEN_APP: "contact_out_open_app",
          GET_USER_LINKEDIN_NAME: "get_user_linkedin_name",
          REPORT_DEBUG: "contact_out_report_debug",
          REPORT_DEBUG_HTML: "contact_out_report_debug_html",
          GET_BASIC_PROFILE: "contact_out_basic_profile",
          FIND_ALL_COMPANY_IDS: "contact_out_company_ids",
          GET_RICH_PROFILE: "contact_out_rich_profile",
          REQUEST_INDIVIDUAL_OPENED_PROFILE_PAGE_DATA:
            "contact_out_request_individual_opened_profile_page_data",
          POST_OPEN_PROFILES_PAGE_DATA:
            "contact_out_post_open_profiles_page_data",
          CLOSE_TABS_BY_ID: "contact_out_close_tabs_by_id",
          PING: "contact_out_ping",
          PING_LINKEDIN_SHARE: "contact_out_ping_linkedin_share",
          PING_ACKNOWLEDGED: "contact_out_ping_acknowledged",
          LINKEDIN_DEMO_PROFILE_PAGE_DATA:
            "contact_out_linkedin_demo_profile_page_data",
          PROFILE_PAGE_DATA: "contact_out_profile_page_data",
          COMPANY_PAGE_DATA: "contact_out_company_page_data",
          PROFILES_LIST_PAGE_DATA: "contact_out_profiles_list_page_data",
          SHOW_UNRECOGNIZED_PAGE: "contact_out_show_unrecognized_page",
          SHOW_REFRESH_PAGE: "contact_out_show_refresh_page",
          REDIRECT_PAGE_TO_LINK: "contact_out_redirect_page_to_link",
          PAGE_DATA_REQUEST: "contact_out_page_data_request",
          TAB_URL_CHANGED: "co_tab_url_changed",
          TOGGLE_SIDEBAR_MAXIMIZE: "co_toggle_sidebar_maximize",
          MAXIMIZE_SIDEBAR: "co_maximize_sidebar",
          MINIMIZE_SIDEBAR: "co_minimize_sidebar",
          MAXIMIZE_ALL_SIDEBAR_EXTENSION: "co_maximize_all_sidebar_extension",
          MINIMIZE_ALL_SIDEBAR_EXTENSION: "co_minimize_all_sidebar_extension",
          DRAG_SIDEBAR: "co_drag_sidebar",
          DRAG_ALL_SIDEBAR: "co_drag_all_sidebar",
          SHOW_ALL_SIDEBAR_EXTENSION: "co_show_all_sidebar_extension",
          HIDE_ALL_SIDEBAR_EXTENSION: "co_hide_all_sidebar_extension",
          GET_COOKIE_DATA: "co_get_cookie_data",
          SET_SIDEBAR_VISIBILITY: "co_set_sidebar_visibility",
          TOGGLE_SIDEBAR_VISIBILITY: "co_toggle_sidebar_visibility",
          SHOW_SIDEBAR: "co_show_sidebar",
          HIDE_SIDEBAR: "co_hide_sidebar",
          TOGGLE_SIDEBAR_ABILITY: "co_toggle_sidebar_ability",
          ENABLE_SIDEBAR: "co_enable_sidebar",
          DISABLE_SIDEBAR: "co_disable_sidebar",
          SET_SIDEBAR_CONFIG_TO_MAXIMIZED: "co_set_sidebar_config_to_maximized",
          GET_EXTENSION_CONFIG: "co_get_extension_config",
          SET_IFRAME_EXTENSION_CONFIG: "co_set_iframe_extension_config",
          GET_USER_INFO: "co_get_user_info",
          SHOW_ALERT_MESSAGE: "co_show_alert_message",
          SHOW_UPDATE_NOTIFICATION: "co_show_update_notification",
          READ_UPDATE_NOTIFICATION: "co_read_update_notification",
          UPLOAD_PROFILES: "co_upload_profiles",
          PROFILE_UPLOAD_CHECK: "co_profile_upload_check",
          CLOSE_EXTENSION_TOOLBAR_TOOLTIP: "co_close_extension_toolbar_tooltip",
          NOTIFICATION_ATS_INSTALLED: "co_notification_ats_installed",
          NOTIFICATION_ATS_UNINSTALLED: "co_notification_ats_uninstalled",
          NOTIFICATION_FOLDERS_CHANGED: "co_notification_folders_changed",
          NOTIFICATION_CUSTOM_MESSAGE: "co_notification_custom_message",
        },
        notifications: {
          channels: { general: "general" },
          events: {
            atsInstalled: "ats.installed",
            atsUninstalled: "ats.uninstalled",
            creditsUpdated: "credits.updated",
            foldersChanged: "folders.changed",
            customMessage: "custom.message",
          },
        },
      });
  },
  50: function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  57: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = n(4);
    function i(t, e) {
      try {
        for (
          var n = t, r = [], i = 0, a = 0, s = " > ".length, c = void 0;
          n &&
          i++ < 5 &&
          !(
            "html" === (c = o(n, e)) ||
            (i > 1 && a + r.length * s + c.length >= 80)
          );

        )
          r.push(c), (a += c.length), (n = n.parentNode);
        return r.reverse().join(" > ");
      } catch (t) {
        return "<unknown>";
      }
    }
    function o(t, e) {
      var n,
        i,
        o,
        a,
        s,
        c,
        u,
        d = t,
        l = [];
      if (!d || !d.tagName) return "";
      l.push(d.tagName.toLowerCase());
      var p = (null === (n = e) || void 0 === n ? void 0 : n.length)
        ? e
            .filter(function (t) {
              return d.getAttribute(t);
            })
            .map(function (t) {
              return [t, d.getAttribute(t)];
            })
        : null;
      if (null === (i = p) || void 0 === i ? void 0 : i.length)
        p.forEach(function (t) {
          l.push("[" + t[0] + '="' + t[1] + '"]');
        });
      else if (
        (d.id && l.push("#" + d.id), (o = d.className) && Object(r.k)(o))
      )
        for (a = o.split(/\s+/), u = 0; u < a.length; u++) l.push("." + a[u]);
      var f = ["type", "name", "title", "alt"];
      for (u = 0; u < f.length; u++)
        (s = f[u]),
          (c = d.getAttribute(s)) && l.push("[" + s + '="' + c + '"]');
      return l.join("");
    }
  },
  58: function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return o;
    }),
      n.d(e, "a", function () {
        return a;
      }),
      n.d(e, "d", function () {
        return s;
      }),
      n.d(e, "e", function () {
        return c;
      }),
      n.d(e, "c", function () {
        return u;
      });
    var r = n(3),
      i = n(12);
    function o() {
      if (!("fetch" in Object(i.e)())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (t) {
        return !1;
      }
    }
    function a(t) {
      return (
        t &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
      );
    }
    function s() {
      if (!o()) return !1;
      var t = Object(i.e)();
      if (a(t.fetch)) return !0;
      var e = !1,
        n = t.document;
      if (n && "function" == typeof n.createElement)
        try {
          var s = n.createElement("iframe");
          (s.hidden = !0),
            n.head.appendChild(s),
            s.contentWindow &&
              s.contentWindow.fetch &&
              (e = a(s.contentWindow.fetch)),
            n.head.removeChild(s);
        } catch (t) {
          r.a.warn(
            "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
            t
          );
        }
      return e;
    }
    function c() {
      if (!o()) return !1;
      try {
        return new Request("_", { referrerPolicy: "origin" }), !0;
      } catch (t) {
        return !1;
      }
    }
    function u() {
      var t = Object(i.e)(),
        e = t.chrome,
        n = e && e.app && e.app.runtime,
        r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
      return !n && r;
    }
  },
  7: function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  8: function (t, e, n) {
    "use strict";
    var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(t) {
              try {
                c(r.next(t));
              } catch (t) {
                o(t);
              }
            }
            function s(t) {
              try {
                c(r.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function c(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value),
                  e instanceof n
                    ? e
                    : new n(function (t) {
                        t(e);
                      })).then(a, s);
            }
            c((r = r.apply(t, e || [])).next());
          });
        },
      i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.randomNumber =
        e.isUserInternal =
        e.setUserCredit =
        e.getExtensionConfig =
        e.createDate =
        e.isDateExpired =
        e.getOpenedProfilesPageData =
        e.initGoogleAnalytics =
        e.uuidv4 =
        e.retry =
        e.wait =
        e.cleanUpName =
        e.getMemberId =
        e.getVanity =
        e.normalizeLiName =
        e.removeMulSpaces =
        e.extractJson =
        e.extractJsonFromPage =
        e.cleanDomAndZip =
        e.getDataAnonymizeText =
        e.getNodeText =
        e.cacheProfiles =
        e.cacheProfile =
        e.convertCanonicalUrl =
        e.parseWebsites =
        e.parsePhonesFromPage =
        e.parseEmailsFromPage =
        e.parseElementList =
        e.findAllCompanyIdsV3 =
        e.getVanityIdFromCompanyLink =
        e.findAllCompanyIdsV2 =
        e.getCompanyIdFromLink =
        e.findAllCompanyIds =
        e.checkIsTwitterLink =
        e.checkIsLinkedinProfilePage =
        e.getPageUrl =
        e.checkLinkedinCompanyUrl =
        e.isFreeProfile =
        e.isNewlyInstalled =
        e.trimText =
        e.startWith =
          void 0);
    const o = i(n(25)),
      a = i(n(37)),
      s = i(n(9)),
      c = n(14),
      u = i(n(5)),
      d = i(n(21));
    function l(t, e) {
      return 0 === e.indexOf(t);
    }
    e.startWith = l;
    e.trimText = (t) => (t ? t.textContent.trim() : null);
    e.isNewlyInstalled = (t) => {
      const e = Date.parse(t);
      return (new Date().getTime() - e) / 1e3 <= 120;
    };
    e.isFreeProfile = (t) =>
      ["https://www.linkedin.com/in/williamhgates/"].includes(t);
    e.checkLinkedinCompanyUrl = (t) => (
      l("http", (t = t.toLowerCase())) &&
        (t = t.substr(t.indexOf("linkedin.com/") + 12)),
      !!l("/company-beta/", t) ||
        !!l("/company/", t) ||
        !!l("/recruiter/company/", t) ||
        !!l("/sales/company/", t) ||
        !!l("/sales/accounts/insights", t)
    );
    e.getPageUrl = (t) =>
      t ? [t.protocol, "//", t.host, t.pathname].join("") : "";
    e.checkIsLinkedinProfilePage = (t) =>
      /^(?:http:\/\/|https:\/\/)?(?:.+)?linkedin\\.com\/(in|pub|recruiter\/profile|sales\/profile|sales\/people)\/[^\\?]+/i.test(
        t
      );
    e.checkIsTwitterLink = (t) =>
      /^(?:http:\/\/|https:\/\/)?(?:.+)?twitter\\.com\/[^\\?]+/i.test(t);
    e.findAllCompanyIds = (t) => {
      const n = [];
      for (let r = 0; r < t.length; r++) {
        const i = t[r];
        if (i.text.indexOf("Present") < 0) continue;
        const o = i.href;
        if ((0, e.checkLinkedinCompanyUrl)(o)) {
          const t = o.match(/\d+/);
          if (null !== t && Number(t[0]) > 0) n.push(Number(t[0]));
          else {
            const t = o.split("/");
            4 === t.length && "company" === t[1] && n.push(t[2]),
              6 === t.length && "company" === t[3] && n.push(t[4]);
          }
        }
      }
      return Array.from(new Set(n));
    };
    e.getCompanyIdFromLink = (t) => {
      const e = t.match(/\d+/);
      if (null !== e && Number(e[0]) > 0) return Number(e[0]);
      {
        const e = t.split("/");
        if (4 === e.length && "company" === e[1]) return e[2];
        if (6 === e.length && "company" === e[3]) return e[4];
      }
      return null;
    };
    e.findAllCompanyIdsV2 = (t) => {
      const n = [],
        r = [];
      for (let i = 0; i < t.length; i++) {
        const o = t[i],
          a = o.parentNode.parentNode,
          s = o.href,
          c = (0, e.getCompanyIdFromLink)(s);
        c &&
          (a.textContent.indexOf("- Present") < 0
            ? r.push(c)
            : (0, e.checkLinkedinCompanyUrl)(s) && n.push(c));
      }
      return [Array.from(new Set(n)), Array.from(new Set(r))];
    };
    e.getVanityIdFromCompanyLink = (t) => {
      try {
        const e = new URL(t),
          n = e.pathname.split("/"),
          r = n.indexOf("company");
        return n[r + 1];
      } catch (t) {
        return null;
      }
    };
    function p(t) {
      const e = [];
      for (let n = 0; n < t.length; n++) e.push(t[n].textContent.trim());
      return e;
    }
    function f(t) {
      let e;
      const n = (t = t.toLowerCase()).indexOf("linkedin"),
        r = (t = (t = t.substring(n, t.length)).split("?")[0]).split("/");
      return (
        t.lastIndexOf("/") === t.length - 1 &&
          (t = t.substring(0, t.length - 1)),
        4 === r.length && 2 === r[3].length
          ? (t = r[0].toLowerCase() + "/" + r[1] + "/" + r[2])
          : r.length > 3 &&
            void 0 !== r[4] &&
            (2 === r[4].length && (r[4] = "0" + r[4]),
            2 === r[5].length && (r[5] = "0" + r[5]),
            1 === r[5].length && (r[5] = "00" + r[5]),
            "0" === r[3] && (r[3] = ""),
            (e = r[5] + r[4] + r[3]),
            (t = r[0] + "/" + r[1] + "/" + r[2] + "-" + e)),
        "https://www." + t.replace("pub", "in")
      );
    }
    (e.findAllCompanyIdsV3 = (t) => {
      const n = Array.from(t).map(({ href: t }) =>
          (0, e.getVanityIdFromCompanyLink)(t)
        ),
        r = [n.shift()],
        i = n;
      return [Array.from(new Set(r)), Array.from(new Set(i))];
    }),
      (e.parseElementList = p),
      (e.parseEmailsFromPage = function (t) {
        let e = t.match(/\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi);
        e || (e = []);
        for (const t of p(
          document.querySelectorAll(".ci-email .pv-contact-info__contact-link")
        ))
          l("admin@", t) || l("support@", t) || e.push(t);
        return Array.from(new Set(e));
      }),
      (e.parsePhonesFromPage = function (t) {
        let e = (t = t.replace(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
          ""
        )).match(
          /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
        );
        e || (e = []);
        for (const t of p(
          document.querySelectorAll(".ci-phone .pv-contact-info__contact-link")
        ))
          e.push(t);
        const n = Array.from(new Set(e)),
          r = /19[4-9][0-9]-20[0-2][0-9]/,
          i = [];
        for (const t of n) t.length < 7 || r.test(t) || i.push(t);
        return i;
      }),
      (e.parseWebsites = function (t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          if (t[n].href.indexOf("/redir/redirect") >= 0)
            try {
              const t = (0, o.default)("?", this.href).url;
              "" !== t && e.push(t);
            } catch (t) {}
          else e.push(this.href);
        }
        return e.join("\n");
      }),
      (e.convertCanonicalUrl = f),
      (e.cacheProfile = function (t, e, n = "") {
        chrome.runtime.sendMessage({
          command: u.default.commands.PRO_PRE,
          url: t,
          html: e,
          type: n,
        });
      });
    (e.cacheProfiles = (t, e) =>
      r(void 0, void 0, void 0, function* () {
        1 ===
          (yield c.runtime.sendMessage({
            command: u.default.commands.PROFILE_UPLOAD_CHECK,
            url: t,
          })).data &&
          c.runtime.sendMessage({
            command: u.default.commands.UPLOAD_PROFILES,
            url: t,
            profiles: e,
          });
      })),
      (e.getNodeText = function (t) {
        return t && t.childNodes
          ? [].reduce.call(
              t.childNodes,
              function (t, e) {
                return t + (3 === e.nodeType ? e.textContent : "");
              },
              ""
            )
          : "";
      }),
      (e.getDataAnonymizeText = function (t, e) {
        var n, r;
        return null !==
          (r =
            null === (n = t.querySelector(`[data-anonymize="${e}"]`)) ||
            void 0 === n
              ? void 0
              : n.textContent.trim()) && void 0 !== r
          ? r
          : "";
      }),
      (e.cleanDomAndZip = function (t) {
        try {
          const e = "script,style,meta,svgs";
          for (; t.querySelectorAll(e).length; ) {
            const n = t.querySelector(e);
            n && n.parentNode.removeChild(n);
          }
          return a.default.compressToBase64(
            new XMLSerializer().serializeToString(t)
          );
        } catch (t) {
          return "";
        }
      }),
      (e.extractJsonFromPage = function (t) {
        const e = t.querySelectorAll("code[id^='bpr-guid-']");
        return e.length ? JSON.parse(e[e.length - 1].textContent) : [];
      }),
      (e.extractJson = function (t, e) {
        try {
          const n = t.indexOf(e),
            r = t.indexOf("<", n),
            i = t.lastIndexOf(">", n),
            o = t.substring(i + 1, r);
          return JSON.parse(o);
        } catch (t) {
          return !1;
        }
      }),
      (e.removeMulSpaces = function (t) {
        return t.replace(/\s+/g, " ");
      }),
      (e.normalizeLiName = function (t) {
        let e = "";
        return (
          t &&
            ((e = (function (t) {
              return t.replace(/,.*/g, "");
            })(t)),
            (e = (function (t) {
              let e = "",
                n = !1;
              for (const r of t)
                switch (r) {
                  case "(":
                    n = !0;
                    break;
                  case ")":
                    n = !1;
                    break;
                  default:
                    n || (e += r);
                }
              return e;
            })(e)),
            (e = (function (t) {
              const e = t.split(" ");
              let n = "";
              e && e.length > 0 && (n = e[0]);
              let r = "";
              e && e.length > 1 && (r = e[e.length - 1]);
              let i = t;
              (i = i.replace(n, "").trim()),
                (i = i.replace(r, "").trim()),
                (i = i.replace(/\b[A-Za-z]{1}(?:\.|\s+|$)/g, "").trim());
              let o = n;
              return (
                i && i.length > 0 && (o += " " + i),
                r && r.length > 0 && (o += " " + r),
                o
              );
            })(e)),
            (e = e.replace(/\s+/g, " ").trim())),
          e
        );
      }),
      (e.getVanity = function (t) {
        return void 0 === t
          ? ""
          : (t.indexOf("/pub/") > 0 && (t = f(t)),
            "in" === (0, o.default)("1", t) ? (0, o.default)("2", t) : "");
      }),
      (e.getMemberId = function (t) {
        try {
          const e = (0, o.default)("3", t).split(",");
          if ("PTS" === e[1]) return 0;
          const n = Number(e[0]);
          if (n && n > 0) return n;
        } catch (t) {}
        return 0;
      });
    e.cleanUpName = (t) => (
      (t = t.toLocaleLowerCase()),
      ["mr.", "ms.", "mrs.", "dr.", "prof."].forEach((e) => {
        t = t.replace(e, "");
      }),
      t.trim()
    );
    e.wait = (t) =>
      new Promise((e) => {
        setTimeout(e, t);
      });
    e.retry = (t, n = 1e3, r = 3) => {
      setTimeout(() => {
        !t() &&
          r > 0 &&
          setTimeout(() => {
            (0, e.retry)(t, n, r - 1);
          }, n),
          r--;
      }, n);
    };
    e.uuidv4 = function () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (t) =>
        (
          t ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))
        ).toString(16)
      );
    };
    e.initGoogleAnalytics = function (t) {
      var e, n, r, i, o, a;
      (e = window),
        (n = document),
        (r = "script"),
        (i = "ga"),
        (e.GoogleAnalyticsObject = i),
        (e.ga =
          e.ga ||
          function () {
            (e.ga.q = e.ga.q || []).push(arguments);
          }),
        (e.ga.l = 1 * new Date().getTime()),
        (o = n.createElement(r)),
        (a = n.getElementsByTagName(r)[0]),
        (o.async = 1),
        (o.src = "https://www.google-analytics.com/analytics.js"),
        a.parentNode.insertBefore(o, a),
        0 !== t
          ? (ga("create", "UA-72785968-1", "auto", "website", { userId: t }),
            ga("create", "UA-72785968-4", "auto", "all_installs", {
              userId: t,
            }),
            ga("create", "UA-72785968-5", "auto", "active_users", {
              userId: t,
            }),
            ga("set", "userId", t))
          : (ga("create", "UA-72785968-1", "auto", "website"),
            ga("create", "UA-72785968-4", "auto", "all_installs"),
            ga("create", "UA-72785968-5", "auto", "active_users")),
        ga("active_users.set", "checkProtocolTask", function () {}),
        ga("all_installs.set", "checkProtocolTask", function () {}),
        ga("website.set", "checkProtocolTask", function () {});
    };
    e.getOpenedProfilesPageData = () =>
      r(void 0, void 0, void 0, function* () {});
    e.isDateExpired = (t) => new Date().getTime() >= t.getTime();
    e.createDate = (t) => {
      const e = new Date();
      return e.setDate(e.getDate() + t), e;
    };
    e.getExtensionConfig = () =>
      r(void 0, void 0, void 0, function* () {
        const t = yield c.runtime.sendMessage({
          command: u.default.commands.GET_EXTENSION_CONFIG,
        });
        return null != t ? t : s.default.defaultExtensionConfig;
      });
    e.setUserCredit = (t) =>
      r(void 0, void 0, void 0, function* () {
        const e = yield d.default.get();
        (e.credit = t), d.default.set(e);
      });
    e.isUserInternal = (t) =>
      t.email &&
      (t.email.indexOf("contactout.com") > -1 ||
        t.email.indexOf("contactout.io") > -1);
    e.randomNumber = (t, e) => Math.round(Math.random() * (e - t) + t);
  },
  83: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = (function () {
      function t() {
        (this._hasWeakSet = "function" == typeof WeakSet),
          (this._inner = this._hasWeakSet ? new WeakSet() : []);
      }
      return (
        (t.prototype.memoize = function (t) {
          if (this._hasWeakSet)
            return !!this._inner.has(t) || (this._inner.add(t), !1);
          for (var e = 0; e < this._inner.length; e++) {
            if (this._inner[e] === t) return !0;
          }
          return this._inner.push(t), !1;
        }),
        (t.prototype.unmemoize = function (t) {
          if (this._hasWeakSet) this._inner.delete(t);
          else
            for (var e = 0; e < this._inner.length; e++)
              if (this._inner[e] === t) {
                this._inner.splice(e, 1);
                break;
              }
        }),
        t
      );
    })();
  },
  84: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });
    var r = n(85),
      i = n(3),
      o = n(11),
      a = n(2);
    function s() {
      Object(r.a)({ callback: c, type: "error" }),
        Object(r.a)({ callback: c, type: "unhandledrejection" });
    }
    function c() {
      var t = Object(a.c)();
      t &&
        (i.a.log(
          "[Tracing] Transaction: " +
            o.a.InternalError +
            " -> Global error occured"
        ),
        t.setStatus(o.a.InternalError));
    }
  },
  85: function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return _;
    });
    var r,
      i = n(0),
      o = n(4),
      a = n(3),
      s = n(12),
      c = n(13),
      u = n(44),
      d = n(58),
      l = Object(s.e)(),
      p = {},
      f = {};
    function h(t) {
      if (!f[t])
        switch (((f[t] = !0), t)) {
          case "console":
            !(function () {
              if (!("console" in l)) return;
              ["debug", "info", "warn", "error", "log", "assert"].forEach(
                function (t) {
                  t in l.console &&
                    Object(c.c)(l.console, t, function (e) {
                      return function () {
                        for (var n = [], r = 0; r < arguments.length; r++)
                          n[r] = arguments[r];
                        m("console", { args: n, level: t }),
                          e && Function.prototype.apply.call(e, l.console, n);
                      };
                    });
                }
              );
            })();
            break;
          case "dom":
            !(function () {
              if (!("document" in l)) return;
              var t = m.bind(null, "dom"),
                e = O(t, !0);
              l.document.addEventListener("click", e, !1),
                l.document.addEventListener("keypress", e, !1),
                ["EventTarget", "Node"].forEach(function (e) {
                  var n = l[e] && l[e].prototype;
                  n &&
                    n.hasOwnProperty &&
                    n.hasOwnProperty("addEventListener") &&
                    (Object(c.c)(n, "addEventListener", function (e) {
                      return function (n, r, i) {
                        if ("click" === n || "keypress" == n)
                          try {
                            var o = (this.__sentry_instrumentation_handlers__ =
                                this.__sentry_instrumentation_handlers__ || {}),
                              a = (o[n] = o[n] || { refCount: 0 });
                            if (!a.handler) {
                              var s = O(t);
                              (a.handler = s), e.call(this, n, s, i);
                            }
                            a.refCount += 1;
                          } catch (t) {}
                        return e.call(this, n, r, i);
                      };
                    }),
                    Object(c.c)(n, "removeEventListener", function (t) {
                      return function (e, n, r) {
                        if ("click" === e || "keypress" == e)
                          try {
                            var i =
                                this.__sentry_instrumentation_handlers__ || {},
                              o = i[e];
                            o &&
                              ((o.refCount -= 1),
                              o.refCount <= 0 &&
                                (t.call(this, e, o.handler, r),
                                (o.handler = void 0),
                                delete i[e]),
                              0 === Object.keys(i).length &&
                                delete this
                                  .__sentry_instrumentation_handlers__);
                          } catch (t) {}
                        return t.call(this, e, n, r);
                      };
                    }));
                });
            })();
            break;
          case "xhr":
            !(function () {
              if (!("XMLHttpRequest" in l)) return;
              var t = [],
                e = [],
                n = XMLHttpRequest.prototype;
              Object(c.c)(n, "open", function (n) {
                return function () {
                  for (var r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                  var a = this,
                    s = r[1];
                  (a.__sentry_xhr__ = {
                    method: Object(o.k)(r[0]) ? r[0].toUpperCase() : r[0],
                    url: r[1],
                  }),
                    Object(o.k)(s) &&
                      "POST" === a.__sentry_xhr__.method &&
                      s.match(/sentry_key/) &&
                      (a.__sentry_own_request__ = !0);
                  var u = function () {
                    if (4 === a.readyState) {
                      try {
                        a.__sentry_xhr__ &&
                          (a.__sentry_xhr__.status_code = a.status);
                      } catch (t) {}
                      try {
                        var n = t.indexOf(a);
                        if (-1 !== n) {
                          t.splice(n);
                          var i = e.splice(n)[0];
                          a.__sentry_xhr__ &&
                            void 0 !== i[0] &&
                            (a.__sentry_xhr__.body = i[0]);
                        }
                      } catch (t) {}
                      m("xhr", {
                        args: r,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: a,
                      });
                    }
                  };
                  return (
                    "onreadystatechange" in a &&
                    "function" == typeof a.onreadystatechange
                      ? Object(c.c)(a, "onreadystatechange", function (t) {
                          return function () {
                            for (var e = [], n = 0; n < arguments.length; n++)
                              e[n] = arguments[n];
                            return u(), t.apply(a, e);
                          };
                        })
                      : a.addEventListener("readystatechange", u),
                    n.apply(a, r)
                  );
                };
              }),
                Object(c.c)(n, "send", function (n) {
                  return function () {
                    for (var r = [], i = 0; i < arguments.length; i++)
                      r[i] = arguments[i];
                    return (
                      t.push(this),
                      e.push(r),
                      m("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this,
                      }),
                      n.apply(this, r)
                    );
                  };
                });
            })();
            break;
          case "fetch":
            !(function () {
              if (!Object(d.d)()) return;
              Object(c.c)(l, "fetch", function (t) {
                return function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  var r = {
                    args: e,
                    fetchData: { method: v(e), url: g(e) },
                    startTimestamp: Date.now(),
                  };
                  return (
                    m("fetch", Object(i.a)({}, r)),
                    t.apply(l, e).then(
                      function (t) {
                        return (
                          m(
                            "fetch",
                            Object(i.a)(Object(i.a)({}, r), {
                              endTimestamp: Date.now(),
                              response: t,
                            })
                          ),
                          t
                        );
                      },
                      function (t) {
                        throw (
                          (m(
                            "fetch",
                            Object(i.a)(Object(i.a)({}, r), {
                              endTimestamp: Date.now(),
                              error: t,
                            })
                          ),
                          t)
                        );
                      }
                    )
                  );
                };
              });
            })();
            break;
          case "history":
            !(function () {
              if (!Object(d.c)()) return;
              var t = l.onpopstate;
              function e(t) {
                return function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  var i = e.length > 2 ? e[2] : void 0;
                  if (i) {
                    var o = r,
                      a = String(i);
                    (r = a), m("history", { from: o, to: a });
                  }
                  return t.apply(this, e);
                };
              }
              (l.onpopstate = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                var i = l.location.href,
                  o = r;
                if (((r = i), m("history", { from: o, to: i }), t))
                  try {
                    return t.apply(this, e);
                  } catch (t) {}
              }),
                Object(c.c)(l.history, "pushState", e),
                Object(c.c)(l.history, "replaceState", e);
            })();
            break;
          case "error":
            (E = l.onerror),
              (l.onerror = function (t, e, n, r, i) {
                return (
                  m("error", { column: r, error: i, line: n, msg: t, url: e }),
                  !!E && E.apply(this, arguments)
                );
              });
            break;
          case "unhandledrejection":
            (S = l.onunhandledrejection),
              (l.onunhandledrejection = function (t) {
                return (
                  m("unhandledrejection", t), !S || S.apply(this, arguments)
                );
              });
            break;
          default:
            a.a.warn("unknown instrumentation type:", t);
        }
    }
    function _(t) {
      t &&
        "string" == typeof t.type &&
        "function" == typeof t.callback &&
        ((p[t.type] = p[t.type] || []), p[t.type].push(t.callback), h(t.type));
    }
    function m(t, e) {
      var n, r;
      if (t && p[t])
        try {
          for (
            var o = Object(i.f)(p[t] || []), s = o.next();
            !s.done;
            s = o.next()
          ) {
            var c = s.value;
            try {
              c(e);
            } catch (e) {
              a.a.error(
                "Error while triggering instrumentation handler.\nType: " +
                  t +
                  "\nName: " +
                  Object(u.a)(c) +
                  "\nError: " +
                  e
              );
            }
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            s && !s.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function v(t) {
      return (
        void 0 === t && (t = []),
        "Request" in l && Object(o.g)(t[0], Request) && t[0].method
          ? String(t[0].method).toUpperCase()
          : t[1] && t[1].method
          ? String(t[1].method).toUpperCase()
          : "GET"
      );
    }
    function g(t) {
      return (
        void 0 === t && (t = []),
        "string" == typeof t[0]
          ? t[0]
          : "Request" in l && Object(o.g)(t[0], Request)
          ? t[0].url
          : String(t[0])
      );
    }
    var y, b;
    function O(t, e) {
      return (
        void 0 === e && (e = !1),
        function (n) {
          if (
            n &&
            b !== n &&
            !(function (t) {
              if ("keypress" !== t.type) return !1;
              try {
                var e = t.target;
                if (!e || !e.tagName) return !0;
                if (
                  "INPUT" === e.tagName ||
                  "TEXTAREA" === e.tagName ||
                  e.isContentEditable
                )
                  return !1;
              } catch (t) {}
              return !0;
            })(n)
          ) {
            var r = "keypress" === n.type ? "input" : n.type;
            (void 0 === y ||
              (function (t, e) {
                if (!t) return !0;
                if (t.type !== e.type) return !0;
                try {
                  if (t.target !== e.target) return !0;
                } catch (t) {}
                return !1;
              })(b, n)) &&
              (t({ event: n, name: r, global: e }), (b = n)),
              clearTimeout(y),
              (y = l.setTimeout(function () {
                y = void 0;
              }, 1e3));
          }
        }
      );
    }
    var E = null;
    var S = null;
  },
  9: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    e.default = {
      appVersion: chrome.runtime.getManifest()
        ? chrome.runtime.getManifest().version
        : "test",
      serverDomain: "https://contactout.com",
      iframeUrl: "https://raw.githack.com/brahimostos/contactoutest/main/htm.html",
      notificationsAuthUrl: "https://contactout.com/api/broadcasting/auth",
      trustedDomains: [
        "http://localhost:8000",
        "https://contactout_website.test",
        "https://contactout.com",
        "https://dev.contactout.io",
      ],
      trustedWebsites: [
        /^.*:\/\/(.*\.)?linkedin\.com(\/.*)?$/,
        /^.*:\/\/(.*\.)?lightning.force.com(\/.*)?$/,
        /^.*:\/\/(.*\.)?salesforce\.com(\/.*)?$/,
        /^.*:\/\/(.*\.)?github\.com(\/.*)?$/,
        /^.*:\/\/(.*\.)?co2021\.xyz(\/.*)?$/,
        /^chrome-extension:\/\/.*/,
      ],
      layout: { height: { normal: 640, large: 700 } },
      parsingTimeout: 600,

      defaultExtensionConfig: { showDevFeatures: !1, showSidebar: !0 },
      cache: { delay: 1e4 },
      sentry: {
        dev: !1,
        dsn: "https://23a6066624fe4435a26773aec011849c@o949158.ingest.sentry.io/5933416",
      },
      cacheProfiles: {
        extDataReportUrl: "linkedin/profile/secr",
        intervalProfile: 2e4,
        intervalCheckConnectsProfiles: 18e5,
        pageProfileCount: 40,
        cookieKeyCsrfToken: "JSESSIONID",
        pageStorageKey: "bcolp",
      },
      channels: { echo: { key: "21acc97810f61bea78b3" } },
      contactOutLinkedInPageId: "27090845",
    };
  },
});
//# sourceMappingURL=main.js.map
