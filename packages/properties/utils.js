

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueId = getUniqueId;
exports.toObject = toObject;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _nanoid = require("nanoid");

var nanoid = (0, _nanoid.customAlphabet)("1234567890abcdef", 6);

function buildRoots(roots, properties) {
  var obj = roots.reduce(function (acc, item) {
    var isArray = item.array === true || roots.filter(function (r) {
      return r.name === item.name;
    }).length > 1;
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, acc), {}, (0, _defineProperty2.default)({}, item.name, isArray ? [] : {}));
  }, {});
  roots.forEach(function (root) {
    var isArray = root.array === true || Array.isArray(obj[root.name]);

    if (root.value !== undefined) {
      obj[root.name] = isArray ? [].concat((0, _toConsumableArray2.default)(obj[root.name]), [root.value]) : root.value;
      return;
    }

    var nextRoots = properties.filter(function (p) {
      return p.parent === root.id;
    });
    var value = buildRoots(nextRoots, properties);
    obj[root.name] = isArray ? [].concat((0, _toConsumableArray2.default)(obj[root.name]), [value]) : value;
  });
  return obj;
}

function toObject(properties) {
  var roots = properties.filter(function (prop) {
    return prop.parent === "";
  });
  return buildRoots(roots, properties);
}

function getUniqueId() {
  return nanoid();
}