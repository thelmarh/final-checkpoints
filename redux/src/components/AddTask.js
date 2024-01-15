import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTodoContext } from "../hooks/useTodos";

const AddTask = () => {
  const { dispatch } = useTodoContext();
  const [newTasks, setNewTasks] = useState("");

  const newTasksChange = (e) => {
    e.preventDefault();
    setNewTasks(e.target.value);
  };

  const addNewTask = () => {
    if (newTasks.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTasks });
      setNewTasks("");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <input
              type="text"
              placeholder="Input Tasks"
              className="input"
              value={newTasks}
              onChange={newTasksChange}
            />
            <Button variant="warning" onClick={addNewTask}>
              Add Task
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTask;
