//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirec, useHistory } from "react-router-dom";
//store imports
import {getAllUsers} from "../../store/users"

//component imports
import LoginForm from "../Auth_Components/LoginForm";
import SignUpForm from "../Auth_Components/SignUpForm";
import NavBar from "./NavBar";
import UsersList from "./UsersList";
import User from "./User";
// import ChromeDinoGame from 'react-chrome-dino';
// <ChromeDinoGame />
import Footer from "./footer"
import "../css/MainPage.css"
import Banner from "../images/Banner.png"

  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };

const Home_Page = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  //
  let [error1, setError1]=useState("Play Game");
  let [error2, setError2]=useState("View Collection");
  let [error3, setError3]=useState("Pack Simulator");
  const user = useSelector((state) => state.session.user);
  //


  useEffect(() =>{
    dispatch(getAllUsers)
    // YGOAPIFetch()
  },[dispatch]);

  const toGame = () => {
    if (!user){
      setError1("Please Log In")
      setTimeout(() =>{setError1("Play Game")},1000)
    } else {
    history.push('/game')
    }
  }

  const toCollection = () => {
    if (!user){
      setError2("Please Log In")
      setTimeout(() =>{setError2("View Collection")},1000)
    } else {
    history.push('/collection')
    }
  }

  const toPackOpener = () => {
    if (!user){
      setError3("Please Log In")
      setTimeout(() =>{setError3("Pack Simulator")},1000)
    } else {
    history.push('/pack-opener')
    }
  }

  return (
    <div className="MainPageContainer">
      <div className="MainPage_Navigation">
        <NavBar />
      </div>
      <div className="MainPage_Splash">
          <img className="slidingBackground" src={Banner}/>
      </div>
      <div className="MainPage_Main">
        <div className="MainPage_Main">
          <div className="MainPage_Main_Game--title">
            <h1>GAME PLAY</h1>
            <span>We have a full Yu-Gi-Oh! Game Play with over 10,000 cards to use from both the TCG and OCG!</span>
            <button className="MainPage_Main_Game--button button" onClick={toGame}>{error1}</button>
          </div>

        </div>
        <div className="MainPage_Main_Collection">
          <div className="MainPage_Main_Collection--title">
            <h1>COLLECTION MANAGER</h1>
            <span>Manage your own Yu-Gi-Oh! card collection with features such as collection price checking, condition/quanity setting and much more!</span>
            <button className="MainPage_Main_Collection--button  button" onClick={toCollection}>{error2}</button >

          </div>

        </div>
        <div className="MainPage_Main_PackOpener">
          <div className="MainPage_Main_PackOpener--title">
            <h1>PACK OPENER</h1>
            <span>Try your hand at opening virtual Yu-Gi-Oh! packs. Got a really high score? Then add yourself to our leaderboard!</span>
            <button className="MainPage_Main_PackOpener--button  button" onClick={toPackOpener }>{error3}</button>
          </div>

        </div>

      </div>
      <div className="MainPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home_Page;
