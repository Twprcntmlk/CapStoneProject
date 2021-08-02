import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import Flippable_Card from "./Flippable_Card"

import "../css/CardFlipperPage.css"

const CardFlipperPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const name = useParams();
    const [cardinfo, setCardinfo] = useState()

  //   const CardsetinfoFetch = async () => {
  //     const api = `/api/getcardsetCard/${name['code']}` //http://localhost:5000/api/cards/${id}
  //     const response = await fetch(api);
  //     const data = await response.json();
  //     const Acard = data.cards
  //     setCardinfo(Acard[0]);
  // };


    const GetNineRandomCardsInSetFetch = async () => {
      const api = `/api/external/getninerandomcardsinset/${name['code']}`
      const response = await fetch(api);
      const data = await response.json();
      console.log("WHAT IS THIS_____________________",data.data)
      const Acard = data.data
      setCardinfo(Acard);
  };

  console.log("WHAT IS THIS_____________________",cardinfo)

  useEffect(() =>{
    // CardsetinfoFetch()
    GetNineRandomCardsInSetFetch()
  },[]);

    console.log("NAME of PARAM",name['code'])
    //////////////////////////
    useEffect(() =>{
        dispatch(getCards())

      },[dispatch]);
    ///////////////////////////
    const cards = useSelector((state) => state.card.cards);
    const cardsToArray = Object.values(cards)
    // console.log(cardsToArray)
    const cardIds = cardsToArray?.filter((el)=> el.api_set_code === name['code'])
    // console.log(cardIds)
    const cardsAPIid = useSelector((state) => Object.values((state.card.cards)).api_id);

    const toPackList = () => {
      history.push("/pack-opener");
    }

    const toDeckBuilder = () => {
      history.push("/collection");
      window.location.reload()
    }

    const toGame = () => {
      history.push("/game");
    }

    const toMain = () => {
      history.push("/");
    }




  return (
    <div className="CardFlipperPage ">

      <div className="CardFlipperPage_Header">
        <h1>Yu-Gi-Oh! Pack Opener</h1>
        <h4>A virtual Yu-Gi-Oh! Pack Opener. Can you Pull the Big Rares?</h4>
        <h1>{name['code']}</h1>
      </div>
      <div className="CardFlipperPage_Body">
      {cardinfo?.length ===9 && cardinfo?.map((el, idx) => (<div key={idx}> <Flippable_Card setcardinfo={el}/> </div>  ))}
      </div>
      <div className="CardFlipperPage_OptionsBar">
        <button className="CardFlipperPage_button button" onClick={toPackList} >Buy Another Pack</button>
        <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardFlipperPage_button button" onClick={toGame} >Play a Game</button>
        <button className="CardFlipperPage_button button" onClick={toMain} >Back to Main</button>
      </div>

    </div>

  );
};

export default CardFlipperPage ;
