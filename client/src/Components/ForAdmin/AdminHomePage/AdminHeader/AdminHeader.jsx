import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminHeader() {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(
    !!localStorage.getItem("isAdminAuthenticated")
  );
  const navigate = useNavigate();

  const handleSignInOut = () => {
    if (isSignedIn) {
      localStorage.removeItem("isAdminAuthenticated");
      localStorage.removeItem("role");
      localStorage.removeItem("isAdminLogIn");
      setIsSignedIn(false);
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const headerStyle = {
    backgroundColor: "#ffffffff",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const navRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 5%",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  };

  const navLinkHover = (e) => (e.target.style.color = "#1DB954");
  const navLinkLeave = (e) => (e.target.style.color = "white");

  const leftMenuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  };

  const submenuStyle = {
    position: "absolute",
    backgroundColor: "#ffffffff",
    top: "40px",
    left: "0",
    borderRadius: "6px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    zIndex: 10,
    display: submenuVisible ? "block" : "none",
  };

  const submenuItemStyle = {
    display: "block",
    padding: "8px 16px",
    color: "white",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 0.3s",
  };

  const rightMenuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const searchInputStyle = {
    backgroundColor: "#111",
    color: "white",
    border: "1px solid #1DB954",
    padding: "6px 10px",
    borderRadius: "5px",
    outline: "none",
  };

  const searchButtonStyle = {
    backgroundColor: "#1DB954",
    color: "black",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <nav style={headerStyle}>
      {/* TOP ROW */}
      <div style={navRowStyle}>
        <div style={logoStyle} onClick={() => navigate("/adminhome")}>
          <img
            src="../../Media/red.png"
            alt="logo"
            style={{ height: "45px", width: "45px" }}
          />
          <h2 style={{ color: "#1DB954", fontWeight: "700" }}>Admin Panel</h2>
        </div>
      </div>

      {/* SECOND ROW (Navigation) */}
      <div
        style={{
          ...navRowStyle,
          borderTop: "1px solid #1DB95433",
          borderBottom: "1px solid #1DB95433",
          backgroundColor: "#111",
        }}
      >
        {/* Left Links */}
        <ul style={leftMenuStyle}>
          <li>
            <NavLink
              to="/admin/home"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              Breaking News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/national"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              National News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/international"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              International
            </NavLink>
          </li>

          {/* Sports with Submenu */}
          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setSubmenuVisible(true)}
            onMouseLeave={() => setSubmenuVisible(false)}
          >
            <NavLink
              to="/admin/sports"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              Sports
            </NavLink>

            <ul style={submenuStyle}>
              <li>
                <NavLink
                  to="/admin/cricket"
                  style={submenuItemStyle}
                  onMouseEnter={(e) => (e.target.style.background = "#1DB954")}
                  onMouseLeave={(e) => (e.target.style.background = "transparent")}
                >
                  Cricket
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/football"
                  style={submenuItemStyle}
                  onMouseEnter={(e) => (e.target.style.background = "#1DB954")}
                  onMouseLeave={(e) => (e.target.style.background = "transparent")}
                >
                  Football
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/admin/business"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              Business
            </NavLink>
          </li>
        </ul>

        {/* Right Menu */}
        <div style={rightMenuStyle}>
          <div>
            <input type="text" placeholder="Search..." style={searchInputStyle} />
            <button style={searchButtonStyle}>Search</button>
          </div>

          <NavLink
            to="#"
            onClick={handleSignInOut}
            style={{ ...navLinkStyle, color: "#1DB954" }}
          >
            {isSignedIn ? "👤 Sign Out" : "👤 Sign In"}
          </NavLink>

          <NavLink to="/admin/ebook" style={navLinkStyle}>
            🖨️ E-Book
          </NavLink>

          <NavLink to="/ShowUsers" style={navLinkStyle}>
            👥 Users
          </NavLink>

          <NavLink to="/ShowMessage" style={navLinkStyle}>
            📜 Messages
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
