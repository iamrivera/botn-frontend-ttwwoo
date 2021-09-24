import React from "react";
import "../bootstrap1.min.css";

const Pocket = (props) => {
  return (
    <div className="card text-white bg-success mb-20" style={{maxWidth: "20rem"}}> 
        <div className="class-header">Pocket {props.item.id}</div>
        <div className="card-body">
          <h4 className="card-title">{props.item.name}</h4>
          <p className="card-text">{props.item.description}</p>
        </div>
    </div>
  )
};

export default Pocket;
