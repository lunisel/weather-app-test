import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCity, removeCity } from "../store/actions";

const AddCity = ({ page, setPage, vw }) => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  const cities = useSelector((state) => state.user.cities);
  const dispatch = useDispatch();
  return vw === "Desktop" ? (
    <div className="add-city-container">
      {cities.filter((c) => c.name === selectedCity.name).length > 0 ? (
        <>
          <BsDashSquare
            onClick={() => dispatch(removeCity(selectedCity.index))}
          />
          <p>Rimuovi città</p>
        </>
      ) : (
        <>
          <BsPlusSquare
            onClick={() =>
              dispatch(addCity({ w: selectedCity.w, name: selectedCity.name }))
            }
          />
          <p>Aggiungi città</p>
        </>
      )}
    </div>
  ) : (
    <div className="add-city-container" onClick={() => setPage("search")}>
      <BsPlusSquare />
      <p>Aggiungi città</p>
    </div>
  );
};

export default AddCity;
