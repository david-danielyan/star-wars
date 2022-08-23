import Placeholder from "react-bootstrap/Placeholder";
import { ListGroup } from "react-bootstrap";

const MainInfoLoader = ({ loadingItemsCount = 6 }) => {
  const renderItems = () => {
    const data = [];
    for (let i = 0; i < loadingItemsCount; i++) {
      data.push(
        <Placeholder as={ListGroup.Item} animation="glow" key={i}>
          <Placeholder xs={12} />
        </Placeholder>
      );
    }
    return data;
  };

  return (
    <>
      <Placeholder animation="glow">
        <Placeholder xs={2} className="block_title" />
      </Placeholder>
      <ListGroup>{renderItems()}</ListGroup>
    </>
  );
};

export default MainInfoLoader;
