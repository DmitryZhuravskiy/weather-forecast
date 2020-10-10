import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        {this.props.city && (
          <div>
            <p>
              Место - {this.props.country}, {this.props.city}
            </p>
            <p>Температура - {this.props.temp} C</p>
            <p>А по ощущениям как - {this.props.feelsLike} C</p>
            <p>Потому что влажность - {this.props.humidity} %, а давление - {this.props.pressure} мм ртутного столба</p>
            <p>Заход солнца - {this.props.sunset}</p>
          </div>
        )}
        <p>{this.props.error}</p>
      </div>
    )
  }
}

export default Weather;
