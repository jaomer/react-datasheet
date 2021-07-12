import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import clsx from 'clsx'

const Sheet = props => {
  
    return (
      <table className={props.className}>
        { props.headerNames && props.headerNames.length>0 &&
          <thead className="data-grid-head">
              <tr className="data-grid-head-tr">
                <th className="data-grid-head-tr-th">
                  <ArrowRightIcon className="table-arrow-svg"/>
                </th>
                {
                  props.headerNames.map((v,i) => 
                    <th className={clsx("data-grid-head-tr-th",props.hideColumns.indexOf(i)>-1 && 'hide-cell')}>{v}</th>
                  )
                }
              </tr>
          </thead>
        }
        <tbody>{props.children}</tbody>
      </table>
    );
  
}

Sheet.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  headerNames: PropTypes.array,
  hideColumns: PropTypes.bool
};

export default Sheet;
