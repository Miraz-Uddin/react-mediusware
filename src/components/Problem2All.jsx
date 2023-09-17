import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
const Problem2All = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [showAllContacts, setShowAllContacts] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalA = async () => {
    const apiURL = "https://contact.mediusware.com/api/contacts/?page=1";
    const res = await fetch(`${apiURL}`, {
      method: "GET",
    });
    const contacts = await res.json();
    setData({
      type: "modalA",
      dataList: contacts,
    });
    handleShow();
  };
  const handleModalB = async () => {
    const apiURL =
      "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1";
    const res = await fetch(`${apiURL}`, {
      method: "GET",
    });
    const contacts = await res.json();
    setData({
      type: "modalB",
      dataList: contacts,
    });
    handleShow();
  };

  useEffect(() => {
    (async () => {
      await handleModalA();
    })();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={() => {
                navigate("/problem-2/all");
                handleModalA();
              }}
              className="btn btn-lg btn-outline-danger"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={() => {
                navigate("/problem-2/us");
                handleModalB();
              }}
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
          <button
            onClick={() => {
              navigate("/problem-2/us");
              handleModalB();
            }}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <button
            onClick={() => {
              navigate("/problem-2/all");
              handleModalA();
            }}
            className="btn btn-lg btn-outline-danger"
            type="button"
          >
            All Contacts
          </button>
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

export default Problem2All;
