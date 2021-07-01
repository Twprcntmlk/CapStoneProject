import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth_Components/LogoutButton';
import LoginFormModal from '../Auth_Components/LoginSigninFormModal'
import "../css/NavBar.css"

const NavBar = () => {
  return (
    <div className="Navbar_Holder">
      <div className="Navbar_Container">
        <div>
          <LoginFormModal />
  
        </div>
        <div>
          <h1 className="title">Yu-Gi-Oh! Gacha Game!</h1>
        </div>
        <div><LogoutButton /></div>
    </div>
   </div>





  );
}

export default NavBar;
