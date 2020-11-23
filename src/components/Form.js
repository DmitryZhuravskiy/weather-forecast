import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="main">
        <section class="location">
          <div className="graphic location-graphic">
            <img src="./images/graphic-location.svg" alt="main" />
          </div>
          <div className="location-data">
            <h2 className="location-data__title">Location</h2>
            <form
              className="location-data__search-town"
              onSubmit={this.props.weatherMethod}
            >
              <input
                className="search-town__input"
                type="text"
                placeholder="Введите город"
                name="city"
              />
              <button className="search-town__input-submit" type="submit">
                Добавить город
              </button>
            </form>
            <ul className="location__list">
              {[...this.props.cityList].sort( (a,b) => (a[1]>b[1]) ).map((a) => (
                <li className="location__list-item" key={a[0]}>
                  <input
                    type="text"
                    className="list-item__town"
                    value={`${a[1]}, ${a[2]}`}
                    name={a[1]}
                    required
                    onClick={this.props.getOneCity}
                  />
                  <div className="location__list-temp-delete">
                    <p className="list-item__temperature">{a[3]}°C</p>
                    <button
                      className="list-item__delete"
                      id={a[0]}
                      value={a[0]}
                      onClick={this.props.deleteCityInList}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="night">
          <div className="graphic night-graphic">
          <img src="./images/graphic-night.svg" alt="night"/>
          </div>
          <div className="night-data">
            <div className="night-top">
              <p className="night-top__time">{this.props.date_now_night}</p>
              <p className="night-top__place">
                {this.props.city}, {this.props.country}
              </p>
            </div>
            <div className="night-main">
              <div className="data__weather night-main__item">
                <img src={`http://openweathermap.org/img/w/${this.props.weather_icon_night}.png`} alt="weather_icon_night" />
                <p className="weather__text">{this.props.weather_night}</p>
              </div>
              <p className="data__temperature night-main__item">
                {this.props.temp_day}
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
                <p className="something__value daytime__value">{this.props.daytime}</p>
                <p className="something__title daytime__title">Daytime</p>
              </div>
              <div className="data__monday night-main__item">
                <img
                  src="./images/monday.svg"
                  alt="monday"
                  className="item__image monday__image"
                />
                <p className="something__value monday__value">
                  {this.props.date_day_next1}
                </p>
                <div className="day__icons monday__icons">
                  <p className="something__title monday-icons__up">
                    {this.props.temp_day2_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up"
                      className="monday-icons__up-image"
                    />
                  </p>
                  <p className="something__title monday-icons__down">
                    {this.props.temp_day2_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="arrow down"
                      className="monday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
              <div className="data__tuesday night-main__item">
                <img
                  src="./images/tuesday.svg"
                  alt="tuesday"
                  className="item__image tuesday__image"
                />
                <p className="something__value tuesday__value">
                  {this.props.date_day_next2}
                </p>
                <div className="day__icons tuesday__icons">
                  <p className="something__title tuesday-icons__up">
                    {this.props.temp_day3_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up"
                      className="tuesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title tuesday-icons__down">
                    {this.props.temp_day3_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="arrow down"
                      className="tuesday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
              <div className="data__wednesday night-main__item">
                <img
                  src="./images/wednesday.svg"
                  alt="wednesday"
                  className="item__image wednesday__image"
                />
                <p className="something__value  wednesday__value">
                  {this.props.date_day_next3}
                </p>
                <div className="day__icons wednesday__icons">
                  <p className="something__title wednesday-icons__up">
                    {this.props.temp_day4_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="icon up"
                      className="wednesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title wednesday-icons__down">
                    {this.props.temp_day4_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="icon down"
                      className="wednesday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="night day">
          <div className="graphic night-graphic day-graphic">
            <img src="./images/graphic-day.svg" alt="night" />
          </div>
          <div className="night-data day-data">
            <div className="night-top day-top">
              <p className="night-top__time day-top__time">
              {this.props.date_now}
              </p>
              <p className="night-top__place day-top__place">{this.props.city}, {this.props.country}</p>
            </div>
            <div className="night-main day-main">
              <div className="data__weather night-main__item day-main__item">
                <img src={`http://openweathermap.org/img/w/${this.props.weather_icon}.png`} alt="weather_icon" />
              <p className="weather__text">{this.props.weather}</p>
              </div>
              <p className="data__temperature night-main__item day-main__item">
              {this.props.temp_night}<sup className="data__temperature-sup">°C</sup>
              </p>
              <div className="data__temperature-amplitude night-main__item day-main__item">
                <p className="data__temperature-max">
                {this.props.temp_max}°C
                  <img src="./images/term-up.svg" alt="arrow up" />
                </p>
                <p className="data__temperature-min">
                {this.props.temp_min}°C
                  <img src="./images/term-down.svg" alt="down arrow" />
                </p>
              </div>
              <div className="data__humidity night-main__item day-main__item">
                <img
                  src="./images/humidity.svg"
                  alt="humidity"
                  className="item__image humidity__image"
                />
                <p className="something__value humidity__value">{this.props.humidity_night}%</p>
                <p className="something__title humidity__title">Humidity</p>
              </div>
              <div className="data__pressure night-main__item day-main__item">
                <img
                  src="./images/pressure.svg"
                  alt="pressure"
                  className="item__image pressure__image"
                />
                <p className="something__value pressure__value">{this.props.pressure_night}mBar</p>
                <p className="something__title pressure__title">Pressure</p>
              </div>
              <div className="data__wind night-main__item day-main__item">
                <img
                  src="./images/wind.svg"
                  alt="wind"
                  className="item__image wind__image"
                />
                <p className="something__value wind__value">{this.props.wind_night} km/h</p>
                <p className="something__title wind__title">Wind</p>
              </div>
              <div className="data__sunrise night-main__item day-main__item">
                <img
                  src="./images/sunrise.svg"
                  alt="sunrise"
                  className="item__image sunrise__image"
                />
                <p className="something__value sunrise__value">{this.props.sunrise} AM</p>
                <p className="something__title sunrise__title">Sunrise</p>
              </div>
              <div className="data__sunset night-main__item day-main__item">
                <img
                  src="./images/sunset.svg"
                  alt="sunset"
                  className="item__image sunset__image"
                />
                <p className="something__value sunset__value">{this.props.sunset} PM</p>
                <p className="something__title sunset__title">Sunset</p>
              </div>
              <div className="data__daytime night-main__item day-main__item">
                <img
                  src="./images/daytime.svg"
                  alt="daytime"
                  className="item__image daytime__image"
                />
                <p className="something__value daytime__value">{this.props.daytime}</p>
                <p className="something__title daytime__title">Daytime</p>
              </div>
              <div className="data__monday night-main__item day-main__item">
                <img
                  src="./images/monday.svg"
                  alt="monday icon"
                  className="item__image monday__image"
                />
                <p className="something__value monday__value">{this.props.date_day_next1}</p>
                <div className="day__icons monday__icons">
                  <p className="something__title monday-icons__up">
                  {this.props.temp_day2_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="monday-icons__up-image"
                    />
                  </p>
                  <p className="something__title monday-icons__down">
                  {this.props.temp_day2_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="arrow down icon"
                      className="monday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
              <div className="data__tuesday night-main__item day-main__item">
                <img
                  src="./images/tuesday.svg"
                  alt="tuesday icon"
                  className="item__image tuesday__image"
                />
                <p className="something__value tuesday__value">{this.props.date_day_next2}</p>
                <div className="day__icons tuesday__icons">
                  <p className="something__title tuesday-icons__up">
                  {this.props.temp_day3_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="tuesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title tuesday-icons__down">
                  {this.props.temp_day3_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="arrow down icon"
                      className="tuesday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
              <div className="data__wednesday night-main__item day-main__item">
                <img
                  src="./images/wednesday.svg"
                  alt="wednesday icon"
                  className="item__image wednesday__image"
                />
                <p className="something__value  wednesday__value">{this.props.date_day_next3}</p>
                <div className="day__icons wednesday__icons">
                  <p className="something__title wednesday-icons__up">
                  {this.props.temp_day4_max}°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="wednesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title wednesday-icons__down">
                  {this.props.temp_day4_min}°C{" "}
                    <img
                      src="./images/term-down.svg"
                      alt="arrow down icon"
                      className="wednesday-icons__down-image"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
