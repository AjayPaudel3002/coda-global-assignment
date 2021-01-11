import React from "react";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const Players = ({ playingNine, setPlayingNine }) => {
  const history = useHistory();
  const startPlaying = () => {
    history.push("/game");
    localStorage.setItem("playingNine", JSON.stringify(playingNine));
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: "#ebf0f4" }}>
        {playingNine && playingNine.length ? (
          <div className="pt-5">
            <p>Playing 9</p>
            <div className="row ">
              {playingNine.map((user) => {
                return (
                  <div className="col-12">
                    <Card user={user} />
                  </div>
                );
              })}
            </div>
            <div className="text-center pb-5">
              {playingNine.length === 9 ? (
                <button className="btn btn-primary " onClick={startPlaying}>
                  Start
                </button>
              ) : (
                <button
                  className="btn btn-primary "
                  disabled
                  onClick={startPlaying}
                >
                  Start
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Players;
