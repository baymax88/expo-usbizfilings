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

var _portal = require('../portal');

var _portal2 = _interopRequireDefault(_portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styles = _reactNative.StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    mask: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    content: {
        backgroundColor: 'white'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});
var screen = _reactNative.Dimensions.get('window');

var RCModal = function (_React$Component) {
    (0, _inherits3['default'])(RCModal, _React$Component);

    function RCModal(props) {
        (0, _classCallCheck3['default'])(this, RCModal);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RCModal.__proto__ || Object.getPrototypeOf(RCModal)).call(this, props));

        _this.onBackAndroid = function () {
            var onRequestClose = _this.props.onRequestClose;

            if (typeof onRequestClose === 'function') {
                return onRequestClose();
            }
            // the default is false for compatible the old version & not required in android
            return false;
        };
        _this.animateMask = function (visible) {
            _this.stopMaskAnim();
            _this.state.opacity.setValue(_this.getOpacity(!visible));
            _this.animMask = _reactNative.Animated.timing(_this.state.opacity, {
                toValue: _this.getOpacity(visible),
                duration: _this.props.animationDuration,
                useNativeDriver: true
            });
            _this.animMask.start(function () {
                _this.animMask = null;
            });
        };
        _this.stopMaskAnim = function () {
            if (_this.animMask) {
                _this.animMask.stop();
                _this.animMask = null;
            }
        };
        _this.stopDialogAnim = function () {
            if (_this.animDialog) {
                _this.animDialog.stop();
                _this.animDialog = null;
            }
        };
        _this.animateDialog = function (visible) {
            _this.stopDialogAnim();
            _this.animateMask(visible);
            var _this$props = _this.props,
                animationType = _this$props.animationType,
                animationDuration = _this$props.animationDuration;

            animationDuration = animationDuration;
            if (animationType !== 'none') {
                if (animationType === 'slide-up' || animationType === 'slide-down') {
                    _this.state.position.setValue(_this.getPosition(!visible));
                    _this.animDialog = _reactNative.Animated.timing(_this.state.position, {
                        toValue: _this.getPosition(visible),
                        duration: animationDuration,
                        easing: visible ? _reactNative.Easing.elastic(0.8) : undefined,
                        useNativeDriver: true
                    });
                } else if (animationType === 'fade') {
                    _this.animDialog = _reactNative.Animated.parallel([_reactNative.Animated.timing(_this.state.opacity, {
                        toValue: _this.getOpacity(visible),
                        duration: animationDuration,
                        easing: visible ? _reactNative.Easing.elastic(0.8) : undefined,
                        useNativeDriver: true
                    }), _reactNative.Animated.spring(_this.state.scale, {
                        toValue: _this.getScale(visible),
                        useNativeDriver: true
                    })]);
                }
                _this.animDialog.start(function () {
                    _this.animDialog = null;
                    if (!visible) {
                        _this.setState({
                            modalVisible: false
                        });
                        _reactNative.BackHandler.removeEventListener('hardwareBackPress', _this.onBackAndroid);
                    }
                    if (_this.props.onAnimationEnd) {
                        _this.props.onAnimationEnd(visible);
                    }
                });
            } else {
                if (!visible) {
                    _this.setState({
                        modalVisible: false
                    });
                    _reactNative.BackHandler.removeEventListener('hardwareBackPress', _this.onBackAndroid);
                }
            }
        };
        _this.close = function () {
            _this.animateDialog(false);
        };
        _this.onMaskClose = function () {
            if (_this.props.maskClosable && _this.props.onClose) {
                _this.props.onClose();
                _reactNative.BackHandler.removeEventListener('hardwareBackPress', _this.onBackAndroid);
            }
        };
        _this.getPosition = function (visible) {
            if (visible) {
                return 0;
            }
            return _this.props.animationType === 'slide-down' ? -screen.height : screen.height;
        };
        _this.getScale = function (visible) {
            return visible ? 1 : 1.05;
        };
        _this.getOpacity = function (visible) {
            return visible ? 1 : 0;
        };
        var visible = props.visible;

        _this.state = {
            position: new _reactNative.Animated.Value(_this.getPosition(visible)),
            scale: new _reactNative.Animated.Value(_this.getScale(visible)),
            opacity: new _reactNative.Animated.Value(_this.getOpacity(visible)),
            modalVisible: visible
        };
        return _this;
    }

    (0, _createClass3['default'])(RCModal, [{
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
            if (this.shouldComponentUpdate(nextProps, null)) {
                this.setState({
                    modalVisible: true
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.visible || this.props.visible !== nextProps.visible) {
                return true;
            }
            if (nextState) {
                if (nextState.modalVisible !== this.state.modalVisible) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.animateAppear && this.props.animationType !== 'none') {
                _reactNative.BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
                this.componentDidUpdate({});
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var props = this.props;

            if (prevProps.visible !== props.visible) {
                this.animateDialog(props.visible);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactNative.BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
            this.stopDialogAnim();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;

            if (!this.state.modalVisible) {
                return null;
            }
            var animationStyleMap = {
                none: {},
                'slide-up': { transform: [{ translateY: this.state.position }] },
                'slide-down': { transform: [{ translateY: this.state.position }] },
                fade: {
                    transform: [{ scale: this.state.scale }],
                    opacity: this.state.opacity
                }
            };
            return _react2['default'].createElement(
                _portal2['default'],
                null,
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.wrap, props.wrapStyle] },
                    _react2['default'].createElement(
                        _reactNative.TouchableWithoutFeedback,
                        { onPress: this.onMaskClose },
                        _react2['default'].createElement(
                            _reactNative.Animated.View,
                            { style: [styles.absolute, { opacity: this.state.opacity }] },
                            _react2['default'].createElement(_reactNative.View, { style: [styles.absolute, props.maskStyle] })
                        )
                    ),
                    _react2['default'].createElement(
                        _reactNative.Animated.View,
                        { style: [styles.content, props.style, animationStyleMap[props.animationType]] },
                        this.props.children
                    )
                )
            );
        }
    }]);
    return RCModal;
}(_react2['default'].Component);

exports['default'] = RCModal;

RCModal.defaultProps = {
    wrapStyle: styles.wrap,
    maskStyle: styles.mask,
    animationType: 'slide-up',
    animateAppear: false,
    animationDuration: 300,
    visible: false,
    maskClosable: true,
    onClose: function onClose() {},
    onAnimationEnd: function onAnimationEnd(_visible) {}
};
module.exports = exports['default'];