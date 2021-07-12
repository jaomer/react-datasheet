'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowRight = require('@material-ui/icons/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

var _clsx = require('clsx');

var _clsx2 = _interopRequireDefault(_clsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sheet = function Sheet(props) {

  return _react2.default.createElement(
    'table',
    { className: props.className },
    props.headerNames && props.headerNames.length > 0 && _react2.default.createElement(
      'thead',
      { className: 'data-grid-head' },
      _react2.default.createElement(
        'tr',
        { className: 'data-grid-head-tr' },
        _react2.default.createElement(
          'th',
          { className: 'data-grid-head-tr-th' },
          _react2.default.createElement(_ArrowRight2.default, { className: 'table-arrow-svg' })
        ),
        props.headerNames.map(function (v, i) {
          return _react2.default.createElement(
            'th',
            { className: (0, _clsx2.default)("data-grid-head-tr-th", props.hideColumns.indexOf(i) > -1 && 'hide-cell') },
            v
          );
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      props.children
    )
  );
};

Sheet.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.array.isRequired,
  headerNames: _propTypes2.default.array,
  hideColumns: _propTypes2.default.bool
};

exports.default = Sheet;