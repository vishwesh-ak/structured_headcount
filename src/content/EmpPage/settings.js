"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pkg = exports.carbon = void 0;
var _Canary = require("./components/_Canary");
var _packageSettings = _interopRequireDefault(require("./global/js/package-settings"));
var _react = _interopRequireDefault(require("react"));
var _themes = require("@carbon/themes");
var _pconsole = _interopRequireDefault(require("./global/js/utils/pconsole"));
var carbon = {
  get themes() {
    return _themes.themes;
  },
  prefix: 'cds'
};
exports.carbon = carbon;
var componentDeprecatedWarning = function componentDeprecatedWarning(name, details) {
  return "Carbon for IBM Products (WARNING): Component \"".concat(name, "\" is deprecated. ").concat(details);
};
_packageSettings.default.logDeprecated = function (component, name) {
  if (component !== null && component !== void 0 && component.deprecated) {
    var _pconsole$level;
    var _component$deprecated = component.deprecated,
      level = _component$deprecated.level,
      details = _component$deprecated.details;
    var logUsing = (_pconsole$level = _pconsole.default === null || _pconsole.default === void 0 ? void 0 : _pconsole.default[level]) !== null && _pconsole$level !== void 0 ? _pconsole$level : _pconsole.default.error;
    logUsing(componentDeprecatedWarning(name || component.displayName, details));
  }
};

// Check that a component is enabled. This function returns a stub which checks
// the component status on first use and then renders as the component or as
// a Canary placeholder initialized with the name of the replaced component.
// Note that the returned stub carries any other properties which had already
// been assigned (eg propTypes, displayName, etc).
_packageSettings.default.checkComponentEnabled = function (component, name) {
  if (component.render) {
    // The component is a forward-ref, so make a stub forward-ref.
    var forward = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
      _packageSettings.default.logDeprecated(component, name); // may log don't care about result
      // Replace the stub's render fn so this test only happens once.
      return (forward.render = _packageSettings.default.isComponentEnabled(name) || !_packageSettings.default.isComponentPublic(name) ?
      // If the component is enabled, or if it's not a public component,
      // replace the stub's render fn with the component's render fn.
      component.render :
      // Note that Canary is a direct render fn (not a forward-ref) and
      // will ignore the passed props and ref (if any)
      _Canary.Canary.bind(undefined, {
        componentName: name
      }))(
      // Call it now (after this it will be directly called).
      props, ref);
    });

    // Transfer object properties already assigned (eg propTypes, displayName)
    // then merge in the stub forward-ref which checks the component status
    // when first used.
    // NOTE: React 18 = displayName not iterable on render function
    return Object.assign({}, component, {
      displayName: component.displayName
    }, forward);
  } else {
    // The component is a direct render fn, so make a stub render fn.
    var _render = function render(props) {
      _packageSettings.default.logDeprecated(component, name); // may log don't care about result
      // Replace the stub render fn so this test only happens once.
      return (_render = _packageSettings.default.isComponentEnabled(name) || !_packageSettings.default.isComponentPublic(name) ?
      // If the component is enabled, or if it's not a public component,
      // replace the stub render fn with the component render fn.
      component :
      // Replace the stub render fn with the Canary render fn, which will
      // ignore the passed props.
      _Canary.Canary.bind(undefined, {
        componentName: name
      }))(
      // Call it now (after this it will be directly called).
      props);
    };

    // Transfer object properties already assigned (eg propTypes, displayName)
    // to a function which calls the stub render fn which checks the component
    // status when first used.
    return Object.assign(function (props) {
      return _render(props);
    }, component, {
      displayName: component.displayName
    });
  }
};
var pkg = _packageSettings.default;
exports.pkg = pkg;