"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Property = exports.Properties = void 0;
exports.useParentProperty = useParentProperty;
exports.useProperties = useProperties;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

function removeByParent(id, properties) {
  return properties.filter(function (prop) {
    return prop.parent === id;
  }).reduce(function (acc, item) {
    return removeByParent(item.id, acc.filter(function (prop) {
      return prop.id !== item.id;
    }));
  }, properties);
}

var PropertiesContext = /*#__PURE__*/(0, _react.createContext)(undefined);

var Properties = function Properties(_ref) {
  var onChange = _ref.onChange,
    children = _ref.children;

  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    properties = _useState2[0],
    setProperties = _useState2[1];

  (0, _react.useEffect)(function () {
    if (onChange) {
      onChange(properties);
    }
  }, [properties]);
  var context = (0, _react.useMemo)(function () {
    return {
      properties: properties,
      getObject: function getObject() {
        return (0, _utils.toObject)(properties);
      },
      addProperty: function addProperty(property) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        setProperties(function (properties) {
          // If a property with this ID already exists, merge the two properties.
          var index = properties.findIndex(function (prop) {
            return prop.id === property.id;
          });

          if (index > -1) {
            return [].concat((0, _toConsumableArray2.default)(properties.slice(0, index)), [(0, _objectSpread2.default)((0, _objectSpread2.default)({}, properties[index]), property)], (0, _toConsumableArray2.default)(properties.slice(index + 1)));
          }

          if (options.after) {
            var _index = properties.findIndex(function (prop) {
              return prop.id === options.after;
            });

            if (_index > -1) {
              return [].concat((0, _toConsumableArray2.default)(properties.slice(0, _index + 1)), [property], (0, _toConsumableArray2.default)(properties.slice(_index + 1)));
            }
          }

          if (options.before) {
            var _index2 = properties.findIndex(function (prop) {
              return prop.id === options.before;
            });

            if (_index2 > -1) {
              return [].concat((0, _toConsumableArray2.default)(properties.slice(0, _index2)), [property], (0, _toConsumableArray2.default)(properties.slice(_index2)));
            }
          }

          return [].concat((0, _toConsumableArray2.default)(properties), [property]);
        });
      },
      removeProperty: function removeProperty(id) {
        setProperties(function (properties) {
          return removeByParent(id, properties.filter(function (prop) {
            return prop.id !== id;
          }));
        });
      },
      replaceProperty: function replaceProperty(id, property) {
        setProperties(function (properties) {
          var toReplace = properties.findIndex(function (prop) {
            return prop.id === id;
          });

          if (toReplace > -1) {
            // Replace the property and remove all remaining child properties.
            return removeByParent(id, [].concat((0, _toConsumableArray2.default)(properties.slice(0, toReplace)), [property], (0, _toConsumableArray2.default)(properties.slice(toReplace + 1))));
          }

          return properties;
        });
      }
    };
  }, [properties]);
  return /*#__PURE__*/_react.default.createElement(PropertiesContext.Provider, {
    value: context
  }, children);
};

exports.Properties = Properties;

function useProperties() {
  var properties = (0, _react.useContext)(PropertiesContext);

  if (!properties) {
    throw Error("Properties context provider is missing!");
  }

  return properties;
}

var PropertyContext = /*#__PURE__*/(0, _react.createContext)(undefined);

function useParentProperty() {
  return (0, _react.useContext)(PropertyContext);
}

var Property = function Property(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    value = _ref2.value,
    children = _ref2.children,
    _ref2$after = _ref2.after,
    after = _ref2$after === void 0 ? undefined : _ref2$after,
    _ref2$before = _ref2.before,
    before = _ref2$before === void 0 ? undefined : _ref2$before,
    _ref2$replace = _ref2.replace,
    replace = _ref2$replace === void 0 ? undefined : _ref2$replace,
    _ref2$remove = _ref2.remove,
    remove = _ref2$remove === void 0 ? false : _ref2$remove,
    _ref2$array = _ref2.array,
    array = _ref2$array === void 0 ? false : _ref2$array,
    _ref2$root = _ref2.root,
    root = _ref2$root === void 0 ? false : _ref2$root;
  var uniqueId = (0, _react.useMemo)(function () {
    return id || (0, _utils.getUniqueId)();
  }, []);
  var parent = useParentProperty();
  var properties = useProperties();

  if (!properties) {
    throw Error("<Properties> provider is missing higher in the hierarchy!");
  }

  var addProperty = properties.addProperty,
    removeProperty = properties.removeProperty,
    replaceProperty = properties.replaceProperty;
  var property = {
    id: uniqueId,
    name: name,
    value: value,
    parent: parent && !root ? parent.id : "",
    array: array
  };
  (0, _react.useEffect)(function () {
    if (remove) {
      removeProperty(uniqueId);
      return;
    }

    if (replace) {
      replaceProperty(replace, property);
      return;
    }

    addProperty(property, {
      after: after,
      before: before
    });
    return function () {
      removeProperty(uniqueId);
    };
  }, []);

  if (children) {
    return /*#__PURE__*/_react.default.createElement(PropertyContext.Provider, {
      value: property
    }, children);
  }

  return null;
};

exports.Property = Property;
