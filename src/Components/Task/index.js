import React from 'react'
import ST from './index.scss'

import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class Task extends React.Component{

  state ={
    isDone:false
  }

  render(){

    const {
          text, date, id, 
          onDoneClickHandle, 
          onDragStartHandle,
          isDone 
        } = this.props

    const classname = isDone ? ST.done : ST.task 
  
    return(
      <div 
        className={classname} 
        date={date} 
        id={id} 
        draggable
        onDragStart={(e)=>{onDragStartHandle(e)}}
      >
        <div className={ST.text}>{text}</div>
        <div className={ST['done-button']} onClick={onDoneClickHandle}>
          {isDone ? 'UNDONE' : 'DONE!'}
        </div>
      </div>
    )
  }
}

export default Task