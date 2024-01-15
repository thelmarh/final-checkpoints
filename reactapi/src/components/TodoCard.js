import { Col, Card, Button } from "react-bootstrap";

const TodoCard = (props) => {
  return (
    <Col lg={4}>
      <Card style={{ width: "100%" }} className="mt-3">
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.completed}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TodoCard;
