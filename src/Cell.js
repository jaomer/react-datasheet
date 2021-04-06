import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CellShape from './CellShape';

export default class Cell extends PureComponent {
  render() {
    const {
      cell,
      row,
      col,
      attributesRenderer,
      className,
      style,
      onMouseDown,
      onMouseOver,
      onDoubleClick,
      onContextMenu,
    } = this.props;

    const { colSpan, rowSpan } = cell;
    const attributes = attributesRenderer
      ? attributesRenderer(cell, row, col)
      : {};

    return (
      <td
        className={className}
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        onDoubleClick={onDoubleClick}
        onTouchEnd={onDoubleClick}
        onContextMenu={onContextMenu}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={style}
        {...attributes}
      >
          
          {
            (this.props.selected) && (
              <svg className="cell-selected-svg">
                <rect x="1.5" y="1.5" className="cell-selected-rect"/>
                {
                  this.props.editing && (
                    <rect x="1.5" y="1.5" className="cell-editing-rect"/>
                  )
                }
              </svg>              
            )
          }
        {this.props.children}
        {
            this.props.selected && (
              <div className="cell-border-div"></div>              
            )
          }
      </td>
    );
  }
}

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  cell: PropTypes.shape(CellShape).isRequired,
  selected: PropTypes.bool,
  editing: PropTypes.bool,
  updated: PropTypes.bool,
  attributesRenderer: PropTypes.func,
  onMouseDown: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Cell.defaultProps = {
  selected: false,
  editing: false,
  updated: false,
  attributesRenderer: () => {},
};
