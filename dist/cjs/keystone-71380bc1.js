'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

function _interopNamespace(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    var n = {};

    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function get() {
            return e[k];
          }
        });
      });
    }

    n['default'] = e;
    return n;
  }
}

var AirGapedKeyring = _interopDefault(require('@keystonehq/eth-keyring'));

var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function keystone(options) {
  var appName = options.appName,
      rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      customNetwork = options.customNetwork;
  return {
    name: label || 'Keystone',
    svg: svg,
    iconSrc: img,
    iconSrcSet: iconSrc || img$1,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return keystoneProvider({
                  appName: appName,
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState,
                  customNetwork: customNetwork
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Keystone',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
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
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: [],
    preferred: preferred
  };
}

function keystoneProvider(_x2) {
  return _keystoneProvider.apply(this, arguments);
}

function _keystoneProvider() {
  _keystoneProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(options) {
    var _yield$Promise, Transaction, _yield$Promise2, Common, _yield$Promise3, createProvider, BASE_PATH, networkId, rpcUrl, BigNumber, networkName, customNetwork, keyring, dPath, addressList, enabled, customPath, provider, disconnect, setPath, _setPath, isCustomPath, enable, setPrimaryAccount, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2, _signTypedMessage, _signTypedMessage2;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _signTypedMessage2 = function _signTypedMessage4() {
              _signTypedMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref2) {
                var data;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        data = _ref2.data;

                        if (!(addressList.length === 0)) {
                          _context11.next = 4;
                          break;
                        }

                        _context11.next = 4;
                        return enable();

                      case 4:
                        _context11.prev = 4;

                        if (!(typeof data === 'string')) {
                          _context11.next = 7;
                          break;
                        }

                        return _context11.abrupt("return", keyring.signTypedData(getPrimaryAddress(), JSON.parse(data)));

                      case 7:
                        if (!(_typeof(data) === 'object')) {
                          _context11.next = 9;
                          break;
                        }

                        return _context11.abrupt("return", keyring.signTypedData(getPrimaryAddress(), data));

                      case 9:
                        throw new Error('invalid typed data');

                      case 12:
                        _context11.prev = 12;
                        _context11.t0 = _context11["catch"](4);
                        throw _context11.t0;

                      case 15:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[4, 12]]);
              }));
              return _signTypedMessage2.apply(this, arguments);
            };

            _signTypedMessage = function _signTypedMessage3(_x8) {
              return _signTypedMessage2.apply(this, arguments);
            };

            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(message) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context10.next = 3;
                          break;
                        }

                        _context10.next = 3;
                        return enable();

                      case 3:
                        _context10.prev = 3;
                        return _context10.abrupt("return", keyring.signPersonalMessage(getPrimaryAddress(), message.data));

                      case 7:
                        _context10.prev = 7;
                        _context10.t0 = _context10["catch"](3);
                        throw _context10.t0;

                      case 10:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[3, 7]]);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x7) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(transactionData) {
                var _transactionData$gas;

                var common, transaction, signedTx;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!(addressList.length === 0)) {
                          _context9.next = 3;
                          break;
                        }

                        _context9.next = 3;
                        return enable();

                      case 3:
                        common = new Common({
                          chain: customNetwork || networkName(networkId)
                        });
                        transaction = Transaction.fromTxData(_objectSpread(_objectSpread({}, transactionData), {}, {
                          gasLimit: (_transactionData$gas = transactionData.gas) !== null && _transactionData$gas !== void 0 ? _transactionData$gas : transactionData.gasLimit
                        }), {
                          common: common,
                          freeze: false
                        });
                        _context9.prev = 5;
                        _context9.next = 8;
                        return keyring.signTransaction(getPrimaryAddress(), transaction);

                      case 8:
                        signedTx = _context9.sent;
                        return _context9.abrupt("return", "0x".concat(signedTx.serialize().toString('hex')));

                      case 12:
                        _context9.prev = 12;
                        _context9.t0 = _context9["catch"](5);
                        throw _context9.t0;

                      case 15:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[5, 12]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x6) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(getMore) {
                var currentPrimary;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (enabled) {
                          _context8.next = 2;
                          break;
                        }

                        return _context8.abrupt("return", []);

                      case 2:
                        if (!(addressList.length > 0 && !getMore)) {
                          _context8.next = 4;
                          break;
                        }

                        return _context8.abrupt("return", addressList);

                      case 4:
                        _context8.prev = 4;
                        _context8.next = 7;
                        return keyring.addAccounts(keyring.getAccounts().length + 5);

                      case 7:
                        addressList = _context8.sent;
                        currentPrimary = getPrimaryAddress();
                        setPrimaryAccount(currentPrimary);
                        _context8.next = 15;
                        break;

                      case 12:
                        _context8.prev = 12;
                        _context8.t0 = _context8["catch"](4);
                        throw _context8.t0;

                      case 15:
                        return _context8.abrupt("return", addressList);

                      case 16:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[4, 12]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x4) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context7.sent;
                        return _context7.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return keyring.getCurrentAddress();
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              var index = addressList.findIndex(function (addr) {
                return addr === address;
              }) || 0;
              keyring.setCurrentAccount(index);

              var accounts = _toConsumableArray(addressList);

              accounts.unshift(accounts.splice(index, 1)[0]);
              addressList = accounts;
            };

            enable = function _enable() {
              if (enabled) {
                return _getAccounts();
              }

              return keyring.readKeyring().then(function () {
                enabled = true;
                return _getAccounts();
              });
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(path !== BASE_PATH)) {
                          _context6.next = 2;
                          break;
                        }

                        throw new Error("Keystone only supports standard path: m/44'/0'/0'/0/x");

                      case 2:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 5:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              enabled = false;
              addressList = [];
              provider.stop();
            };

            _context12.next = 21;
            return new Promise(function (resolve) {
              resolve(_interopNamespace(require('@ethereumjs/tx')));
            });

          case 21:
            _yield$Promise = _context12.sent;
            Transaction = _yield$Promise.Transaction;
            _context12.next = 25;
            return new Promise(function (resolve) {
              resolve(_interopNamespace(require('@ethereumjs/common')));
            });

          case 25:
            _yield$Promise2 = _context12.sent;
            Common = _yield$Promise2["default"];
            _context12.next = 29;
            return new Promise(function (resolve) {
              resolve(require('./providerEngine-1a9b6d4c.js'));
            });

          case 29:
            _yield$Promise3 = _context12.sent;
            createProvider = _yield$Promise3["default"];
            BASE_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName, customNetwork = options.customNetwork;
            keyring = AirGapedKeyring.getEmptyKeyring();
            dPath = '';
            addressList = Array.from([]);
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTypedMessage: function signTypedMessage(messageData, callback) {
                _signTypedMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context12.abrupt("return", provider);

          case 52:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _keystoneProvider.apply(this, arguments);
}

exports["default"] = keystone;