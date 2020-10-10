import React from "react";
import NextDayComponent from "./NextDayComponent";
import ParameterOfDayComponent from "./ParameterOfDayComponent";

class DataOfHalfDay extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="night">
          <div className="graphic night-graphic">
            <img src={this.props.picture} />
          </div>
          <div className="night-data">
            <div className="night-top">
              <p className="night-top__time">{this.props.date_now}</p>
              <p className="night-top__place">
                {this.props.city}, {this.props.country}
              </p>
            </div>
            <div className="night-main">
              <div className="data__weather night-main__item">
                <img
                  src={`http://openweathermap.org/img/w/${this.props.weather_icon}.png`}
                  alt="weather_icon_night"
                />
                <p className="weather__text">{this.props.weather}</p>
              </div>
              <p className="data__temperature night-main__item">
                {this.props.temp_of_half_day}
                <sup className="data__temperature-sup">°C</sup>
              </p>
              <div className="data__temperature-amplitude night-main__item">
                <p className="data__temperature-max">
                  {this.props.temp_max}°C
                  <img src="./images/term-up.svg" alt="arrow up" />
                </p>
                <p className="data__temperature-min">
                  {this.props.temp_min}°C
                  <img src="./images/term-down.svg" alt="aroow down" />
                </p>
              </div>
              <ParameterOfDayComponent
                image={"./images/humidity.svg"}
                value={this.props.humidity + "%"}
                title={"Humidity"}
              />
              <ParameterOfDayComponent
                image={"./images/pressure.svg"}
                value={this.props.pressure + "mBar"}
                title={"Pressure"}
              />
              <ParameterOfDayComponent
                image={"./images/wind.svg"}
                value={this.props.wind + " km/h"}
                title={"Wind"}
              />
              <ParameterOfDayComponent
                image={"./images/sunrise.svg"}
                value={this.props.sunrise + ' AM'}
                title={"Sunrise"}
              />
              <ParameterOfDayComponent
                image={"./images/sunset.svg"}
                value={this.props.sunset + ' PM'}
                title={"Sunset"}
              />
              <ParameterOfDayComponent
                image={"./images/daytime.svg"}
                value={this.props.daytime}
                title={"Daytime"}
              />
              <NextDayComponent
                date_day_next={this.props.date_day_next1}
                temp_day_max={this.props.temp_day2_max}
                temp_day_min={this.props.temp_day2_min}
                image={"./images/monday.svg"}
              />
              <NextDayComponent
                date_day_next={this.props.date_day_next2}
                temp_day_max={this.props.temp_day3_max}
                temp_day_min={this.props.temp_day3_min}
                image={"./images/tuesday.svg"}
              />
              <NextDayComponent
                date_day_next={this.props.date_day_next3}
                temp_day_max={this.props.temp_day4_max}
                temp_day_min={this.props.temp_day4_min}
                image={"./images/wednesday.svg"}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DataOfHalfDay;