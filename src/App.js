import React from "react";
import Form from "./components/Form";

const API_KEY = "2dd62d48ced57a57cb21a5da5ee706fe";
const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class App extends React.Component {
  state = {
    temp: undefined,
    temp_day: undefined,
    temp_night: undefined,
    temp_min: undefined,
    temp_max: undefined,
    daytime: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    weather_night: undefined,
    sunset: undefined,
    sunrise: undefined,
    error: undefined,
    humidity: undefined,
    pressure: undefined,
    wind: undefined,
    humidity_night: undefined,
    pressure_night: undefined,
    wind_night: undefined,
    cityList: [],
    date_now: undefined,
    date_now_night: undefined,
    date_day2: undefined,
    date_day3: undefined,
    date_day4: undefined,
    temp_day2_min: undefined,
    temp_day2_max: undefined,
    temp_day3_min: undefined,
    temp_day3_max: undefined,
    temp_day4_min: undefined,
    temp_day4_max: undefined,
    date_day_next1: undefined,
    date_day_next2: undefined,
    date_day_next3: undefined,
    weather_icon: undefined,
    weather_icon_night: undefined,
  };

  deleteCityInList = async (e) => {
    e.preventDefault();
    const ourElementNumber = e.target.value;
    let newCityList = [...this.state.cityList];
    newCityList.splice(ourElementNumber, 1);
    for (let i=ourElementNumber; i<newCityList.length; i++) {
      newCityList[i][0]--;
    } 
    console.log(newCityList);
    this.setState({
      cityList: [...newCityList],
    });
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
      } else {
        this.setState({
          cityList: [...this.state.cityList],
        });
      }
    } else {
      this.setState({
        cityList: [...this.state.cityList],
      });
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
          temp: undefined,
          temp_day: undefined,
          temp_night: undefined,
          temp_min: undefined,
          temp_max: undefined,
          city: undefined,
          country: undefined,
          weather: undefined,
          weather_night: undefined,
          sunset: undefined,
          sunrise: undefined,
          daytime: undefined,
          error: "Mistake! Please let's try again",
          humidity: undefined,
          pressure: undefined,
          wind: undefined,
          humidity_night: undefined,
          pressure_night: undefined,
          wind_night: undefined,
          cityList: [...this.state.cityList],
          date_now: new Date(),
          date_now_night: undefined,
          date_day2: undefined,
          date_day3: undefined,
          date_day4: undefined,
          temp_day2_min: undefined,
          temp_day2_max: undefined,
          temp_day3_min: undefined,
          temp_day3_max: undefined,
          temp_day4_min: undefined,
          temp_day4_max: undefined,
          date_day_next1: undefined,
          date_day_next2: undefined,
          date_day_next3: undefined,
          weather_icon: undefined,
          weather_icon_night: undefined,
        });
      } else if (ourTime.getHours() >= 7 && ourTime.getHours() < 19) {
        //Значит день
        this.setState({
          temp: Math.floor(data.main.temp),
          temp_day: Math.floor(data2.daily[0].temp.day),
          temp_night: Math.floor(data2.daily[0].temp.night),
          temp_min: Math.floor(data2.daily[0].temp.min),
          temp_max: Math.floor(data2.daily[0].temp.max),
          city: data.name,
          country: data.sys.country,
          weather: data2.hourly[0].weather[0].main,
          weather_night: data2.hourly[12].weather[0].main,
          sunset: sunsetDate,
          sunrise: sunriseDate,
          daytime: daytimeString,
          error: "",
          humidity: Math.floor(data.main.humidity),
          pressure: Math.floor(data.main.pressure),
          wind: Math.floor(data.wind.speed),
          humidity_night: Math.floor(data2.hourly[12].humidity),
          pressure_night: Math.floor(data2.hourly[12].pressure),
          wind_night: Math.floor(data2.hourly[12].wind_speed),
          cityList: [...this.state.cityList],
          date_now: date_now_const,
          date_now_night: date_now_const_next,
          date_day2: `${dataSetDay2
            .getDay()
            .toString()}, ${dataSetDay2.getDate()} `,
          date_day3: `${dataSetDay3
            .getDay()
            .toString()}, ${dataSetDay3.getDate()} `,
          date_day4: `${dataSetDay4
            .getDay()
            .toString()}, ${dataSetDay4.getDate()} `,
          temp_day2_min: Math.floor(data2.daily[1].temp.min),
          temp_day2_max: Math.floor(data2.daily[1].temp.max),
          temp_day3_min: Math.floor(data2.daily[2].temp.min),
          temp_day3_max: Math.floor(data2.daily[2].temp.max),
          temp_day4_min: Math.floor(data2.daily[3].temp.min),
          temp_day4_max: Math.floor(data2.daily[3].temp.max),
          date_day_next1: `${WEEK_DAYS[newDate.getDay() + 2]}`,
          date_day_next2: `${WEEK_DAYS[newDate.getDay() + 3]}`,
          date_day_next3: `${WEEK_DAYS[newDate.getDay() + 4]}`,
          weather_icon: data2.hourly[0].weather[0].icon,
          weather_icon_night: data2.hourly[12].weather[0].icon,
        });
      } else {
        //Значит ночь
        this.setState({
          temp: Math.floor(data.main.temp),
          temp_day: undefined,
          temp_night: undefined,
          temp_min: Math.floor(data.main.temp_min),
          temp_max: Math.floor(data.main.temp_max),
          city: data.name,
          country: data.sys.country,
          weather: data2.hourly[12].weather[0].main,
          weather_night: data2.hourly[0].weather[0].main,
          sunset: sunsetDate,
          sunrise: sunriseDate,
          daytime: daytimeString,
          error: "",
          humidity: Math.floor(data2.hourly[12].humidity),
          pressure: Math.floor(data2.hourly[12].pressure),
          wind: Math.floor(data2.hourly[12].wind_speed),
          humidity_night: Math.floor(data.main.humidity),
          pressure_night: Math.floor(data.main.pressure),
          wind_night: Math.floor(data.wind.speed),
          cityList: [...this.state.cityList],
          date_now: date_now_const_next,
          date_now_night: date_now_const,
          date_day2: `${dataSetDay2.getDay()}, ${dataSetDay2.getDate()} `,
          date_day3: `${dataSetDay3.getDay()}, ${dataSetDay3.getDate()} `,
          date_day4: `${dataSetDay4.getDay()}, ${dataSetDay4.getDate()} `,
          temp_day2_min: Math.floor(data2.daily[1].temp.min),
          temp_day2_max: Math.floor(data2.daily[1].temp.max),
          temp_day3_min: Math.floor(data2.daily[2].temp.min),
          temp_day3_max: Math.floor(data2.daily[2].temp.max),
          temp_day4_min: Math.floor(data2.daily[3].temp.min),
          temp_day4_max: Math.floor(data2.daily[3].temp.max),
          date_day_next1: `${WEEK_DAYS[newDate.getDay() + 2]}`,
          date_day_next2: `${WEEK_DAYS[newDate.getDay() + 3]}`,
          date_day_next3: `${WEEK_DAYS[newDate.getDay() + 4]}`,
          weather_icon: data2.hourly[12].weather[0].icon,
          weather_icon_night: data2.hourly[0].weather[0].icon,
        });
      }
    }
  };

  render() {
    return (
      <div className="app">
        <Form
          weatherMethod={this.getWeather}
          cityList={this.state.cityList}
          deleteCityInList={this.deleteCityInList}
          getOneCity={this.getOneCityWeather}
          temp={this.state.temp}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          city={this.state.city}
          country={this.state.country}
          weather={this.state.weather}
          weather_night={this.state.weather_night}
          sunset={this.state.sunset}
          sunrise={this.state.sunrise}
          error={this.state.error}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          humidity_night={this.state.humidity_night}
          pressure_night={this.state.pressure_night}
          wind_night={this.state.wind_night}
          temp_day={this.state.temp_day}
          temp_night={this.state.temp_night}
          date_day2={this.state.date_day2}
          temp_day2_min={this.state.temp_day2_min}
          temp_day2_max={this.state.temp_day2_max}
          date_day3={this.state.date_day3}
          temp_day3_min={this.state.temp_day3_min}
          temp_day3_max={this.state.temp_day3_max}
          date_day4={this.state.date_day4}
          temp_day4_min={this.state.temp_day4_min}
          temp_day4_max={this.state.temp_day4_max}
          daytime={this.state.daytime}
          date_now={this.state.date_now}
          date_now_night={this.state.date_now_night}
          date_day_next1={this.state.date_day_next1}
          date_day_next2={this.state.date_day_next2}
          date_day_next3={this.state.date_day_next3}
          weather_icon={this.state.weather_icon}
          weather_icon_night={this.state.weather_icon_night}
        />
      </div>
    );
  }
}

export default App;
