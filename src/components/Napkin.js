import React from "react";
import "../bootstrap1.min.css";


const Napkin = (props) => {
    console.log(props)
  return (
    <div
      className="card border-primary mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <div className="class-header"></div>
      <div className="card-body">
        <h4 className="card-title">My {props.item.headline} Napkin</h4>
        <p className="card-text">{props.item.content}</p>
        <p className="card-text">{props.item.sourcelink}</p>
      </div>
    </div>
  );
};

export default Napkin;