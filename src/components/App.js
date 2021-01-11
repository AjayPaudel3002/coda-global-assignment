import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Game from "./Game";
import Home from "./Home";

const App = () => {
  const [playingNine, setPlayingNine] = useState([]);
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                playingNine={playingNine}
                setPlayingNine={setPlayingNine}
              />
            )}
          />
          <Route
            path="/game"
            exact
            render={(props) => (
              <Game
                {...props}
                playingNine={playingNine}
                setPlayingNine={setPlayingNine}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};
export default App;
