import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFCB53',
      backgroundImage: `url('./src/img/company.jpeg')`,
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
      {/* Navigation Bar */}
      <nav style={{
        background: '#FFCB53',
        height: '60px',
        width: '100%',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px'
          }}>
            {['Home', 'Profile', 'Certifications', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FF7A30',
                  fontSize: '16px',
                  fontWeight: '400',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  padding: '0'
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <button style={{
            backgroundColor: 'white',
            color: '#f97316',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '20px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            position: 'absolute',
            right: '40px'
          }}>
            Login
          </button>
        </div>
      </nav>

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