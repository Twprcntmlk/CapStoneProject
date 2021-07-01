//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirec, useHistory } from "react-router-dom";
//store imports

//component imports

import ChromeDinoGame from 'react-chrome-dino';




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

  window.addEventListener('click', () => {
    let points = 0;
    setInterval(() => {
        points+=1
      }, 1000);
      setPoints(!point)
  });

  return (
    <div className="GamePageContainer">
        <h1>THIS IS YU-GI-OH!</h1>
        <h2>Please wait while Game Loads</h2>
        <h3>Press Spacebar to Begin!</h3>
        <ChromeDinoGame />
    </div>
  );
}

export default GamePage;
