import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class SiteForm extends Component {
  render() {
    return(
      <div className='submit'>
        <Paper style={style.submit} zDepth={1}>
          <TextField fullWidth={true} style={style.textField} hintText='Start tracking your sites...'/>
        </Paper>

         <FloatingActionButton style={style.button}>
          <ContentAdd/>
        </FloatingActionButton> 
      </div>
    )
  }
}