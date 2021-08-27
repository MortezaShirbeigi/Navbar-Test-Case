import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";
import NavigationMenu from "./navigationMenu";
import Profile from "./profile";

const Header = () => {
  return (
    <header className="d-flex align-items-center header">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={3}>
            <Profile />
          </Col>
          <Col xs={7}>
            <h1 className="text-center">search</h1>
          </Col>
          <Col xs={2}>
            <div className="d-flex justify-content-end">
              <img className="img-fluid m-3" width="80px" src={Logo} alt="" />
              <NavigationMenu />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
