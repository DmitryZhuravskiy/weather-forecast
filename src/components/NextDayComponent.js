import React from "react";

class NextDayComponent extends React.Component {
  render() {
    return (
      <div className="data__wednesday night-main__item data__near-day">
        <img
          src={this.props.image}
          alt="wednesday"
          className="item__image wednesday__image"
        />
        <p className="something__value  wednesday__value">
          {this.props.date_day_next}
        </p>
        <div className="day__icons wednesday__icons">
          <p className="something__title wednesday-icons__up">
            {this.props.temp_day_max}°C{" "}
            <img
              src="./images/term-up.svg"
              alt="icon up"
              className="wednesday-icons__up-image"
            />
          </p>
          <p className="something__title wednesday-icons__down">
            {this.props.temp_day_min}°C{" "}
            <img
              src="./images/term-down.svg"
              alt="icon down"
              className="wednesday-icons__down-image"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default NextDayComponent;
