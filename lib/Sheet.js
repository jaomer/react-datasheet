'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sheet = function (_PureComponent) {
  _inherits(Sheet, _PureComponent);

  function Sheet() {
    _classCallCheck(this, Sheet);

    return _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).apply(this, arguments));
  }

  _createClass(Sheet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: this.props.className },
        this.props.headerNames && this.props.headerNames.length > 0 && _react2.default.createElement(
          'thead',
          { className: 'data-grid-head' },
          _react2.default.createElement(
            'tr',
            { className: 'data-grid-head-tr' },
            this.props.headerNames.map(function (v, i) {
              return _react2.default.createElement(
                'th',
                { className: 'data-grid-head-tr-th' },
                v
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Sheet;
}(_react.PureComponent);

Sheet.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.array.isRequired,
  headerNames: _propTypes2.default.array
};

exports.default = Sheet;