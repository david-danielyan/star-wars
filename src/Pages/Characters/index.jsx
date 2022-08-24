import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharactersData,
  selectCharactersData,
  selectCharactersLoading,
} from "./charactersSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Pagination from "react-responsive-pagination";

import Card from "react-bootstrap/Card";
import usePrevious from "../../Hooks/usePrevious";
import "./characters.css";
import CardLoader from "./CharactersCardLoader";
import { Form } from "react-bootstrap";
const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharactersData);
  const isLoading = useSelector(selectCharactersLoading);
  const prevLoading = usePrevious(isLoading);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const { data = [], totalPages } = characters;
  const searchRef = useRef(null);
  useEffect(() => {
    dispatch(fetchCharactersData());
  }, [dispatch]);

  const isNoData = prevLoading && !isLoading && !data.length;
  const getLinkToCharacter = (character) => {
    const splittedUrl = character.url.split("/");
    return `characters/${splittedUrl[splittedUrl.length - 2]}`;
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setPage(1);
    searchRef.current && clearTimeout(searchRef.current);
    searchRef.current = setTimeout(() => {
      dispatch(fetchCharactersData({ page: 1, search: e.target.value }));
    }, 500);
  };
  const handlePageChange = (page) => {
    setPage(page);
    dispatch(fetchCharactersData({ page, search: searchValue }));
  };
  return (
    <Container className="characters_container app_container">
      {isNoData && !searchValue ? (
        <div className="no_data">No Characters Data</div>
      ) : (
        <>
          <Form.Control
            type="text"
            placeholder="Search Characters"
            onChange={handleSearchChange}
            value={searchValue}
            disabled={isLoading}
            className="search_input"
          />
          {isLoading ? (
            <div className="cards_section">
              <CardLoader />
            </div>
          ) : (
            <>
              <div className="cards_section">
                {data.length ? (
                  data.map((item, index) => (
                    <div className="characters_card_block" key={item.name}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            To get more information about character navigate to
                            inner page by clicking the button
                          </Card.Text>
                          <Button
                            variant="primary"
                            as="a"
                            href={getLinkToCharacter(item)}
                          >
                            See More
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                ) : (
                  <div className="no_data">No Search Result</div>
                )}
              </div>

              {totalPages > 1 ? (
                <div className="pagination_section">
                  <Pagination
                    current={page}
                    total={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              ) : null}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Characters;
