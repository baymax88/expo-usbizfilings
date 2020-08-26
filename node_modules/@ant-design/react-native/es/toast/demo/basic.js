import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Button, List, Switch, Toast, WhiteSpace, WingBlank } from '../../';
function showToastStack() {
    // multiple toast
    Toast.fail({
        content: 'This is a toast tips 1 !!!',
        duration: 3,
        stackable: true
    });
    Toast.success({
        content: 'This is a toast tips 2 !!!',
        duration: 2,
        stackable: true
    });
    Toast.info({
        content: 'This is a toast tips 3 !!!',
        duration: 1,
        stackable: true
    });
}
function infoToast() {
    Toast.info({
        content: 'Text toast'
    });
}
function successToast() {
    Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
    Toast.info({
        content: 'Toast without mask',
        mask: false
    });
}
function failToast() {
    Toast.fail('Load failed !!!');
}
function offline() {
    Toast.offline('Network connection failed !!!');
}
function loadingToast() {
    Toast.loading({
        content: 'Loading...',
        duration: 1,
        onClose: function onClose() {
            return console.log('Load complete !!!');
        }
    });
}

var ToastExample = function (_React$Component) {
    _inherits(ToastExample, _React$Component);

    function ToastExample() {
        _classCallCheck(this, ToastExample);

        var _this = _possibleConstructorReturn(this, (ToastExample.__proto__ || Object.getPrototypeOf(ToastExample)).apply(this, arguments));

        _this.state = {
            enableMask: Toast.getConfig().mask,
            enableStack: Toast.getConfig().stackable
        };
        _this.alwaysShowToast = function () {
            var key = Toast.info({
                content: 'Toast with duration = 0, removed by timer',
                duration: 0
            });
            _this.timer = setTimeout(function () {
                Toast.remove(key);
            }, 5000);
        };
        return _this;
    }

    _createClass(ToastExample, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            DeviceEventEmitter.removeAllListeners('navigatorBack');
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                WingBlank,
                { style: { marginTop: 20 } },
                React.createElement(
                    List,
                    null,
                    React.createElement(
                        List.Item,
                        { extra: React.createElement(Switch, { checked: this.state.enableMask, onChange: function onChange(mask) {
                                    Toast.config({ mask: mask });
                                    _this2.setState({ enableMask: Toast.getConfig().mask });
                                } }) },
                        'Enable Mask'
                    ),
                    React.createElement(
                        List.Item,
                        { extra: React.createElement(Switch, { checked: this.state.enableStack, onChange: function onChange(stackable) {
                                    Toast.config({ stackable: stackable });
                                    _this2.setState({ enableStack: Toast.getConfig().stackable });
                                } }) },
                        'Enable Stack'
                    )
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: showToastNoMask },
                    'Without mask'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: showToastStack },
                    'Stackable toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: infoToast },
                    'Text toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: successToast },
                    'Success toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: failToast },
                    'Failed toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: offline },
                    'Network failure toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: loadingToast },
                    'Loading toast'
                ),
                React.createElement(WhiteSpace, null),
                React.createElement(
                    Button,
                    { onPress: this.alwaysShowToast },
                    'Toast with duration = 0'
                )
            );
        }
    }]);

    return ToastExample;
}(React.Component);

export default ToastExample;