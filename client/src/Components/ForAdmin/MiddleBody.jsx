import React from "react";

function MiddleBody() {
  const cardStyle = {
    backgroundColor: "#0d0d0d",
    color: "white",
    border: "1px solid #1DB954",
    borderRadius: "12px",
    width: "220px",
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
    textDecoration: "none",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 6px 15px rgba(29,185,84,0.5)";
    e.currentTarget.style.backgroundColor = "#1DB954";
    e.currentTarget.style.color = "black";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.4)";
    e.currentTarget.style.backgroundColor = "#0d0d0d";
    e.currentTarget.style.color = "white";
  };

  const gridContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "40px",
  };

  const fullBody = {
    minHeight: "80vh",
    backgroundColor: "white",
    padding: "50px 0",
    fontFamily: "Poppins, sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    color: "black",
    marginBottom: "30px",
    fontWeight: 700,
    fontSize: "1.8rem",
    letterSpacing: "1px",
  };

  return (
    <div style={fullBody}>
      <h2 style={headerStyle}>Admin Quick Actions</h2>

      <div style={gridContainer}>
        <a
          href="/admin/Header"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Header News</h4>
        </a>

        <a
          href="/uploadSliderAds"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Slider Ads</h4>
        </a>

        <a
          href="/adminTextSlider"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Slider Text</h4>
        </a>

        <a
          href="/contact"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Contact Us</h4>
        </a>
      </div>

      <div style={gridContainer}>
        <a
          href="/adminShowNewsLetter"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Newsletter</h4>
        </a>

        <a
          href="/adminPrivacyPolicy"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Privacy Policy</h4>
        </a>

        <a
          href="/adminCommunityPolicy"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Community Policy</h4>
        </a>

        <a
          href="/adminAdvertisementRequest"
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <h4>Advertisement Request</h4>
        </a>
      </div>
    </div>
  );
}

export default MiddleBody;
