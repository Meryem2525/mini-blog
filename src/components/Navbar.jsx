import React from 'react';

import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">
          MİNİ BLOG
        </NavLink>
        <ul>
          <li className='nav-item'>
            <NavLink to="/" className="nav-links">
              Anasayfa
            </NavLink>
          </li>
          <li className='nav-item' >
            <NavLink to="/yeni" className="nav-links">
              Yeni Yazı Ekle
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/detay" className="nav-links">
              Detay
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
