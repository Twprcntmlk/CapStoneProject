//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const SearchBar= () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [point, setPoints] = useState(false)

  const user = useSelector((state) => state.session.user);

  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };

//   useEffect(() =>{
//     dispatch(getAllUsers)
//     // YGOAPIFetch()
//   },[dispatch]);

  return (
    <div className="SearchHolder">
        <div className="SearchBar">
            SearchBar
        </div>

        <div className="Search Display">
            Search Display
        </div>

    </div>
  );
}

export default SearchBar;
