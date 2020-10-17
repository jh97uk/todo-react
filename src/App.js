import React, {Component} from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TaskItem from './components/TaskItem.js';
import AddEditTaskDialog from './views/AddEditTaskDialog.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {tasks:[], showAddTaskDialog:false}
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.addTaskDialogClose = this.addTaskDialogClose.bind(this);
    this.populateTasksWithLatestTasks = this.populateTasksWithLatestTasks.bind(this);
    this.onTaskCheckedDone = this.onTaskCheckedDone.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  onAddTaskClick(){
    this.setState({showAddTaskDialog:true});
  }

  addTaskDialogClose(){
    this.populateTasksWithLatestTasks();
    this.setState({showAddTaskDialog:false});
  }

  populateTasksWithLatestTasks(){
    let tasks = localStorage.getItem('tasks');
    if(tasks == '' || tasks == null)
      return;
    this.setState({tasks:JSON.parse(tasks)});
  }

  onTaskCheckedDone(task){
    const taskIndex = this.state.tasks.indexOf(task);
    task.done = !task.done;
    let tasks = this.state.tasks;
    tasks[taskIndex] = task;
    this.setState({tasks:tasks});
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  deleteTask(task){
    let tasks = this.state.tasks;
    tasks.splice(tasks.indexOf(task), 1);
    console.log(JSON.stringify(tasks));
    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.setState({tasks:tasks});
  }

  componentDidMount(){
    this.populateTasksWithLatestTasks();
  }

  render(){
    return (
      <Grid
        container 
        className="App"
        direction='row'
        justify='center'>
        <Card 
          component={Grid}
          item
          xs={7}
          style={{marginTop:50, textAlign:'left'}}>
          <Paper 
            style={{
              width:'100%', 
              backgroundColor:'rgb(156, 204, 100)', 
              display:'flex',
              justifyContent:'space-around',
            }} 
            square>
            <Typography variant="h4" style={{marginLeft:15, marginTop:10, marginBottom:10}}>Todo</Typography>
            <div style={{flexGrow:1}}></div>
            <Button onClick={this.onAddTaskClick}>+</Button>
          </Paper>
          {this.state.tasks.reverse().map((task, index)=>{
            return <TaskItem task={task} taskDone={this.onTaskCheckedDone} key={index} delete={this.deleteTask}/>
          })}
            
        </Card>
        <AddEditTaskDialog open={this.state.showAddTaskDialog} close={this.addTaskDialogClose} />
      </Grid>
    );
  }
}

export default App;
