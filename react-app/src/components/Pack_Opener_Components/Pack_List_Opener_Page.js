import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const separator = <div className="separator__div"></div>

const Pack_List_Opener_Page = () => {

  const dispatch = useDispatch();

  const [ygocardsets, setYgocardsets] = useState()

  //Need to Break this down, I am getting the whole API right now
  const YGOAPIFetch = async () => {
    let cardsinSet = []
    const api = `https://db.ygoprodeck.com/api/v7/cardsetsinfo.php?setcode=LOB-001`
    const response = await fetch(api);
    const jsonData = await response.json();

    // setYgocardsets(filteredjsonData);
  };

  // Note to self: this works but give me packs i do not want. (el.tcg_date >= "2002-03-08") && (el.tcg_date <= "2004-03-01")
  useEffect(() =>{
    YGOAPIFetch()
  },[]);



  return (
    <div className="PackListOpenerPage">

        <p>PACK LIST PAGE</p>
        {ygocardsets?.map((el, idx) => (
        <div key={idx}>
            <img src = {`https://ygoprodeck.com/pics_sets/${el.set_code}.jpg`}/>
            <div >
                {`${el.set_name}`}
            </div>
        </div>
                ))}

    </div>

  );
};

export default Pack_List_Opener_Page;
