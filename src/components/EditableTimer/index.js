import * as React from 'react'
import { Timer } from '../Timer/index'
import { TimerForm } from '../TimerForm/index'

export class EditableTimer extends React.Component{
    render(){
        if(this.props.editFormOpen){
            return(<TimerForm
                    title={this.props.title}
                    project={this.props.project}
                    />
                    );
        } else {
            return (
                <Timer
                 title={this.props.title}
                 project={this.props.project}
                 elapsed={this.props.elapsed}
                 runningSince={this.props.runningSince}
                 />
            );
        }
    }
}
