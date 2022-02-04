const SingleCityCard = ({ currentWeather, name }) => {
  return (
    <div className={`card-container ${currentWeather.weather[0].icon}`}>
      <h1>{name}</h1>
    </div>
  );
};

export default SingleCityCard;
