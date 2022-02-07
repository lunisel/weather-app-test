import { useState } from "react";
import Detail from "./DetailMobile";
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
      {page === "search" && <SearchMobile setPage={setPage} />}
      {page === "localization" && <LocalizationMobile />}
      {page === "detail" && <Detail setPage={setPage} />}
    </div>
  );
};

export default Mobile;
