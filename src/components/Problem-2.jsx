import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
const Problem2 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [showAllContacts, setShowAllContacts] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalA = async () => {
    navigate("/problem-2/all");
  };
  const handleModalB = async () => {
    navigate("/problem-2/us");
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={handleModalA}
              className="btn btn-lg btn-outline-danger"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={handleModalB}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Button onClick={handleModalB} variant="primary">
            US Contacts
          </Button>
          <Button onClick={handleModalA} variant="danger">
            All Contacts
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Contacts data={data} />
          <hr />
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`checked-${type}`}
                  label={`Only even`}
                />
              </div>
            ))}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Problem2;
