import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { userInfo } from "../features/authSlice";
import "../style/style.css";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mengontrol visibilitas sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <React.Fragment>
      <NavBar onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
      <div
        style={{
          marginLeft: isSidebarOpen ? "250px" : "60px",
          padding: "20px",
          transition: "margin-left 0.3s",
        }}
      >
        <div className="row">
          <div className="col-12">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
