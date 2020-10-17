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
    this.state = {todoItems:[], showTaskDialog:false}
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.addTaskDialogClose = this.addTaskDialogClose.bind(this);
  }

  onAddTaskClick(){
    this.setState({showAddTaskDialog:true});
  }

  addTaskDialogClose(){
    this.setState({showAddTaskDialog:false});
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
            <TaskItem/>
        </Card>
        <AddEditTaskDialog open={this.state.showAddTaskDialog} close={this.addTaskDialogClose}/>
      </Grid>
    );
  }
}

export default App;
