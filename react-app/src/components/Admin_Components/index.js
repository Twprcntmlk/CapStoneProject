//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import AdminSearchBar from "./AdminSearchBar_Component"
import AdminAddCard from "./AdminAddCard_Component";
import "../css/CollectionPageContainer.css"
const AdminPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();


  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };


  return (
    <div className="AdminPageContainer">
        <div className="AdminContainer_SearchBar"><AdminSearchBar/></div>
        <div className="AdminContainer_AddCard"><AdminAddCard/></div>
    </div>
  );
}

export default AdminPage;
