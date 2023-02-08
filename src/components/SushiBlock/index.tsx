import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/slices/cart/slice";
import {
  selectCartItemByIdFull,
  selectCartItemByIdHalf,
} from "../../redux/slices/cart/selectors";
import { CartItem } from "../../redux/slices/cart/types";

const typeNames = ["half (4pcs)", "full (8 pcs)"];

type SushiBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
};

const SushiBlock: React.FC<SushiBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  types,
}) => {
  const dispatch = useDispatch();

  const cartItemFull = useSelector(selectCartItemByIdFull(id));

  const cartItemHalf = useSelector(selectCartItemByIdHalf(id));

  const [activeType, setActiveType] = React.useState(1);

  const addedCount =
    (cartItemFull ? cartItemFull.count : 0) +
    (cartItemHalf ? cartItemHalf.count : 0);

  const onClickAdd = () => {
    const item: CartItem = {
      id: activeType !== 0 ? "-" + id : id,
      title,
      price: !activeType ? price / 2 : price,
      imageUrl,
      type: typeNames[activeType],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="sushi-block__wrapper">
      <div className="sushi-block">
        <Link to={`/about/${id}`}>
          <img className="sushi-block__image" src={imageUrl} alt={title} />
          <h4 className="sushi-block__title">{title}</h4>
        </Link>
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
          <div className="sushi-block__price">
            {activeType ? price : price / 2} $
          </div>
          <button
            onClick={onClickAdd}
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
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SushiBlock;
