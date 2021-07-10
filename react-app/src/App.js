import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

////////////////////////////////////////////////////////////

import ProtectedRoute from "./components/Auth_Components/ProtectedRoute";
////////////////////////////////////////////////////////////////////
import Home_Page from "./components/Home_Page_Components/index";
import Pack_List_Page from "./components/Pack_Opener_Components/index";
import CardFlipperPage from "./components/Pack_Opener_Components/Card_Flipper_Page";
////////////////////////////////////////////////////////////////////
import GamePage from "./components/Game_Components/GamePage";
import CollectionPage from "./components/Collections_Components/index";
import CardPage from "./components/Card_Components/index";
import AdminPage from "./components/Admin_Components/index";
import DeckPage from "./components/Deck_Components/index";
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
        <ProtectedRoute path="/pack-opener" exact={true} >
          <Pack_List_Page />
        </ProtectedRoute>
        <ProtectedRoute path="/pack-opener/:code" exact={true} >
          <CardFlipperPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/pack-opener" exact={true} >
          < Pack_Opener_Page />
         <Route path="/pack-opener/:code" exact={true} >
          <Pack_List_Opener_Page />

          </ProtectedRoute>*/}
        <Route path="/game" exact={true}>
          <GamePage />
        </Route>
        <ProtectedRoute path="/collection" exact={true}>
          <CollectionPage />
        </ProtectedRoute>
        <Route path="/card/:id" exact={true}>
          <CardPage />
        </Route>
        <ProtectedRoute path="/admin" exact={true}>
          <AdminPage />
        </ProtectedRoute>
        <ProtectedRoute path="/deck" exact={true}>
          <DeckPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
