import React from "react";

function Jurusan({ onBack }) {
  return (
    <div>
      <h1>Halaman Jurusan</h1>
      <button onClick={onBack}>Kembali ke Manajemen Data</button>
    </div>
  );
}

export default Jurusan;
