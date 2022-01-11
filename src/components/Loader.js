import React from "react";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "shards-react";

export const Loader = () => {
  return (
    <div className="d-flex">
      <Skeleton circle={true} height={100} width={100} />
      <Skeleton count={1} />
    </div>
  );
};

export const BookingLoad = () => {
  return <Skeleton count={3} height={60} />;
};

export const Profiles = () => {
  return (
    <div className="align-items-center">
      <div className="mb-3">
        <Skeleton circle={true} height={100} width={100} />
      </div>
      <div>
        <Skeleton count={2} height={30} />
      </div>
    </div>
  );
};

export const House = () => {
  return (
    <>
      <Row>
        <Col lg={4} className="mb-3">
          <Skeleton height={150} />
          <Skeleton count={3} />
        </Col>
        <Col lg={4} className="mb-3">
          <Skeleton height={150} />
          <Skeleton count={3} />
        </Col>
        <Col lg={4} className="mb-3">
          <Skeleton height={150} />
          <Skeleton count={3} />
        </Col>
        <Col lg={4} className="mb-3">
          <Skeleton height={150} />
          <Skeleton count={3} />
        </Col>
      </Row>
    </>
  );
};
