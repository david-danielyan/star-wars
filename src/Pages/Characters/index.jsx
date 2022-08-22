import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersData } from "./charactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharactersData("https://swapi.dev/api/people"));
  }, [dispatch]);
  return <div>test</div>;
};

export default Characters;
