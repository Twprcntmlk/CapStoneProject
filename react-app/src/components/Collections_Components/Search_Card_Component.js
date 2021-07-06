import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/SearchedCardContainer.css"


const SearchedCard = ({api_id}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [apicardinfo, setApicardinfo] = useState()


    console.log("PASS",api_id)

    // let randomCard = id[random]
    // console.log(randomCard)

    const YGOAPIFetch = async () => {
        if(api_id){
        const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${api_id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        const objectdata = jsonData.data
        setApicardinfo(objectdata[0]);
        }
    };

    useEffect(() =>{
        YGOAPIFetch()
    },[api_id]);

    console.log("This is card info",apicardinfo);

    // let handleClick = () => {
    //     setFlippedstate(true);
    //     dispatch(addCollection(cardinfo.id));
    //   }

    // const toCard = () => {
    //     history.push(`/card/${apicardinfo[0].id}`);
    //   }
console.log(apicardinfo?.card_images[0].image_url)

  return (
    <div className="SearchedCardContainer" styles={{backgroundImage:`url(${apicardinfo?.card_images[0].image_url})`}}>
        <div className="SearchedCardContainer_CardDiv" >

                {/* <img className="SearchedCardContainer_Image" src={} /> */}

        </div>
    </div>
// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default SearchedCard;
