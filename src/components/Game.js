import React, { useEffect, useState } from "react";
import PlayersCard from "./PlayersCard";
import "./Styles.css";

const Game = ({ playingNine, setPlayingNine }) => {
  const [bet, setBet] = useState(0);
  const [searchedVal, setSearchedVal] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const search = (e) => {
    e.preventDefault();
    if (searchedVal === "") {
      setPlayingNine(JSON.parse(localStorage.getItem("playingNine")));
    } else {
      const result =
        playingNine &&
        searchedVal &&
        playingNine.filter((item) => item.Name === searchedVal);
    //   console.log(result);
      setPlayingNine(result);
    }
  };

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
    const players = JSON.parse(localStorage.getItem("playingNine"));
    setBet(randomNumber);
    setPlayingNine(players);
  }, []);
  return (
    <>
      <div className="container">
        <form className="pt-5" onSubmit={search}>
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="search"
                value={searchedVal}
                onChange={(e) => setSearchedVal(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="row pt-5">
          {playingNine &&
            playingNine.length &&
            playingNine.map((player, index) => {
              if (index < 5) {
                return (
                  <div className=" col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <PlayersCard user={player} bet={bet} />
                  </div>
                );
              }
            })}
        </div>
        <div className="row d d-flex align-items-center">
          <div className="text-center ml-auto mr-auto">
            <div className="bet">
              <p>{bet}</p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          {playingNine &&
            playingNine.length &&
            playingNine.map((player, index) => {
              if (index > 4) {
                return (
                  <div className=" col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <PlayersCard user={player} bet={bet} />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};
export default Game;
