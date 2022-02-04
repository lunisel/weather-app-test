import AddCity from "./AddCity";

const HomeMobile = ({ page, setPage }) => {
  return (
    <div className="container">
      <AddCity page={page} setPage={setPage} />
    </div>
  );
};

export default HomeMobile;
