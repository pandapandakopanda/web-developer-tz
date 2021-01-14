import React from 'react'
import ST from './index.scss'

import {inject} from 'mobx-react'

@inject('store')
class Task extends React.Component{
  render(){
    this.props.store.initTaskList()
    const {text, date, id } = this.props
    return(
      <div className={ST.task} date={date} id={id}>
        <div className={ST.close}>X</div>
        <div className={ST.text}>{text}</div>
      </div>
    )
  }
}

export default Task