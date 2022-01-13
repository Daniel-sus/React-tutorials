import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <a href="/post/1">Card 1</a>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <a href="/post/2">Card 2</a>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <a href="/post/3">Card 3</a>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
          <Card.Body>
            <Card.Title>
              <a href="/post/4">Card 4</a>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
