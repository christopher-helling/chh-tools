"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrWhitespace = exports.isNullOrEmpty = exports.isEmptyObject = exports.isValidDate = exports.isEmptyArray = exports.isNull = exports.isObject = exports.isFunction = exports.isNumber = exports.isBoolean = void 0;
const isBoolean = (value) => typeof value === 'boolean';
exports.isBoolean = isBoolean;
const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);
exports.isNumber = isNumber;
const isFunction = (value) => typeof value === 'function';
exports.isFunction = isFunction;
// note that an array is considered an object in javascript
const isObject = (value) => (typeof value === 'function' || typeof value === 'object') && !!value;
exports.isObject = isObject;
// null, undefined
const isNull = (value) => value === null || value === undefined;
exports.isNull = isNull;
// null, undefined, []
const isEmptyArray = (value) => (0, exports.isNull)(value)
    || (Array.isArray(value) && value.length === 0);
exports.isEmptyArray = isEmptyArray;
const isValidDate = (value) => (Object.prototype.toString.call(value) === '[object Date]' && !Number.isNaN(value.getTime()));
exports.isValidDate = isValidDate;
// null, undefined, {}, invalid date -- note that an empty array is not an empty object: [] --> false, isEmptyObject([]) = false, !isEmptyObject([]) = true
const isEmptyObject = (value) => !(0, exports.isFunction)(value) && !Array.isArray(value)
    && !(0, exports.isValidDate)(value) && ((0, exports.isNull)(value) || ((0, exports.isObject)(value) && Object.keys(value).length === 0));
exports.isEmptyObject = isEmptyObject;
// null, undefined, {}, [], invalid date, ''
const isNullOrEmpty = (value) => !(0, exports.isFunction)(value)
    && (value?.length === 0 || (0, exports.isEmptyArray)(value) || (0, exports.isEmptyObject)(value));
exports.isNullOrEmpty = isNullOrEmpty;
// null, undefined, {}, [], invalid date, '', '    '
const isNullOrWhitespace = (value) => (0, exports.isNullOrEmpty)(value)
    || (typeof (value) === 'string' && !value.trim());
exports.isNullOrWhitespace = isNullOrWhitespace;
//# sourceMappingURL=utils.js.map