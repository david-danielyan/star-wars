import React from "react";
import { ListGroup } from "react-bootstrap";

const CharacterMainInfo = ({ mainInfo = [] }) => {
  return (
    <div className="characters_main_info">
      <h3 className="block_title">Main Info</h3>
      <ListGroup>
        {mainInfo.map((item) => {
          return (
            <ListGroup.Item key={item.key} className="main_info_list_item">
              <span>{item.key}</span>
              <span>{item.value}</span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CharacterMainInfo;
