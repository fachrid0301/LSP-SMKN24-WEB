import { useState } from 'react';

function Navbar({ onLoginClick, onRegisterClick }) {
  const [activeNav, setActiveNav] = useState('home');

  return (
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
        <div style={{
          position: 'absolute',
          right: '40px',
          display: 'flex',
          gap: '10px'
        }}>
          <button 
            onClick={onLoginClick}
            style={{
              backgroundColor: 'white',
              color: '#f97316',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
          <button 
            onClick={onRegisterClick}
            style={{
              padding: '8px 20px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;