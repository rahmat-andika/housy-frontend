import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class Confirmation extends Component {
  setup = () => {
    localStorage.setItem("paid", 1);
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p>
              Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
              pesanan Klik{" "}
              <b className="bold" onClick={this.setup}>
                Disini{" "}
              </b>
              Terimakasih
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
