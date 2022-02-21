import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="bg">
      <h1>Garrett's Portfolio</h1>

      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
    </div>
  )
};

export default Header;