import React, { Component } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isStarted: false,
      ms: 0,
      sec: 0,
      min: 0,
      hours: 0
    };
    setInterval(() => {
      if (this.state.isStarted) {
        this.setState({
          ms: this.state.ms + 1000,
          sec: ((this.state.ms % 3600000) % 60000) / 1000,
          min: (this.state.ms % 3600000) / 60000,
          hours: this.state.ms / 3600000
        });
      }
    }, 1000);
  }

  startMandler = () => this.setState({ isStarted: !this.state.isStarted });
  resetMandler = () =>
    this.setState({
      ms: 0,
      sec: 0,
      min: 0,
      hours: 0
    });

  render() {
    return (
      <Container>
        <Row>
          <Col md={2}>
            <span>{this.state.hours}</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
          <Col md={2}>
            <span>{this.state.min}</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
          <Col md={2}>
            <span>{this.state.sec}</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <span>hours</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
          <Col md={2}>
            <span>min</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
          <Col md={2}>
            <span>sec</span>
          </Col>
          <Col sm={1}>
            <span>:</span>
          </Col>
        </Row>
        <Row>
          <Button variant="outline-primary" onClick={this.startMandler}>
            Start
          </Button>
          <Button variant="outline-warning" onClick={this.resetMandler}>
            Reset
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Timer;
