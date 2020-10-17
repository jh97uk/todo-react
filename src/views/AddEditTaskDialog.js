import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddEditTaskDialog extends Component{
    constructor(props){
        super(props);
        this.state = {taskName:''};
        this.onTaskNameChanged = this.onTaskNameChanged.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    onTaskNameChanged(event){
        const value = event.target.value;
        this.setState({taskName:value});
    }

    addTask(){
        let currentTasks = localStorage.getItem('tasks')
        if(currentTasks == ""){
            localStorage.setItem('tasks', JSON.stringify([]));
            currentTasks = [];
        } else{
            currentTasks = JSON.parse(currentTasks);
        }
        currentTasks.push({done:false, name:this.state.taskName})
        localStorage.setItem('tasks', JSON.stringify(currentTasks));
        this.props.close();
        this.setState({taskName:''});
    }

    render(){
        return(
        <Dialog open={this.props.open}>
            <DialogTitle>Add a new task</DialogTitle>
            <DialogContent>
                <TextField label="Task name" onChange={this.onTaskNameChanged} value={this.state.taskName} style={{width:'100%'}}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.close}>CANCEL</Button>
                <Button onClick={this.addTask}>SAVE</Button>
            </DialogActions>
        </Dialog>)
    }
}

export default AddEditTaskDialog;