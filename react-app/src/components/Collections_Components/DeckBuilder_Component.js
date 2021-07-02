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
                <div id="Main_Deck_Slot1">hello</div>
                <div id="Main_Deck_Slot2"></div>
                <div id="Main_Deck_Slot3"></div>
                <div id="Main_Deck_Slot4"></div>
                <div id="Main_Deck_Slot5"></div>
                <div id="Main_Deck_Slot6"></div>
                <div id="Main_Deck_Slot7"></div>
                <div id="Main_Deck_Slot8"></div>
                <div id="Main_Deck_Slot9"></div>
                <div id="Main_Deck_Slot10"></div>
                <div id="Main_Deck_Slot11"></div>
                <div id="Main_Deck_Slot12"></div>
                <div id="Main_Deck_Slot13"></div>
                <div id="Main_Deck_Slot14"></div>
                <div id="Main_Deck_Slot15"></div>
                <div id="Main_Deck_Slot16"></div>
                <div id="Main_Deck_Slot17"></div>
                <div id="Main_Deck_Slot18"></div>
                <div id="Main_Deck_Slot19"></div>
                <div id="Main_Deck_Slot20"></div>
                <div id="Main_Deck_Slot21"></div>
                <div id="Main_Deck_Slot22"></div>
                <div id="Main_Deck_Slot23"></div>
                <div id="Main_Deck_Slot24"></div>
                <div id="Main_Deck_Slot25"></div>
                <div id="Main_Deck_Slot26"></div>
                <div id="Main_Deck_Slot27"></div>
                <div id="Main_Deck_Slot28"></div>
                <div id="Main_Deck_Slot29"></div>
                <div id="Main_Deck_Slot30"></div>
                <div id="Main_Deck_Slot31"></div>
                <div id="Main_Deck_Slot32"></div>
                <div id="Main_Deck_Slot33"></div>
                <div id="Main_Deck_Slot34"></div>
                <div id="Main_Deck_Slot35"></div>
                <div id="Main_Deck_Slot36"></div>
                <div id="Main_Deck_Slot37"></div>
                <div id="Main_Deck_Slot38"></div>
                <div id="Main_Deck_Slot39"></div>
                <div id="Main_Deck_Slot40"></div>
                <div id="Main_Deck_Slot41"></div>
                <div id="Main_Deck_Slot42"></div>
                <div id="Main_Deck_Slot43"></div>
                <div id="Main_Deck_Slot44"></div>
                <div id="Main_Deck_Slot45"></div>
                <div id="Main_Deck_Slot46"></div>
                <div id="Main_Deck_Slot47"></div>
                <div id="Main_Deck_Slot48"></div>
                <div id="Main_Deck_Slot49"></div>
                <div id="Main_Deck_Slot50"></div>
                <div id="Main_Deck_Slot51"></div>
                <div id="Main_Deck_Slot52"></div>
                <div id="Main_Deck_Slot53"></div>
                <div id="Main_Deck_Slot54"></div>
                <div id="Main_Deck_Slot55"></div>
                <div id="Main_Deck_Slot56"></div>
                <div id="Main_Deck_Slot57"></div>
                <div id="Main_Deck_Slot58"></div>
                <div id="Main_Deck_Slot59"></div>
                <div id="Main_Deck_Slot60"></div>

            </div>
        </div>
    </div>
  );
}

export default DeckBuilder;
