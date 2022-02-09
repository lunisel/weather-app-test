import { useState } from "react";
import Detail from "./DetailMobile";
import Localization from "./Localization";
import Navbar from "./Navbar";
import SavedCities from "./SavedCities";
import Search from "./Search";

const Mobile = ({ vw }) => {
  const [page, setPage] = useState("home");

  return (
    <div className="big-container">
      <Navbar page={page} setPage={setPage} />

      {page === "home" && (
        <div className="container home">
          <SavedCities page={page} setPage={setPage} vw={vw} />
        </div>
      )}

      {page === "search" && (
        <div className="container" id="search-mobile">
          <Search setPage={setPage} />{" "}
        </div>
      )}

      {page === "localization" && (
        <div className="container" id="localization-mobile">
          <Localization />
        </div>
      )}

      {page === "detail" && <Detail setPage={setPage} />}
    </div>
  );
};

export default Mobile;
