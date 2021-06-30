//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//store imports
import {getAllUsers} from "../../store/users"

//component imports
import LoginForm from "../Auth_Components/LoginForm";
import SignUpForm from "../Auth_Components/SignUpForm";
import NavBar from "./NavBar";
import UsersList from "./UsersList";
import User from "./User";
import ChromeDinoGame from 'react-chrome-dino';

const Home_Page = () => {
  const dispatch = useDispatch();

  // const [ygodata, setYgodata] = useState()

  const user = useSelector((state) => state.session.user);

  //Need to Break this down, I am getting the whole API right now
  // const YGOAPIFetch = async () => {
  //   const api = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  //   const response = await fetch(api);
  //   const jsonData = await response.json();
  //   setYgodata(jsonData);
  // };

  useEffect(() =>{
    dispatch(getAllUsers)
    // YGOAPIFetch()
  },[dispatch]);

  // console.log(user);
  // console.log(ygodata)
  return (
    <div>
        <NavBar />
        <LoginForm />
        <SignUpForm />
        <ChromeDinoGame />
        {/* <UsersList/> */}
        {/* <User /> */}
    </div>
  );
}

export default Home_Page;
