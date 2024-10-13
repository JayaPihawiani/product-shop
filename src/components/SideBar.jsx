import { Nav } from "react-bootstrap";
import { IoHome, IoPerson, IoPricetag, IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../style/style.css";
import { useSelector } from "react-redux";

function SideBar({ isOpen }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      style={{
        paddingInlineEnd: "10px",
        width: isOpen ? "250px" : "70px", // Ubah lebar berdasarkan state
        height: "100vh",
        backgroundColor: "#fff",
        position: "fixed",
        transition: "width 0.3s",
        overflow: "hidden",
        boxShadow: "2px 2px 5px #00000042",
      }}
    >
      <Nav className="flex-column pt-3 ps-3">
        <h5>{isOpen ? "GENERAL" : null}</h5>
        <NavLink
          to="/dashboard"
          className="text-decoration-none text-dark fw-bold ms-3 mb-1"
        >
          {isOpen ? "Dashboard" : <IoHome size={23} color="#000" />}
        </NavLink>
        <NavLink
          to="/product"
          className="text-decoration-none text-dark fw-bold ms-3 mb-1"
        >
          {isOpen ? "Product" : <IoPricetag color="#000" size={23} />}
        </NavLink>
        {user && user.role === "admin" && (
          <>
            <h5>{isOpen ? "ADMIN" : null}</h5>
            <NavLink
              to="/users"
              className="text-decoration-none text-dark fw-bold ms-3 mb-1"
            >
              {isOpen ? "User" : <IoPerson size={23} color="#000" />}
            </NavLink>
          </>
        )}
        <h5>{isOpen ? "SETTING" : null}</h5>
        <NavLink
          to="/profile"
          className="text-decoration-none text-dark fw-bold ms-3 mb-1"
        >
          {isOpen ? "Profile" : <IoSettings size={23} color="#000" />}
        </NavLink>
      </Nav>
    </div>
  );
}

export default SideBar;
