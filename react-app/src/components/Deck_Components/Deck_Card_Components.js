import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux"; //, useSelector
// import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import "../css/DeckCardPage.css"


const DeckCardPage = ({id}) => {
  //Nessessary Items
  const dispatch = useDispatch()
  const [apicardinfo, setApicardinfo] = useState()
  //api call
  const YGOAPIFetch = async () => {
    const api = `/api/external/searchcard/${id}`
    const response = await fetch(api);
    const jsonData = await response.json();
    const Array = jsonData.data
    setApicardinfo(Array[0]);
  };

  useEffect(() =>{
    YGOAPIFetch()
    dispatch(getCards())
  },[id]);


   return (
    <div className ="DeckOpenerPage_CardDiv" >
        <img className="DeckOpenerPage_Card" src={apicardinfo && apicardinfo?.card_images[0].image_url}/>
    </div>
  );
};

export default DeckCardPage;
