import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';

import LogoutButton from '../Auth_Components/LogoutButton';
import LoginFormModal from '../Auth_Components/LoginSigninFormModal'
import "../css/NavBar.css"

const NavBar = () => {
  const history = useHistory()

  const toAdminPage = () => {
    history.push('/admin')
  }

  return (
    <div className="Navbar_Holder">
      <div className="Navbar_Container">
        <div>
          <LoginFormModal />

        </div>
        <div>
          <h1 className="title">Yu-Gi-Oh! Gacha Game!</h1>
        </div>
        <div className="Navbar_Container--right">
          <div><LogoutButton /></div>
          <button className="button" onClick={toAdminPage}>Admin</button>
        </div>
    </div>
   </div>





  );
}

export default NavBar;
