import React from 'react';

function Jurusan({ onBack }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Jurusan</h1>
      <p>Ini adalah halaman untuk mengelola data jurusan. Tambahkan form, tabel, atau fitur lain di sini.</p>
      <button onClick={onBack}>Kembali ke Home</button>
    </div>
  );
}

export default Jurusan;