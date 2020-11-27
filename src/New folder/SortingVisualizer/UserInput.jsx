import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class UserInput extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          value:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event){

      var a=this.state.value.replace(/\s/g,'');
      var array = a.split(',').map(Number);
      this.props.user(array);
      event.preventDefault();
    }
    render() {
      console.log(this.props);
    return (
      <Modal
      {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Provide Input Elements
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
        <Modal.Body>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <input type="submit" onClick={this.props.onHide} value="Submit"/>
        </Modal.Footer>
        </form>
      </Modal>
    );
    }
  }