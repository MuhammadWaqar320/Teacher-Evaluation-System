import React from 'react'
import "./editTeacherProfile.css"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import swal from "sweetalert";
import { changeTeacherPassword } from '../../../api/teacherDashboardApi';
const EditTeacherProfile = ({ show, hide }) => {
  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");
    const id=localStorage.getItem("id")
    const changePassword = async (e) => {
        e.preventDefault();  
        const obj = {
            new_password: newPassword,
            old_password: oldPassword
        }
        try {
            const dbResponse = await changeTeacherPassword(obj, id)
            if (dbResponse.data.success) {
                 swal({
                   title: "Congratulation",
                   text: " Password jas changed successfully",
                   icon: "success",
                 }).then(() => {
                   hide();
                 });
            }

        } catch (error) {
             swal({
               title: "Sorry ",
               text: "Please enter correct old password",
               icon: "error",
             })
        }
    }
    return (
      <>
        <Modal show={show} onHide={hide} centered>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "5px",
              }}
              onSubmit={changePassword}
            >
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Old Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={oldPassword}
                  minLength="6"
                  maxLength="20"
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter your old password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>New Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  minLength="6"
                  maxLength="20"
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  update
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default EditTeacherProfile

  
