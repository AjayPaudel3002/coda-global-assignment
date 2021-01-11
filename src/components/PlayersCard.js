import React, { useState } from "react";

const PlayersCard = ({ user, bet }) => {
  const amount = user && 2 * Number(user.Price);
  const winning = () => {
    return amount;
  };
  return (
    <>
      <div
        className={`card  p-3 mb-5 bg-white rounded ${
          bet == user.Bet ? "border-success" : "border-danger"
        } `}
      >
        <div className="d d-flex align-items-center">
          <div className="img-square-wrapper" style={{ color: "black" }}>
            <img
              className=""
              src={user["Profile Image"]}
              style={{ height: "100%", maxHeight: "60px" }}
              alt="user"
            />
          </div>
          <div className="card-body" style={{ height: "80px" }}>
            <p className="card-title">{user.Name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <i class="fas fa-coins" style={{ color: "#E6C700" }}></i>
            <span style={{ paddingLeft: "5px", fontSize: "12px" }}>
              {user.Price}
            </span>
          </div>
          <div className="col-5">
            <i class="fas fa-dot-circle" style={{ color: "#E6C700" }}></i>
            <span style={{ paddingLeft: "3px", fontSize: "12px" }}>
              {user.Bet}
            </span>
          </div>
          <div className="col-10">
            <i class="fas fa-trophy" style={{ color: "#E6C700" }}></i>
            <span style={{ paddingLeft: "5px", fontSize: "12px" }}>
              {bet == user.Bet ? winning() : 0}
            </span>
          </div>
        </div>
        <div className=" row text-center justify-content-center fate ">
          <p className={`${bet == user.Bet ? "win" : "loss"}`}>
            {bet == user.Bet ? "Win" : "Lose"}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlayersCard;
