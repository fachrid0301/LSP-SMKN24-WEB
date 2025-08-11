import React from 'react';

function Kompetensi({ onBack }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Kompetensi</h1>
      <p>Ini adalah halaman untuk mengelola data kompetensi. Tambahkan form, tabel, atau fitur lain di sini.</p>
      <button onClick={onBack}>Kembali ke Home</button>
    </div>
  );
}

export default Kompetensi;