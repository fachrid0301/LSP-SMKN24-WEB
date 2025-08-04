// File: ./layouts/Navbar.jsx
import { useState } from 'react';

function Navbar({ onLoginClick }) {
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
            cursor: 'pointer',
            position: 'absolute',
            right: '40px'
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;