import React, { useState, useEffect } from "react";

const Row = ({ users, user, index, playingNine, setPlayingNine }) => {
  const [selectedUser, setSelectedUser] = useState(false);

  const selectUser = (indexVal, userData) => {
    if (!selectedUser) {
      const players =
        users &&
        users.filter((player, indx) => {
          return indx === indexVal;
        });
      if (playingNine.length <= 8) {
        setPlayingNine((prevState) => [...prevState, players[0]]);
        setSelectedUser(!selectedUser);
      } else {
        setSelectedUser(false);
      }
    } else {
      const players =
        playingNine &&
        playingNine.filter((player, indx) => {
          return player["Profile Image"] !== userData["Profile Image"];
        });

      setPlayingNine(players);
      setSelectedUser(!selectedUser);
    }
  };

  return (
    <>
      <tr key={user + index}>
        <td>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={() => selectUser(index, user)}
            />
          </div>
        </td>
        <td>{user.Name}</td>
        <td>
          <img src={user["Profile Image"]} style={{ maxHeight: "50px" }} />
        </td>
        <td>{user.Bet}</td>
        <td>{user.Price}</td>
      </tr>
    </>
  );
};

export default Row;
