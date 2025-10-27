(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177], {
    2: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), ! function(e, t) {
        for (var s in t) Object.defineProperty(e, s, {
          enumerable: !0,
          get: t[s]
        })
      }(t, {
        default: function() {
          return g
        },
        handleClientScriptLoad: function() {
          return y
        },
        initScriptLoader: function() {
          return m
        }
      });
      let i = s(8975),
        r = s(5244),
        a = s(6814),
        n = i._(s(395)),
        u = r._(s(2094)),
        o = s(6993),
        l = s(4433),
        h = s(4941),
        c = new Map,
        d = new Set,
        f = e => {
          if (n.default.preinit) return void e.forEach(e => {
            n.default.preinit(e, {
              as: "style"
            })
          });
          {
            let t = document.head;
            e.forEach(e => {
              let s = document.createElement("link");
              s.type = "text/css", s.rel = "stylesheet", s.href = e, t.appendChild(s)
            })
          }
        },
        p = e => {
          let {
            src: t,
            id: s,
            onLoad: i = () => {},
            onReady: r = null,
            dangerouslySetInnerHTML: a,
            children: n = "",
            strategy: u = "afterInteractive",
            onError: o,
            stylesheets: h
          } = e, p = s || t;
          if (p && d.has(p)) return;
          if (c.has(t)) {
            d.add(p), c.get(t).then(i, o);
            return
          }
          let y = () => {
              r && r(), d.add(p)
            },
            m = document.createElement("script"),
            b = new Promise((e, t) => {
              m.addEventListener("load", function(t) {
                e(), i && i.call(this, t), y()
              }), m.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              o && o(e)
            });
          a ? (m.innerHTML = a.__html || "", y()) : n ? (m.textContent = "string" == typeof n ? n : Array.isArray(n) ? n.join("") : "", y()) : t && (m.src = t, c.set(t, b)), (0, l.setAttributesFromProps)(m, e), "worker" === u && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", u), h && f(h), document.body.appendChild(m)
        };

      function y(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, h.requestIdleCallback)(() => p(e))
        }) : p(e)
      }

      function m(e) {
        e.forEach(y), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          d.add(t)
        })
      }

      function b(e) {
        let {
          id: t,
          src: s = "",
          onLoad: i = () => {},
          onReady: r = null,
          strategy: l = "afterInteractive",
          onError: c,
          stylesheets: f,
          ...y
        } = e, {
          updateScripts: m,
          scripts: b,
          getIsSsr: g,
          appDir: v,
          nonce: O
        } = (0, u.useContext)(o.HeadManagerContext), C = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || s;
          C.current || (r && e && d.has(e) && r(), C.current = !0)
        }, [r, t, s]);
        let q = (0, u.useRef)(!1);
        if ((0, u.useEffect)(() => {
            if (!q.current) {
              if ("afterInteractive" === l) p(e);
              else "lazyOnload" === l && ("complete" === document.readyState ? (0, h.requestIdleCallback)(() => p(e)) : window.addEventListener("load", () => {
                (0, h.requestIdleCallback)(() => p(e))
              }));
              q.current = !0
            }
          }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (m ? (b[l] = (b[l] || []).concat([{
            id: t,
            src: s,
            onLoad: i,
            onReady: r,
            onError: c,
            ...y
          }]), m(b)) : g && g() ? d.add(t || s) : g && !g() && p(e)), v) {
          if (f && f.forEach(e => {
              n.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === l)
            if (!s) return y.dangerouslySetInnerHTML && (y.children = y.dangerouslySetInnerHTML.__html, delete y.dangerouslySetInnerHTML), (0, a.jsx)("script", {
              nonce: O,
              dangerouslySetInnerHTML: {
                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                  ...y,
                  id: t
                }]) + ")"
              }
            });
            else return n.default.preload(s, y.integrity ? {
              as: "script",
              integrity: y.integrity,
              nonce: O,
              crossOrigin: y.crossOrigin
            } : {
              as: "script",
              nonce: O,
              crossOrigin: y.crossOrigin
            }), (0, a.jsx)("script", {
              nonce: O,
              dangerouslySetInnerHTML: {
                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([s, {
                  ...y,
                  id: t
                }]) + ")"
              }
            });
          "afterInteractive" === l && s && n.default.preload(s, y.integrity ? {
            as: "script",
            integrity: y.integrity,
            nonce: O,
            crossOrigin: y.crossOrigin
          } : {
            as: "script",
            nonce: O,
            crossOrigin: y.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(b, "__nextScript", {
        value: !0
      });
      let g = b;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    1031: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 2, 23)), Promise.resolve().then(s.t.bind(s, 2783, 23)), Promise.resolve().then(s.t.bind(s, 5701, 23)), Promise.resolve().then(s.t.bind(s, 7377, 23)), Promise.resolve().then(s.bind(s, 9257))
    },
    2783: e => {
      e.exports = {
        style: {
          fontFamily: "'Geist', 'Geist Fallback'",
          fontStyle: "normal"
        },
        className: "__className_188709",
        variable: "__variable_188709"
      }
    },
    4433: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "setAttributesFromProps", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let s = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule"
        },
        i = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

      function r(e) {
        return ["async", "defer", "noModule"].includes(e)
      }

      function a(e, t) {
        for (let [a, n] of Object.entries(t)) {
          if (!t.hasOwnProperty(a) || i.includes(a) || void 0 === n) continue;
          let u = s[a] || a.toLowerCase();
          "SCRIPT" === e.tagName && r(u) ? e[u] = !!n : e.setAttribute(u, String(n)), (!1 === n || "SCRIPT" === e.tagName && r(u) && (!n || "false" === n)) && (e.setAttribute(u, ""), e.removeAttribute(u))
        }
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    4941: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), ! function(e, t) {
        for (var s in t) Object.defineProperty(e, s, {
          enumerable: !0,
          get: t[s]
        })
      }(t, {
        cancelIdleCallback: function() {
          return i
        },
        requestIdleCallback: function() {
          return s
        }
      });
      let s = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    5701: e => {
      e.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: "normal"
        },
        className: "__className_9a8899",
        variable: "__variable_9a8899"
      }
    },
    7377: () => {},
    9257: (e, t, s) => {
      "use strict";
      s.d(t, {
        Providers: () => O
      });
      var i = s(6814),
        r = s(5856),
        a = s(9928),
        n = s(9161),
        u = s(3612),
        o = s(2296),
        l = class extends o.k {
          #e;
          #t;
          #s;
          #i;
          #r;
          #a;
          #n;
          constructor(e) {
            super(), this.#n = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#s = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = function(e) {
              let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                s = void 0 !== t,
                i = s ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
              return {
                data: t,
                dataUpdateCount: 0,
                dataUpdatedAt: s ? i ?? Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null,
                isInvalidated: !1,
                status: s ? "success" : "pending",
                fetchStatus: "idle"
              }
            }(this.options), this.state = e.state ?? this.#e, this.scheduleGc()
          }
          get meta() {
            return this.options.meta
          }
          get promise() {
            return this.#r?.promise
          }
          setOptions(e) {
            this.options = {
              ...this.#a,
              ...e
            }, this.updateGcTime(this.options.gcTime)
          }
          optionalRemove() {
            this.observers.length || "idle" !== this.state.fetchStatus || this.#s.remove(this)
          }
          setData(e, t) {
            let s = (0, a.pl)(this.state.data, e, this.options);
            return this.#u({
              data: s,
              type: "success",
              dataUpdatedAt: t?.updatedAt,
              manual: t?.manual
            }), s
          }
          setState(e, t) {
            this.#u({
              type: "setState",
              state: e,
              setStateOptions: t
            })
          }
          cancel(e) {
            let t = this.#r?.promise;
            return this.#r?.cancel(e), t ? t.then(a.lQ).catch(a.lQ) : Promise.resolve()
          }
          destroy() {
            super.destroy(), this.cancel({
              silent: !0
            })
          }
          reset() {
            this.destroy(), this.setState(this.#e)
          }
          isActive() {
            return this.observers.some(e => !1 !== (0, a.Eh)(e.options.enabled, this))
          }
          isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === a.hT || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
          }
          isStatic() {
            return this.getObserversCount() > 0 && this.observers.some(e => "static" === (0, a.d2)(e.options.staleTime, this))
          }
          isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
          }
          isStaleByTime(e = 0) {
            return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !(0, a.j3)(this.state.dataUpdatedAt, e))
          }
          onFocus() {
            let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
            e?.refetch({
              cancelRefetch: !1
            }), this.#r?.continue()
          }
          onOnline() {
            let e = this.observers.find(e => e.shouldFetchOnReconnect());
            e?.refetch({
              cancelRefetch: !1
            }), this.#r?.continue()
          }
          addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#s.notify({
              type: "observerAdded",
              query: this,
              observer: e
            }))
          }
          removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#r && (this.#n ? this.#r.cancel({
              revert: !0
            }) : this.#r.cancelRetry()), this.scheduleGc()), this.#s.notify({
              type: "observerRemoved",
              query: this,
              observer: e
            }))
          }
          getObserversCount() {
            return this.observers.length
          }
          invalidate() {
            this.state.isInvalidated || this.#u({
              type: "invalidate"
            })
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({
                silent: !0
              });
              else if (this.#r) return this.#r.continueRetry(), this.#r.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
              let e = this.observers.find(e => e.options.queryFn);
              e && this.setOptions(e.options)
            }
            let s = new AbortController,
              i = e => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => (this.#n = !0, s.signal)
                })
              },
              r = () => {
                let e = (0, a.ZM)(this.options, t),
                  s = (() => {
                    let e = {
                      client: this.#i,
                      queryKey: this.queryKey,
                      meta: this.meta
                    };
                    return i(e), e
                  })();
                return (this.#n = !1, this.options.persister) ? this.options.persister(e, s, this) : e(s)
              },
              n = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#i,
                  state: this.state,
                  fetchFn: r
                };
                return i(e), e
              })();
            this.options.behavior?.onFetch(n, this), this.#t = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== n.fetchOptions?.meta) && this.#u({
              type: "fetch",
              meta: n.fetchOptions?.meta
            });
            let o = e => {
              (0, u.wm)(e) && e.silent || this.#u({
                type: "error",
                error: e
              }), (0, u.wm)(e) || (this.#s.config.onError?.(e, this), this.#s.config.onSettled?.(this.state.data, e, this)), this.scheduleGc()
            };
            return this.#r = (0, u.II)({
              initialPromise: t?.initialPromise,
              fn: n.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: e => {
                if (void 0 === e) return void o(Error(`${this.queryHash} data is undefined`));
                try {
                  this.setData(e)
                } catch (e) {
                  o(e);
                  return
                }
                this.#s.config.onSuccess?.(e, this), this.#s.config.onSettled?.(e, this.state.error, this), this.scheduleGc()
              },
              onError: o,
              onFail: (e, t) => {
                this.#u({
                  type: "failed",
                  failureCount: e,
                  error: t
                })
              },
              onPause: () => {
                this.#u({
                  type: "pause"
                })
              },
              onContinue: () => {
                this.#u({
                  type: "continue"
                })
              },
              retry: n.options.retry,
              retryDelay: n.options.retryDelay,
              networkMode: n.options.networkMode,
              canRun: () => !0
            }), this.#r.start()
          }
          #u(e) {
            this.state = (t => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                  };
                case "pause":
                  return {
                    ...t, fetchStatus: "paused"
                  };
                case "continue":
                  return {
                    ...t, fetchStatus: "fetching"
                  };
                case "fetch":
                  var s, i;
                  return {
                    ...t, ...(s = t.data, i = this.options, {
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                      fetchStatus: (0, u.v_)(i.networkMode) ? "fetching" : "paused",
                      ...void 0 === s && {
                        error: null,
                        status: "pending"
                      }
                    }), fetchMeta: e.meta ?? null
                  };
                case "success":
                  return this.#t = void 0, {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null
                    }
                  };
                case "error":
                  let r = e.error;
                  if ((0, u.wm)(r) && r.revert && this.#t) return {
                    ...this.#t,
                    fetchStatus: "idle"
                  };
                  return {
                    ...t, error: r, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: r, fetchStatus: "idle", status: "error"
                  };
                case "invalidate":
                  return {
                    ...t, isInvalidated: !0
                  };
                case "setState":
                  return {
                    ...t, ...e.state
                  }
              }
            })(this.state), n.jG.batch(() => {
              this.observers.forEach(e => {
                e.onQueryUpdate()
              }), this.#s.notify({
                query: this,
                type: "updated",
                action: e
              })
            })
          }
        },
        h = s(2002),
        c = class extends h.Q {
          constructor(e = {}) {
            super(), this.config = e, this.#o = new Map
          }
          #o;
          build(e, t, s) {
            let i = t.queryKey,
              r = t.queryHash ?? (0, a.F$)(i, t),
              n = this.get(r);
            return n || (n = new l({
              client: e,
              queryKey: i,
              queryHash: r,
              options: e.defaultQueryOptions(t),
              state: s,
              defaultOptions: e.getQueryDefaults(i)
            }), this.add(n)), n
          }
          add(e) {
            this.#o.has(e.queryHash) || (this.#o.set(e.queryHash, e), this.notify({
              type: "added",
              query: e
            }))
          }
          remove(e) {
            let t = this.#o.get(e.queryHash);
            t && (e.destroy(), t === e && this.#o.delete(e.queryHash), this.notify({
              type: "removed",
              query: e
            }))
          }
          clear() {
            n.jG.batch(() => {
              this.getAll().forEach(e => {
                this.remove(e)
              })
            })
          }
          get(e) {
            return this.#o.get(e)
          }
          getAll() {
            return [...this.#o.values()]
          }
          find(e) {
            let t = {
              exact: !0,
              ...e
            };
            return this.getAll().find(e => (0, a.MK)(t, e))
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter(t => (0, a.MK)(e, t)) : t
          }
          notify(e) {
            n.jG.batch(() => {
              this.listeners.forEach(t => {
                t(e)
              })
            })
          }
          onFocus() {
            n.jG.batch(() => {
              this.getAll().forEach(e => {
                e.onFocus()
              })
            })
          }
          onOnline() {
            n.jG.batch(() => {
              this.getAll().forEach(e => {
                e.onOnline()
              })
            })
          }
        },
        d = s(7380),
        f = class extends h.Q {
          constructor(e = {}) {
            super(), this.config = e, this.#l = new Set, this.#h = new Map, this.#c = 0
          }
          #l;
          #h;
          #c;
          build(e, t, s) {
            let i = new d.s({
              mutationCache: this,
              mutationId: ++this.#c,
              options: e.defaultMutationOptions(t),
              state: s
            });
            return this.add(i), i
          }
          add(e) {
            this.#l.add(e);
            let t = p(e);
            if ("string" == typeof t) {
              let s = this.#h.get(t);
              s ? s.push(e) : this.#h.set(t, [e])
            }
            this.notify({
              type: "added",
              mutation: e
            })
          }
          remove(e) {
            if (this.#l.delete(e)) {
              let t = p(e);
              if ("string" == typeof t) {
                let s = this.#h.get(t);
                if (s)
                  if (s.length > 1) {
                    let t = s.indexOf(e); - 1 !== t && s.splice(t, 1)
                  } else s[0] === e && this.#h.delete(t)
              }
            }
            this.notify({
              type: "removed",
              mutation: e
            })
          }
          canRun(e) {
            let t = p(e);
            if ("string" != typeof t) return !0;
            {
              let s = this.#h.get(t),
                i = s?.find(e => "pending" === e.state.status);
              return !i || i === e
            }
          }
          runNext(e) {
            let t = p(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let s = this.#h.get(t)?.find(t => t !== e && t.state.isPaused);
              return s?.continue() ?? Promise.resolve()
            }
          }
          clear() {
            n.jG.batch(() => {
              this.#l.forEach(e => {
                this.notify({
                  type: "removed",
                  mutation: e
                })
              }), this.#l.clear(), this.#h.clear()
            })
          }
          getAll() {
            return Array.from(this.#l)
          }
          find(e) {
            let t = {
              exact: !0,
              ...e
            };
            return this.getAll().find(e => (0, a.nJ)(t, e))
          }
          findAll(e = {}) {
            return this.getAll().filter(t => (0, a.nJ)(e, t))
          }
          notify(e) {
            n.jG.batch(() => {
              this.listeners.forEach(t => {
                t(e)
              })
            })
          }
          resumePausedMutations() {
            let e = this.getAll().filter(e => e.state.isPaused);
            return n.jG.batch(() => Promise.all(e.map(e => e.continue().catch(a.lQ))))
          }
        };

      function p(e) {
        return e.options.scope?.id
      }
      var y = s(5652),
        m = s(3947);

      function b(e) {
        return {
          onFetch: (t, s) => {
            let i = t.options,
              r = t.fetchOptions?.meta?.fetchMore?.direction,
              n = t.state.data?.pages || [],
              u = t.state.data?.pageParams || [],
              o = {
                pages: [],
                pageParams: []
              },
              l = 0,
              h = async () => {
                let s = !1,
                  h = e => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (t.signal.aborted ? s = !0 : t.signal.addEventListener("abort", () => {
                        s = !0
                      }), t.signal)
                    })
                  },
                  c = (0, a.ZM)(t.options, t.fetchOptions),
                  d = async (e, i, r) => {
                    if (s) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let n = (() => {
                        let e = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: i,
                          direction: r ? "backward" : "forward",
                          meta: t.options.meta
                        };
                        return h(e), e
                      })(),
                      u = await c(n),
                      {
                        maxPages: o
                      } = t.options,
                      l = r ? a.ZZ : a.y9;
                    return {
                      pages: l(e.pages, u, o),
                      pageParams: l(e.pageParams, i, o)
                    }
                  };
                if (r && n.length) {
                  let e = "backward" === r,
                    t = {
                      pages: n,
                      pageParams: u
                    },
                    s = (e ? function(e, {
                      pages: t,
                      pageParams: s
                    }) {
                      return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, s[0], s) : void 0
                    } : g)(i, t);
                  o = await d(t, s, e)
                } else {
                  let t = e ?? n.length;
                  do {
                    let e = 0 === l ? u[0] ?? i.initialPageParam : g(i, o);
                    if (l > 0 && null == e) break;
                    o = await d(o, e), l++
                  } while (l < t)
                }
                return o
              };
            t.options.persister ? t.fetchFn = () => t.options.persister?.(h, {
              client: t.client,
              queryKey: t.queryKey,
              meta: t.options.meta,
              signal: t.signal
            }, s) : t.fetchFn = h
          }
        }
      }

      function g(e, {
        pages: t,
        pageParams: s
      }) {
        let i = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0
      }
      let v = new class {
        #d;
        #f;
        #a;
        #p;
        #y;
        #m;
        #b;
        #g;
        constructor(e = {}) {
          this.#d = e.queryCache || new c, this.#f = e.mutationCache || new f, this.#a = e.defaultOptions || {}, this.#p = new Map, this.#y = new Map, this.#m = 0
        }
        mount() {
          this.#m++, 1 === this.#m && (this.#b = y.m.subscribe(async e => {
            e && (await this.resumePausedMutations(), this.#d.onFocus())
          }), this.#g = m.t.subscribe(async e => {
            e && (await this.resumePausedMutations(), this.#d.onOnline())
          }))
        }
        unmount() {
          this.#m--, 0 === this.#m && (this.#b?.(), this.#b = void 0, this.#g?.(), this.#g = void 0)
        }
        isFetching(e) {
          return this.#d.findAll({
            ...e,
            fetchStatus: "fetching"
          }).length
        }
        isMutating(e) {
          return this.#f.findAll({
            ...e,
            status: "pending"
          }).length
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({
            queryKey: e
          });
          return this.#d.get(t.queryHash)?.state.data
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            s = this.#d.build(this, t),
            i = s.state.data;
          return void 0 === i ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime((0, a.d2)(t.staleTime, s)) && this.prefetchQuery(t), Promise.resolve(i))
        }
        getQueriesData(e) {
          return this.#d.findAll(e).map(({
            queryKey: e,
            state: t
          }) => [e, t.data])
        }
        setQueryData(e, t, s) {
          let i = this.defaultQueryOptions({
              queryKey: e
            }),
            r = this.#d.get(i.queryHash),
            n = r?.state.data,
            u = (0, a.Zw)(t, n);
          if (void 0 !== u) return this.#d.build(this, i).setData(u, {
            ...s,
            manual: !0
          })
        }
        setQueriesData(e, t, s) {
          return n.jG.batch(() => this.#d.findAll(e).map(({
            queryKey: e
          }) => [e, this.setQueryData(e, t, s)]))
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({
            queryKey: e
          });
          return this.#d.get(t.queryHash)?.state
        }
        removeQueries(e) {
          let t = this.#d;
          n.jG.batch(() => {
            t.findAll(e).forEach(e => {
              t.remove(e)
            })
          })
        }
        resetQueries(e, t) {
          let s = this.#d;
          return n.jG.batch(() => (s.findAll(e).forEach(e => {
            e.reset()
          }), this.refetchQueries({
            type: "active",
            ...e
          }, t)))
        }
        cancelQueries(e, t = {}) {
          let s = {
            revert: !0,
            ...t
          };
          return Promise.all(n.jG.batch(() => this.#d.findAll(e).map(e => e.cancel(s)))).then(a.lQ).catch(a.lQ)
        }
        invalidateQueries(e, t = {}) {
          return n.jG.batch(() => (this.#d.findAll(e).forEach(e => {
            e.invalidate()
          }), e?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: e?.refetchType ?? e?.type ?? "active"
          }, t))
        }
        refetchQueries(e, t = {}) {
          let s = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
          };
          return Promise.all(n.jG.batch(() => this.#d.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
            let t = e.fetch(void 0, s);
            return s.throwOnError || (t = t.catch(a.lQ)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
          }))).then(a.lQ)
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let s = this.#d.build(this, t);
          return s.isStaleByTime((0, a.d2)(t.staleTime, s)) ? s.fetch(t) : Promise.resolve(s.state.data)
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(a.lQ).catch(a.lQ)
        }
        fetchInfiniteQuery(e) {
          return e.behavior = b(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(a.lQ).catch(a.lQ)
        }
        ensureInfiniteQueryData(e) {
          return e.behavior = b(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
          return m.t.isOnline() ? this.#f.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
          return this.#d
        }
        getMutationCache() {
          return this.#f
        }
        getDefaultOptions() {
          return this.#a
        }
        setDefaultOptions(e) {
          this.#a = e
        }
        setQueryDefaults(e, t) {
          this.#p.set((0, a.EN)(e), {
            queryKey: e,
            defaultOptions: t
          })
        }
        getQueryDefaults(e) {
          let t = [...this.#p.values()],
            s = {};
          return t.forEach(t => {
            (0, a.Cp)(e, t.queryKey) && Object.assign(s, t.defaultOptions)
          }), s
        }
        setMutationDefaults(e, t) {
          this.#y.set((0, a.EN)(e), {
            mutationKey: e,
            defaultOptions: t
          })
        }
        getMutationDefaults(e) {
          let t = [...this.#y.values()],
            s = {};
          return t.forEach(t => {
            (0, a.Cp)(e, t.mutationKey) && Object.assign(s, t.defaultOptions)
          }), s
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#a.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
          };
          return t.queryHash || (t.queryHash = (0, a.F$)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === a.hT && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
          return e?._defaulted ? e : {
            ...this.#a.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
          }
        }
        clear() {
          this.#d.clear(), this.#f.clear()
        }
      };

      function O(e) {
        let {
          children: t
        } = e;
        return (0, i.jsx)(r.Ht, {
          client: v,
          children: t
        })
      }
    }
  },
  e => {
    var t = t => e(e.s = t);
    e.O(0, [980, 558, 788, 97, 358], () => t(1031)), _N_E = e.O()
  }
]);