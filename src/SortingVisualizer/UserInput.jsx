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
        <Modal.Header closeButton style={{backgroundColor: "aqua", border:"none"}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{marginTop:"2%"}}>
            Provide Input Elements
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
        <Modal.Body style={{backgroundColor: "aqua", border:"none"}}>
          <input type="text" style={{width:"-webkit-fill-available", border:"none", height:"50px"}} value={this.state.value} onChange={this.handleChange} />
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "aqua", border:"none"}}>
          <input type="submit" style={{borderRadius: "5px",  padding: "inherit", background: "none"}} onClick={this.props.onHide} value="Submit"/>
        </Modal.Footer>
        </form>
      </Modal>
    );
    }
  }
  