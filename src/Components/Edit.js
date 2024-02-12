import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateStudent } from "../features/studentSlice";
import { toast } from "react-toastify";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newStudent = useSelector((state) => state.student.value);
  const currentStudent = newStudent.find((student) => student.id == id);
  const navigate = useNavigate();
  const [editData, setEditData] = useState({ ...currentStudent });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleDataChange = () => {
    dispatch(updateStudent({ id: id, ...editData }));
    toast("Updated sucessfully!");
    navigate("/");
  };

  return (
    <div style={{ marginTop: "100px" }} className="EditCard">
      <h1>Edit Students</h1>
      <form
        className="form-edit"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleDataChange}
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
          value={editData.name}
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
          value={editData.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label className="status-label" htmlFor="status">
          Label
        </label>
        <select
          className="field-design"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please select Group</option>
          <option
            className="active-field"
            value="N32"
            selected={editData.status === "N32" ? editData.status : " "}
          >
            N32
          </option>
          <option
            className="inactive-field"
            value="N50"
            selected={editData.status === "N50" ? editData.status : " "}
          >
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
          placeholder="Enter contact no.."
          value={editData.phone}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          className="save-btn"
          onClick={handleDataChange}
          type="submit"
          value="update"
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

export default Edit;
