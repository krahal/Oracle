import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PredictionForm from './PredictionForm';
import HeaderTitle from './HeaderTitle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTitle />
        <Grid>
          <Row className="form-header">
            <Col xs={12} md={8} mdOffset={2}>
              <h1>Don't skimp the details! Fill in all fields to get the most accurate prediction possible.</h1>
            </Col>
          </Row>
          <br />
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <PredictionForm />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
