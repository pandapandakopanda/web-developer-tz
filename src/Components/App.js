import { inject, observer } from 'mobx-react'
import React from 'react'
import ST from './index.scss'

import WorkField from './WorkField'

@inject('store')
@observer
class App extends React.Component {
    render(){
        return(
            <div className={ST.wrapper}>
                <WorkField />
            </div>
        )
    }
}

export default App