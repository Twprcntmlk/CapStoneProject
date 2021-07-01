import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/FlipCard.css"
import ReactCardFlip from 'react-card-flip';

const separator = <div className="separator__div"></div>

const Flippable_Card = ({id}) => {
    const dispatch = useDispatch
    const [apicardinfo, setApicardinfo] = useState()
    const [cardinfo, setCardinfo] = useState()
    const [flippedstate, setFlippedstate] = useState()


    const YGOAPIFetch = async () => {
        if(id){
        const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        setApicardinfo(jsonData.data);
        }
    };

    useEffect(() =>{
        YGOAPIFetch()
        CardFetch()
    },[]);

    const CardFetch = async () => {
        const api = `/api/cards/${id}`
        const response = await fetch(api);
        const data = await response.json();
        const Acard = data.cards
        setCardinfo(Acard[0]);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setFlippedstate(true);
        // const data = dispatch(addCollection(cardinfo[0].id));
      }

    console.log(cardinfo)
    // atk: 1200
    // attribute: "DARK"
    // card_images: [{…}]
    // card_prices: [{…}]
    // card_sets: (5) [{…}, {…}, {…}, {…}, {…}]
    // def: 800
    // desc: "It's said that this King of the Netherworld once had the power to rule over the dark."
    // id: 53375573
    // level: 3
    // name: "Dark King of the Abyss"
    // race: "Fiend"
    // type: "Normal Monster"

  return (
    <div className="PackListOpenerPage">

        <ReactCardFlip isFlipped={flippedstate} flipDirection="vertical" flipSpeedBackToFront="2">

            <img onClick={handleClick} src={CardBack} />

            <div onClick={handleClick} >
            {apicardinfo?.map((el, idx) => (
                 <div key={idx}>
                <img src={el.card_images[0].image_url}  />
                </div>
        ))}
        </div>

        </ReactCardFlip>
    </div>


  );
};

export default Flippable_Card;
