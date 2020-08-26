import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import { outlineGlyphMap } from '@ant-design/icons-react-native/es/outline';
import React from 'react';
import { ScrollView } from 'react-native';
import { Grid, Icon, SearchBar } from '../../';
var data = Object.keys(outlineGlyphMap).map(function (item) {
    return {
        icon: React.createElement(Icon, { name: item }),
        text: item
    };
});

var IConDemo = function (_React$Component) {
    _inherits(IConDemo, _React$Component);

    function IConDemo() {
        _classCallCheck(this, IConDemo);

        var _this = _possibleConstructorReturn(this, (IConDemo.__proto__ || Object.getPrototypeOf(IConDemo)).apply(this, arguments));

        _this.state = {
            data: data
        };
        return _this;
    }

    _createClass(IConDemo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                ScrollView,
                null,
                React.createElement(SearchBar, { placeholder: 'Search by icon name', onChange: function onChange(text) {
                        _this2.setState(function () {
                            return {
                                data: data.filter(function (d) {
                                    return d.text.match(new RegExp(text, 'gi'));
                                })
                            };
                        });
                    } }),
                React.createElement(Grid, { data: this.state.data, columnNum: 3, hasLine: false })
            );
        }
    }]);

    return IConDemo;
}(React.Component);

export default IConDemo;

export var title = 'Icon';
export var description = 'Icon Example';