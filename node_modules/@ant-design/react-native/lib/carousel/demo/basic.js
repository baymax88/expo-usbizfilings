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

var BasicCarouselExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicCarouselExample, _React$Component);

  function BasicCarouselExample(props) {
    (0, _classCallCheck3['default'])(this, BasicCarouselExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicCarouselExample.__proto__ || Object.getPrototypeOf(BasicCarouselExample)).call(this, props));

    _this.onHorizontalSelectedIndexChange = function (index) {
      /* tslint:disable: no-console */
      console.log('horizontal change to', index);
      _this.setState({ selectedIndex: index });
    };
    _this.state = {
      selectedIndex: 2,
      autoplay: true
    };
    return _this;
  }

  (0, _createClass3['default'])(BasicCarouselExample, [{
    key: 'onVerticalSelectedIndexChange',
    value: function onVerticalSelectedIndexChange(index) {
      /* tslint:disable: no-console */
      console.log('vertical change to', index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        _reactNative.View,
        { style: { marginTop: 30 } },
        _react2['default'].createElement(
          _reactNative.View,
          { style: { paddingHorizontal: 15 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'horizontal'
          ),
          _react2['default'].createElement(
            _.Carousel,
            { style: styles.wrapper, selectedIndex: this.state.selectedIndex, autoplay: true, infinite: true, afterChange: this.onHorizontalSelectedIndexChange, ref: function ref(_ref) {
                return _this2.carousel = _ref;
              } },
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerHorizontal, { backgroundColor: 'red' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 1'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerHorizontal, { backgroundColor: 'blue' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 2'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerHorizontal, { backgroundColor: 'yellow' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 3'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerHorizontal, { backgroundColor: 'aqua' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 4'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerHorizontal, { backgroundColor: 'fuchsia' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 5'
              )
            )
          ),
          _react2['default'].createElement(
            _.Button,
            { onPress: function onPress() {
                return _this2.carousel && _this2.carousel.goTo(0);
              } },
            'Go to 0'
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          { style: { paddingHorizontal: 15 } },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'vertical'
          ),
          _react2['default'].createElement(
            _.Carousel,
            { style: styles.wrapper, selectedIndex: 1, autoplay: this.state.autoplay, infinite: true, afterChange: this.onVerticalSelectedIndexChange, vertical: true },
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerVertical, { backgroundColor: 'red' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 1'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerVertical, { backgroundColor: 'blue' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 2'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerVertical, { backgroundColor: 'yellow' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 3'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerVertical, { backgroundColor: 'aqua' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 4'
              )
            ),
            _react2['default'].createElement(
              _reactNative.View,
              { style: [styles.containerVertical, { backgroundColor: 'fuchsia' }] },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                'Carousel 5'
              )
            )
          ),
          _react2['default'].createElement(
            _.Button,
            { onPress: function onPress() {
                return _this2.setState({ autoplay: !_this2.state.autoplay });
              } },
            'Toggle autoplay ',
            this.state.autoplay ? 'true' : 'false'
          )
        )
      );
    }
  }]);
  return BasicCarouselExample;
}(_react2['default'].Component);

exports['default'] = BasicCarouselExample;

var styles = _reactNative.StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
});
module.exports = exports['default'];