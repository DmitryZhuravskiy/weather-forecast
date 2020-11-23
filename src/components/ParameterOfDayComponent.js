import React from "react";

class ParameterOfDayComponent extends React.Component {
  render() {
    return (
      <div className="night-main__item">
        {this.props.image}
        <p className="something__value daytime__value">{this.props.value}</p>
        <p className="something__title daytime__title">{this.props.title}</p>
      </div>
    );
  }
}

export default ParameterOfDayComponent;
