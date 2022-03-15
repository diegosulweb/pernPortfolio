import { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
const EditIssue = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [category, setCategory] = useState(props.category_id);

  const handleClose = () => {
    setShow(false);
    setDescription("");
    setCategory("");
    setTitle("");
  };
  const handleShow = () => setShow(true);
  const editIssue = async (e) => {
    e.preventDefault();
    try {
      const body = { title, description, category };
      const response = await fetch(
        `http://localhost:5001/issues/edit/${props.issue_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/issues";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="editIssue">
      <Button className="nextButton btn btn-success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comments"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn btn-warning" onClick={(e) => editIssue(e)}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditIssue;
