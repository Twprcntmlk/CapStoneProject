//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import AdminSearchBar from "./AdminSearchBar_Component"
import AdminAddCard from "./AdminAddCard_Component";
import "../css/AdminPage.css"
const AdminPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const toHome = () => {
    history.push("/");
    }

  return (
    <div className="AdminPageContainer_Page">
      <h1>Admin Page</h1>
      <button className="AdminContainer_button button" onClick={toHome} >Back to Main</button>
      <div className="AdminPageContainer">
        <div className="AdminContainer_AddCard"><AdminAddCard/></div>
        <div className="AdminContainer_SearchBar"><AdminSearchBar/></div>
      </div>

    </div>

  );
}

export default AdminPage;
