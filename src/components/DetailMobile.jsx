import { useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/md";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { formatDate } from "./logic";
import { useDispatch } from "react-redux";
import { addCity, removeCity } from "../store/actions";

const Detail = ({ setPage }) => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const cities = useSelector((state) => state.user.cities);
  const date = formatDate(selectedCity.w.current.dt);
  const dispatch = useDispatch();
  return (
    <div
      className={`container bg-${selectedCity.w.current.weather[0].icon}`}
      id="detail"
    >
      <div className="detail-top-container">
        <MdArrowBack onClick={() => setPage("home")} />
        <div className="middle-text">
          <h3>{selectedCity.name}</h3>
          <p className="date">{date}</p>
          <p className="description">
            {selectedCity.w.current.weather[0].description}
          </p>
        </div>
        {cities.filter((c) => c.name === selectedCity.name).length > 0 ? (
          <BsDashSquare
            onClick={() => dispatch(removeCity(selectedCity.index))}
          />
        ) : (
          <BsPlusSquare
            onClick={() =>
              dispatch(addCity({ w: selectedCity.w, name: selectedCity.name }))
            }
          />
        )}
      </div>
      <div className="icon-temperature-container">
        <img
          src={`/assets/${selectedCity.w.current.weather[0].icon}.png`}
          alt="icon"
        />
        <span className="temperature">
          {selectedCity.w.current.temp.toString().split(".")[0]}˚
        </span>
      </div>
    </div>
  );
};

export default Detail;
