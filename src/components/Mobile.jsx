import { useState } from "react";
import Navbar from "./Navbar";

const Mobile = () => {
  const [page, setPage] = useState("home");
  return (
    <div className="big-container">
      <Navbar page={page} setPage={setPage} />
    </div>
  );
};

export default Mobile;
