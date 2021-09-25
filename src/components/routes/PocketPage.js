import React from "react";

const PocketPage = (props) => {
  const pocket = props.collection.filter(
    (item) => item.id == props.match.params.id
  )[0];

  console.log(pocket, "LOOOOOOOOOOOK");

  return <div>{pocket.name}</div>;
};

export default PocketPage;
