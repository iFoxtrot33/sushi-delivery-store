import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={-1}
    width={280}
    height={444}
    viewBox="0 0 280 444"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="275" height="0" />
    <rect x="-1" y="52" rx="30" ry="30" width="277" height="165" />
    <rect x="37" y="89" rx="0" ry="0" width="77" height="25" />
    <rect x="5" y="241" rx="11" ry="11" width="267" height="21" />
    <rect x="115" y="269" rx="0" ry="0" width="9" height="0" />
    <rect x="5" y="274" rx="11" ry="11" width="271" height="34" />
    <rect x="5" y="323" rx="10" ry="10" width="272" height="57" />
    <rect x="13" y="401" rx="9" ry="9" width="65" height="30" />
    <rect x="176" y="400" rx="20" ry="20" width="86" height="34" />
  </ContentLoader>
);

export default Skeleton;
