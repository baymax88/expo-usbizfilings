import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Carousel } from '../../';

var BasicCarouselExample = function (_React$Component) {
  _inherits(BasicCarouselExample, _React$Component);

  function BasicCarouselExample(props) {
    _classCallCheck(this, BasicCarouselExample);

    var _this = _possibleConstructorReturn(this, (BasicCarouselExample.__proto__ || Object.getPrototypeOf(BasicCarouselExample)).call(this, props));

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

  _createClass(BasicCarouselExample, [{
    key: 'onVerticalSelectedIndexChange',
    value: function onVerticalSelectedIndexChange(index) {
      /* tslint:disable: no-console */
      console.log('vertical change to', index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        View,
        { style: { marginTop: 30 } },
        React.createElement(
          View,
          { style: { paddingHorizontal: 15 } },
          React.createElement(
            Text,
            null,
            'horizontal'
          ),
          React.createElement(
            Carousel,
            { style: styles.wrapper, selectedIndex: this.state.selectedIndex, autoplay: true, infinite: true, afterChange: this.onHorizontalSelectedIndexChange, ref: function ref(_ref) {
                return _this2.carousel = _ref;
              } },
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'red' }] },
              React.createElement(
                Text,
                null,
                'Carousel 1'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'blue' }] },
              React.createElement(
                Text,
                null,
                'Carousel 2'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'yellow' }] },
              React.createElement(
                Text,
                null,
                'Carousel 3'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'aqua' }] },
              React.createElement(
                Text,
                null,
                'Carousel 4'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'fuchsia' }] },
              React.createElement(
                Text,
                null,
                'Carousel 5'
              )
            )
          ),
          React.createElement(
            Button,
            { onPress: function onPress() {
                return _this2.carousel && _this2.carousel.goTo(0);
              } },
            'Go to 0'
          )
        ),
        React.createElement(
          View,
          { style: { paddingHorizontal: 15 } },
          React.createElement(
            Text,
            null,
            'vertical'
          ),
          React.createElement(
            Carousel,
            { style: styles.wrapper, selectedIndex: 1, autoplay: this.state.autoplay, infinite: true, afterChange: this.onVerticalSelectedIndexChange, vertical: true },
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'red' }] },
              React.createElement(
                Text,
                null,
                'Carousel 1'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'blue' }] },
              React.createElement(
                Text,
                null,
                'Carousel 2'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'yellow' }] },
              React.createElement(
                Text,
                null,
                'Carousel 3'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'aqua' }] },
              React.createElement(
                Text,
                null,
                'Carousel 4'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'fuchsia' }] },
              React.createElement(
                Text,
                null,
                'Carousel 5'
              )
            )
          ),
          React.createElement(
            Button,
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
}(React.Component);

export default BasicCarouselExample;

var styles = StyleSheet.create({
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