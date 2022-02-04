import { useState } from "react";
import HomeMobile from "./HomeMobile";
import LocalizationMobile from "./LocalizationMobile";
import Navbar from "./Navbar";
import SearchMobile from "./SearchMobile";

const Mobile = () => {
  const [page, setPage] = useState("home");
  return (
    <div className="big-container">
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <HomeMobile page={page} setPage={setPage} />}
      {page === "search" && <SearchMobile />}
      {page === "localization" && <LocalizationMobile />}
    </div>
  );
};

export default Mobile;
