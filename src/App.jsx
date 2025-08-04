import { useState } from 'react';
import Login from "./layouts/Login";
import Navbar from "./layouts/Navbar";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackToHome = () => {
    setShowLogin(false);
  };

  if (showLogin) {
    return <Login onBack={handleBackToHome} />;
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
      position: 'relative'
    }}>
      {/* Navigation Bar dari layouts */}
      <Navbar onLoginClick={handleLoginClick} />
      
      {/* Main Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 60px)',
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