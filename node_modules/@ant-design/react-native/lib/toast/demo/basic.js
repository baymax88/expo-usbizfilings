'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function showToastStack() {
    // multiple toast
    _.Toast.fail({
        content: 'This is a toast tips 1 !!!',
        duration: 3,
        stackable: true
    });
    _.Toast.success({
        content: 'This is a toast tips 2 !!!',
        duration: 2,
        stackable: true
    });
    _.Toast.info({
        content: 'This is a toast tips 3 !!!',
        duration: 1,
        stackable: true
    });
} /* tslint:disable:no-console */

function infoToast() {
    _.Toast.info({
        content: 'Text toast'
    });
}
function successToast() {
    _.Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
    _.Toast.info({
        content: 'Toast without mask',
        mask: false
    });
}
function failToast() {
    _.Toast.fail('Load failed !!!');
}
function offline() {
    _.Toast.offline('Network connection failed !!!');
}
function loadingToast() {
    _.Toast.loading({
        content: 'Loading...',
        duration: 1,
        onClose: function onClose() {
            return console.log('Load complete !!!');
        }
    });
}

var ToastExample = function (_React$Component) {
    (0, _inherits3['default'])(ToastExample, _React$Component);

    function ToastExample() {
        (0, _classCallCheck3['default'])(this, ToastExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).apply(this, arguments));

        _this.state = {
            enableMask: _.Toast.getConfig().mask,
            enableStack: _.Toast.getConfig().stackable
        };
        _this.alwaysShowToast = function () {
            var key = _.Toast.info({
                content: 'Toast with duration = 0, removed by timer',
                duration: 0
            });
            _this.timer = setTimeout(function () {
                _.Toast.remove(key);
            }, 5000);
        };
        return _this;
    }

    (0, _createClass3['default'])(ToastExample, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactNative.DeviceEventEmitter.removeAllListeners('navigatorBack');
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                _.WingBlank,
                { style: { marginTop: 20 } },
                _react2['default'].createElement(
                    _.List,
                    null,
                    _react2['default'].createElement(
                        _.List.Item,
                        { extra: _react2['default'].createElement(_.Switch, { checked: this.state.enableMask, onChange: function onChange(mask) {
                                    _.Toast.config({ mask: mask });
                                    _this2.setState({ enableMask: _.Toast.getConfig().mask });
                                } }) },
                        'Enable Mask'
                    ),
                    _react2['default'].createElement(
                        _.List.Item,
                        { extra: _react2['default'].createElement(_.Switch, { checked: this.state.enableStack, onChange: function onChange(stackable) {
                                    _.Toast.config({ stackable: stackable });
                                    _this2.setState({ enableStack: _.Toast.getConfig().stackable });
                                } }) },
                        'Enable Stack'
                    )
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: showToastNoMask },
                    'Without mask'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: showToastStack },
                    'Stackable toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: infoToast },
                    'Text toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: successToast },
                    'Success toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: failToast },
                    'Failed toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: offline },
                    'Network failure toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: loadingToast },
                    'Loading toast'
                ),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(
                    _.Button,
                    { onPress: this.alwaysShowToast },
                    'Toast with duration = 0'
                )
            );
        }
    }]);
    return ToastExample;
}(_react2['default'].Component);

exports['default'] = ToastExample;
module.exports = exports['default'];