import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./View.css";

const View = () => {
  const { id } = useParams();

  const newviewstudent = useSelector((state) => state.student.value);
  const currentnewview = newviewstudent.find((student) => student.id == id);

  return (
    <div style={{ marginTop: "150px" }} className="viewCard container">
      <div className="card">
        <div className="card-header">
          <p className="heading-two">{currentnewview.name}</p>
        </div>
        <hr color="black"></hr>
        <div className="container">
          <strong className="out-color">ID:</strong>
          <span className="inside-color"> {id}</span>
          <br />
          <br />
          <strong className="out-color">Name:</strong>
          <span className="inside-color"> {currentnewview.name}</span>
          <br />
          <br />
          <strong className="out-color">Email:</strong>
          <span className="inside-color"> {currentnewview.email}</span>
          <br />
          <br />
          <strong className="out-color">Group:</strong>
          <span className="inside-color"> {currentnewview.status}</span>
          <br />
          <br />
          <strong className="out-color">Phone:</strong>
          <span className="inside-color"> {currentnewview.phone}</span>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <Link to="/">
        <button className="btn-view">Go Back</button>
      </Link>
    </div>
  );
};

export default View;
