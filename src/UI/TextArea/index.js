import React, { Component } from 'react'

import ST from './index.scss'
import { calcClass } from '../../core/help'
import { inject } from 'mobx-react'

@inject('store')
class Input extends Component {

  onChange = (ev) => {
    const {value} = ev.target
    this.props.store.text = value
  }


  render() {
    const {
      value, placeholder, max, min, isDisabled,
    } = this.props



    const className = calcClass({
      default: true,
      disabled: isDisabled,
    }, ST)

    const inputData = {
       placeholder, value, className, max, min,
    }

    return (
      <textarea
        autoFocus
        value={inputData.value}
        className={inputData.className}
        placeholder={inputData.placeholder}
        onChange={this.onChange}
        maxLength={inputData.max}
        minLength={inputData.min}
      />
    )
  }
}

export default Input