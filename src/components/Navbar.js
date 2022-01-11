import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import SignIn from "./modals/SignInModals";
import SignUp from "./modals/SignUpModals";
import DropdownUser from "./dropdown/DropdownUser";
import DropdownOwner from "./dropdown/DropdownOwner";
import icon from "../assets/img/icon.svg";

export default class Header extends Component {
  state = {
    signin: false,
    opens: false,
    open: false
  };

  componentDidMount() {
    const status = localStorage.getItem("login");
    const owner = localStorage.getItem("owner");
    this.setState({ signin: status, owner: owner });
  }

  modal = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ opens: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  signUp = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ open: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  render() {
    const auth = localStorage.getItem("auth");
    const stats = localStorage.getItem("role");

    return (
      <Navbar
        bg="white"
        expand="lg"
        className="shadow py-2 fixed-top px-2"
      >
        <SignIn
          show={this.state.opens}
          onHide={() => this.setState({ opens: !this.state.opens })}
        />

        <SignUp
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />

        <div className="container py-0">
          <Link to="/">
            <img style={{ height: "42px" }} src={icon} alt=".." />
          </Link>

          <Form className="navbar-center">
            {stats === "owner" ? null : (
              <input
                className="form-box"
                style={{ width: "300px", maxWidth: "300px" }}
                placeholder="Search Housy"
              />
            )}
          </Form>

          {auth ? (
            stats === "owner" ? (
              <DropdownOwner />
            ) : (
              <DropdownUser />
            )
          ) : (
            <>
              <div className="d-flex">
                <button
                  onClick={this.modal}
                  className="btn-sign btn mr-3 font-weight-bold"
                >
                  SignIn
                </button>
                <button
                  onClick={this.signUp}
                  className="btn-sign btn btn-light font-weight-bold"
                >
                  SignUp
                </button>
              </div>

              {/**
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  
                  <Button
                    onClick={this.modal}
                    color="secondary"
                    size="sm"
                    type="button"
                  >
                    SignIn
                  </Button>
                  <Button
                    onClick={this.signUp}
                    color="primary"
                    size="sm"
                    type="button"
                  >
                    SignUp
                  </Button>
                </Nav>
              </Navbar.Collapse>

                 */}
            </>
          )}
        </div>
      </Navbar>
    );
  }
}
