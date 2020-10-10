import React from "react";
import NextDayComponent from "./NextDayComponent";

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
              <div className="data__humidity night-main__item">
                <img
                  src="./images/humidity.svg"
                  alt="humidity"
                  className="item__image humidity__image"
                />
                <p className="something__value humidity__value">
                  {this.props.humidity}%
                </p>
                <p className="something__title humidity__title">Humidity</p>
              </div>
              <div className="data__pressure night-main__item">
                <img
                  src="./images/pressure.svg"
                  alt="pressure"
                  className="item__image pressure__image"
                />
                <p className="something__value pressure__value">
                  {this.props.pressure}mBar
                </p>
                <p className="something__title pressure__title">Pressure</p>
              </div>
              <div className="data__wind night-main__item">
                <img
                  src="./images/wind.svg"
                  alt="wind"
                  className="item__image wind__image"
                />
                <p className="something__value wind__value">
                  {this.props.wind}km/h
                </p>
                <p className="something__title wind__title">Wind</p>
              </div>
              <div className="data__sunrise night-main__item">
                <img
                  src="./images/sunrise.svg"
                  alt="sunrise"
                  className="item__image sunrise__image"
                />
                <p className="something__value sunrise__value">
                  {this.props.sunrise} AM
                </p>
                <p className="something__title sunrise__title">Sunrise</p>
              </div>
              <div className="data__sunset night-main__item">
                <img
                  src="./images/sunset.svg"
                  alt="sunset"
                  className="item__image sunset__image"
                />
                <p className="something__value sunset__value">
                  {this.props.sunset} PM
                </p>
                <p className="something__title sunset__title">Sunset</p>
              </div>
              <div className="data__daytime night-main__item">
                <img
                  src="./images/daytime.svg"
                  alt="daytime"
                  className="item__image daytime__image"
                />
                <p className="something__value daytime__value">
                  {this.props.daytime}
                </p>
                <p className="something__title daytime__title">Daytime</p>
              </div>
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
