import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const separator = <div className="separator__div"></div>

const Pack_List_Page = () => {

  const dispatch = useDispatch();

  const [ygocardsets, setYgocardsets] = useState()

  //Need to Break this down, I am getting the whole API right now
  const YGOAPIFetch = async () => {
    const api = 'https://db.ygoprodeck.com/api/v7/cardsets.php'
    const response = await fetch(api);
    const jsonData = await response.json();
    const filteredjsonData = jsonData.filter((el)=> (el.set_name === "Legend of Blue Eyes White Dragon") || (el.set_name === "Metal Raiders") || (el.set_name === "Magic Ruler") || (el.set_name === "Pharaoh's Servant") || (el.set_name === "Labyrinth of Nightmare") || (el.set_name === "Legacy of Darkness") || (el.set_name === "Pharaonic Guardian") || (el.set_name === "Magician's Force") || (el.set_name === "Dark Crisis") || (el.set_name === "Invasion of Chaos"))
    setYgocardsets(filteredjsonData);
  };

  // Note to self: this works but give me packs i do not want. (el.tcg_date >= "2002-03-08") && (el.tcg_date <= "2004-03-01")
  useEffect(() =>{
    YGOAPIFetch()
  });



  return (
    <div className='PackListPage'>
        <p>PACK LIST PAGE</p>
        <div className = 'PackListPage_Container'>
            {ygocardsets?.map((el, idx) => (
            <a href={`/pack-opener/${el.set_name}`} key={idx}>
                <img src = {`https://ygoprodeck.com/pics_sets/${el.set_code}.jpg`}/>
                <div >
                    SETNAME: {`${el.set_name}`}
                    {separator}
                    NUMofCARDS: {`${el.num_of_cards}`}
                    {separator}
                    RELEASEDATE:{`${el.tcg_date}`}
                </div>
            </a>))}
        </div>
    </div>

  );
};

export default Pack_List_Page;
