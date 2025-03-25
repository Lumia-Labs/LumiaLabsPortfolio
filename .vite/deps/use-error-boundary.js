import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/use-error-boundary/lib/index.module.js
var import_react = __toESM(require_react());
var c = function(r2) {
  var t2, e2;
  function n2(t3) {
    var e3;
    return (e3 = r2.call(this, t3) || this).state = { hasError: false, error: null }, e3;
  }
  e2 = r2, (t2 = n2).prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, t2.__proto__ = e2, n2.getDerivedStateFromError = function(r3) {
    return { hasError: true, error: r3 };
  };
  var o2 = n2.prototype;
  return o2.componentDidCatch = function(r3, t3) {
    return this.props.onDidCatch(r3, t3);
  }, o2.render = function() {
    var r3 = this.state, t3 = this.props, e3 = t3.render, n3 = t3.children, o3 = t3.renderError;
    return r3.hasError ? o3 ? o3({ error: r3.error }) : null : e3 ? e3() : n3 || null;
  }, n2;
}(import_react.PureComponent);
var u = function(r2, t2) {
  switch (t2.type) {
    case "catch":
      return { didCatch: true, error: t2.error };
    case "reset":
      return { didCatch: false, error: null };
    default:
      return r2;
  }
};
function a(t2) {
  var a2 = (0, import_react.useReducer)(u, { didCatch: false, error: null }), i = a2[0], d = a2[1], h = (0, import_react.useRef)(null);
  function l() {
    return e2 = function(r2, e3) {
      d({ type: "catch", error: r2 }), t2 && t2.onDidCatch && t2.onDidCatch(r2, e3);
    }, function(t3) {
      return import_react.default.createElement(c, { onDidCatch: e2, children: t3.children, render: t3.render, renderError: t3.renderError });
    };
    var e2;
  }
  var p, s = (0, import_react.useCallback)(function() {
    h.current = l(), d({ type: "reset" });
  }, []);
  return { ErrorBoundary: (p = h.current, null !== p ? p : (h.current = l(), h.current)), didCatch: i.didCatch, error: i.error, reset: s };
}
var index_module_default = a;
export {
  index_module_default as default,
  a as useErrorBoundary
};
//# sourceMappingURL=use-error-boundary.js.map
