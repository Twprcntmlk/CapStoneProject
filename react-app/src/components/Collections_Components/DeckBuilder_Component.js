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

  const toDeckBuilder = () => {
    history.push("/collection");
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
    <div>
      <div className="DeckbuilderrPage_OptionsBar">
          <button className="DeckbuilderPage_button button" onClick={toPackList} >Buy Another Pack</button>
          <button className="DeckbuilderPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
          <button className="DeckbuilderPage_button button" onClick={toGame} >Play a Game</button>
          <button className="DeckbuilderPage_button button" onClick={toMain} >Back to Main</button>
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
