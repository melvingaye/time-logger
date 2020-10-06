import * as React from 'react'
import { EditableTimerList } from '../EditableTimerList/index'
import { ToggleableTimerForm } from '../ToggleableTimerForm/index'

export default class TimersDashboard extends React.Component{
    render(){
        return(
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList/>
                    <ToggleableTimerForm
                     isOpen={true}
                     />
                </div>
            </div>
        )
    }
}
