import React, { useRef, useState } from "react";

import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Profil from "./layouts/Profil";
import MengapaKami from "./layouts/MengapaKami";
import Skema from "./layouts/Skema";
import CariSkema from "./layouts/CariSkema";
import FooterPage from "./layouts/FooterPage";
import Register from "./layouts/Register";
import Dashboard from "./layouts/Dashboard";
import Login from "./layouts/Login"; // 
import SertifikasiCTA from "./layouts/SertifikasiCTA"; 

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const sertifikasiRef = useRef(null);
  const galeriRef = useRef(null);
  const kontakRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      profile: profileRef,
      sertifikasi: sertifikasiRef,
      galeri: galeriRef,
      kontak: kontakRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoginClick = () => {
    setCurrentPage("login"); // 
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {currentPage === "home" && (
        <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
      )}

     {currentPage === "home" && (
  <>
    <div ref={homeRef}>
      <Home
        goToRegister={() => setCurrentPage("register")}
        goToDashboard={() => setCurrentPage("dashboard")}
      />
    </div>
    <div ref={profileRef}>
      <Profil />
    </div>
    <div ref={sertifikasiRef}>
      <MengapaKami />
    </div>
    <div>
      <Skema />
    </div>

   {/*  baru nambah */}
    <SertifikasiCTA
      goToRegister={() => setCurrentPage("register")}
      goToDashboard={() => setCurrentPage("dashboard")}
    />

    <div ref={galeriRef}>
      <CariSkema />
    </div>
    <div ref={kontakRef}>
      <FooterPage />
    </div>
  </>
)}



      {currentPage === "register" && <Register onBack={handleBackToHome} />}
      {currentPage === "dashboard" && <Dashboard onBack={handleBackToHome} />}
      {currentPage === "login" && <Login onBack={handleBackToHome} />}
    </>
  );
}

export default App;
