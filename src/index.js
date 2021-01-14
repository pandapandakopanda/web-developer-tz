import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import App from './components/App'
import store from './core/store'
import './index.scss'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,container)