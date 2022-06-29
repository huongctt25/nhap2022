const Card = (props) => {
  return (
    <>
      <div>
        <div
          className="card"
          style={{
            borderColor: "rgb(210, 169, 251)",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Height: {props.height}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
