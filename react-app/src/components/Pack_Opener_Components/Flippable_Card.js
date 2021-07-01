import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/FlipCard.css"
import ReactCardFlip from 'react-card-flip';

const separator = <div className="separator__div"></div>
let random = Math.floor(Math.random() * 9)

const Flippable_Card = ({id}) => {
    const dispatch = useDispatch()
    const [apicardinfo, setApicardinfo] = useState()
    const [cardinfo, setCardinfo] = useState()

    const [flippedstate, setFlippedstate] = useState()

    console.log("PASS",id)

    //
    // let randomCard = id[random]
    // console.log(randomCard)

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
    console.log("This is card info",cardinfo);

    let handleClick = () => {
        setFlippedstate(true);
        dispatch(addCollection(cardinfo.id));
      }

  return (
    <div className="PackListOpenerPage">

        <ReactCardFlip isFlipped={flippedstate} flipDirection="vertical" flipSpeedBackToFront="2">

            <img onClick={handleClick} src={CardBack} />

            <div>
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
