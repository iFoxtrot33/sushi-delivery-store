import React from "react";
// @ts-ignore
import banner from "../assets/imgs/banner2.gif";

const Banner: React.FC = () => {
  return (
    <div>
      <img className="banner" src={banner} alt="sushi-banner" />
    </div>
  );
};

export default Banner;
