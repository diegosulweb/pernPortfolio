import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CreateIssue from "./IssuesHandler/CreateIssue";
import ListIssues from "./IssuesHandler/ListIssues";

const IssuesHandler = () => {
  return (
    <Container>
      <Row className="mb-5 mt-5">
        <Col xs={9}>
          <h1>Issues Handler</h1>
        </Col>
        <Col className="text-end">
          <CreateIssue />
        </Col>
      </Row>
      <Row>
        <Col>
          <ListIssues />
        </Col>
      </Row>
    </Container>
  );
};

export default IssuesHandler;
