import React from 'react';

function Asesi({ onBack }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Asesi</h1>
      <p>Ini adalah halaman untuk mengelola data asesi. Tambahkan form, tabel, atau fitur lain di sini.</p>
      <button onClick={onBack}>Kembali ke Home</button>
    </div>
  );
}

export default Asesi;