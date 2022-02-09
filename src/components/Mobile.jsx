import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUserName } from "../store/actions";
import Detail from "./DetailMobile";
import LocalizationMobile from "./LocalizationMobile";
import Navbar from "./Navbar";
import SearchMobile from "./SearchMobile";
import SavedCities from "./SavedCities";

const Mobile = ({ vw }) => {
  const [page, setPage] = useState("home");
  const name = useSelector((state) => state.user.firstName);
  const dispatch = useDispatch();
  return (
    <div className="big-container">
      {console.log(vw)}
      <Navbar page={page} setPage={setPage} />

      {page === "home" && (
        <div className="container home">
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
          <SavedCities page={page} setPage={setPage} />
        </div>
      )}
      {page === "search" && <SearchMobile setPage={setPage} />}
      {page === "localization" && <LocalizationMobile />}
      {page === "detail" && <Detail setPage={setPage} />}
    </div>
  );
};

export default Mobile;
