import React, { Component } from 'react'

import ST from './index.scss'
import { calcClass } from '../../core/help'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class TextArea extends Component {

  onChange = (ev) => {
    const {value} = ev.target
    this.props.store.setText(value)
  }


  render() {
    const {
      placeholder, max, min, isDisabled
    } = this.props


    const className = calcClass({
      default: true,
      disabled: isDisabled,
    }, ST)

    const inputData = {
       placeholder, className, max, min,
    }

    return (
      <textarea
        autoFocus
        value={this.props.store.text}
        className={inputData.className}
        placeholder={inputData.placeholder}
        onChange={this.onChange}
        maxLength={inputData.max}
        minLength={inputData.min}
      />
    )
  }
}

export default TextArea