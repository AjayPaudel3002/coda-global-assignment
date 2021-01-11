import React from "react";

const Card = ({ user }) => {
  return (
    <>
      <div className="card  p-3 mb-2 bg-white rounded">
        <div className="d d-flex align-items-center">
          <div className="img-square-wrapper" style={{ color: "black" }}>
            <img
              className=""
              src={user["Profile Image"]}
              style={{ height: "100%", maxHeight: "50px" }}
              alt="user"
            />
          </div>
          <div className="card-body" style={{ height: "50px" }}>
            <p className="card-title">{user.Name}</p>
            <i class="fas fa-dot-circle" style={{ color: "#E6C700" }}></i>
            <span className="card-text pl-2">{user.Bet}</span>
          </div>
          <div>
            <i class="fas fa-coins" style={{ color: "#E6C700" }}></i>
            <span className="card-text pl-2">{user.Price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
