import React from "react";
import { useTodoContext } from "../hooks/useTodos";
import { Container, Col, Button } from "react-bootstrap";

const TaskList = () => {
  const { state, dispatch } = useTodoContext();

  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TODOS", payload: index });
  };

  return (
    <Container>
      <Col>
        <ul
          style={{
            textAlign: "center",
            marginTop: "20px",
            listStyleType: "none",
          }}>
          {state.todos.map((task, index) => (
            <li key={index} style={{ marginTop: "15px" }}>
              {task}{" "}
              <span>
                <Button variant="danger" onClick={() => deleteTask(index)}>
                  Delete
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </Col>
    </Container>
  );
};

export default TaskList;
