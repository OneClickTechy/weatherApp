import { useContext } from "react";
import { SearchValueContext } from "../../App";
import kelvintoFandC from "../../hooks/kelvin2fandc";

const CurrentWeather = () => {
  const { data, error, isLoading } = useContext(SearchValueContext);
  // console.log(data, error, isLoading);
  if (error) return <div>{`${error.status} ${error.data.message}` || "Unable to Fetch Data, Please Reload this Page"}</div>;
  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center text-text-lightGray h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }
  return (
    <>
      {data && (
        <div className="">
          <h1 className="font-extrabold text-3xl">{`${data.name}, ${data.sys.country}`}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="icon"
            className=""
          />
          <p>{data.weather[0].main}</p>
          <div className="">
            <p className="md:text-5xl font-bold font-sans">{`${kelvintoFandC(data.main.temp).celsius} `}&deg;C</p>
            <p className="md:text-5xl font-bold font-sans">{`${kelvintoFandC(data.main.temp).fahrenheit} `}&deg;F</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
