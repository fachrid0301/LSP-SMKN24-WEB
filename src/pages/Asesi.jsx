import React from "react";

function Asesi({ onBack }) {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1>Halaman Asesi</h1>
        <p>Kelola data asesi di sini</p>
        <button onClick={onBack}>Kembali ke Manajemen Data</button>
      </div>
    </div>
  );
}

export default Asesi;