import React from 'react'
import ST from './index.scss'

import {inject} from 'mobx-react'

@inject('store')
class Task extends React.Component{

  state ={
    isDone:false
  }

  render(){
    this.props.store.initTaskList()
    const {text, date, id, onXClickHandler, onDoneClickHandler, isDone } = this.props

    const classname = isDone ? ST.done : ST.task 
  
    return(
      <div className={classname} date={date} id={id}>
        <div className={ST.close} onClick={onXClickHandler}>X</div>
        <div className={ST.text}>{text}</div>
        <div className={ST['done-button']} onClick={onDoneClickHandler}>
          {isDone ? 'не сделано' : 'сделано!'}
        </div>
      </div>
    )
  }
}

export default Task