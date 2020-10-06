import * as React from 'react'
import { EditableTimer } from '../EditableTimer/index'

export class EditableTimerList extends React.Component {
    render(){
        return(
            <div id="timers">
                <EditableTimer
                 title='Learn React'
                 project='Web Domination'
                 elapsed='8986300'
                 runningSince={null}
                 editFormOpen={false}
                 />
                 <EditableTimer
                 title='Learn extreme walking'
                 project='Household Domination'
                 elapsed='3896300'
                 runningSince={null}
                 editFormOpen={true}
                 />
            </div>
        )
    }
}
