import { inject } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import Button from '../../UI/Button'
import TextArea from '../../UI/TextArea'
import Task from '../Task'

@inject('store')
class WorkField extends React.Component{

  onClickHandler = () => {
    this.props.store.createNewTask()
    this.props.store.addItemToList()
  }

  createTaskList = (list) => {
    console.log('list: ', list);
    return Object.keys(list).map(item => {
      return (
        <Task 
          id={list[item].id} 
          text={list[item].text} 
          date={list[item].date} 
          key={list[item].id}
        />
      )
    })
  }

  render(){
    const list = this.props.store.getTaskList()
    return(
      <div className={ST.wrapper}>
        <div className={ST['button-block']}>
          <TextArea placeholder='What do you meow to do?'/>
          <Button preset='primary' onclick={this.onClickHandler}>
            {'Add task'}
          </Button> 
        </div>
        <div className={ST['task-block']}>
          {this.createTaskList(list)}
        </div>
      </div>
    )
  }
}

export default WorkField