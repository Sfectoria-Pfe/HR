import React, { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { hideAddWindow, showAddWindow } from "../../State/addEmployeeState";
import { useSelector, useDispatch } from "react-redux";
import { hidePasswordWindow } from "../../State/revealePasswordState";
import { hideDeleteWindow } from "../../State/deleteEmployeeState";
import { hideReportReply } from "../../State/reportReply";
import Pomodoro from "../Pomodoro/Pomodoro";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  const password = useSelector((state) => state.password.password);
  const deletee = useSelector((state) => state.delete.delete);
  const sidebar = useSelector((state) => state.sidebar.sidebar);
  const add = useSelector((state) => state.add.add);
  const report = useSelector((state) => state.report.report);

  const dispatch = useDispatch();

  return (
    <div
      className={`s-container ${sidebar === true ? "d-none" : "d-flex"} ${
        sidebar === true ? "d-lg-flex" : "d-lg-none"
      } flex-column justify-content-between align-items-center py-5 `}
    >
      <ul
        className="d-flex flex-column"
        onClick={() => {
          if (deletee) dispatch(hideDeleteWindow());
          if (password) dispatch(hidePasswordWindow());
          if (add) dispatch(hideAddWindow());
          if (report) dispatch(hideReportReply());
        }}
      >
        <NavLink
          className="s-link d-flex align-items-center justify-content-start"
          to=""
          end
        >
          <IoHome className="s-icon" />
          <div className="s-link-text ">Home</div>
        </NavLink>
        <NavLink
          className="s-link d-flex align-items-center justify-content-start"
          to="employees"
        >
          <FaUsers className="s-icon" />
          <div className="s-link-text"> Employees</div>
        </NavLink>
        <NavLink
          className="s-link d-flex align-items-center justify-content-start"
          to="reports"
        >
          <BiSolidReport className="s-icon" />
          <div className="s-link-text"> Reports</div>
        </NavLink>
      </ul>
      <Pomodoro />
    </div>
  );
}

export default Sidebar;
