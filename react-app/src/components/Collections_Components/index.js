//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SearchBar from "./Search_Collection_Component"
import DeckBuilder from "./DeckBuilder_Component";
import "../css/CollectionPageContainer.css"
import {getCollection} from "../../store/collections";
import {getDecks} from "../../store/decks";

const CollectionPage = () => {
  const dispatch = useDispatch();

  // const allCardsState = useSelector((state) => state.deck.decks);
  // const cardValues = Object.values(allCardsState)
  // console.log(cardValues)

  useEffect(() =>{
    dispatch(getCollection)
    // dispatch(getDecks)
  },[dispatch]);

  return (
    <div className="CollectionPageContainer">
      <div className="CollectionPageContainer_SearchBar"><SearchBar/></div>
      <div className="CollectionPageContainer_Divider"> </div>
      <div className="CollectionPageContainer_DeckBuilder"><DeckBuilder/></div>
    </div>
  );
}

export default CollectionPage;
