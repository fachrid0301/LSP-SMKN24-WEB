import { useState, useEffect, useRef } from 'react';
import Login from "./layouts/Login";
import Navbar from "./layouts/Navbar";
import Register from "./layouts/Register";
import Dashboard from "./layouts/Dashboard";
import Profil from "./layouts/Profil";
import MengapaKami from "./layouts/MengapaKami";
import Skema from "./layouts/Skema";
import CariSkema from "./layouts/CariSkema";
import Footer from "./layouts/FooterPage";

// Image Slider Component
function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'src/img/navbar_lsp.jpg',
      title: 'LAUNCHING DAN PENYERAHAN',
      subtitle: 'SERTIFIKAT KOMPETENSI',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Agama Islam Negeri Madura',
      date: 'Pamekasan, 24 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop',
      title: 'SERTIFIKASI KOMPETENSI',
      subtitle: 'PROFESIONAL',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Teknologi Indonesia',
      date: 'Jakarta, 25 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=600&fit=crop',
      title: 'WORKSHOP PELATIHAN',
      subtitle: 'DIGITAL MARKETING',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Universitas Indonesia',
      date: 'Depok, 26 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop',
      title: 'SEMINAR NASIONAL',
      subtitle: 'TEKNOLOGI INFORMASI',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Teknologi Bandung',
      date: 'Bandung, 27 Januari 2025'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        width: `${slides.length * 100}%`,
        height: '100%',
        transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        transition: 'transform 0.5s ease-in-out'
      }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              textAlign: 'center',
              color: 'white',
              zIndex: 2
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0 0 10px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.title}
              </h1>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '600',
                margin: '0 0 10px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.subtitle}
              </h2>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '20px 0',
                color: '#00bcd4',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.organization}
              </div>
              <p style={{
                fontSize: '24px',
                margin: '10px 0',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}>
                {slide.institute}
              </p>
              <p style={{
                fontSize: '18px',
                margin: '10px 0',
                backgroundColor: '#00bcd4',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block'
              }}>
                {slide.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const profileRef = useRef(null);
  const mengapaKamiRef = useRef(null);
  const skemaRef = useRef(null);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowDashboard(false);
    console.log("Navigating to Login");
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowDashboard(false);
    console.log("Navigating to Register");
  };

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowLogin(false);
    setShowRegister(false);
    console.log("Navigating to Dashboard");
  };

  const handleProfileClick = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("Navigating to Profile");
  };

  const handleMengapaKamiClick = () => {
    if (mengapaKamiRef.current) {
      mengapaKamiRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("Navigating to Mengapa Kami");
  };

  const handleSkemaClick = () => {
    if (skemaRef.current) {
      skemaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("Navigating to Skema");
  };

  const handleBackToHome = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowDashboard(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Back to Home");
  };

  if (showLogin) {
    return <Login onBack={handleBackToHome} />;
  }

  if (showRegister) {
    return <Register onBack={handleBackToHome} />;
  }

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
      margin: 0,
      padding: 0,
      width: '100vw',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onProfileClick={handleProfileClick}
        onMengapaKamiClick={handleMengapaKamiClick}
        onSkemaClick={handleSkemaClick}
      />
      <ImageSlider />

      <div style={{
        height: '40px',
        backgroundColor: '#f97316',
        width: '100%',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }} />

      <div ref={profileRef} style={{ padding: '20px 40px 60px 40px' }}>
        <Profil />
      </div>

      <div ref={mengapaKamiRef} style={{ padding: '60px 40px' }}>
        <MengapaKami />
      </div>

      <div ref={skemaRef}>
        <Skema />
      </div>

      <div style={{ padding: '60px 40px' }}>
        <CariSkema />
      </div>

      {/* Section Sertifikasi */}
      <div style={{
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '36px',
          color: '#333',
          marginBottom: '20px'
        }}>
          Lembaga Sertifikasi Profesi
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto 30px auto',
          lineHeight: '1.6'
        }}>
          Kami berkomitmen untuk memberikan sertifikasi kompetensi profesional yang berkualitas tinggi
          untuk meningkatkan daya saing sumber daya manusia Indonesia.
        </p>
        <button
          onClick={handleDashboardClick}
          style={{
            padding: '15px 30px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          Mulai Sertifikasi
        </button>
        <button
          onClick={handleRegisterClick}
          style={{
            padding: '15px 30px',
            backgroundColor: '#2C94FF',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
            transition: 'all 0.3s ease',
            marginLeft: '20px'
          }}
        >
          Register
        </button>
      </div>

      {/* Footer Component */}
      <Footer />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;