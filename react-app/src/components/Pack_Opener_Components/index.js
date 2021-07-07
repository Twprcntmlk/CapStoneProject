import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "../css/PackOpener.css"
const separator = <div className="separator__div"></div>

const Pack_List_Page = () => {

  const dispatch = useDispatch();

  const [ygocardsets, setYgocardsets] = useState()

  //Need to Break this down, I am getting the whole API right now
  const YGOAPIFetch = async () => {
    const api = '/api/external/cardset'
    // const api = 'https://db.ygoprodeck.com/api/v7/cardsets.php'
    const response = await fetch(api);
    const jsonData = await response.json();
    const jsonDataList = jsonData.data
    const filteredjsonData = jsonDataList.filter((el)=> (el.set_name === "Legend of Blue Eyes White Dragon") || (el.set_name === "Metal Raiders") || (el.set_name === "Magic Ruler") || (el.set_name === "Pharaoh's Servant") || (el.set_name === "Labyrinth of Nightmare") || (el.set_name === "Legacy of Darkness") || (el.set_name === "Pharaonic Guardian") || (el.set_name === "Magician's Force") || (el.set_name === "Dark Crisis") || (el.set_name === "Invasion of Chaos"))
    setYgocardsets(filteredjsonData);
  };

  // Note to self: this works but give me packs i do not want. (el.tcg_date >= "2002-03-08") && (el.tcg_date <= "2004-03-01")
  useEffect(() =>{
    YGOAPIFetch()
  },[]);



  return (
    <div className='PackListPage'>
      <div className='PackListPage_Title'>
        <h1>Yu-Gi-Oh! Pack Opener </h1>
        <span>A virtual Yu-Gi-Oh! Pack Opener. Can you get a Ghost Rare? </span>
      </div>
      <div className = 'PackListPage_Container'>
        {ygocardsets?.map((el, idx) => (
        <div className="PackListPage_Card" key={idx}>
          <a className="PackListPage_Pack" href={`/pack-opener/${el.set_name}`}>
              <img src = {`https://ygoprodeck.com/pics_sets/${el.set_code}.jpg`}/>
          </a>
          <div >
              <div><b>Set Name:</b> {`${el.set_name}`}</div>

              <div><b># of Cards in Set:</b> {`${el.num_of_cards}`}</div>

              <div><b>Release Date:</b> {`${el.tcg_date}`}</div>
          </div>
        </div>))}
      </div>
    </div>

  );
};

export default Pack_List_Page;
