import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <div class="bg">
      <h1>Garrett's Portfolio</h1>

      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
    </div>
  )
};

export default Header;