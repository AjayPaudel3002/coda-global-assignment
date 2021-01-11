import React, { useState, useEffect } from "react";
import Players from "./Players";
import Table from "./Table";

const Home = ({ playingNine, setPlayingNine }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json`
        );
        const res = await response.json();
        if (res) {
          setUsers(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    setPlayingNine([]);
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <Players
              playingNine={playingNine}
              setPlayingNine={setPlayingNine}
            />
          </div>
          <div className="col-8">
            <Table
              users={users}
              playingNine={playingNine}
              setPlayingNine={setPlayingNine}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
