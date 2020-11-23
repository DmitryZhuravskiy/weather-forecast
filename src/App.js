import React from "react";
import Locations from "./components/Locations";
import DataOfHalfDay from "./components/DataOfHalfDay";
import { WEEK_DAYS, MONTHS } from "./constants/constants";

const API_KEY = "2dd62d48ced57a57cb21a5da5ee706fe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            city: undefined,
            cityList: [],
            country: undefined,
            date_day2: undefined,
            date_day3: undefined,
            date_day4: undefined,
            date_day_next1: undefined,
            date_day_next2: undefined,
            date_day_next3: undefined,
            daytime: undefined,
            date_now: undefined,
            date_now_night: undefined,
            error: undefined,
            humidity: undefined,
            humidity_night: undefined,
            pressure: undefined,
            pressure_night: undefined,
            temp: undefined,
            temp_day: undefined,
            temp_night: undefined,
            temp_min: undefined,
            temp_max: undefined,
            temp_day2_min: undefined,
            temp_day2_max: undefined,
            temp_day3_min: undefined,
            temp_day3_max: undefined,
            temp_day4_min: undefined,
            temp_day4_max: undefined,
            sunset: undefined,
            sunrise: undefined,
            wind: undefined,
            wind_night: undefined,
            weather: undefined,
            weather_night: undefined,
            weather_icon: undefined,
            weather_icon_night: undefined,
          };
    this.deleteCityInList = this.deleteCityInList.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getOneCityWeather = this.getOneCityWeather.bind(this);
  }

  deleteCityInList = async (e) => {
    e.preventDefault();
    const ourElementNumber = e.target.value;
    let newCityList = [...this.state.cityList];
    newCityList.splice(ourElementNumber, 1);
    for (let i = ourElementNumber; i < newCityList.length; i++) {
      newCityList[i][0]--;
    }
    this.setState({
      cityList: [...newCityList],
    });
    localStorage.state = JSON.stringify(this.state);
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      let counterOfDouble = 0;
      for (let i = 0; i < this.state.cityList.length; i++) {
        if (city == this.state.cityList[i][1]) {
          counterOfDouble++;
        }
      }
      if (counterOfDouble == 0) {
        this.setState({
          cityList: [
            ...this.state.cityList,
            [
              this.state.cityList.length,
              data.name,
              data.sys.country,
              data.main.temp,
            ],
          ],
        });
        localStorage.state = JSON.stringify(this.state);
      } else {
        this.setState({
          cityList: [...this.state.cityList],
        });
        localStorage.state = JSON.stringify(this.state);
      }
    } else {
      this.setState({
        cityList: [...this.state.cityList],
      });
      localStorage.state = JSON.stringify(this.state);
    }
  };

  getOneCityWeather = async (e) => {
    e.preventDefault();
    const city = e.target.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await api_url.json();
      const api_url2 = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=current&appid=${API_KEY}&units=metric`
      );
      const data2 = await api_url2.json();
      var dateSet = new Date();
      var dateSet2 = new Date();
      let dataSetDay2 = new Date();
      let dataSetDay3 = new Date();
      let dataSetDay4 = new Date();
      dateSet.setTime(data.sys.sunset);
      dateSet2.setTime(data.sys.sunrise);

      dataSetDay2.setTime(data2.daily[1].dt);
      dataSetDay3.setTime(data2.daily[2].dt);
      dataSetDay4.setTime(data2.daily[3].dt);

      var sunsetDate = `${dateSet.getHours() - 12}:${dateSet.getMinutes()}`;
      var sunriseDate = `${dateSet2.getHours() - 12}:${dateSet2.getMinutes()}`;
      let daytimeString = "";
      let newDate = new Date();
      let date_now_const = `${
        WEEK_DAYS[newDate.getDay()]
      }, ${newDate.getDate()} ${
        MONTHS[newDate.getMonth()]
      } ${newDate.getFullYear()} | ${newDate.getHours()}h:${newDate.getMinutes()}m`;
      let date_now_const_next = "";
      if (newDate.getHours() >= 12) {
        date_now_const_next = `${WEEK_DAYS[newDate.getDay() + 1]}, ${
          newDate.getDate() + 1
        } ${MONTHS[newDate.getMonth()]} ${newDate.getFullYear()} | ${
          newDate.getHours() - 12
        }h:${newDate.getMinutes()}m`;
      } else {
        date_now_const_next = `${
          WEEK_DAYS[newDate.getDay()]
        }, ${newDate.getDate()} ${
          MONTHS[newDate.getMonth()]
        } ${newDate.getFullYear()} | ${
          newDate.getHours() + 12
        }h:${newDate.getMinutes()}m`;
      }

      if (dateSet.getMinutes() + dateSet2.getMinutes() >= 60) {
        daytimeString = `${dateSet2.getHours() - 23 + dateSet.getHours()}h ${
          dateSet.getMinutes() + dateSet2.getMinutes() - 60
        }m`;
      } else {
        daytimeString = `${dateSet2.getHours() - 24 + dateSet.getHours()}h ${
          dateSet.getMinutes() + dateSet2.getMinutes()
        }m`;
      }

      let ourTime = new Date();
      if (!city) {
        this.setState({
          city: undefined,
          cityList: [...this.state.cityList],
          country: undefined,
          date_day2: undefined,
          date_day3: undefined,
          date_day4: undefined,
          date_day_next1: undefined,
          date_day_next2: undefined,
          date_day_next3: undefined,
          daytime: undefined,
          date_now: new Date(),
          date_now_night: undefined,
          error: "Mistake! Please let's try again",
          humidity: undefined,
          humidity_night: undefined,
          pressure: undefined,
          pressure_night: undefined,
          temp: undefined,
          temp_day: undefined,
          temp_night: undefined,
          temp_min: undefined,
          temp_max: undefined,
          temp_day2_min: undefined,
          temp_day2_max: undefined,
          temp_day3_min: undefined,
          temp_day3_max: undefined,
          temp_day4_min: undefined,
          temp_day4_max: undefined,
          sunset: undefined,
          sunrise: undefined,
          wind: undefined,
          wind_night: undefined,
          weather: undefined,
          weather_night: undefined,
          weather_icon: undefined,
          weather_icon_night: undefined,
        });
        localStorage.state = JSON.stringify(this.state);
      } else if (ourTime.getHours() >= 7 && ourTime.getHours() < 19) {
        //Значит день
        this.setState({
          city: data.name,
          cityList: [...this.state.cityList],
          country: data.sys.country,
          date_day2: `${dataSetDay2
            .getDay()
            .toString()}, ${dataSetDay2.getDate()} `,
          date_day3: `${dataSetDay3
            .getDay()
            .toString()}, ${dataSetDay3.getDate()} `,
          date_day4: `${dataSetDay4
            .getDay()
            .toString()}, ${dataSetDay4.getDate()} `,
          date_day_next1: `${WEEK_DAYS[newDate.getDay() + 2]}`,
          date_day_next2: `${WEEK_DAYS[newDate.getDay() + 3]}`,
          date_day_next3: `${WEEK_DAYS[newDate.getDay() + 4]}`,
          daytime: daytimeString,
          date_now: date_now_const,
          date_now_night: date_now_const_next,
          error: "",
          humidity: Math.floor(data.main.humidity),
          humidity_night: Math.floor(data2.hourly[12].humidity),
          pressure: Math.floor(data.main.pressure),
          pressure_night: Math.floor(data2.hourly[12].pressure),
          temp: Math.floor(data.main.temp),
          temp_day: Math.floor(data2.daily[0].temp.day),
          temp_night: Math.floor(data2.daily[0].temp.night),
          temp_min: Math.floor(data2.daily[0].temp.min),
          temp_max: Math.floor(data2.daily[0].temp.max),
          temp_day2_min: Math.floor(data2.daily[1].temp.min),
          temp_day2_max: Math.floor(data2.daily[1].temp.max),
          temp_day3_min: Math.floor(data2.daily[2].temp.min),
          temp_day3_max: Math.floor(data2.daily[2].temp.max),
          temp_day4_min: Math.floor(data2.daily[3].temp.min),
          temp_day4_max: Math.floor(data2.daily[3].temp.max),
          sunset: sunsetDate,
          sunrise: sunriseDate,
          wind: Math.floor(data.wind.speed),
          wind_night: Math.floor(data2.hourly[12].wind_speed),
          weather: data2.hourly[0].weather[0].main,
          weather_night: data2.hourly[12].weather[0].main,
          weather_icon: data2.hourly[0].weather[0].icon,
          weather_icon_night: data2.hourly[12].weather[0].icon,
        });
        localStorage.state = JSON.stringify(this.state);
      } else {
        //Значит ночь
        this.setState({
          city: data.name,
          cityList: [...this.state.cityList],
          country: data.sys.country,
          date_day2: `${dataSetDay2.getDay()}, ${dataSetDay2.getDate()} `,
          date_day3: `${dataSetDay3.getDay()}, ${dataSetDay3.getDate()} `,
          date_day4: `${dataSetDay4.getDay()}, ${dataSetDay4.getDate()} `,
          date_day_next1: `${WEEK_DAYS[newDate.getDay() + 2]}`,
          date_day_next2: `${WEEK_DAYS[newDate.getDay() + 3]}`,
          date_day_next3: `${WEEK_DAYS[newDate.getDay() + 4]}`,
          daytime: daytimeString,
          date_now: date_now_const_next,
          date_now_night: date_now_const,
          error: "",
          humidity: Math.floor(data2.hourly[12].humidity),
          humidity_night: Math.floor(data.main.humidity),
          pressure: Math.floor(data2.hourly[12].pressure),
          pressure_night: Math.floor(data.main.pressure),
          temp: Math.floor(data.main.temp),
          temp_day: Math.floor(data2.daily[0].temp.day),
          temp_night: Math.floor(data2.daily[0].temp.night),
          temp_min: Math.floor(data.main.temp_min),
          temp_max: Math.floor(data.main.temp_max),
          temp_day2_min: Math.floor(data2.daily[1].temp.min),
          temp_day2_max: Math.floor(data2.daily[1].temp.max),
          temp_day3_min: Math.floor(data2.daily[2].temp.min),
          temp_day3_max: Math.floor(data2.daily[2].temp.max),
          temp_day4_min: Math.floor(data2.daily[3].temp.min),
          temp_day4_max: Math.floor(data2.daily[3].temp.max),
          sunset: sunsetDate,
          sunrise: sunriseDate,
          wind: Math.floor(data2.hourly[12].wind_speed),
          wind_night: Math.floor(data.wind.speed),
          weather: data2.hourly[12].weather[0].main,
          weather_night: data2.hourly[0].weather[0].main,
          weather_icon: data2.hourly[12].weather[0].icon,
          weather_icon_night: data2.hourly[0].weather[0].icon,
        });
        localStorage.state = JSON.stringify(this.state);
      }
    }
  };

  render() {
    return (
      <div className="app">
        <div className="main">
          <Locations
            cityList={this.state.cityList}
            deleteCityInList={this.deleteCityInList}
            getOneCity={this.getOneCityWeather}
            weatherMethod={this.getWeather}
          />
          <DataOfHalfDay
            city={this.state.city}
            country={this.state.country}
            date_day2={this.state.date_day2}
            date_day3={this.state.date_day3}
            date_day4={this.state.date_day4}
            date_day_next1={this.state.date_day_next1}
            date_day_next2={this.state.date_day_next2}
            date_day_next3={this.state.date_day_next3}
            daytime={this.state.daytime}
            date_now={this.state.date_now_night}
            error={this.state.error}
            humidity={this.state.humidity_night}
            picture={'night-graphic'}
            pressure={this.state.pressure_night}
            temp={this.state.temp}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            temp_day2_min={this.state.temp_day2_min}
            temp_day2_max={this.state.temp_day2_max}
            temp_day3_min={this.state.temp_day3_min}
            temp_day3_max={this.state.temp_day3_max}
            temp_day4_min={this.state.temp_day4_min}
            temp_day4_max={this.state.temp_day4_max}
            temp_of_half_day={this.state.temp_night}
            sunset={this.state.sunset}
            sunrise={this.state.sunrise}
            wind={this.state.wind_night}
            weather={this.state.weather_night}
            weather_icon={this.state.weather_icon_night}
          />
          <DataOfHalfDay
            city={this.state.city}
            country={this.state.country}
            date_day2={this.state.date_day2}
            date_day3={this.state.date_day3}
            date_day4={this.state.date_day4}
            date_day_next1={this.state.date_day_next1}
            date_day_next2={this.state.date_day_next2}
            date_day_next3={this.state.date_day_next3}
            daytime={this.state.daytime}
            date_now={this.state.date_now}
            error={this.state.error}
            humidity={this.state.humidity}
            picture={'night-graphic day-graphic'}
            pressure={this.state.pressure}
            temp={this.state.temp}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            temp_day2_min={this.state.temp_day2_min}
            temp_day2_max={this.state.temp_day2_max}
            temp_day3_min={this.state.temp_day3_min}
            temp_day3_max={this.state.temp_day3_max}
            temp_day4_min={this.state.temp_day4_min}
            temp_day4_max={this.state.temp_day4_max}
            temp_of_half_day={this.state.temp_day}
            sunset={this.state.sunset}
            sunrise={this.state.sunrise}
            wind={this.state.wind}
            weather={this.state.weather}
            weather_icon={this.state.weather_icon}
          />
        </div>
      </div>
    );
  }
}

export default App;
