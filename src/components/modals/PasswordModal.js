import React, { Component } from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";

export default class PassModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="bold mb-0 btn-pass" href="#" onClick={this.toggle}>
          Change Password
        </button>
        
        <Modal show={open} onHide={this.toggle} centered>
          <div className="text-center p-3">
            <h3 className="pt-3">Change Password</h3>
          </div>

          <div className="px-4 pt-0 pb-4">
            <Form>
            <FormGroup>
                <label className="bold" htmlFor="#username">
                  Old Password
                </label>
                <br />
                <input
                  required
                  autoComplete="off"
                  className="forms"
                  type="password"
                  id="#username"
                />
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#password">
                  New Password
                </label>
                <br />
                <input
                  required
                  autoComplete="off"
                  className="forms"
                  type="password"
                  id="#password"
                />
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#password">
                  Confirm Password
                </label>
                <br />
                <input
                  required
                  autoComplete="off"
                  className="forms"
                  type="password"
                  id="#password"
                />
              </FormGroup>
              <button className="btn-modal">Save</button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
