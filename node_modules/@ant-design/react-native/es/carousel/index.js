import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import ViewPager from '@react-native-community/viewpager';
import React from 'react';
import { Text, View } from 'react-native';
import { WithTheme } from '../style';
import CarouselStyles from './style/index';
var defaultPagination = function defaultPagination(props) {
    var styles = props.styles,
        current = props.current,
        vertical = props.vertical,
        count = props.count,
        dotStyle = props.dotStyle,
        dotActiveStyle = props.dotActiveStyle;

    var positionStyle = vertical ? 'paginationY' : 'paginationX';
    var flexDirection = vertical ? 'column' : 'row';
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(React.createElement(View, { key: 'dot-' + i, style: [styles.pointStyle, styles.spaceStyle, dotStyle, i === current && styles.pointActiveStyle, i === current && dotActiveStyle] }));
    }
    return React.createElement(
        View,
        { style: [styles.pagination, styles[positionStyle]] },
        React.createElement(
            View,
            { style: { flexDirection: flexDirection } },
            arr
        )
    );
};

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.viewPager = React.createRef();
        _this.getChildrenCount = function (children) {
            var count = children ? React.Children.count(children) || 1 : 0;
            return count;
        };
        _this.autoplay = function () {
            var stop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (stop) {
                clearTimeout(_this.autoplayTimer);
                return;
            }
            var _this$props = _this.props,
                children = _this$props.children,
                autoplay = _this$props.autoplay,
                infinite = _this$props.infinite,
                autoplayInterval = _this$props.autoplayInterval;
            var _this$state = _this.state,
                isScrolling = _this$state.isScrolling,
                selectedIndex = _this$state.selectedIndex;

            var count = _this.getChildrenCount(children);
            if (!Array.isArray(children) || !autoplay || isScrolling) {
                return;
            }
            clearTimeout(_this.autoplayTimer);
            _this.autoplayTimer = setTimeout(function () {
                var newIndex = selectedIndex < count ? selectedIndex + 1 : 0;
                if (selectedIndex === count - 1) {
                    newIndex = 0;
                    if (!infinite) {
                        clearTimeout(_this.autoplayTimer);
                        return;
                    }
                }
                _this.goTo(newIndex);
            }, autoplayInterval);
        };
        _this.renderDots = function (index) {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                vertical = _this$props2.vertical,
                pagination = _this$props2.pagination,
                dotStyle = _this$props2.dotStyle,
                dotActiveStyle = _this$props2.dotActiveStyle;

            if (!pagination) {
                return null;
            }
            var count = _this.getChildrenCount(children);
            return React.createElement(
                WithTheme,
                { themeStyles: CarouselStyles, styles: _this.props.styles },
                function (styles) {
                    return pagination({
                        styles: styles,
                        vertical: vertical,
                        current: index,
                        count: count,
                        dotStyle: dotStyle,
                        dotActiveStyle: dotActiveStyle
                    });
                }
            );
        };
        var _this$props3 = _this.props,
            children = _this$props3.children,
            selectedIndex = _this$props3.selectedIndex;

        var count = _this.getChildrenCount(children);
        var index = count > 1 ? Math.min(selectedIndex, count - 1) : 0;
        _this.state = {
            isScrolling: false,
            selectedIndex: index
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.autoplay();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.autoplayTimer);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.autoplay !== undefined && prevProps.autoplay !== this.props.autoplay) {
                this.autoplay(!this.props.autoplay);
            }
        }
        /**
         * go to index
         * @param index
         */

    }, {
        key: 'goTo',
        value: function goTo(index) {
            this.setState({ selectedIndex: index });
            // @ts-ignore
            this.viewPager.current.setPage(index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var selectedIndex = this.state.selectedIndex;
            var _props = this.props,
                dots = _props.dots,
                children = _props.children,
                vertical = _props.vertical;

            if (!children) {
                return React.createElement(
                    Text,
                    { style: { backgroundColor: 'white' } },
                    'You are supposed to add children inside Carousel'
                );
            }
            var count = this.getChildrenCount(children);
            var pages = void 0;
            if (count > 1) {
                var childrenArray = React.Children.toArray(children);
                pages = childrenArray.map(function (page, i) {
                    return (
                        // when vertical, use the height of the first child as the height of the Carousel
                        React.createElement(
                            View,
                            { key: i },
                            page
                        )
                    );
                });
            } else {
                pages = React.createElement(
                    View,
                    null,
                    children
                );
            }
            var vpProps = {
                initialPage: selectedIndex,
                showPageIndicator: false,
                onPageSelected: function onPageSelected(e) {
                    _this2.setState({ selectedIndex: e.nativeEvent.position });
                    _this2.autoplay();
                    if (_this2.props.afterChange) {
                        _this2.props.afterChange(e.nativeEvent.position);
                    }
                },
                onPageScrollStateChanged: function onPageScrollStateChanged(e) {
                    switch (e.nativeEvent.pageScrollState) {
                        case 'dragging':
                            _this2.autoplay(true);
                            _this2.setState({ isScrolling: true });
                            break;
                        case 'idle':
                        case 'settling':
                            _this2.autoplay();
                            _this2.setState({ isScrolling: false });
                        default:
                            break;
                    }
                }
            };
            return React.createElement(
                View,
                { style: {
                        overflow: 'hidden'
                    } },
                React.createElement(
                    ViewPager,
                    _extends({}, vpProps, { style: this.props.style
                        // Lib does not support dynamically orientation change
                        , orientation: vertical ? 'vertical' : 'horizontal'
                        // Lib does not support dynamically transitionStyle change
                        , transitionStyle: 'scroll', ref: this.viewPager }),
                    pages
                ),
                dots && this.renderDots(selectedIndex)
            );
        }
    }]);

    return Carousel;
}(React.Component);

Carousel.defaultProps = {
    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    vertical: false,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {}
};
export default Carousel;