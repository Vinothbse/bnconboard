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

var valoraIcon = "\n<svg width=\"40\" height=\"40\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_d)\">\n<path d=\"M18.3897 26.7712C19.4617 18.4095 23.3925 13.6505 29.3333 9.33624L26.2959 5.33331C22.4098 8.31327 18.1663 12.5386 16.201 18.3651C14.5929 13.606 11.2428 9.4252 5.83804 5.33331L2.66663 9.4252C9.41146 14.2287 12.8062 19.6104 13.7442 26.7712H18.3897Z\" fill=\"url(#paint0_linear)\"/>\n</g>\n<defs>\n<filter id=\"filter0_d\" x=\"0.666626\" y=\"3.33331\" width=\"30.6667\" height=\"25.4379\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n<feOffset/>\n<feGaussianBlur stdDeviation=\"1\"/>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.180392 0 0 0 0 0.2 0 0 0 0 0.219608 0 0 0 0.15 0\"/>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n</filter>\n<linearGradient id=\"paint0_linear\" x1=\"34.3375\" y1=\"10.0543\" x2=\"28.9369\" y2=\"30.4899\" gradientUnits=\"userSpaceOnUse\">\n<stop offset=\"0.117564\" stop-color=\"#35D07F\"/>\n<stop offset=\"0.802083\" stop-color=\"#FBCC5C\"/>\n</linearGradient>\n</defs>\n</svg>\n";

function valora(options) {
  return walletConnect["default"](_objectSpread({
    label: 'Valora',
    svg: valoraIcon
  }, options));
}

exports["default"] = valora;