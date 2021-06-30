import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
const separator = <div className="separator__div"></div>

const Pack_List_Opener_Page = () => {

    const dispatch = useDispatch();
    const { code } = useParams();

    const params = useParams();
    const [ygocardsets, setYgocardsets] = useState()

  //Need to Break this down, I am getting the whole API right now
  const YGOAPIFetch = async () => {
    let cardsinSet = []
    const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php`
    const response = await fetch(api);
    const jsonData = await response.json();
    let array = jsonData?.data
    setYgocardsets(array);
  };

  // Note to self: this works but give me packs i do not want. (el.tcg_date >= "2002-03-08") && (el.tcg_date <= "2004-03-01")
  useEffect(() =>{
    YGOAPIFetch()
  },[]);



// {id: 34541863, name: "\"A\" Cell Breeding Device", type: "Spell Card", desc: "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.", race: "Conti
  console.log(ygocardsets)
console.log(code)
const cardsInPack = ygocardsets?.map((el) => (el.card_sets))
console.log("CArdsinPack",cardsInPack )
console.log(Array.isArray(cardsInPack ))
let ansArr =[]
for (let i  in cardsInPack ){
  ansArr.concat(i)
}



console.log(ansArr)

  return (
    <div className="PackListOpenerPage">

        <p>PACK LIST PAGE</p>
        {ygocardsets?.map((el, idx) => (
        <div key={idx}>

            <div >
                {`${el.id}`}
            </div>
        </div>
                ))}

    </div>

  );
};

export default Pack_List_Opener_Page;
