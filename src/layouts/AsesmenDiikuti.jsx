import React from 'react';

function AsesmenDiikuti() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '20px'
      }}>
        Asesmen Diikuti
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        maxWidth: '600px'
      }}>
        Riwayat asesmen yang telah Anda ikuti
      </p>
      {/* Tambahkan konten seperti history asesmen di sini */}
    </div>
  );
}

export default AsesmenDiikuti;