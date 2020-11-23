import React from "react";
import GraphicLocation from './../images/graphic-location.svg'

class Locations extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="location">
          <div className="graphic location-graphic">
            <img src={GraphicLocation} alt="main image" />
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

      </div>
    );
  }
}

export default Locations;
