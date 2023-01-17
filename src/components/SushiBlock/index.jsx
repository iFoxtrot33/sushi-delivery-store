import React from "react";

function SushiBlock({
  id,
  title,
  price,
  imageUrl,
  types,
  description,
  weight,
}) {
  const [sushiCount, setSushiCount] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const [showDescription, setShowDescription] = React.useState(-1);
  const typeNames = ["half (4pcs)", "full (8 pcs)"];

  function onAddSushi() {
    setSushiCount(sushiCount + 1);
  }
  function onShowDescription(id) {
    if (showDescription === id) {
      setShowDescription(-1);
    }
    setShowDescription(id);
  }

  return (
    <div className="sushi-block__wrapper">
      <div className="sushi-block">
        <img
          className="sushi-block__image"
          src={imageUrl}
          alt="Philadelphia Sushi"
        />
        <h4 className="sushi-block__title">{title}</h4>
        <div className="sushi-block__description">
          <h3 onClick={() => onShowDescription(id)}>Description</h3>
          <p>{showDescription === id ? description : ""}</p>
        </div>
        <div className="sushi-block__selector">
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveType(type)}
                className={activeType === type ? "active" : ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
        </div>
        <div className="sushi-block__bottom">
          <div className="sushi-block__price">{price} $</div>
          <button
            onClick={onAddSushi}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            <i>{sushiCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SushiBlock;