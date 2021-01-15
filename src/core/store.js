import {observable, action} from 'mobx'

class Store{

  @observable taskList = null
  @observable text = ''
  @observable dragData = null

  constructor(){
    this.initTaskList()
  }

  @action initTaskList = ()=>{
    this.updateTaskList()
    if (this.taskList === null) this.refreshStorage({})
  }

  @action refreshStorage = (data) =>{
    localStorage.setItem('tasklist', JSON.stringify(data))
    this.updateTaskList()
  }

  @action updateTaskList = () => {
    this.taskList = JSON.parse(localStorage.getItem('tasklist')) 
    return this.taskList
  }

  @action createNewTask = (id, date) => {
    const {text} = this
    if(text === '') return
    const task = {text, date, id,isDone:false}
    this.taskList[task.id] = task
    this.refreshStorage(this.taskList)
    this.clear()
  }

  @action getItem = (id) => this.taskList[id]
  

  @action changeItemStatus = (id) => {
    const item = this.getItem(id)
    item.isDone=!item.isDone
    this.taskList[id] = item
    this.refreshStorage(this.taskList)
  }

  @action deleteItem = (id) => {
    delete this.taskList[id]
    this.refreshStorage(this.taskList)
  }

  @action setDragData = (item) => {this.dragData = item}

  @action clear = () => { this.text='' }

  @action setText = (text) => { this.text = text }

}

const store = new Store
export default store