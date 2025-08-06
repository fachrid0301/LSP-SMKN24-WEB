import React, { useState } from 'react';

function CariSkema() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '80px 0',
      width: '100%',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 3
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#2c3e50',
            marginBottom: '30px',
            letterSpacing: '-1px'
          }}>
            SKEMA SERTIFIKASI
          </h1>
          
          {/* Search Bar */}
          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <input
              type="text"
              placeholder="Cari skema sertifikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 20px 15px 20px',
                fontSize: '1.1rem',
                border: '2px solid #e0e0e0',
                borderRadius: '50px',
                outline: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2196f3';
                e.target.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            />
            <button style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '10px 25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#1976d2';
              e.target.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#2196f3';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
            >
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CariSkema;