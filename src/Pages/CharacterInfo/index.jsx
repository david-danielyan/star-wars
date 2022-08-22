import React from "react";
import { useParams } from "react-router-dom";

const CharactersInfo = () => {
  const routeParams = useParams();
  console.log(routeParams, "routeParams");
  return <div>CharactersInfo</div>;
};

export default CharactersInfo;
