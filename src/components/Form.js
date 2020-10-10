import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="form">
          <form onSubmit={this.props.weatherMethod}>
            <input type="text" name="city" placeholder="Город" />
            <input type="submit" value="Введите город" />
          </form>
        </div>
        <section class="location">
          <div className="graphic location-graphic">
            <img src="./images/graphic-location.svg" alt="main image" />
          </div>
          <div className="location-data">
            <h2 className="location-data__title">Location</h2>
            <form className="location-data__search-town" onSubmit={this.props.weatherMethod}>
              <input
                className="search-town__input"
                type="text"
                value=""
                placeholder="Введите город"
              />
              <button className="search-town__input-submit" type="submit">
                Добавить город
              </button>
            </form>
            <ul className="location__list">
              <li className="location__list-item">
                <p className="list-item__town">Manila, Phillippines</p>
                <div className="location__list-temp-delete">
                  <p className="list-item__temperature">35°C</p>
                  <button className="list-item__delete">X</button>
                </div>
              </li>
              <li className="location__list-item">
                <p className="list-item__town">Melbourne, Australia</p>
                <div className="location__list-temp-delete">
                <p className="list-item__temperature">16°C</p>
                  <button className="list-item__delete">X</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="night">
          <div className="graphic night-graphic">
            <img src="./images/graphic-night.svg" alt="night image" />
          </div>
          <div className="night-data">
            <div className="night-top">
              <p className="night-top__time">Sunday, 19 May 2019 | 9:30PM</p>
              <p className="night-top__place">Mumbai, India</p>
            </div>
            <div className="night-main">
              <div className="data__cloudly night-main__item">
                <img src="./images/sunny.svg" alt="cloudly" />
                <p className="cloudly__text">Cloudly</p>
              </div>
              <p className="data__temperature night-main__item">
                29 <sup className="data__temperature-sup">°C</sup>
              </p>
              <div className="data__temperature-amplitude night-main__item">
                <p className="data__temperature-max">
                  35°C
                  <img src="./images/term-up.svg" alt="arrow up" />
                </p>
                <p className="data__temperature-min">
                  27°C
                  <img src="./images/term-down.svg" alt="aroow down" />
                </p>
              </div>
              <div className="data__humidity night-main__item">
                <img
                  src="./images/humidity.svg"
                  alt="humidity"
                  className="item__image humidity__image"
                />
                <p className="something__value humidity__value">73%</p>
                <p className="something__title humidity__title">Humidity</p>
              </div>
              <div className="data__pressure night-main__item">
                <img
                  src="./images/pressure.svg"
                  alt="pressure"
                  className="item__image pressure__image"
                />
                <p className="something__value pressure__value">1009mBar</p>
                <p className="something__title pressure__title">Pressure</p>
              </div>
              <div className="data__wind night-main__item">
                <img
                  src="./images/wind.svg"
                  alt="wind"
                  className="item__image wind__image"
                />
                <p className="something__value wind__value">11km/h</p>
                <p className="something__title wind__title">Wind</p>
              </div>
              <div className="data__sunrise night-main__item">
                <img
                  src="./images/sunrise.svg"
                  alt="sunrise"
                  className="item__image sunrise__image"
                />
                <p className="something__value sunrise__value">6:03 AM</p>
                <p className="something__title sunrise__title">Sunrise</p>
              </div>
              <div className="data__sunset night-main__item">
                <img
                  src="./images/sunset.svg"
                  alt="sunset"
                  className="item__image sunset__image"
                />
                <p className="something__value sunset__value">7:05 PM</p>
                <p className="something__title sunset__title">Sunset</p>
              </div>
              <div className="data__daytime night-main__item">
                <img
                  src="./images/daytime.svg"
                  alt="daytime"
                  className="item__image daytime__image"
                />
                <p className="something__value daytime__value">13h 1m</p>
                <p className="something__title daytime__title">Daytime</p>
              </div>
              <div className="data__monday night-main__item">
                <img
                  src="./images/monday.svg"
                  alt="monday"
                  className="item__image monday__image"
                />
                <p className="something__value monday__value">Mon, 21</p>
                <div className="day__icons monday__icons">
                  <p className="something__title monday-icons__up">
                    35°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up"
                      className="monday-icons__up-image"
                    />
                  </p>
                  <p className="something__title monday-icons__down">
                    26°C{" "}
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
                <p className="something__value tuesday__value">Tue, 22</p>
                <div className="day__icons tuesday__icons">
                  <p className="something__title tuesday-icons__up">
                    35°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up"
                      className="tuesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title tuesday-icons__down">
                    27°C{" "}
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
                <p className="something__value  wednesday__value">Wed, 22</p>
                <div className="day__icons wednesday__icons">
                  <p className="something__title wednesday-icons__up">
                    34°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="icon up"
                      className="wednesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title wednesday-icons__down">
                    29°C{" "}
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
            <img src="./images/graphic-day.svg" alt="night image" />
          </div>
          <div className="night-data day-data">
            <div className="night-top day-top">
              <p className="night-top__time day-top__time">
                Sunday, 19 May 2019 | 4:30PM
              </p>
              <p className="night-top__place day-top__place">Mumbai, India</p>
            </div>
            <div className="night-main day-main">
              <div className="data__cloudly night-main__item day-main__item">
                <img src="./images/sunny.svg" alt="sunny" />
                <p className="cloudly__text">Sunny</p>
              </div>
              <p className="data__temperature night-main__item day-main__item">
                33 <sup className="data__temperature-sup">°C</sup>
              </p>
              <div className="data__temperature-amplitude night-main__item day-main__item">
                <p className="data__temperature-max">
                  35°C
                  <img src="./images/term-up.svg" alt="arrow up" />
                </p>
                <p className="data__temperature-min">
                  27°C
                  <img src="./images/term-down.svg" alt="down arrow" />
                </p>
              </div>
              <div className="data__humidity night-main__item day-main__item">
                <img
                  src="./images/humidity.svg"
                  alt="humidity"
                  className="item__image humidity__image"
                />
                <p className="something__value humidity__value">49%</p>
                <p className="something__title humidity__title">Humidity</p>
              </div>
              <div className="data__pressure night-main__item day-main__item">
                <img
                  src="./images/pressure.svg"
                  alt="pressure"
                  className="item__image pressure__image"
                />
                <p className="something__value pressure__value">1,007mBar</p>
                <p className="something__title pressure__title">Pressure</p>
              </div>
              <div className="data__wind night-main__item day-main__item">
                <img
                  src="./images/wind.svg"
                  alt="wind"
                  className="item__image wind__image"
                />
                <p className="something__value wind__value">23 km/h</p>
                <p className="something__title wind__title">Wind</p>
              </div>
              <div className="data__sunrise night-main__item day-main__item">
                <img
                  src="./images/sunrise.svg"
                  alt="sunrise"
                  className="item__image sunrise__image"
                />
                <p className="something__value sunrise__value">6:03 AM</p>
                <p className="something__title sunrise__title">Sunrise</p>
              </div>
              <div className="data__sunset night-main__item day-main__item">
                <img
                  src="./images/sunset.svg"
                  alt="sunset"
                  className="item__image sunset__image"
                />
                <p className="something__value sunset__value">7:05 PM</p>
                <p className="something__title sunset__title">Sunset</p>
              </div>
              <div className="data__daytime night-main__item day-main__item">
                <img
                  src="./images/daytime.svg"
                  alt="daytime"
                  className="item__image daytime__image"
                />
                <p className="something__value daytime__value">13h 1m</p>
                <p className="something__title daytime__title">Daytime</p>
              </div>
              <div className="data__monday night-main__item day-main__item">
                <img
                  src="./images/monday.svg"
                  alt="monday icon"
                  className="item__image monday__image"
                />
                <p className="something__value monday__value">Mon, 21</p>
                <div className="day__icons monday__icons">
                  <p className="something__title monday-icons__up">
                    35°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="monday-icons__up-image"
                    />
                  </p>
                  <p className="something__title monday-icons__down">
                    26°C{" "}
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
                <p className="something__value tuesday__value">Tue, 22</p>
                <div className="day__icons tuesday__icons">
                  <p className="something__title tuesday-icons__up">
                    35°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="tuesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title tuesday-icons__down">
                    27°C{" "}
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
                <p className="something__value  wednesday__value">Wed, 22</p>
                <div className="day__icons wednesday__icons">
                  <p className="something__title wednesday-icons__up">
                    34°C{" "}
                    <img
                      src="./images/term-up.svg"
                      alt="arrow up icon"
                      className="wednesday-icons__up-image"
                    />
                  </p>
                  <p className="something__title wednesday-icons__down">
                    29°C{" "}
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
