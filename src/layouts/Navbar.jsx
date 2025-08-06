import { useState } from "react";

function Navbar({ onLoginClick, onRegisterClick, onProfileClick }) {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        height: "60px",
      }}
    >
      <img
        src="src/img/Rectangle 11.png"
        alt="blue background"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          zIndex: -1,
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="src/img/image 12.png"
          alt="Logo LSP"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
          }}
        />
        <span style={{ fontSize: "20px", fontWeight: "700" }}>
          <span style={{ color: "#FE9C54" }}>My</span>
          <span style={{ color: "#FF8303" }}>LSP</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        {["Home", "Profile", "Sertifikasi", "Berita", "Galeri", "Kontak"].map(
          (name) => (
            <button
              key={name}
              onClick={
                name === "Profile"
                  ? onProfileClick
                  : name === "Home"
                  ? undefined
                  : undefined
              }
              style={{
                background: "none",
                border: "none",
                fontSize: "17px",
                color: "#333",
                cursor: "pointer",
                fontWeight: "500",
                padding: "6px 0",
              }}
            >
              {name}{" "}
              {["Profile", "Sertifikasi", "Galeri"].includes(name) && (
                <span style={{ fontSize: "10px" }}>▼</span>
              )}
            </button>
          )
        )}
      </div>
      <button
        onClick={onLoginClick}
        style={{
          padding: "6px 18px",
          backgroundColor: "white",
          color: "black",
          border: "none",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.25)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
        }}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
