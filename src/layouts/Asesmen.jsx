import React from 'react';

function Asesmen ({ onBack }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Asesmen</h1>
      <p>Ini adalah halaman untuk mengelola data Asesmen. Tambahkan form, tabel, atau fitur lain di sini.</p>
      <button onClick={onBack}>Kembali ke Home</button>
    </div>
  );
}

export default Asesmen;