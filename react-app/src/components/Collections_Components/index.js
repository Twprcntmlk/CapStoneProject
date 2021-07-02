//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SearchBar from "./Search_Collection_Component"
import DeckBuilder from "./DeckBuilder_Component";

const CollectionPage = () => {
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
    <div className="CollectionPageContainer">
        <div><SearchBar/></div>
        <div><DeckBuilder/></div>
    </div>
  );
}

export default CollectionPage;
