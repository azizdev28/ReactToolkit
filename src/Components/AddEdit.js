import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./AddEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../features/studentSlice";
import { toast } from "react-toastify";

const AddEdit = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const student = useSelector((state) => state.student.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addStudent({ id: student.length + 1, ...state }));
    toast("Added sucessfully!");
    navigate("/");
  };

  return (
    <div style={{ marginTop: "100px" }} className="AddStudents">
      <h1>Add New Student</h1>
      <form
        className="form-edit"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label className="name-label" htmlFor="name">
          Name
        </label>
        <input
          className="field-design"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name.."
          value={state.name}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label className="email-label" htmlFor="email">
          Email
        </label>
        <input
          className="field-design"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email.."
          value={state.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label className="status-label" htmlFor="status">
          Group
        </label>
        <select
          className="field-design"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please select Group..</option>
          <option className="active-field" value="N32">
            N32
          </option>
          <option className="inactive-field" value="N50">
            N50
          </option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <label className="phone-label" htmlFor="phone">
          Phone
        </label>
        <input
          className="field-design"
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter contact nomer.."
          value={state.phone}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          className="save-btn"
          onClick={handleSubmit}
          type="submit"
          value="Save"
        />
        <br />
        <br />
        <Link to="/">
          <input className="Goback-btn" type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
