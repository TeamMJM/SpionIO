import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  submit: {
    width: '94%',
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign: 'bottom',
  },
  button: {
    marginLeft: '20px',
    display: 'inline-block',
    verticalAlign: 'bottom',
  }
}

class SiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  
  

  render() {

    return(
      <div className='submit'>
        <Paper style={style.submit} zDepth={1}>
          <TextField onChange={this.handleTextChange} fullWidth={true} style={style.textField} hintText='Start tracking your sites...'/>
        </Paper>

         <FloatingActionButton style={style.button} onClick={this.handleSubmit}>
          <ContentAdd/>
        </FloatingActionButton> 
      </div>
    )
  }
}

export default SiteForm;