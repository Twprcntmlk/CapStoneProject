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

  const [point, setPoints] = useState(0)
  let [message, setMessage]=useState("Please wait while Game Loads");
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

setTimeout(() =>{setMessage("Enjoy The Game!")},5000)


  const toDeckBuilder = () => {
    history.push("/collection");
  }

  const toHome = () => {
  history.push("/");
  }

//   window.addEventListener('keyup', () => {
//     let points = 0;
//     setInterval(() => {
//         points+=1
//       }, 1000);
//       setPoints(points)
//       console.log(point)
//   });

//  setTimeout(() => {},3000)

  return (
    <div>
      <div className="GamePage">
        <div className="GamePageContainer">
            <h1>Please Enjoy This Temporary Game</h1>
            <h1>While We Work On The Full Game!</h1>
            <h2>{message}</h2>
            <h3>Press Spacebar to Begin!</h3>
        </div>
        <div id="DinoGame"><div><ChromeDinoGame /></div> </div>
        <div className="CardFlipperPage_OptionsBar">
          <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
          <button className="CardFlipperPage_button button" onClick={toHome} >Back to Main</button>
        </div>
      </div>

    </div>

  );
}

export default GamePage;
