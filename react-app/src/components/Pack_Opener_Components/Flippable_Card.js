import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"

const separator = <div className="separator__div"></div>

const Flippable_Card = ({id}) => {

    const [flipcard, setFlipcard] = useState()
    const [cardinfo, setCardinfo] = useState()

    const YGOAPIFetch = async () => {
        const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        setFlipcard(jsonData.data);
    };

    useEffect(() =>{
        YGOAPIFetch()
        CardFetch()
    },[]);

    const CardFetch = async () => {
        const api = `/api/cards/${id}`
        const response = await fetch(api);
        const data = await response.json();
        setCardinfo(data.cards);
    };
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

    console.log(flipcard)
  return (
    <div className="PackListOpenerPage">
        <p>CARD</p>
        <div>
        {flipcard?.map((el, idx) => (
            <div key={idx}>
                <img src={el.card_images[0].image_url}/>

            </div>
        ))}

        {cardinfo?.map((el, idx) => (
            <div key={idx}>
                {el.api_set_rarity}
                {el.api_set_price}
            </div>
        ))}

cardinfo

        </div>


    </div>

  );
};

export default Flippable_Card;
