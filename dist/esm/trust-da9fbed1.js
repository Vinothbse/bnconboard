function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { m as mobileWalletInstallMessage } from './content-60ae07c5.js';
import { t as trustWalletIcon } from './icon-trust-wallet-f30b13f5.js'; // import trustIcon from '../wallet-icons/icon-trust'

function trust(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'Trust Wallet',
    svg: svg || trustWalletIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
        var getProviderName, getAddress, getNetwork, getBalance, trustProvider, isTrust, createProvider, provider, warned;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;
                trustProvider = window.ethereum || window.web3 && window.web3.currentProvider;
                isTrust = getProviderName(trustProvider) === 'Trust';

                if (!(isTrust && rpcUrl)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return import('./providerEngine-dc9ab267.js');

              case 6:
                createProvider = _context2.sent["default"];

              case 7:
                provider = createProvider ? createProvider({
                  rpcUrl: rpcUrl
                }) : null;
                warned = false;
                return _context2.abrupt("return", {
                  provider: trustProvider,
                  "interface": isTrust ? {
                    address: {
                      get: function get() {
                        return getAddress(trustProvider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(trustProvider);
                      }
                    },
                    balance: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (provider) {
                                    _context.next = 3;
                                    break;
                                  }

                                  if (!warned) {
                                    console.warn('The Trust provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Trust wallet initialization object to get the balance.');
                                    warned = true;
                                  }

                                  return _context.abrupt("return", null);

                                case 3:
                                  _context.next = 5;
                                  return getAddress(trustProvider);

                                case 5:
                                  address = _context.sent;
                                  return _context.abrupt("return", getBalance(provider, address));

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    name: getProviderName(trustProvider)
                  } : null
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: "https://link.trustwallet.com/open_url?coin_id=60&url=".concat(window.location.href),
    installMessage: mobileWalletInstallMessage,
    mobile: true,
    preferred: preferred
  };
}

export default trust;