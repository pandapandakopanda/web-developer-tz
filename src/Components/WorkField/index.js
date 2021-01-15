import { inject, observer } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import Button from '../../UI/Button'
import TextArea from '../../UI/TextArea'
import Task from '../Task'

import getDate from '../../core/getDate'
import getId from '../../core/idGenerator'

@inject('store')
@observer
class WorkField extends React.Component{

  state={
    taskList: null
  }

  onClickHandler = () => {
    const id = getId()
    const date = getDate(new Date)
    this.props.store.createNewTask(id, date)
    this.props.store.clear()
    // this.setState({taskList: this.props.store.taskList})
  }

  onDropHandle = (e) => {
    const {id} = this.props.store.dragData
    this.props.store.deleteItem(id)
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  createTaskList() {
    let list = this.props.store.taskList

    if(list == null) return null
    return Object.keys(list).map(item => {

      const onXClickHandle = () => {
        this.props.store.deleteItem(list[item].id)
        // this.setState({taskList: this.props.store.taskList})
      }

      const onDoneClickHandle = () => {
        this.props.store.changeItemStatus(list[item].id)
        // this.setState({taskList: this.props.store.taskList})
      }

      const onDragStartHandle = (e) => {
        e.dataTransfer.setData('id',list[item].id)
        this.props.store.setDragData(list[item])
      }

      return (
        <Task 
          id={list[item].id} 
          text={list[item].text} 
          date={list[item].date} 
          key={list[item].id}
          isDone={list[item].isDone}
          onXClickHandle={onXClickHandle}
          onDoneClickHandle={onDoneClickHandle}
          onDragStartHandle = {onDragStartHandle}
        />
      )
    })
  }

  render(){

    return(
      <div className={ST['wrapper-column']} onDragOver={(e)=>{this.handleDragOver(e)}}>
        <div className={ST['wrapper-row']}>
        <div className={ST['button-block']}>
          <TextArea placeholder='What do you meow to do?'/>
          <Button preset='primary' onclick={this.onClickHandler}>
            {'Add task'}
          </Button> 
        </div>
        <div className={ST['task-block']}>
          {this.createTaskList()}
        </div>
      </div>
      <div 
        className={ST['wrapper-delete']}
        onDrop={(e)=>{this.onDropHandle(e)}}
        onDragOver={(e)=>{this.handleDragOver(e)}}
      >
      </div>
      </div>
    )
  }
}

export default WorkField