import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

class TaskItem extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div style={{padding:15}}>
                <Checkbox checked={this.props.task.done} onChange={()=>this.props.taskDone(this.props.task)}/>
                <Typography variant="h6" display="inline" style={{verticalAlign:'middle', lineHeight:'inherit'}}>{this.props.task.name}</Typography>
            </div>)
    }
}

export default TaskItem;
