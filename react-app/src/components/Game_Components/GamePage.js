//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirec, useHistory } from "react-router-dom";
//store imports

//component imports

import ChromeDinoGame from 'react-chrome-dino';
import "../css/GamePage.css"



const GamePage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [point, setPoints] = useState(false)

  const user = useSelector((state) => state.session.user);

  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };

//   useEffect(() =>{
//     dispatch(getAllUsers)
//     // YGOAPIFetch()
//   },[dispatch]);

  const toDeckBuilder = () => {
    history.push("/collection");
  }

  const toHome = () => {
  history.push("/");
  }

  window.addEventListener('click', () => {
    let points = 0;
    setInterval(() => {
        points+=1
      }, 1000);
      setPoints(!point)
  });

  return (
    <div>
      <div className="GamePageContainer">
          <h1>THIS IS YU-GI-OH!</h1>
          <h2>Please wait while Game Loads</h2>
          <h3>Press Spacebar to Begin!</h3>
          <div id="DinoGame"><ChromeDinoGame /></div>
      </div>
      <div className="CardFlipperPage_OptionsBar">
        <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardFlipperPage_button button" onClick={toHome} >Back to Main</button>
    </div>
   </div>

  );
}

export default GamePage;
