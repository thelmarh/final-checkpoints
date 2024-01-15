import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TodoCard from "./components/TodoCard";
import { fetchTodoData } from "./lib/todoApis";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onFetchTodo = async () => {
    const results = await fetchTodoData();

    if (results.error) {
      return setErrorMessage(results.error);
    }

    return setTodos(results);
  };

  useEffect(() => {
    onFetchTodo();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {errorMessage && (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {todos.length > 0 &&
          todos.map((todo) => {
            return <TodoCard key={todo.id} title={todo.title} />;
          })}
      </Row>
    </Container>
  );
};

export default App;
