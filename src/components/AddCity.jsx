import { BsPlusSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";

const AddCity = ({ page, setPage }) => {
  return (
    <div className="add-city-container" onClick={() => setPage("search")}>
      <BsPlusSquare />
      <p>Aggiungi città</p>
    </div>
  );
};

export default AddCity;
