import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Header.scss";

function Header() {
  return (
    <div>
      <header className="content-header">
        <SearchBar placeholder="Search Pipedrive" />
        <img src="/images/crm-logo.svg" className="header-logo" />
        <div className="header-right">
          <div className="add-user">
            <img className="circle-plus" src="/images/add.png" />
          </div>
          <div className="circle">
            <img src="/images/gift.png" />
          </div>
          <div className="circle">
            <img src="/images/envelope.png" />
          </div>
          <div className="circle">
            <img src="/images/bell.png" />
          </div>

          <div className="profile">
            <img src="/images/profile.png" />
            <div className="profile-details">
              <div className="name">Phyllis Yang</div>
              <div className="designation">Silicon Links Inc</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
