import React from "react";
import Napkin from "../Napkin"

const PocketPage = (props) => {
  let pocket = props.collection.filter(
    (item) => item.id == props.match.params.id
  )[0];
 

  console.log(pocket, "LOOOOOOOOOOOK");

  return (
    <div>
      {pocket.name}
      <NapkinCollection napkins={pocket.napkins}/>
    </div>
  );
};

export default PocketPage;
