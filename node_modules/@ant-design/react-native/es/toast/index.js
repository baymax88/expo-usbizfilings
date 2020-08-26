import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import Portal from '../portal';
import ToastContainer from './ToastContainer';
var SHORT = 3;
var defaultConfig = {
    duration: SHORT,
    onClose: function onClose() {},
    mask: true,
    stackable: true
};
var defaultProps = _extends({}, defaultConfig);
var toastKeyMap = {};
function removeAll() {
    Object.keys(toastKeyMap).forEach(function (_key) {
        return Portal.remove(Number.parseInt(_key, 10));
    });
}
function notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps.duration;
    var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps.onClose;
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps.mask;

    var props = _extends(_extends({}, defaultProps), { content: content, type: type,
        duration: duration,
        onClose: onClose,
        mask: mask });
    if (typeof content !== 'string') {
        props = _extends(_extends({}, props), content);
    }
    if (!props.stackable) {
        removeAll();
    }
    var key = Portal.add(React.createElement(ToastContainer, { content: props.content, duration: props.duration, onClose: props.onClose, type: props.type, mask: props.mask, onAnimationEnd: function onAnimationEnd() {
            Portal.remove(key);
            delete toastKeyMap[key];
        } }));
    toastKeyMap[key] = 1;
    return key;
}
export default {
    SHORT: SHORT,
    LONG: 8,
    defaultConfig: defaultConfig,
    getConfig: function getConfig() {
        return _extends({}, defaultProps);
    },
    config: function config(props) {
        defaultProps = _extends(_extends({}, defaultProps), props);
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
        Portal.remove(key);
    },

    removeAll: removeAll
};