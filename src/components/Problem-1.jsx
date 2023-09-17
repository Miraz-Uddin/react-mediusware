import React, { useState } from "react";
import Tasks from "./Tasks.jsx";

const Problem1 = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [print, setPrint] = useState(null);
  const [data, setData] = useState([
    {
      name: "task1",
      status: "pending",
    },
    {
      name: "task2",
      status: "completed",
    },
    {
      name: "task3",
      status: "archive",
    },
    {
      name: "task4",
      status: "active",
    },
    {
      name: "task5",
      status: "active",
    },
    {
      name: "task6",
      status: "active",
    },
    {
      name: "task7",
      status: "active",
    },
  ]);
  const [showActive, setShowActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
    if (val === "all") {
      setShowActive(false);
      setShowCompleted(false);
    }
    if (val === "active") {
      setShowActive(true);
      setShowCompleted(false);
    }
    if (val === "completed") {
      setShowActive(false);
      setShowCompleted(true);
    }
  };

  const handleChange = (val) => {
    if (val.target.name === "name") {
      setName(val.target.value);
    }
    if (val.target.name === "status") {
      setStatus(val.target.value);
    }
  };

  const handleSubmit = () => {
    setPrint(`Name: ${name}, Status: ${status}`);
    setData([{ name, status: status ? status.toLowerCase() : "" }, ...data]);
    setName("");
    setStatus("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onChange={handleChange}
                value={name}
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-auto">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                name="status"
              />
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          {print && (
            <h6 className="text-center text-uppercase mb-5">{print}</h6>
          )}
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 && (
                <Tasks
                  tasks={data}
                  showActive={showActive}
                  showCompleted={showCompleted}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
