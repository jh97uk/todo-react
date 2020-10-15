import React from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TaskItem from './components/TaskItem.js';

function App() {
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
          style={{width:'100%', backgroundColor:'rgb(156, 204, 100)', paddingLeft:15, paddingRight:15}} 
          square>
          <Typography variant="h4">Todo</Typography>
        </Paper>
          <TaskItem/>
      </Card>
    </Grid>
  );
}

export default App;
