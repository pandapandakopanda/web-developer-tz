import React, { Component } from 'react'
import ST from './index.scss'
import { calcClass } from '../../core/help'


class Button extends Component {
  onClickHandler = () => {
    if (this.props.disable) return
    this.props.onclick()
  }


  render() {
    const { preset, children, disable } = this.props
    const isAnimated = preset === 'animated'

    const className = calcClass({
      button: true,
      [preset]: true,
      disable,
    }, ST)

    return (
      <div
        className={className}
        onClick={this.onClickHandler}
      >
        {children}
        <div className={isAnimated ? ST.show : ''}>{this.props.animatedText}</div>
      </div>
    )
  }
}

export default Button