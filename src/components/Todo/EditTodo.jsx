import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setDescription(todo.description);
  };
  const handleShow = () => setShow(true);
  const [description, setDescription] = useState(todo.description);
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5001/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/todo";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <Button className="nextButton btn btn-warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit to do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="btn btn-warning"
            onClick={(e) => updateDescription(e)}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default EditTodo;
