import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

////////////////////////////////////////////////////////////

import ProtectedRoute from "./components/Auth_Components/ProtectedRoute";
////////////////////////////////////////////////////////////////////
import Home_Page from "./components/Home_Page_Components/index";
import Pack_List_Page from "./components/Pack_Opener_Components/index";
import Pack_List_Opener_Page from "./components/Pack_Opener_Components/Pack_List_Opener_Page";
////////////////////////////////////////////////////////////////////




import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact={true} >
          < Home_Page />
        </Route>
        <Route path="/pack-opener" exact={true} >
          <Pack_List_Page />
        </Route>
        <Route path="/pack-opener/:id" exact={true} >
          <Pack_List_Opener_Page />
        </Route>
        {/* <ProtectedRoute path="/pack-opener" exact={true} >
          < Pack_Opener_Page />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
