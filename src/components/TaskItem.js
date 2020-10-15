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
                <Checkbox checked={false}/>
                <Typography variant="h6" display="inline">Item</Typography>
            </div>)
    }
}

export default TaskItem;
