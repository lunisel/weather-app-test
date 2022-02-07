import { useSelector } from "react-redux";

const Detail = ({ setPage }) => {
  const selectedCity = useSelector((state) => state.user.selectedCity);
  return (
    <div className="container">
      <h1>{selectedCity.timezone}</h1>
    </div>
  );
};

export default Detail;
