import React from 'react';

function Asesor({ onBack }) {
  const asesorData = [
    { no: 1, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2024' },
    { no: 2, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2024' },
    { no: 3, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 4, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 5, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 6, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 7, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 8, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 9, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 10, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 11, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 12, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 13, nama: 'Asul Maulita Singo, Masum', pekerjaan: 'Guru', sertifikat: '-', tanggal: '22/8/2024' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Header with Title and Add Button */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
            <path d="M15 18L9 12L15 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#333',
            margin: 0,
            textDecoration: 'underline'
          }}>
            ASESOR
          </h1>
        </div>
        <button style={{
          backgroundColor: '#ff9500',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Tambah Asesor Baru
        </button>
      </div>

      {/* Data Table */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #d1d5db'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#e5e7eb', borderBottom: '2px solid #d1d5db' }}>
              <th style={{ 
                padding: '10px 8px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                width: '40px',
                border: '1px solid #d1d5db'
              }}>
                No
              </th>
              <th style={{ 
                padding: '10px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                border: '1px solid #d1d5db'
              }}>
                Nama Lengkap
              </th>
              <th style={{ 
                padding: '10px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                width: '100px',
                border: '1px solid #d1d5db'
              }}>
                Pekerjaan
              </th>
              <th style={{ 
                padding: '10px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                width: '130px',
                border: '1px solid #d1d5db'
              }}>
                Sertifikat
              </th>
              <th style={{ 
                padding: '10px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                width: '110px',
                border: '1px solid #d1d5db'
              }}>
                Tanggal Daftar
              </th>
              <th style={{ 
                padding: '10px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '13px',
                width: '80px',
                border: '1px solid #d1d5db'
              }}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {asesorData.map((asesor, index) => (
              <tr key={index} style={{ 
                borderBottom: '1px solid #d1d5db'
              }}>
                <td style={{ 
                  padding: '8px',
                  textAlign: 'center',
                  color: '#374151',
                  fontSize: '13px',
                  border: '1px solid #d1d5db'
                }}>
                  {asesor.no}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  color: '#374151',
                  fontSize: '13px',
                  border: '1px solid #d1d5db'
                }}>
                  {asesor.nama}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#374151',
                  fontSize: '13px',
                  border: '1px solid #d1d5db'
                }}>
                  {asesor.pekerjaan}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#374151',
                  fontSize: '13px',
                  border: '1px solid #d1d5db'
                }}>
                  {asesor.sertifikat}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#374151',
                  fontSize: '13px',
                  border: '1px solid #d1d5db'
                }}>
                  {asesor.tanggal}
                </td>
                <td style={{ 
                  padding: '8px',
                  textAlign: 'center',
                  border: '1px solid #d1d5db'
                }}>
                  <button style={{
                    backgroundColor: '#fbbf24',
                    color: '#92400e',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    minWidth: '60px'
                  }}>
                    Edit Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack} 
        style={{ 
          marginTop: '20px',
          padding: '10px 20px', 
          backgroundColor: '#ff6b35', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontSize: '16px', 
          fontWeight: '600', 
          cursor: 'pointer' 
        }}
      >
        Kembali ke Home
      </button>
    </div>
  );
}

export default Asesor;