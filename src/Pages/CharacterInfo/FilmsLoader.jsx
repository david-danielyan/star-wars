import Placeholder from "react-bootstrap/Placeholder";

const FilmsLoader = ({ rowsCount = 10 }) => {
  const renderItems = () => {
    const data = [];
    for (let i = 0; i < rowsCount; i++) {
      data.push(
        <Placeholder animation="glow" key={i}>
          <Placeholder xs={12} />
        </Placeholder>
      );
    }
    return data;
  };

  return (
    <div className="character_films">
      <Placeholder animation="glow">
        <Placeholder xs={2} className="block_title" />
      </Placeholder>
      <div>{renderItems()}</div>
    </div>
  );
};

export default FilmsLoader;
