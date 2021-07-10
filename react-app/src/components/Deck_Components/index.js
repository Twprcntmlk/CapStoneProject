//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
// import SearchBar from "./Search_Collection_Component"
// import DeckBuilder from "./DeckBuilder_Component";
// import "../css/CollectionPageContainer.css"
import { getDecks } from "../../store/decks";
import {deleteDeck} from "../../store/decks";
import DeckCardPage from "./Deck_Card_Components"
import "../css/DeckCardPage.css"
import logo from "../images/YGOPRO-2-Logo.png"

const DeckPage = () => {
    const [reload, setReload] = useState(false)
    const [deckstate, setDeckstate] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory()

    const userDeckState = useSelector((state) => state.deck.decks);
    const userDeck = Object.values(userDeckState)
    const String = userDeck[0]?.deck
    const Array = String?.split(" ")

    const onDeleteDeck = async () => {
        const data = await dispatch(deleteDeck(userDeck?.id))
        setReload(!reload)
    }
    // const [apicardinfo, setApicardinfo] = useState()
//62279055 69832741
    // const YGOAPIFetch = async () => {
    //     const api = `/api/external/searchcard/${id}`
    //     const response = await fetch(api);
    //     const jsonData = await response.json();
    //     const Array = jsonData.data
    //     setApicardinfo(Array[0]);
    // };
    const toPackList = () => {
        history.push("/pack-opener");
      }

    const toDeckBuilder = () => {
        history.push("/collection");
      }

    const toGame = () => {
        history.push("/game");
      }

    const toHome = () => {
      history.push("/");
      }


    useEffect(() =>{
        dispatch(getDecks())
        // dispatch(YGOAPIFetch)
    },[dispatch]);

  return (
    <div className="DeckPage">
      <div className="DeckPage_title">
        <img className="DeckPage_logo" src={logo}></img>
        <h1>YuGiOh Deck-Tool</h1>
      </div>
      <div className="DeckPageContainer">
        {Array?.map((el)=> (<div><DeckCardPage id={el}/></div>))}
      </div>
      <div className="CardFlipperPage_OptionsBar">
        <button className="CardFlipperPage_button button" onClick={toPackList} >Buy Another Pack</button>
        <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardFlipperPage_button button" onClick={toGame} >Play a Game</button>
        <button className="CardFlipperPage_button button" onClick={toHome} >Back to Main</button>
        <button className="CardFlipperPage_button button" onClick={onDeleteDeck}>Delete Deck</button>
      </div>
    </div>
  );
}

export default DeckPage;
