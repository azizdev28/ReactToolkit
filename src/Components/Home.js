import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, setSearchQuery } from "../features/studentSlice";
import { toast } from "react-toastify";

const Home = () => {
  const students = useSelector((state) => state.student.value);
  const [searchText, setSearchText] = useState("");

  const filteredData = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.email.toLowerCase().includes(searchText.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchText.toLowerCase()) ||
      student.status.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const onDeleteStudent = (id) => {
    if (
      window.confirm(
        "Are you sure that you want to delete this particular student data?"
      )
    ) {
      dispatch(deleteStudent({ id: id }));
      toast("Deleted successfully!");
    }
  };

  return (
    <div className="TableCard container">
      <div className="search-bar">
        <h1>Students</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            dispatch(setSearchQuery(e.target.value));
          }}
        />
      </div>

      <table className="style-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Student</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Group</th>
            <th style={{ textAlign: "center" }}>Control</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student, index) => (
            <tr key={student.id}>
              <th className="num-add">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.status}</td>
              <td>
                <div className="ControlBtn">
                  <Link to={`/update/${student.id}`}>
                    <button className="btn-btn-edit">
                      <EditOutlined />
                    </button>
                  </Link>
                  <button
                    className="btn-btn-delete"
                    onClick={() => onDeleteStudent(student.id)}
                  >
                    <DeleteOutlined />
                  </button>
                  <Link to={`/view/${student.id}`}>
                    <button className="btn-btn-view">
                      <EyeOutlined />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />

      <div className="BtnDiv">
        <Link to="/addstudent">
          <button className="btn-add-student">ADD STUDENT</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
