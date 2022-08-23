import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import usePrevious from "../Hooks/usePrevious";
import {
  fetchCharacterMainData,
  selectAdditionalInfo,
  selectAdditionalInfoLoading,
  selectCharacterMainData,
  selectCharacterInfoLoading,
} from "./characterInfoSlice";
import CharacterMainInfo from "./CharacterMainInfo";
import MainInfoLoader from "./MainInfoLoader";
import CharacterFilms from "./CharacterFilms";
import FilmsLoader from "./FilmsLoader";

import "./characterInfo.css";

const CharactersInfo = () => {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const characterData = useSelector(selectCharacterMainData);
  const characterDataLoading = useSelector(selectCharacterInfoLoading);
  const prevLoading = usePrevious(characterDataLoading);
  const filmsData = useSelector(selectAdditionalInfo("films"));
  const filmsLoading = useSelector(selectAdditionalInfoLoading("films"));
  const filmsPrevLoading = usePrevious(filmsLoading);
  useEffect(() => {
    dispatch(fetchCharacterMainData(routeParams.id));
  }, [dispatch, routeParams.id]);

  const isNoFilmsData = filmsPrevLoading && !filmsLoading && !filmsData.length;
  const isNoData =
    prevLoading &&
    !characterDataLoading &&
    !Object.keys(characterData).length &&
    isNoFilmsData;
  return (
    <Container className="character_info_container app_container">
      <div className="go_back_section">
        <Link className="go_back_link" to="/characters">{`< Go Back`}</Link>
      </div>
      {isNoData ? (
        <div>No Character Data Found</div>
      ) : (
        <>
          <div className="character_info_section">
            {characterDataLoading ? (
              <MainInfoLoader />
            ) : characterData.length ? (
              <CharacterMainInfo mainInfo={characterData} />
            ) : null}

            {filmsLoading ? (
              <FilmsLoader />
            ) : filmsData.length ? (
              <CharacterFilms filmsData={filmsData} />
            ) : null}
          </div>
        </>
      )}
    </Container>
  );
};

export default CharactersInfo;
