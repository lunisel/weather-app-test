import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCity, removeCity } from "../store/actions";
import AddCity from "./AddCity";
import { fetchWeather } from "./logic";
import SingleCityCard from "./SingleCityCard";

const SavedCities = ({ page, setPage }) => {
  const cities = useSelector((state) => state.user.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    cities.map(async (c, i) => {
      let lat = c.w.lat;
      let lon = c.w.lon;
      let w = await fetchWeather(lat, lon);
      dispatch(addCity({ w: w, name: c.name }));
      dispatch(removeCity(i - i));
    });
  }, []);

  return (
    <>
      <AddCity page={page} setPage={setPage} />
      <div className="cities-container">
        {cities ? (
          cities.map((c, i) => (
            <SingleCityCard
              key={i}
              weather={c.w}
              name={c.name}
              setPage={setPage}
              index={i}
            />
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </>
  );
};

export default SavedCities;
