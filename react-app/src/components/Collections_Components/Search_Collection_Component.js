//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {getCollection} from "../../store/collections";
import {authenticate} from "../../store/session";
import SearchedCard from "../Collections_Components/Search_Card_Component";
import "../css/SearchedCardContainer.css"
import Deck_Area from "./Deck_Area";
import Card from "./Card";

const SearchBar= () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // const [point, setPoints] = useState(false)
  const [cardname, setCardname] = useState();
  const [usercollection, setUsercollection] = useState()
  const [usercollectionfiltered, setUsercollectionfiltered] = useState()
  const userCollectionState = useSelector((state) => state.session.user.user_collection);

  useEffect(() =>{
    setUsercollection(userCollectionState)
  },[]);

  const updateCardname = (e) => {
    setCardname(e.target.value);
    const filteredSearch = usercollection.filter((el)=>el.api_name.toLowerCase().includes(e.target.value.toLowerCase()))
    setUsercollectionfiltered(filteredSearch)
  }

  // const onFindLikeCards = async (e) => {
  //   e.preventDefault();
  //   // const data = await dispatch(get(name, image));
  //   // if (data) {
  //   //   history.push(`/`);
  //   // }
  // }
  // console.log(userCollectionState)
  // console.log(usercollection)
  // console.log(usercollectionfiltered)

  return (
    <div className="SearchHolder">
      <div className="Searchbar_Container">
        <label onChange={updateCardname} htmlFor="name">Enter Card Name</label>
            <input
              name="name"
              type="text"
              placeholder="Search by Card Name"
              value={cardname}
              onChange={updateCardname}
              className='collection_input'
            />
      </div>
      <div className="Search_Show_Results">
      <div className="flexbox">
        < Deck_Area id="deck-2" className="deck" draggable='true'>

         {usercollectionfiltered ? usercollectionfiltered?.map((el, idx) =>(
            <div className="cardholder" key={el.api_id}>
              <Card className="card" id={`$card-${el.api_id}`}  draggable='true' >
                <SearchedCard api_id={el.api_id} />
              </Card>
            </div>
            )) : usercollection?.map((el, idx) =>(
              <div className="cardholder"key={el.api_id}>
                <Card className="card" id={`$card-${el.api_id}`} draggable='true' >
                  <SearchedCard api_id={el.api_id} />
                </Card>
              </div>
              ))}
        </Deck_Area>
        </div>


      </div>
    </div>
  );
}

export default SearchBar;
