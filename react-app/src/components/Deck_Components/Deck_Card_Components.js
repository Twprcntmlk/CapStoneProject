import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"

import LevelStar from "../images/levelstar.png"
import "../css/DeckCardPage.css"


const DeckCardPage = ({id}) => {
    //Nessessary Items
    const dispatch = useDispatch()


    //api call

    const YGOAPIFetch = async () => {
      const api = `/api/external/searchcard/${id}`
      const response = await fetch(api);
      const jsonData = await response.json();
      const Array = jsonData.data
      setApicardinfo(Array[0]);
    };
    //State Items
    const [apicardinfo, setApicardinfo] = useState()



    // useEffect
    useEffect(() =>{
      YGOAPIFetch()
      dispatch(getCards())
    },[id]);


   return (
    <div className ="DeckOpenerPage_CardDiv" >
        <img className="DeckOpenerPage_Card" src={apicardinfo && apicardinfo?.card_images[0].image_url}/>
    </div>

// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default DeckCardPage;
