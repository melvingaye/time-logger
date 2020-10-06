import React from 'react'
import EditableTimerList from '../EditableTimerList/index'
import ToggleableTimerForm from '../ToggleableTimerForm/index'

class TimersDashboard extends React.Component{
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

export default TimersDashboard;