import { useContext } from "react";
import { YalliContext } from "../../Context/YalliContext";
import Hero from "./Components/Hero";
import "./Home.css";
const Home = () => {
  const { currentUser } = useContext(YalliContext);
  return (
    <div className="home">
      <Hero />
    </div>
  );
};

export default Home;
