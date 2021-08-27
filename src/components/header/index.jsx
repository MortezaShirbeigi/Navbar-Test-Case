import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";
import Profile from "./profile";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Profile />
          </Col>
          <Col xs={7}>
            <h1 className="text-center">search</h1>
          </Col>
          <Col xs={2}>
            <div className="d-flex justify-content-end">
              <img className="img-fluid" width="80px" src={Logo} alt="" />
              <div className="p-3">Menu</div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
