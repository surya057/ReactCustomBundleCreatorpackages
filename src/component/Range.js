import React, { Component } from "react";

const active = 'linear-gradient(-90deg,green,yellow,red)'
const inactive = '#dbdbdb'

class RangeComponent extends React.Component {
  inputRef = React.createRef()

  state = { value: 1 }

  handleChange = (min, max) => (event) => {
    const value = event.target.value
    const progress = (value / max) * 100 + '%'
    this.setState({ value: value })
    const newBackgroundStyle = `linear-gradient(90deg,green,yellow,red)`
    this.inputRef.current.style.background = newBackgroundStyle
  }

  render() {
    const minValue = 1 
    const maxValue = 300
    const progress = (this.state.value / maxValue) * 100 + '%'

    const styleInput = {
      background: `linear-gradient(90deg,green,yellow,red)`,
   }

    return (
      <div>
        <input
          ref={this.inputRef}
          id="sliderId"
          className="inputR"
          name="sliderName"
          type="range"
          min={minValue}
          max={maxValue}
          value={this.state.value}
          onChange={this.handleChange(minValue, maxValue)}
        />
        <div className="label" style={{textAlign: 'center'}}>
          {this.state.value} Gb
        </div>
      </div>
    )
  }
}

export default RangeComponent;