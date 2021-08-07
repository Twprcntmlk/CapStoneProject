import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const [logoutName,setLogoutName] = useState("Logout")
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    setLogoutName("Cya Later")
    setTimeout(() =>{
      setLogoutName("Logout")
    },1000)

    await dispatch(logout());
  };

  return <button className="button" onClick={onLogout}>{logoutName}</button>;
};

export default LogoutButton;
