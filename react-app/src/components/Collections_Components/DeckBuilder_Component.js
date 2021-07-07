//imported utils
import React, { useEffect, useState, useReducer, useCallback  } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "../Collections_Components/DeckBuilder_Component";
import "../css/DeckBuilder.css";
import "../css/Deck_Area.css";
import "../css/Card.css";


import Deck_Area from "./Deck_Area";
import Card from "./Card";

const DeckBuilder = () => {
  let history = useHistory();

  const toPackList = () => {
    history.push("/pack-opener");
  }

  const toAddDeck = () => {
    const deck = []
    const decklist = document.querySelectorAll('#deck-1 .card')

  }

  const toGame = () => {
    history.push("/game");
  }

  const toMain = () => {
    history.push("/");
  }



  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };
  window.addEventListener('keyup', () => {
  console.log(document.querySelectorAll('#deck-1 .card'))
  const e = document.querySelectorAll('#deck-1 .card')
  for (let i in e.NodeList){
    console.log(i.split("#"))
  }
  })


  return (
    <div className="DeckbuilderPage">
      <div className="DeckbuilderPage_OptionsBar">
      <button className="DeckbuilderPage_button button" onClick={toAddDeck} >Add Deck</button>
          <button className="DeckbuilderPage_button button" onClick={toPackList} >Buy Another Pack</button>
          <button className="DeckbuilderPage_button button" onClick={toGame} >Play a Game</button>
          <button className="DeckbuilderPage_button button" onClick={toMain} >Back to Main</button>

      </div>
      <div className="DeckbuilderPage_title">
        <h1>Deck Builder</h1>
      </div>
      <div className="flexbox">
          <Deck_Area id="deck-1" className="deck" draggable='true'>
            {/* <Card id="card-1" className="card" draggable='true'>
              <p>Card One</p>
            </Card> */}
          </Deck_Area>
      </div>
    </div>


  );
}

export default DeckBuilder;
