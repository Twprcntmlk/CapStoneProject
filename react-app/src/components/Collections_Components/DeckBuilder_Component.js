//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "../Collections_Components/DeckBuilder_Component"
import "../css/DeckBuilder.css"
const DeckBuilder = () => {
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

  return (
    <div className="DeckBuilderHolder">
        <div className="DeckBuilder">
            <div className="Main_Deck">
                <div id="Main_Deck_Slot">Main Deck</div>
                <div id="Extra_Deck_Slot">Extra Deck</div>
                <div id="Side_Deck_Slot">Side Deck </div>
            </div>
        </div>
    </div>
  );
}

export default DeckBuilder;
