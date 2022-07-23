import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormCom from '../../component/form/form';
const Login = (props) => {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:"initial"}}> Login Here</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <FormCom hideModal={props.onHide} />
     </Modal.Body>
   </Modal>
 );
}

export default Login