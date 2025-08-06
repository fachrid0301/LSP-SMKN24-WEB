import React from 'react';

function DataManagementStaff() {
  return (
    <div style={{ 
      // backgroundColor: '#f8f9fa', 
      padding: '80px 0',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '80px'
        }}>
          {/* Left Side - Content */}
          <div style={{
            flex: '1',
            maxWidth: '500px',
            paddingLeft: '80px'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#ff8503',
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}>
              DATA MANAGEMENT STAFF
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#555',
              marginBottom: '30px'
            }}>
              Skema sertifikasi Data Management Staff adalah skema sertifikasi yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja dari pelanggan LSP.
            </p>
          </div>

          {/* Right Side - Navigation Arrow */}
          <div style={{
            paddingRight: '80px'
          }}>
            <button style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#2196f3',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(33, 150, 243, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#1976d2';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#2196f3';
              e.target.style.transform = 'scale(1)';
            }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder Circles for Images */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '180px',
        height: '180px',
        backgroundColor: 'white',
        borderRadius: '50%',
        border: '8px solid #ff8503',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '35%',
        width: '220px',
        height: '220px',
        backgroundColor: 'white',
        borderRadius: '50%',
        border: '8px solid #ff8503',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-3%',
        width: '160px',
        height: '160px',
        backgroundColor: 'white',
        borderRadius: '50%',
        border: '8px solid #ff8503',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }} />
    </div>
  );
}

export default DataManagementStaff;