import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


class Sheet extends PureComponent {
  render() {
    return (
      <table className={this.props.className}>
        { this.props.headerNames && this.props.headerNames.length>0 &&
          <thead className="data-grid-head">
              <tr className="data-grid-head-tr">
                <th className="data-grid-head-tr-th">
                  <ArrowRightIcon className="table-arrow-svg"/>
                </th>
                {
                  this.props.headerNames.map((v,i) => 
                    <th className="data-grid-head-tr-th">{v}</th>
                  )
                }
              </tr>
          </thead>
        }
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}

Sheet.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  headerNames: PropTypes.array
};

export default Sheet;
