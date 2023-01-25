import React from "react";

type CatigoriesProps = {
  value: number;
  onChangeCategory: any;
};

const Categories: React.FC<CatigoriesProps> = ({ value, onChangeCategory }) => {
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
};

export default Categories;
