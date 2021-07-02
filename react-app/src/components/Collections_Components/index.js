//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SearchBar from "./Search_Collection_Component"
import DeckBuilder from "./DeckBuilder_Component";
import "../css/CollectionPageContainer.css"
import {getCollection} from "../../store/collections";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CollectionPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const allCardsState = useSelector((state) => state.session.user);
  const cardValues = Object.values(allCardsState)

  useEffect(() =>{
    dispatch(getCollection)
    // YGOAPIFetch()
  },[]);


  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };


  return (
    <div className="CollectionPageContainer">
      
            <div className="CollectionPageContainer_SearchBar"><SearchBar/></div>
            <div className="CollectionPageContainer_DeckBuilder"><DeckBuilder/></div>

    </div>
  );
}

export default CollectionPage;
