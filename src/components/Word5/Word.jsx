import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const Word = (props) => {
  return (
    <Fragment>
      <Row className="message">
        <Col className="border">{props.one}</Col>
        <Col className="border">{props.two}</Col>
        <Col className="border">{props.three}</Col>
        <Col className="border">{props.four}</Col>
        <Col className="border">{props.five}</Col>
      </Row>
    </Fragment>
  );
};

export default Word;
