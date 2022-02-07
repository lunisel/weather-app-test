import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addCity } from "../store/actions";
import Loading from "./Loading";
import { fetchCity, fetchWeather } from "./logic";
import SingleCityCard from "./SingleCityCard";

const SearchMobile = ({ setPage }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cityWeather, setCityWeather] = useState(null);
  const [cityName, setCityName] = useState(null);

  const dispatch = useDispatch();

  const searchCity = async (q) => {
    setLoading(true);
    let [lat, lon, name] = await fetchCity(q);
    setCityName(name);
    let weather = await fetchWeather(lat, lon);
    if (weather) {
      setLoading(false);
      setCityWeather(weather);
    }
  };

  return (
    <div className="container" id="search">
      <div className="search-title-container">
        <h1>Search</h1>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          defaultValue={query}
          placeholder="ex: Miami"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchCity(query);
            }
          }}
        />
        <div className="search-icon" onClick={() => searchCity(query)}>
          <FiSearch />
        </div>
      </div>
      <div
        className="results-container"
        onClick={() => {
          if (cityWeather) {
            dispatch(addCity({ w: cityWeather, name: cityName }));
          } else return;
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          cityWeather && (
            <SingleCityCard
              weather={cityWeather}
              name={cityName}
              setPage={setPage}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchMobile;
