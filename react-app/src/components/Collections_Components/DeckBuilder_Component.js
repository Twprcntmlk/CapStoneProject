//imported utils
import React, { useEffect, useState, useReducer, useCallback  } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { editDeck } from "../../store/decks"
import "../Collections_Components/DeckBuilder_Component";
import "../css/DeckBuilder.css";
import "../css/Deck_Area.css";
import "../css/Card.css";


import Deck_Area from "./Deck_Area";
import Card from "./Card";

const DeckBuilder = () => {
  let history = useHistory();
  let dispatch = useDispatch();


  const toPackList = () => {
    history.push("/pack-opener");
  }

  const toAddDeck = () => {
    let str=''
    let nodeList = Array.from(document.querySelectorAll('#deck-1 .card'))
    let deck = nodeList.map((node) => node.id.slice(6))//(regex.exec(node.id))
    for (let i in deck) {
      str+=deck[i]+" "
    }
    console.log(str)

    dispatch(editDeck(str.slice(0,str.length-1)))

  }

  const toDeck = () => {
    history.push("/deck");
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


  return (
    <div className="DeckbuilderPage">
      <div className="DeckbuilderPage_OptionsBar">
        <button className="DeckbuilderPage_button button" onClick={toAddDeck} >Add Deck</button>
        <button className="DeckbuilderPage_button button" onClick={toDeck} >See Your Deck</button>
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
