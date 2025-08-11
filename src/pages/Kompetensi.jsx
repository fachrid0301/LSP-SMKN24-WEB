import React from "react";

function Kompetensi({ onBack }) {
  return (
    <div>
      <h1>Halaman Kompetensi</h1>
      <button onClick={onBack}>Kembali ke Manajemen Data</button>
    </div>
  );
}

export default Kompetensi;
