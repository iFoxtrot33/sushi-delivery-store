import React from "react";
import banner from "../assets/imgs/banner.png";

const Banner: React.FC = () => {
  return (
    <div>
      <img className="banner" src={banner} alt="sushi-banner" />
    </div>
  );
};

export default Banner;
