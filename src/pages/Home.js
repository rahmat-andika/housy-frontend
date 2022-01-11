import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import House from "../components/House";

import { Row, Col } from "shards-react";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-4">
          <Row className="housy px-0">
            <Col lg={4} md={7} sm={12} className="mb-3 p-2">
              <div className="m-auto" style={{maxWidth: 314}}>
                <Filter />
              </div>
            </Col>

            <Col>
              <House />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;