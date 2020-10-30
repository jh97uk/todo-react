import React from 'react';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

function TaskItem(props){
    return (
        <div style={{padding:15, display:'flex', justifyContent:'space-between'}}>
            <Checkbox checked={props.task.done} onChange={()=>props.taskDone(props.task)}/>
            <Typography variant="h6" display="inline" style={{verticalAlign:'middle', lineHeight:'inherit', display: 'flex', alignItems:'center'}}>{props.task.name}</Typography>
            <div style={{flexGrow:1}}></div>
            {props.task.done ? <Button onClick={()=>props.delete(props.task)}>Del</Button> : ''}
        </div>)
}


export default TaskItem;
