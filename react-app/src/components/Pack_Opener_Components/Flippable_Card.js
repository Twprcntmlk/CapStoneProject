import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/FlipCard.css"
import ReactCardFlip from 'react-card-flip';

const Flippable_Card = ({id}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [apicardinfo, setApicardinfo] = useState()
    const [cardinfo, setCardinfo] = useState()
    const [flippedstate, setFlippedstate] = useState()

    console.log("PASS",id.api_id)

    // let randomCard = id[random]
    // console.log(randomCard)

    const YGOAPIFetch = async () => {
        if(id){
        const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id.api_id}`
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
        const api = `/api/cards/${id.api_id}` //http://localhost:5000/api/cards/${id}
        const response = await fetch(api);
        const data = await response.json();
        const Acard = data.cards
        setCardinfo(Acard[0]);
    };

    console.log("This is card info",apicardinfo);

    let handleClick = () => {
        setFlippedstate(true);
        dispatch(addCollection(cardinfo.id));
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
            <div onClick={toCard}>
                <img key={idx} className="CardOpenerPage_Card" src={el.card_images[0].image_url} />
                <div><b>{cardinfo?.api_set_rarity}</b></div>
                <div><b>${cardinfo?.api_set_price}</b></div>
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
