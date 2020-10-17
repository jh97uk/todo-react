import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class TaskItem extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div style={{padding:15, display:'flex', justifyContent:'space-between'}}>
                <Checkbox checked={this.props.task.done} onChange={()=>this.props.taskDone(this.props.task)}/>
                <Typography variant="h6" display="inline" style={{verticalAlign:'middle', lineHeight:'inherit', display: 'flex', alignItems:'center'}}>{this.props.task.name}</Typography>
                <div style={{flexGrow:1}}></div>
                {this.props.task.done ? <Button onClick={()=>this.props.delete(this.props.task)}>Del</Button> : ''}
            </div>)
    }
}

export default TaskItem;
