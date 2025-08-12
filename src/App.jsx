import React, { useRef, useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Dashboard, { DashboardSidebar } from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Profil from "./layouts/Profil";
import MengapaKami from "./layouts/MengapaKami";
import Skema from "./layouts/Skema";
import CariSkema from "./layouts/CariSkema";
import FooterPage from "./layouts/FooterPage";
import Register from "./layouts/Register";
import Login from "./layouts/Login";
import SertifikasiCTA from "./layouts/SertifikasiCTA";
import LandingPage from "./layouts/LandingPage";
import Kontak from "./layouts/kontak";
import ManajemenData from "./layouts/ManajemenData";
import Asesor from "./layouts/Asesor";
import Asesi from "./layouts/Asesi";
import Asesmen from "./layouts/Asesmen";
import Jurusan from "./layouts/Jurusan";
import Kompetensi from "./layouts/Kompetensi";
import ListAsesmen from "./layouts/ListAsesmen";
import AsesmenDiikuti from "./layouts/AsesmenDiikuti"; 
import Berita from "./layouts/Berita"; // ✅ Tambah import

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [pendingScroll, setPendingScroll] = useState(null);

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const sertifikasiRef = useRef(null);
  const galeriRef = useRef(null);
  const kontakRef = useRef(null);

  const pagesWithSidebar = [
    "manajemenData",
    "asesor",
    "asesi",
    "asesmen",
    "jurusan",
    "kompetensi",
    "listasesmen",
    "asesmenDiikuti",
  ];

  const scrollToSection = (section) => {
    if (["register", "dashboard", "login", "manajemenData"].includes(section)) {
      setCurrentPage(section);
      if (section === "dashboard") {
        setActiveMenu("Dashboard");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (section === "kontak") {
      setCurrentPage("kontak");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (section === "berita") { // ✅ Biar bisa klik Berita
      setCurrentPage("berita");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
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
    setActiveMenu("Dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToLandingPage = () => {
    setCurrentPage("landingPage");
  };

  const handleNavigate = (page) => {
    const pageLower = page.toLowerCase();
    setCurrentPage(pageLower);

    const menuMap = {
      dashboard: "Dashboard",
      manajemenData: "ManajemenData",
      listasesmen: "ListAsesmen",
      asesmenDiikuti: "AsesmenDiikuti",
      profile: "Profile",
    };

    if (["asesor", "asesi", "asesmen", "jurusan", "kompetensi"].includes(pageLower)) {
      setActiveMenu("ManajemenData");
    } else if (menuMap[pageLower]) {
      setActiveMenu(menuMap[pageLower]);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSidebarMenuClick = (menuName) => {
    if (menuName === "Logout") {
      if (confirm("Apakah Anda yakin ingin logout?")) {
        alert("Logout berhasil!");
        handleBackToHome();
      }
      return;
    }

    setActiveMenu(menuName);

    const pageMap = {
      Dashboard: "dashboard",
      ManajemenData: "manajemenData",
      ListAsesmen: "listasesmen",
      AsesmenDiikuti: "asesmenDiikuti",
      Profile: "dashboard",
    };

    if (pageMap[menuName]) {
      setCurrentPage(pageMap[menuName]);
    }
  };

  return (
    <>
      {(currentPage === "home" || currentPage === "kontak" || currentPage === "berita") && (
        <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
      )}

      {currentPage === "home" && (
        <>
          <div ref={homeRef}>
            <Home
              goToRegister={() => setCurrentPage("register")}
              goToDashboard={() => {
                setCurrentPage("dashboard");
                setActiveMenu("Dashboard");
              }}
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
          <SertifikasiCTA
            goToRegister={() => setCurrentPage("register")}
            goToDashboard={() => {
              setCurrentPage("dashboard");
              setActiveMenu("Dashboard");
            }}
          />
          <div ref={galeriRef}>
            <CariSkema goToLandingPage={goToLandingPage} />
          </div>
          <div ref={kontakRef}>
            <FooterPage />
          </div>
        </>
      )}

      {currentPage === "kontak" && <Kontak onBack={handleBackToHome} />}

      {currentPage === "berita" && <Berita onBack={handleBackToHome} />} {/* ✅ Halaman Berita */}

      {currentPage === "dashboard" && (
        <Dashboard onBack={handleBackToHome} onNavigate={handleNavigate} />
      )}

      {pagesWithSidebar.includes(currentPage) && (
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: "#f5f5f5",
          }}
        >
          <DashboardSidebar
            activeMenu={activeMenu}
            onMenuClick={handleSidebarMenuClick}
          />

          <div
            style={{
              flex: 1,
              backgroundColor: "#fafafa",
              padding: "20px",
            }}
          >
            {currentPage === "manajemenData" && (
              <ManajemenData onNavigate={handleNavigate} onBack={handleBackToHome} />
            )}
            {currentPage === "asesor" && <Asesor onBack={handleBackToHome} />}
            {currentPage === "asesi" && <Asesi onBack={handleBackToHome} />}
            {currentPage === "asesmen" && <Asesmen onBack={handleBackToHome} />}
            {currentPage === "listasesmen" && (
              <ListAsesmen onBack={handleBackToHome} />
            )}
            {currentPage === "jurusan" && <Jurusan onBack={handleBackToHome} />}
            {currentPage === "kompetensi" && (
              <Kompetensi onBack={handleBackToHome} />
            )}
            {currentPage === "asesmenDiikuti" && (
              <AsesmenDiikuti onBack={handleBackToHome} />
            )}
          </div>
        </div>
      )}

      {currentPage === "register" && <Register onBack={handleBackToHome} />}
      {currentPage === "login" && <Login onBack={handleBackToHome} />}
      {currentPage === "landingPage" && <LandingPage onBack={handleBackToHome} />}
    </>
  );
}

export default App;
