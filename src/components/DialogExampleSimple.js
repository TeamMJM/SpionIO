import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DialogExampleSimple extends Component {
  constructor(props){
    super(props);
    this.state = {
        open:false,
        title:"",
        url:"",
        description:""
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);    
    this.handleTextDesc = this.handleTextDesc.bind(this);
    this.handleTextTitle = this.handleTextTitle.bind(this);
    this.handleTextUrl = this.handleTextUrl.bind(this);
  }
  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    let newPage = {
        title: this.state.title,
        url:this.state.url,
        Description:this.state.description
    };
    this.setState({
        open:false,
        title:null,
        url:null,
        description:null
    });
    this.props.handleSubmit(newPage)
  };

  handleTextTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  handleTextUrl(e) {
    this.setState({
      url: e.target.value
    })
  }
  handleTextDesc(e) {
    this.setState({
      description: e.target.value
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Enter Page Information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div>
            <TextField
                hintText="Home page"
                errorText="This field is required"
                floatingLabelText="Title"
                onChange={this.handleTextTitle}
                value={this.state.title}
            /><br />
            <TextField
                hintText="http://localhost:4000/home"
                errorText="THis is required"
                floatingLabelText="Url"
                onChange={this.handleTextUrl}
                value={this.state.url}
            /><br />
            <TextField
                hintText="The home page of the website"
                errorText="This field is required."
                floatingLabelText="Description"
                multiLine={true}
                onChange={this.handleTextDesc}
                value={this.state.description}
            />
        </div>
        </Dialog>
      </div>
    );
  }
}

export default DialogExampleSimple;