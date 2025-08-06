import React from 'react';

function Skema() {
  return (
    <div style={{ 
      padding: '80px 0',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '40px' }}>
  {/* Progress Line */}
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '4px',
      backgroundColor: '#e9ecef',
      borderRadius: '2px',
      transform: 'translateY(-50%)',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#7EB3E9',
        borderRadius: '2px',
      }}
    />
  </div>

  {/* Progress Dots */}
  <div
    style={{
      position: 'absolute',
      top: 'calc(50% + 2px)', // 🎯 Geser dikit ke bawah biar pas tengah garis
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16.66%',
      transform: 'translateY(-50%)',
      boxSizing: 'border-box',
    }}
  >
    {[1, 2, 3].map((dot) => (
      <div
        key={dot}
        style={{
          width: '24px',
          height: '24px',
          backgroundColor: 'rgba(255, 131, 3, 0.4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#FF8303',
            borderRadius: '50%',
          }}
        />
      </div>
    ))}
  </div>
</div>


        {/* Cards Container */}
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {/* Card 1 - 36 SKEMA SERTIFIKASI */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            flex: '1',
            maxWidth: '320px',
            color: '#333',
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            border: '1px solid #838280',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Icon Circle */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '15px',
              lineHeight: '1.3',
              letterSpacing: '0.5px',
              color: '#2c3e50'
            }}>
              36 SKEMA SERTIFIKASI
            </h3>
            
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.5',
              color: '#6c757d',
              margin: '0'
            }}>
              Skema / Profesi / Jabatan / Pekerjaan di bidang bidang Jaminan Sekuriti, Teknologi Informasi dan Konstruksi.
            </p>
          </div>

          {/* Card 2 - 300++ LINK DUDI */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            flex: '1',
            maxWidth: '320px',
            color: '#333',
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            border: '1px solid #838280',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Icon Circle */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '15px',
              lineHeight: '1.3',
              letterSpacing: '0.5px',
              color: '#2c3e50'
            }}>
              300++ LINK DUDI
            </h3>
            
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.5',
              color: '#6c757d',
              margin: '0'
            }}>
              Perusahaan mitra LSP yang siap untuk menerima profesi anda, sehingga ada lebih banyak peluang dari semua bidang pekerjaan.
            </p>
          </div>

          {/* Card 3 - 1000+ SDM TERVERIFIKASI */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            flex: '1',
            maxWidth: '320px',
            color: '#333',
            position: 'relative',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            border: '1px solid #838280',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Icon Circle */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '25px',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/>
                <path d="M8 21V7a2 2 0 012-2h4a2 2 0 012 2v14"/>
                <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/>
                <path d="M8 11h8"/>
                <path d="M8 15h8"/>
              </svg>
            </div>
            
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '15px',
              lineHeight: '1.3',
              letterSpacing: '0.5px',
              color: '#2c3e50'
            }}>
              1000+ SDM TERVERIFIKASI
            </h3>
            
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.5',
              color: '#6c757d',
              margin: '0'
            }}>
              Daftar tenaga kerja profesional yang telah kami sertifikasi, dan siap untuk mendukung kebutuhan SDM tersertifikasi perusahaan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skema;