import React from "react";

type CatigoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = [
  "All",
  "Rolls",
  "Wok",
  "Sushi",
  "Lunches",
  "Deserts",
  "Drinks",
  "Additional",
];

const Categories: React.FC<CatigoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
