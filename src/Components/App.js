import { inject } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import WorkField from './WorkField'

@inject('store')
class App extends React.Component {

    componentDidMount(){
        this.props.store.initTaskList()
      }

    render(){
        return(
            <div className={ST.wrapper}>
                <WorkField />
            </div>
        )
    }
}

export default App