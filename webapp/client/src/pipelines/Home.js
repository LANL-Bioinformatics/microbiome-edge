import React from 'react';
import { Col, Row } from 'reactstrap';
import config from "../config";
import workflows from '../assets/img/nmdc-edge-workflows.png';

function Home() {
  //set to home for all public routes after logged in
  localStorage.setItem("loginFrom", "/home");

  return (
    <div className="animated fadeIn nmdc-edge-home">
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12">
          <div className="clearfix">
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className='edge-center'>
            <img alt="dtra logo" style={{ width: 900, height: 600 }} src={workflows} />
          </div>
          <br></br><br></br>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
