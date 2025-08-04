import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [showLogin, setShowLogin] = useState(false); // Tambah state login

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
      {/* Navbar */}
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
                onClick={() => {
                  setActiveNav(item.toLowerCase());
                  setShowLogin(false);
                }}
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
          <button onClick={() => setShowLogin(true)} style={{
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
        {showLogin ? (
          // TAMPILAN FORM LOGIN
          <form style={{
            background: '#fdf0d3',
            padding: '40px',
            borderRadius: '25px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '350px'
          }}>
            <h1 style={{ fontSize: '36px', marginBottom: '30px', fontWeight: 'bold' }}>Login</h1>

            {['Username', 'Password', 'NIK', 'Email'].map((label, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>{label}</label>
                <input
                  type={label.toLowerCase() === 'password' ? 'password' : 'text'}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    border: '2px solid orange',
                    borderRadius: '30px',
                    outline: 'none'
                  }}
                />
              </div>
            ))}

            <button type="submit" style={{
              background: 'orange',
              color: 'white',
              border: 'none',
              padding: '10px 30px',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              SignIn
            </button>
          </form>
        ) : (
          // TAMPILAN AWAL (HOME)
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
              lineHeight: '1.1'
            }}>
              Di Website Resmi
            </h2>
            <div style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#f97316',
              margin: '20px 0',
              lineHeight: '1'
            }}>
              "LSPD" GUDANG GARAM JAYA
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
