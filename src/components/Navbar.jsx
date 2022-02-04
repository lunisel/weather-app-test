import { FiHome, FiSearch, FiMapPin } from "react-icons/fi";

const Navbar = ({ page, setPage }) => {
  return (
    <nav>
      <div className="icons-container">
        <div
          className={page === "home" ? "nav-icon active" : "nav-icon"}
          onClick={() => setPage("home")}
        >
          <FiHome className={page === "home" ? "active" : ""} />
        </div>
        <div
          className={page === "search" ? "nav-icon active" : "nav-icon"}
          onClick={() => setPage("search")}
        >
          <FiSearch className={page === "search" ? "active" : ""} />
        </div>
        <div
          className={page === "localization" ? "nav-icon active" : "nav-icon"}
          onClick={() => setPage("localization")}
        >
          <FiMapPin className={page === "localization" ? "active" : ""} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
