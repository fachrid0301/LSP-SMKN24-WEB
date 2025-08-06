import React from 'react';
import gambar from '/src/img/kenapakami.jpg';

function MengapaKami() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '350px',
        backgroundImage: `url(${gambar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      {/* Overlay orange semi-transparan di seluruh gambar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 131, 3, 0.7)',
        }}
      />

      {/* Overlay biru di pojok kiri */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '600px',
          height: '350px',
          background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
          clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '40px 50px',
          boxSizing: 'border-box',
          zIndex: 2,
        }}
      >
        <h2
          style={{
            color: 'white',
            fontSize: '2.4rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            lineHeight: '1.2',
          }}
        >
          Mengapa Kami?
        </h2>
        
        <p
          style={{
            color: 'white',
            fontSize: '1rem',
            lineHeight: '1.5',
            margin: 0,
            opacity: 0.95,
            maxWidth: '400px',
          }}
        >
          Karena komitmen kami untuk meningkatkan kebertrimaan Sertifikat Kompetensi oleh industri baik di tingkat nasional maupun internasional.
        </p>
      </div>

      {/* Statistik di tengah bagian kanan - GAP DIPERBESAR */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '50px',
          transform: 'translateY(-50%)',
          display: 'flex',
          gap: '60px', // Diperbesar dari 40px ke 60px
          zIndex: 3,
        }}
      >
        {[
          { number: '16,533', label: 'Asesi' },
          { number: '218', label: 'Asesor' },
          { number: '35', label: 'Skema' },
          { number: '103', label: 'TUK' }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                marginBottom: '5px',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              }}
            >
              {item.number}
            </div>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Teks "UJI SERTIFIKASI KOMPETENSI" di bagian paling bawah */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
     
      </div>
    </div>
  );
}

export default MengapaKami;