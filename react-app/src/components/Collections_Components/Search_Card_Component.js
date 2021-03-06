import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
// import {getApiCardInfo} from "../../store/externalapi"
import {addCollection} from "../../store/collections"
import CardBack from "../images/back_high.jpg"
import "../css/SearchedCardContainer.css"


const SearchedCard = ({api_id}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [apicardinfo, setApicardinfo] = useState()


    // console.log("PASS",api_id)

    // let randomCard = id[random]
    // console.log(randomCard)


    const YGOAPIFetch = async () => {
        const api = `/api/external/searchcard/${api_id}`
        const response = await fetch(api);
        const jsonData = await response.json();
        const objectdata = jsonData.data
        // console.log(objectdata)
        setApicardinfo(objectdata[0]);
    };

    useEffect(() =>{
        YGOAPIFetch()
    },[api_id]);

    // console.log("This is card info",apicardinfo);

    // let handleClick = () => {
    //     setFlippedstate(true);
    //     dispatch(addCollection(cardinfo.id));
    //   }

    // const toCard = () => {
    //     history.push(`/card/${apicardinfo[0].id}`);
    //   }
console.log(apicardinfo?.card_images[0].image_url)

  return (
    <div className="SearchedCardContainer" >
        <div className="SearchedCardContainer_CardDiv" >
            <img className="SearchedCardContainer_Image" src={apicardinfo?.card_images[0].image_url} draggable="false" />
        </div>
    </div>
  );
};

export default SearchedCard;
