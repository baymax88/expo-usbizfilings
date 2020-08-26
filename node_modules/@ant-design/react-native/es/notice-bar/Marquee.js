import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

var Marquee = function (_React$PureComponent) {
    _inherits(Marquee, _React$PureComponent);

    function Marquee(props) {
        _classCallCheck(this, Marquee);

        var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

        _this.onLayout = function (e) {
            if (_this.state.twidth) {
                return;
            }
            _this.setState({
                twidth: e.nativeEvent.layout.width
            }, function () {
                // onLayout may be earlier than onLayoutContainer on android, can not be sure width < twidth at that time.
                _this.tryStart();
            });
        };
        _this.onLayoutContainer = function (e) {
            if (!_this.state.width) {
                _this.setState({
                    width: e.nativeEvent.layout.width
                }, function () {
                    _this.left.setValue(0);
                    _this.tryStart();
                });
            }
        };
        _this.startMove = function () {
            var _this$props = _this.props,
                _this$props$fps = _this$props.fps,
                fps = _this$props$fps === undefined ? 40 : _this$props$fps,
                loop = _this$props.loop;

            var SPPED = 1 / fps * 1000;
            // tslint:disable-next-line:no-this-assignment
            var props = _this.props;

            Animated.timing(_this.left, {
                toValue: 1,
                duration: _this.state.twidth * SPPED,
                easing: Easing.linear,
                delay: props.leading,
                isInteraction: false,
                useNativeDriver: true
            }).start(function () {
                if (loop) {
                    _this.moveToHeader();
                }
            });
        };
        _this.moveToHeader = function () {
            Animated.timing(_this.left, {
                toValue: 0,
                duration: 0,
                delay: _this.props.trailing,
                isInteraction: false,
                useNativeDriver: true
            }).start(function () {
                _this.startMove();
            });
        };
        _this.texts = {};
        _this.left = new Animated.Value(0);
        _this.state = {
            twidth: 0,
            width: 0
        };
        return _this;
    }

    _createClass(Marquee, [{
        key: 'tryStart',
        value: function tryStart() {
            if (this.state.twidth > this.state.width && this.state.width) {
                this.startMove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                width = _state.width,
                twidth = _state.twidth;
            var _props = this.props,
                style = _props.style,
                text = _props.text,
                maxWidth = _props.maxWidth;

            var textChildren = React.createElement(
                Text,
                { onLayout: this.onLayout, numberOfLines: 1, ellipsizeMode: 'tail', style: style },
                text
            );
            return React.createElement(
                View,
                { style: { flex: 1, flexDirection: 'row', alignItems: 'center' }, onLayout: this.onLayoutContainer },
                React.createElement(
                    Animated.View,
                    {
                        // tslint:disable-next-line:jsx-no-multiline-js
                        style: {
                            flexDirection: 'row',
                            transform: [{
                                translateX: this.left.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -twidth + width]
                                })
                            }],
                            width: maxWidth
                        } },
                    textChildren
                )
            );
        }
    }]);

    return Marquee;
}(React.PureComponent);

Marquee.defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    maxWidth: 1000
};
export default Marquee;