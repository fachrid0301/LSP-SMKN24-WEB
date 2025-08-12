import React from 'react';

function Asesor({ onBack }) {
  const asesorData = [
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: '-', tanggal: '22/8/2024' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '16px'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        {/* Back arrow icon - clickable */}
        <button 
          onClick={onBack}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#4a9eff',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '8px',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={{ 
          fontSize: '18px', 
          fontWeight: '700', 
          color: '#333',
          margin: 0
        }}>
          ASESOR
        </h1>
      </div>

      {/* Add button */}
      <div style={{ marginBottom: '16px', textAlign: 'right' }}>
        <button style={{
          backgroundColor: '#ff9500',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          + Tambah Data Baru
        </button>
      </div>

      {/* Data Table */}
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '4px', 
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          fontSize: '12px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#e8e8e8' }}>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                width: '50px',
                border: '1px solid #ccc'
              }}>
                No
              </th>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'left',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                border: '1px solid #ccc'
              }}>
                Nama Lengkap
              </th>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                width: '100px',
                border: '1px solid #ccc'
              }}>
                Pekerjaan
              </th>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                width: '140px',
                border: '1px solid #ccc'
              }}>
                Sertifikat
              </th>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                width: '110px',
                border: '1px solid #ccc'
              }}>
                Tanggal Daftar
              </th>
              <th style={{ 
                padding: '8px 12px', 
                textAlign: 'center',
                fontWeight: '600',
                color: '#333',
                fontSize: '12px',
                width: '80px',
                border: '1px solid #ccc'
              }}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {asesorData.map((asesor, index) => (
              <tr key={index} style={{ 
                backgroundColor: 'white'
              }}>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #ccc'
                }}>
                  {asesor.no}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #ccc'
                }}>
                  {asesor.nama}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #ccc'
                }}>
                  {asesor.pekerjaan}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  fontSize: '12px',
                  border: '1px solid #ccc'
                }}>
                  <span style={{
                    color: asesor.sertifikat === 'Tersertifikasi' ? '#0066cc' : 
                           asesor.sertifikat === 'Tidak Tersertifikasi' ? '#cc0000' : '#333'
                  }}>
                    {asesor.sertifikat}
                  </span>
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #ccc'
                }}>
                  {asesor.tanggal}
                </td>
                <td style={{ 
                  padding: '8px 12px',
                  textAlign: 'center',
                  border: '1px solid #ccc'
                }}>
                  <button style={{
                    backgroundColor: '#ffc107',
                    color: '#333',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '4px 8px',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer'
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