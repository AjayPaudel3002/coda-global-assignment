import React from "react";
import Row from "./Row";

const Table = ({ users, playingNine, setPlayingNine }) => {
  return (
    <>
      <div className="pt-5 pb-5">
        <p> Select Playing 9</p>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">SELECT</th>
            <th scope="col">PLAYER NAME</th>
            <th scope="col">AVATAR</th>
            <th scope="col">BET</th>
            <th scope="col">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <Row
                  user={user}
                  index={index}
                  playingNine={playingNine}
                  setPlayingNine={setPlayingNine}
                  users={users}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
