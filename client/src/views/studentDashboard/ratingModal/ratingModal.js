import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ratingModal.css";
import Form from "react-bootstrap/Form";
import { addRatingApi } from '../../../api/studentDashboardApi';
import { useState } from 'react';
import { Rating } from "react-simple-star-rating";
import swal from 'sweetalert';
const RatingModal = ({data,show,hide}) => {
    const [fullscreen,setFullscreen]=useState(false)
    const [feedback,setFeedback]=useState("")
    const [typeOfRating, setTypeOfRating] = useState("Personality");
    const [rating, setRating] = useState(0); 
    const {studentId,teacherId}=data;
    const allType=['Personality','Teaching Method','Knowledge']
    const addRating=async(e)=>{
        e.preventDefault();
        const newRating = {
          star:rating/20,
          type_fb:typeOfRating,
          feedback:feedback,
          stu_id:parseInt(studentId),
          teacher_id:teacherId,
        };
        try {
            const dbResponse=await addRatingApi(newRating)
            if(dbResponse.success){
                  swal({
                    title: "Thanks!",
                    text: "You have rated successfully",
                    icon: "success",
                  }).then(() => {
                   hide();
                  });
            }
        } catch (error) {
            
        }
    }
      const handleRating = (rate) => {
        setRating(rate);
        // other logic
      };
    return (
      <>
        <Modal show={show} onHide={hide} centered>
          <Modal.Header closeButton>
            <Modal.Title>Student Rating</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="register-form-class" onSubmit={addRating}>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Feedback:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  minLength="6"
                  maxLength="2000"
                  pattern="[A-Z a-z]+"
                  title="Only alphabets are allowed"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Type your feedback here....."
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Rate:</Form.Label>
                <Rating
                  onClick={handleRating}
                  ratingValue={rating} /* Available Props */
                />
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Rating Based On:</Form.Label>
                <Form.Select
                  style={{ height: "38px" }}
                  onChange={(e) => setTypeOfRating(e.target.value)}
                  className="mb-4"
                >
                  {allType.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}{" "}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Rate Now
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default RatingModal