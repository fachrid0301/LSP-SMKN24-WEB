import React, { useRef, useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Profil from "./layouts/Profil";
import MengapaKami from "./layouts/MengapaKami";
import Skema from "./layouts/Skema";
import CariSkema from "./layouts/CariSkema";
import FooterPage from "./layouts/FooterPage";
import Register from "./layouts/Register";
import Dashboard from "./layouts/Dashboard";
import Login from "./layouts/Login";
import SertifikasiCTA from "./layouts/SertifikasiCTA";
import LandingPage from "./layouts/LandingPage"; // Import LandingPage
import Kontak from "./layouts/kontak";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const sertifikasiRef = useRef(null);
  const galeriRef = useRef(null);
  const kontakRef = useRef(null);

  const scrollToSection = (section) => {
    // Handle navigation for all menu items
    if (["register", "dashboard", "login"].includes(section)) {
      setCurrentPage(section);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (section === "kontak") {
      setCurrentPage("kontak");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // For Berita, assume it navigates to home for now (no dedicated section)
    if (section === "berita") {
      section = "home";
    }

    if (currentPage !== "home") {
      setCurrentPage("home");
      setPendingScroll(section);
    } else {
      const refs = {
        home: homeRef,
        profile: profileRef,
        sertifikasi: sertifikasiRef,
        galeri: galeriRef,
        kontak: kontakRef,
      };
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentPage === "home" && pendingScroll) {
      const refs = {
        home: homeRef,
        profile: profileRef,
        sertifikasi: sertifikasiRef,
        galeri: galeriRef,
        kontak: kontakRef,
      };
      refs[pendingScroll]?.current?.scrollIntoView({ behavior: "smooth" });
      setPendingScroll(null);
    }
  }, [currentPage, pendingScroll]);

  const handleLoginClick = () => {
    setCurrentPage("login");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fungsi untuk navigasi ke LandingPage
  const goToLandingPage = () => {
    setCurrentPage("landingPage");
  };

  return (
    <>
      {/* Tampilkan Navbar untuk halaman home dan kontak */}
      {(currentPage === "home" || currentPage === "kontak") && (
        <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
      )}

      {/* Halaman Home dengan semua section */}

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
<>

          <SertifikasiCTA
            goToRegister={() => setCurrentPage("register")}
            goToDashboard={() => setCurrentPage("dashboard")}
          />

          <div ref={galeriRef}>
            <CariSkema goToLandingPage={goToLandingPage} />
          </div>
          <div ref={kontakRef}>
            <FooterPage />
          </div>
        </>
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

      {/* Halaman Kontak */}
      {currentPage === "kontak" && (
        <Kontak onBack={handleBackToHome} />

      )}

      {/* Halaman-halaman lainnya */}
      {currentPage === "register" && <Register onBack={handleBackToHome} />}
      {currentPage === "dashboard" && <Dashboard onBack={handleBackToHome} />}
      {currentPage === "login" && <Login onBack={handleBackToHome} />}
      {currentPage === "landingPage" && <LandingPage onBack={handleBackToHome} />}
    </>
  );
}

export default App;