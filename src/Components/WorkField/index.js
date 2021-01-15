import { inject, observer } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import Button from '../../UI/Button'
import TextArea from '../../UI/TextArea'
import Task from '../Task'

@inject('store')
@observer
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

  onDropHandle = (e) => {
    console.log('e: ', e.target);
    const {id} = this.props.store.task
    this.props.store.deleteItem(id)
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  createTaskList = (list) => {
    if(list == null) return <div></div>
    return Object.keys(list).map(item => {

      const onXClickHandle = () => {
        this.props.store.deleteItem(list[item].id)
        // this.setState({taskList: this.props.store.taskList})
      }

      const onDoneClickHandle = () => {
        this.props.store.changeItemStatus(list[item].id)
        this.setState({taskList: this.props.store.taskList})
      }

      const onDragStartHandle = (e) => {
        e.dataTransfer.setData('id',list[item].id)
        this.props.store.setTask(list[item])
        console.log(this.props.store.task);
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
    const list = this.props.store.getTaskList()
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
          {this.createTaskList(list)}
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