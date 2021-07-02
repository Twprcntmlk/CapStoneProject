//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {getCollection} from "../../store/collections";

const SearchBar= () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // const [point, setPoints] = useState(false)
  const [cardname, setCardname] = useState("");
  const user = useSelector((state) => state.collection.collections);

  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };

  useEffect(() =>{
    dispatch(getCollection())
  },[dispatch]);

  const updateCardname = (e) => {
    setCardname(e.target.value);
  }

  const onFindLikeCards = async (e) => {
    e.preventDefault();
    // const data = await dispatch(get(name, image));
    // if (data) {
    //   history.push(`/`);
    // }
  }

  return (
    <div className="SearchHolder">
      <form onChange={onFindLikeCards} className='collection_form'>
        <div className='collection_div'>
          <label htmlFor="name">Enter Card Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={cardname}
            onChange={updateCardname}
            className='collection_input'
          />
        </div>

        <div className="create">
          <button className="collection-button" type="submit">Create Server</button>
        </div>
    </form>

    </div>
  );
}

export default SearchBar;
