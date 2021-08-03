import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCard} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/FlipCard.css"
import ReactCardFlip from 'react-card-flip';

const Flippable_Card = ({setcardinfo}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [apicardinfo, setApicardinfo] = useState()
    const [price, setPrice] = useState()
    const [flippedstate, setFlippedstate] = useState()
    const [cardinfo, setCardinfo] = useState()

    console.log("THISNINERANDOMCARDINFO",setcardinfo)

    // let randomCard = id[random]
    // console.log(randomCard)

    const YGOAPIFetch = async () => {
        const api = `/api/external/searchcard/${setcardinfo.id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        setApicardinfo(jsonData.data);

    };

    const adjustPriceString = () =>{
        const apiPrice = setcardinfo.set_price
        if (apiPrice.includes(".")){
            const dollarAndCent = apiPrice.split(".")
            let Cent = dollarAndCent[1]
            console.log(Cent)

           if (Cent.length < 2) {
                while (Cent.length <2){
                    Cent="0"+ Cent
                }
            }
            const newPrice = dollarAndCent[0]+"."+Cent
            setPrice(newPrice)
        }
        else{
            setPrice(apiPrice+"."+"00")
        }
    }

    useEffect(() =>{
        YGOAPIFetch()
        // CardFetch()
        adjustPriceString()
    },[]);

    const CardFetch = async () => {
        const api = `/api/cards/${setcardinfo.id}` //http://localhost:5000/api/cards/${id}
        const response = await fetch(api);
        const data = await response.json();
        const Acard = data.cards
        // setCardinfo();
        // console.log(cardinfo)
        dispatch(addCollection(Acard[0].id));
    };

    console.log("This is card info",apicardinfo);
    // console.log("cardinfo", cardinfo)

    let handleClick = async () => {
        setFlippedstate(true);
        let api_id = setcardinfo.id
        let api_name = setcardinfo.name
        let api_set_name = setcardinfo.set_name
        let api_set_code = setcardinfo.set_code
        let api_set_rarity = setcardinfo.set_rarity
        let api_set_price = setcardinfo.set_price
        let response = await dispatch(addCard(api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price))

        CardFetch()

      }

    const toCard = () => {
        history.push(`/card/${apicardinfo[0].id}`);
      }


  return (
    <div className="CardOpenerPage">
        <ReactCardFlip isFlipped={flippedstate} flipDirection="vertical" flipSpeedBackToFront="2">
        <div className="CardOpenerPage_CardDiv">
            <img className="CardOpenerPage_Card" onClick={handleClick} src={CardBack} />
        </div>
        <div className="CardOpenerPage_CardDiv">
            {apicardinfo?.map((el, idx) => (
            <div key={idx} onClick={toCard}>
                <img className="CardOpenerPage_Card" src={el.card_images[0].image_url} />
                <div><b>{setcardinfo.set_rarity}</b></div>
                <div><b>${price}</b></div>
            </div>
            ))}
        </div>

        </ReactCardFlip>
    </div>
// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default Flippable_Card;
