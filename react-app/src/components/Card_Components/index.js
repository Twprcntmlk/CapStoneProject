import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/FlipCard.css"
import ReactCardFlip from 'react-card-flip';

const CardPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();
    const [apicardinfo, setApicardinfo] = useState()

    useEffect(() =>{
        YGOAPIFetch()
    },[]);

    const YGOAPIFetch = async () => {
        if(id){
        const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        const Array = jsonData.data
        setApicardinfo(Array[0]);
        }
    };

    const toPackList = () => {
        history.push("/pack-opener");
      }

    const toDeckBuilder = () => {
        history.push("/collection");
      }

    const toGame = () => {
        history.push("/game");
      }

      console.log(apicardinfo)

//       atk: 1200
// attribute: "EARTH"
// card_images: [{…}]
// card_prices: [{…}]
// card_sets: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// def: 1000
// desc: "A one-eyed behemoth with thick, powerful arms made for delivering punishing blows."
// id: 76184692
// level: 4
// name: "Hitotsu-Me Giant"
// race: "Beast-Warrior"
// type: "Normal Monster"


  return (
    <div className="CardInfoPage">
        <div className="CardInfoPage_Banner"></div>
        <div className="CardInfoPage_Info">
            <div className="CardInfoPage_CardImage">
            <img src={apicardinfo && apicardinfo?.card_images[0].image_url}/>
            </div>


            <div className="CardInfoPage_CardInfo">
                <div>{apicardinfo && apicardinfo?.name}{apicardinfo?.level}</div>
                <div>{apicardinfo?.type}{apicardinfo?.attribute}</div>
                <div>{apicardinfo?.atk}{apicardinfo?.def}</div>
                <div>{apicardinfo?.desc}</div>
                <div>{apicardinfo?.race}</div>





                      {/* card_sets.map((el)=>{

                      })
                    card_prices.map((el)=>{

                        }) */}
            </div>
        </div>
        <div className="CardFlipperPage_OptionsBar">
        <button className="CardFlipperPage_button button" onClick={toPackList} >Buy Another Pack</button>
        <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardFlipperPage_button button" onClick={toGame} >Play a Game</button>
      </div>
    </div>
// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default CardPage;
