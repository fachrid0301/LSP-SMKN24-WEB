import { useState } from 'react';
import Login from "./layouts/Login";
import Navbar from "./layouts/Navbar";
import Register from "./layouts/Register";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    console.log("Navigating to Login");
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
    console.log("Navigating to Register");
  };

  const handleBackToHome = () => {
    setShowLogin(false);
    setShowRegister(false);
    console.log("Back to Home");
  };

  if (showLogin) {
    return <Login onBack={handleBackToHome} />;
  }

  if (showRegister) {
    return <Register onBack={handleBackToHome} />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFCB53',
      backgroundImage: 'url("./src/img/company.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Poppins, sans-serif',
      margin: 0,
      padding: 0,
      width: '100vw',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation Bar dari layouts */}
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      
      {/* Main Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 0 auto',
        width: '100%',
        textAlign: 'center'
      }}>
        {/* Text Content */}
        <div>
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#f97316',
            margin: '0',
            lineHeight: '1.1',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Selamat Datang
          </h1>
          <h2 style={{
            fontSize: '64px',
            fontWeight: '600',
            color: '#f97316',
            margin: '0',
            lineHeight: '1.1',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Di Website Resmi
          </h2>
          <div style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#f97316',
            margin: '20px 0',
            lineHeight: '1',
            fontFamily: 'Poppins, sans-serif'
          }}>
            "LSPD"
          </div>
        </div>
      </div>
      
      {/* Footer dengan teks */}
      <footer style={{
        background: '#FFCB53',
        height: '60px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        flexShrink: 0
      }}>
        LEMBAGA SERTIFIKASI KOMPETENSI SMKN 24 JAKARTA LEMBAGA SERTIFIKASI KOMPETENSI SMKN 24 JAKARTA LEMBAGA SERTIFIKASI KOMPETENSI
      </footer>

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