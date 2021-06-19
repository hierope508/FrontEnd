import React, { Component } from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

class Pagination extends Component {
  state = {};
  
  render() {
    const {pageSize, totalItems, currentPage, onPageChange} = this.props;
    const pageCount = Math.ceil((totalItems / pageSize));

    if(pageCount === 1 ) return null;
    
    const pages = _.range(1,  pageCount + 1);

    return (
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          {pages.map(page =>
            <li key={page} className={this.getPageClass(page, currentPage)} >
            <a className="page-link" href="#" tabIndex="-1" onClick={()=>{onPageChange(page)}}>
              {page}
            </a>
          </li>
          )}
        </ul>
      </nav>
    );
  }


  getPageClass = (page, currentPage)=>{
    return `page-item ${currentPage===page? "disabled": ""}`;
  };
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
