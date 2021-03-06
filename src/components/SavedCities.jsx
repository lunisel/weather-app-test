import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCity, addUserName, removeCity } from "../store/actions";
import AddCity from "./AddCity";
import { fetchWeather } from "./logic";
import SingleCityCard from "./SingleCityCard";

const SavedCities = ({ page, setPage, vw }) => {
  const cities = useSelector((state) => state.user.cities);
  const name = useSelector((state) => state.user.firstName);
  const selectedCity = useSelector((state) => state.user.selectedCity);

  const dispatch = useDispatch();

  useEffect(() => {
    cities &&
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
      {vw === "Mobile" ? (
        <div className="title-container">
          <h2>Good Morning!</h2>
          {name === "" ? (
            <input
              type="text"
              placeholder="Enter your name"
              className="name"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  dispatch(addUserName(e.currentTarget.value));
                }
              }}
            />
          ) : (
            <h2>{name}</h2>
          )}
        </div>
      ) : (
        ""
      )}
      <AddCity page={page} setPage={setPage} vw={vw} />
      <div className="cities-container">
        {vw === "Desktop"
          ? cities &&
            cities.map(
              (c, i) =>
                selectedCity.name !== c.name && (
                  <SingleCityCard
                    key={i}
                    weather={c.w}
                    name={c.name}
                    setPage={setPage}
                    index={i}
                  />
                )
            )
          : cities &&
            cities.map((c, i) => (
              <SingleCityCard
                key={i}
                weather={c.w}
                name={c.name}
                setPage={setPage}
                index={i}
              />
            ))}
      </div>
    </>
  );
};

export default SavedCities;
