import React, { useState } from 'react';

function Asesi({ onBack }) {
  // Sample data sesuai dengan gambar
  const [asesiData, setAsesiData] = useState([
    { id: 1, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '12' },
    { id: 2, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '11' },
    { id: 3, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '10' },
    { id: 4, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Perhotelan', kelas: '11' },
    { id: 5, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Busana', kelas: '11' },
    { id: 6, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Usaha Layanan Pariwisata', kelas: '11' },
    { id: 7, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Kuliner', kelas: '11' }
  ]);

  const handleEdit = (id) => {
    console.log('Edit data dengan ID:', id);
    // Implementasi edit logic
  };

  const handleAddData = () => {
    console.log('Tambah data baru');
    // Implementasi add data logic
  };

  const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    backButton: {
      padding: '8px',
      border: 'none',
      backgroundColor: 'transparent',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '18px',
      color: '#666'
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: 0,
      color: '#333'
    },
    addButton: {
      backgroundColor: '#ff6b35',
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '14px'
    },
    tableContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHead: {
      backgroundColor: '#f8f9fa'
    },
    th: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: '600',
      color: '#495057',
      borderBottom: '1px solid #dee2e6'
    },
    tbody: {
      backgroundColor: '#ffffff'
    },
    tr: {
      borderBottom: '1px solid #f1f3f4'
    },
    td: {
      padding: '12px 16px',
      fontSize: '14px',
      color: '#333',
      verticalAlign: 'middle'
    },
    editButton: {
      backgroundColor: '#ffc107',
      color: '#000',
      border: 'none',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <button 
            onClick={onBack}
            style={styles.backButton}
          >
            ←
          </button>
          <h1 style={styles.headerTitle}>ASESI</h1>
        </div>
        <button 
          onClick={handleAddData}
          style={styles.addButton}
        >
          + Tambah Data Baru
        </button>
      </div>

      {/* Table Content */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Lengkap</th>
              <th style={styles.th}>Pekerjaan</th>
              <th style={styles.th}>Jurusan</th>
              <th style={styles.th}>Kelas</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody style={styles.tbody}>
            {asesiData.map((item) => (
              <tr key={item.id} style={styles.tr}>
                <td style={styles.td}>{item.no}</td>
                <td style={styles.td}>{item.nama}</td>
                <td style={styles.td}>{item.pekerjaan}</td>
                <td style={styles.td}>{item.jurusan}</td>
                <td style={styles.td}>{item.kelas}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => handleEdit(item.id)}
                    style={styles.editButton}
                  >
                    Edit Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Asesi;