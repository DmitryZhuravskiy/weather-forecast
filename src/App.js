import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2dd62d48ced57a57cb21a5da5ee706fe";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunset: undefined,
    error: undefined,
    feels_like: undefined,
    humidity: undefined,
    pressure: undefined
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      var dateSet = new Date();
      dateSet.setTime(data.sys.sunset);
      let sunsetDate = `${dateSet.getHours()} часов : ${dateSet.getMinutes()} минут : ${dateSet.getSeconds()} секунд`;

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunset: sunsetDate,
        error: "",
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
      });
    } else {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunset: undefined,
            error: "Mistake! Please let's try again",
            feels_like: undefined,
            humidity: undefined,
            pressure: undefined,
    })}};

  render() {
    return (
      <div className="app">
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
          feelsLike={this.state.feels_like}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default App;
