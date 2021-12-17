'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('regenerator-runtime/runtime');

require('./onboard-edebbd7e.js');

require('bignumber.js');

require('bnc-sdk');

require('bowser');

var walletConnect = require('./wallet-connect-4cca6ffd.js');

var gnosisSafeIcon = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"468\" height=\"468\" viewBox=\"0 0 468 468\">\n  <g fill=\"none\" fill-rule=\"evenodd\">\n    <rect width=\"468\" height=\"468\" fill=\"#008C73\" rx=\"29\"/>\n    <path fill=\"#FFF\" d=\"M234,56 C330.649831,56 409,134.350169 409,231 C409,327.649831 330.649831,406 234,406 C137.350169,406 59,327.649831 59,231 C59,134.350169 137.350169,56 234,56 Z M232.148148,180.074074 C203.511161,180.074074 180.296296,203.288939 180.296296,231.925926 C180.296296,260.562913 203.511161,283.777778 232.148148,283.777778 C257.33809,283.777778 278.332675,265.815316 283.021949,242.000345 L362.128267,242.001229 C362.618226,242.073615 363.119549,242.111111 363.62963,242.111111 C369.254752,242.111111 373.814815,237.551048 373.814815,231.925926 C373.814815,226.300803 369.254752,221.740741 363.62963,221.740741 C362.841325,221.740741 362.073938,221.830297 361.337086,221.99979 L283.051012,222.000258 C278.420035,198.111373 257.39051,180.074074 232.148148,180.074074 Z\"/>\n  </g>\n</svg>\n";

function gnosisSafe(options) {
  return walletConnect["default"](_objectSpread({
    label: 'Gnosis Safe',
    svg: gnosisSafeIcon
  }, options));
}

exports["default"] = gnosisSafe;