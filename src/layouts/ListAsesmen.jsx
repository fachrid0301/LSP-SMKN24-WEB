import React from 'react';

function ListAsesmen() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '20px'
      }}>
        List Asesmen
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        maxWidth: '600px'
      }}>
        Daftar semua asesmen yang tersedia
      </p>
      {/* Tambahkan konten seperti list asesmen di sini */}
    </div>
  );
}

export default ListAsesmen;