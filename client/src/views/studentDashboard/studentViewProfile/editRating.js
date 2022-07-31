import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateRatingApi } from "../../../api/studentDashboardApi";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import swal from "sweetalert";
const EditRatingModal = ({ data, show, hide }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [feedback, setFeedback] = useState(data.feedback);
  const [typeOfRating, setTypeOfRating] = useState(data.type_of_feedback);
  const [rating, setRating] = useState(data.no_of_star);
  const { StudentId, TeacherId } = data;
  const allType = ["Personality", "Teaching Method", "Knowledge"];
  const addRating = async (e) => {
    e.preventDefault();
    const newRating = {
      no_of_star: rating / 20,
      type_of_feedback: typeOfRating,
      feedback: feedback,
      StudentId: StudentId,
      TeacherId: TeacherId,
    };
    try {
      const dbResponse = await updateRatingApi(newRating);
      if (dbResponse.data.success) {
        swal({
          title: "Thanks!",
          text: " Rated edited successfully",
          icon: "success",
        }).then(() => {
          hide();
        });
      }
    } catch (error) {}
  };
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <>
      <Modal show={show} onHide={hide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="register-form-class" onSubmit={addRating}>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Feedback:</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
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
                value={typeOfRating}
              >
                {allType.map((item) => {
                  return <option key={item}>{item} </option>;
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
};

export default EditRatingModal;
