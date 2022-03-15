import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

const WrongWord = (props) => {
  return (
    <Fragment>
      <Row>
        <Col className={` ${props.checkOne}`}>{props.one}</Col>
        <Col className={` ${props.checkTwo}`}>{props.two}</Col>
        <Col className={` ${props.checkThree}`}>{props.three}</Col>
        <Col className={` ${props.checkFour}`}>{props.four}</Col>
        <Col className={` ${props.checkFive}`}>{props.five}</Col>
      </Row>
    </Fragment>
  );
};

export default WrongWord;
