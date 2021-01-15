import { inject } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import Button from '../../UI/Button'
import TextArea from '../../UI/TextArea'
import Task from '../Task'

@inject('store')
class WorkField extends React.Component{

  state={
    taskList: null
  }

  onClickHandler = () => {
    this.props.store.createNewTask()
    this.props.store.addItemToList()
    this.props.store.clear()
    this.setState({taskList: this.props.store.taskList})
  }


  createTaskList = (list) => {
    if(list == null) return <div></div>
    return Object.keys(list).map(item => {

      const onXClickHandler = () => {
        this.props.store.deleteItem(list[item].id)
        this.setState({taskList: this.props.store.taskList})
      }

      const onDoneClick = () => {
        this.props.store.changeItemStatus(list[item].id)
        this.setState({taskList: this.props.store.taskList})
      }

      return (
        <Task 
          draggable
          id={list[item].id} 
          text={list[item].text} 
          date={list[item].date} 
          key={list[item].id}
          isDone={list[item].isDone}
          onXClickHandler={onXClickHandler}
          onDoneClickHandler={onDoneClick}
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