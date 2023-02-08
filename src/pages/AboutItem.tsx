import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AboutItem: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sushi, setSushi] = React.useState<{
    imageUrl: string;
    title: string;
    description: string;
    weight: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchSushi() {
      try {
        const { data } = await axios.get(
          "https://63c1e64a376b9b2e6485d812.mockapi.io/items/" + id
        );
        setSushi(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        navigate("/");
      }
    }

    fetchSushi();
  }, []);

  if (!sushi) {
    return <h2 className="about-loading">Loading...</h2>;
  }
  return (
    <div className="container inner-container">
      <img src={sushi.imageUrl} width={300} alt="sushi" />
      <h1>{sushi.title}</h1>
      <h2 className="desc">Description:</h2>
      <h3>{sushi.description}</h3>
      <h3>Weight: {sushi.weight}g.</h3>
      <h2 className="price">{sushi.price} $</h2>

      <Link to="/" className="button button--black inner-btn">
        <span>Go Back</span>
      </Link>
    </div>
  );
};

export default AboutItem;
