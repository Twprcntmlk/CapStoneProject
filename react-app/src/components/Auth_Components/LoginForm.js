import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Redirect, useHistory  } from "react-router-dom";
import { login } from "../../store/session";
import "../css/LoginForm.css";

const LoginForm = ({setShowModal, setformState}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
    setTimeout(() =>{
      setShowModal(prev=> !prev)
    },10000)
  };
//
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const toDemoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));

    if (data.errors) {
      setErrors(data.errors);
    }
    setShowModal(prev=> !prev)
  };

  const toSignUp = (e) => {
    setformState(prev => !prev)
  };

  return (
    <div className="LoginForm_Container">
      <div className="LoginForm_Container--Form">
        <h3 className="ButtonLink" >Login In</h3>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (<div>{error}</div>))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div className="SignUpSignInModal_buttons">
        <button onClick={toDemoLogin}>Demo Login</button>
        <a className="ButtonLink" onClick={toSignUp}>Need to Sign Up?</a>
      </div>
    </div>

  );
};

export default LoginForm;
