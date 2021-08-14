import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({setShowModal, setformState}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    if(password !== repeatPassword){
      setErrors(["Password Do Not Match"])
    } else{
      const data = await dispatch(signUp(username, email, password));
        if (data.errors) {
          setErrors(data.errors);
          setTimeout(() => {
            setShowModal(prev=> !prev)
          },1000)
      }
      setShowModal(prev=> !prev)
    }
  }

  //
  //
  //   setErrors(["Password to not match"])
  // }
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const toLogin = (e) => {
    setformState(prev => !prev);
  };


  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3 className="ButtonLink" >Sign Up</h3>
      <div>
        {errors.map((error) => (<div>{error}</div>))}
      </div>
      <form onSubmit={onSignUp}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="SignUpSignInModal_buttons">
          <button type="submit">Sign Up</button>
          <a className="ButtonLink"onClick={toLogin}>Already Have An Account?</a>
        </div>

      </form>
    </div>
  );
};

export default SignUpForm;
