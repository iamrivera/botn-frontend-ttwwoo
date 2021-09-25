import React from "react";
import "../bootstrap1.min.css";
import { Link } from "react-router-dom";

const Pocket = (props) => {
  return (
    <div
      className="card border-primary mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <div className="class-header"></div>
      <div className="card-body">
        <h4 className="card-title">My {props.item.name} Pocket</h4>
        <p className="card-text">{props.item.description}</p>
      </div>
      <button type="button" className="btn btn-success"><Link to={`/pockets/${props.item.id}`}>Open</Link></button>
      <button type="button" className="btn btn-warning">Edit</button>
    </div>
  );
};

export default Pocket;
