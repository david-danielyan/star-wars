import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

const CharactersCardLoader = ({ loadingItemsCount = 6 }) => {
  const renderItems = () => {
    const data = [];
    for (let i = 0; i < loadingItemsCount; i++) {
      data.push(
        <div className="characters_card_block" key={i}>
          <Card>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </div>
      );
    }
    return data;
  };
  return renderItems();
};

export default CharactersCardLoader;
