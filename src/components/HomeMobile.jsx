import { useSelector } from "react-redux";
import AddCity from "./AddCity";
import SingleCityCard from "./SingleCityCard";

const HomeMobile = ({ page, setPage }) => {
  const cities = useSelector((state) => state.user.cities);

  return (
    <div className="container home">
      <div className="title-container">
        <h2>Good Morning!</h2>
        <h2>Mario</h2>
      </div>
      <AddCity page={page} setPage={setPage} />
      <div className="cities-container">
        {cities ? (
          cities.map((c) => (
            <SingleCityCard currentWeather={c.w.current} name={c.name} />
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default HomeMobile;
