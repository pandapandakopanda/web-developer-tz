
import {observable, action} from 'mobx'
import getId from './idGenerator'
import getDate from './getDate'

class Store{

  @observable taskList = null
  @observable text = ''
  @observable task = null

  @action initTaskList = ()=>{
    this.getTaskList()
    if (this.taskList === null) this.createTaskList({})
  }

  @action getTaskList = () => {
    this.taskList = JSON.parse(localStorage.getItem('tasklist')) 
    return this.taskList
  }

  @action createTaskList = (list) => {
    console.log( 'создаю объект');
    localStorage.setItem('tasklist', JSON.stringify(list))
    this.getTaskList()
  }

  @action createNewTask = () => {
    const {text} = this
    const id = getId()
    const date = getDate(new Date)
    this.task = {text, date, id}
  }

  @action addItemToList = () => {
    this.getTaskList()
    this.taskList[this.task.id] = this.task
    localStorage.setItem('tasklist', JSON.stringify(this.taskList))
  }
}

const store = new Store
export default store