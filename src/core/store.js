
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

  @action refreshStorage = (data) =>{
    localStorage.setItem('tasklist', JSON.stringify(data))
    this.getTaskList()
  }

  @action getTaskList = () => {
    this.taskList = JSON.parse(localStorage.getItem('tasklist')) 
    return this.taskList
  }

  @action createTaskList = (list) => {
    console.log( 'создаю объект');
    this.refreshStorage(list)
    
  }

  @action createNewTask = () => {
    const {text} = this
    const id = getId()
    const date = getDate(new Date)
    this.task = {text, date, id,isDone:false}
  }

  @action getItem = (id) => this.taskList[id]
  

  @action changeItemStatus = (id) => {
    const item = this.getItem(id)
    console.log('item: ', item);
    item.isDone=!item.isDone
    this.taskList[id] = item
    this.refreshStorage(this.taskList)
  }

  @action addItemToList = () => {
    this.taskList[this.task.id] = this.task
    this.refreshStorage(this.taskList)
  }

  @action deleteItem = (id) => {
    this.getTaskList()
    delete this.taskList[id]
    this.refreshStorage(this.taskList)
  }

  @action clear = () => {
    console.log('clear!');
    this.text=''
  }

  @action setText = (text) => {
    this.text = text
  }
}

const store = new Store
export default store