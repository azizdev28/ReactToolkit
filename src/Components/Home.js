import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../features/studentSlice";
import { toast } from "react-toastify";

const Home = (id) => {
  const students = useSelector((state) => state.student.value);
  const [filter, setFilter] = useState("");

  const filteredData = students.filter((val) => {
    return val.status.toLowerCase().includes(filter.toLowerCase());
  });

  console.log("students data", students);
  const dispatch = useDispatch("");
  const onDeleteStudent = (id) => {
    if (
      window.confirm(
        "Are you sure that you wanted to delete this particular student data ?"
      )
    ) {
      dispatch(deleteStudent({ id: id }));
      toast("Deleted sucessfully!");
    }
  };
  return (
    <div className="TableCard container">
      <h1>Students</h1>

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
          {filteredData.map((student, index) => {
            return (
              <tr id={student.id}>
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
            );
          })}
        </tbody>
      </table>
      <br />
      <br />

      <div className="BtnDiv">
        <Link to="/addstudent">
          <button className="btn-add-student">ADD STUDENT</button>
        </Link>
        <select
          name="status"
          className="dropdown"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="">Group</option>
          <option value="N32">N32</option>
          <option value="N50">N50</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
