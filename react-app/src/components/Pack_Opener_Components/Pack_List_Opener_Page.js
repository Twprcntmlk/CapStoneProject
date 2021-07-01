import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import Flippable_Card from "../Pack_Opener_Components/Flippable_Card"
const separator = <div className="separator__div"></div>

const Pack_List_Opener_Page = () => {
    const dispatch = useDispatch();
    //////////////////////////
    useEffect(() =>{
        // YGOAPIFetch()
        dispatch(getCards())
      },[dispatch]);
    ///////////////////////////
    const cards = useSelector((state) => state.card.cards);
    const cardsToArray = Object.values(cards)
    const [cardsA, setCardsA] = useState()
    const cardIds = cardsToArray?.map((el)=> el.api_id)
    console.log(cardIds)



   useEffect(() =>{
    if(cardIds){
        let randomNineCards = []
        for(let i=0; i<9; i++){
            let random = Math.floor(Math.random() * cardIds.length)
            console.log(random)
            randomNineCards.push(cardIds[random])
        }
        setCardsA(randomNineCards)
    }

   },[])


   if (cardIds){
    console.log("THIS IS UNDEFINED?",cardsA)
}
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
        {cardsA?.map((el, idx) => (
            <div key={idx}>
                <Flippable_Card id={el}/>
            </div>
        ))}
    </div>

  );
};

export default Pack_List_Opener_Page;
