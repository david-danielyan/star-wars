import React from "react";
import Table from "react-bootstrap/Table";

const CharacterFilms = ({ filmsData = [] }) => {
  const renderHeader = () => {
    const arrFromObject = Object.keys(filmsData[0]);
    return arrFromObject.map((item) => {
      return <th key={item}>{item}</th>;
    });
  };
  const renderBody = () => {
    return filmsData.map((item, index) => {
      return (
        <tr key={`tr${index}`}>
          {Object.values(item).map((item, index) => {
            return <td key={`td${index}`}>{item}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <div className="character_films">
      <h3 className="block_title">Films</h3>

      <Table striped bordered hover className="films_table">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </Table>
    </div>
  );
};

export default CharacterFilms;
