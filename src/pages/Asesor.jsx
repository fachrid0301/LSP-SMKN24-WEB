import React from "react";

function Asesor({ onBack }) {
  return (
    <div>
      <h1>Halaman Asesor</h1>
      <button onClick={onBack}>Kembali ke Manajemen Data</button>
    </div>
  );
}

export default Asesor;
