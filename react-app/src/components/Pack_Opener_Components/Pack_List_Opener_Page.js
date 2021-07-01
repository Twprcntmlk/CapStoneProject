import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import Flippable_Card from "../Pack_Opener_Components/Flippable_Card"
const separator = <div className="separator__div"></div>

const Pack_List_Opener_Page = () => {
    const dispatch = useDispatch();
    const name = useParams();
    console.log("NAME of PARAM",name['code'])
    //////////////////////////
    useEffect(() =>{
        // YGOAPIFetch()
        dispatch(getCards())
      },[dispatch]);
    ///////////////////////////
    const cards = useSelector((state) => state.card.cards);
    const cardsToArray = Object.values(cards)
    console.log(cardsToArray)
    const cardIds = cardsToArray?.filter((el)=> el.api_set_name === name['code'])
    console.log(cardIds)

    const cardsAPIid = useSelector((state) => Object.values((state.card.cards)).api_id);
      // console.log("cardsAPIid",cardsAPIid)
      // console.log("cardsAPIid",cardIds)
    // let randomNineCards = []
    // for(let i=0; i<9; i++){

    //     let random = Math.floor(Math.random() * cardIds.length)
    //     randomNineCards.push(cardIds[random])
    // }
    // console.log("THIS IS UNDEFINED?",randomNineCards)


//   const YGOAPIFetch = async () => {
//     const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`
//     const response = await fetch(api);
//     const jsonData = await response.json();
//     cardsinSet.push(jsonData)
//     setYgocardsets(cardsinSet);
//   };

  // Note to self: this works but give me packs i do not want. (el.tcg_date >= "2002-03-08") && (el.tcg_date <= "2004-03-01")


// {id: 34541863, name: "\"A\" Cell Breeding Device", type: "Spell Card", desc: "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.", race: "Conti
//   console.log(ygocardsets)
// console.log(code)
// const cardsInPack = ygocardsets?.map((el) => (el.card_sets))
// console.log("CArdsinPack",cardsInPack )
// console.log(Array.isArray(cardsInPack ))
// let ansArr =[]
// for (let i  in cardsInPack ){
//   ansArr.concat(i)
// }



// console.log(ansArr)

  return (
    <div className="PackListOpenerPage">
        <p>PACK LIST PAGE</p>
        {/* <Flippable_Card id={cardIds}/> */}
        {/* <Flippable_Card id={cardIds}/>
        <Flippable_Card id={cardIds}/>
        <Flippable_Card id={cardIds}/> */}
        {cardIds?.map((el, idx) => (
        <div key={idx}>
          <Flippable_Card id={el}/>
        </div>
              ))}
        </div>

  );
};

export default Pack_List_Opener_Page;
