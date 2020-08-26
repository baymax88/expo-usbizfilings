'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SHORT = 3;
var defaultConfig = {
    duration: SHORT,
    onClose: function onClose() {},
    mask: true,
    stackable: true
};
var defaultProps = (0, _extends3['default'])({}, defaultConfig);
var toastKeyMap = {};
function removeAll() {
    Object.keys(toastKeyMap).forEach(function (_key) {
        return _portal2['default'].remove(Number.parseInt(_key, 10));
    });
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps.duration;
    var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps.onClose;
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps.mask;

    var props = (0, _extends3['default'])((0, _extends3['default'])({}, defaultProps), { content: content, type: type,
        duration: duration,
        onClose: onClose,
        mask: mask });
    if (typeof content !== 'string') {
        props = (0, _extends3['default'])((0, _extends3['default'])({}, props), content);
    }
    if (!props.stackable) {
        removeAll();
    }
    var key = _portal2['default'].add(_react2['default'].createElement(_ToastContainer2['default'], { content: props.content, duration: props.duration, onClose: props.onClose, type: props.type, mask: props.mask, onAnimationEnd: function onAnimationEnd() {
            _portal2['default'].remove(key);
            delete toastKeyMap[key];
        } }));
    toastKeyMap[key] = 1;
    return key;
}
exports['default'] = {
    SHORT: SHORT,
    LONG: 8,
    defaultConfig: defaultConfig,
    getConfig: function getConfig() {
        return (0, _extends3['default'])({}, defaultProps);
    },
    config: function config(props) {
        defaultProps = (0, _extends3['default'])((0, _extends3['default'])({}, defaultProps), props);
    },

    /**
     * @deprecated use Toast.info instead
     */
    show: function show(props, duration, mask) {
        return notice(props, 'info', duration, function () {}, mask);
    },

    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    info: function info(props, duration, onClose, mask) {
        return notice(props, 'info', duration, onClose, mask);
    },

    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    success: function success(props, duration, onClose, mask) {
        return notice(props, 'success', duration, onClose, mask);
    },

    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    fail: function fail(props, duration, onClose, mask) {
        return notice(props, 'fail', duration, onClose, mask);
    },

    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    offline: function offline(props, duration, onClose, mask) {
        return notice(props, 'offline', duration, onClose, mask);
    },

    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    loading: function loading(props, duration, onClose, mask) {
        return notice(props, 'loading', duration, onClose, mask);
    },
    remove: function remove(key) {
        _portal2['default'].remove(key);
    },

    removeAll: removeAll
};
module.exports = exports['default'];