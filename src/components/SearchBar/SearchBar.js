import React from 'react';
import './SearchBar.scss';

function SearchBar({placeholder, onChange}) {
  return (
    <div className="d-flex search-bar">
      <img src="/images/search.svg" alt="search"/>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
