import React, { Component } from 'react'

import ST from './index.scss'
import { calcClass } from '../../core/help'
import { inject } from 'mobx-react'

@inject('store')
class Input extends Component {

  onChange = (ev) => {
    const {value} = ev.target
    console.log('value: ', value);
    this.props.store.setText(value)
  }


  render() {
    const {
      placeholder, max, min, isDisabled, value
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