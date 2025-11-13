import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const footerItem = [
    { title: "About Us", Path: "/about" },
    { title: "Contact Us", Path: "/contact" },
    { title: "RSS", Path: "/rss" },
    { title: "Newsletter", Path: "/newsletter" },
    { title: "Archives", Path: "/archives" },
    { title: "Apps", Path: "/" },
    { title: "FB Page", Path: "/" },
    { title: "Advertisement", Path: "/advertisment" },
    { title: "Privacy Policy", Path: "/privacy" },
    { title: "Comment Policy", Path: "/commentpolicy" },
  ];

  const footerStyle = {
    backgroundColor: "#000",
    color: "white",
    padding: "40px 0",
    marginTop: "50px",
    fontFamily: "Poppins, sans-serif",
  };

  const containerStyle = {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const leftStyle = {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  };

  const rightMenuStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
    marginTop: "10px",
    flex: "2",
  };

  const borderStyle = {
    width: "80%",
    borderBottom: "1px solid #1DB954", // green accent
    margin: "25px auto",
  };

  const downFooterStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
    color: "#aaa",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const downRightStyle = {
    display: "flex",
    gap: "15px",
  };

  const socialLinkStyle = {
    color: "#1DB954",
    backgroundColor: "#111",
    padding: "8px 10px",
    borderRadius: "50%",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    transition: "color 0.3s ease",
  };

  const navLinkHover = (e) => (e.target.style.color = "#1DB954");
  const navLinkLeave = (e) => (e.target.style.color = "white");

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Left Section */}
        <div style={leftStyle}>
          <a href="/" style={{ textDecoration: "none" }}>
            <h1 style={{ color: "#1DB954", fontSize: "32px", marginBottom: "5px" }}>
              SUNRISE
            </h1>
            <h6 style={{ color: "white", fontWeight: "400" }}>
              Sunrise For Your Faithfulness
            </h6>
          </a>
        </div>

        {/* Right Menu */}
        <div style={rightMenuStyle}>
          {footerItem.map(({ title, Path }) => (
            <NavLink
              key={title}
              to={Path}
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
              onMouseLeave={navLinkLeave}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={borderStyle}></div>

      {/* Bottom Section */}
      <div style={downFooterStyle}>
        <div>
          <p style={{ color: "#98A2B3" }}>
            © 2024 sunrise.net | Powered by: RSI LAB
          </p>
          <p style={{ color: "#98A2B8", marginTop: "5px" }}>
            Copyright: Any unauthorized use or reproduction of Sunrise content
            for commercial purposes is strictly prohibited and constitutes
            copyright infringement liable to legal action.
          </p>
        </div>

        {/* Social Links */}
        <div style={downRightStyle}>
          <Link to="/" style={socialLinkStyle}>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/" style={socialLinkStyle}>
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/" style={socialLinkStyle}>
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/" style={socialLinkStyle}>
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="/" style={socialLinkStyle}>
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
