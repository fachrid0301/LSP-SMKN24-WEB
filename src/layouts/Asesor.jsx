import React from 'react';

function Asesor({ onBack, onNavigate, asesorData, setAsesorData }) {
  const handleAddClick = () => {
    onNavigate('addasesor');
  };

  const handleEdit = (asesor) => {
    onNavigate('editasesor', asesor);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f5f5f5',
        padding: '16px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#007bff',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#333',
            margin: 0,
          }}
        >
          ASESOR
        </h1>
      </div>

      {/* Add Button */}
      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button
          onClick={handleAddClick}
          style={{
            backgroundColor: '#ff9500',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          + Tambah Data Baru
        </button>
      </div>

      {/* Data Table */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  width: '80px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                No
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                Nama Lengkap
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  width: '120px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                Pekerjaan
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  width: '160px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                Sertifikat
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  width: '140px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                Tanggal Daftar
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#495057',
                  fontSize: '14px',
                  width: '120px',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {asesorData.map((asesor) => (
              <tr
                key={asesor.id}
                style={{
                  backgroundColor: 'white',
                  borderBottom: '1px solid #e9ecef',
                }}
              >
                <td
                  style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    color: '#495057',
                    fontSize: '14px',
                  }}
                >
                  {asesor.no}
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    color: '#495057',
                    fontSize: '14px',
                  }}
                >
                  {asesor.nama}
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    color: '#495057',
                    fontSize: '14px',
                  }}
                >
                  {asesor.pekerjaan}
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'center', fontSize: '14px' }}>
                  <span
                    style={{
                      color:
                        asesor.sertifikat === 'Tersertifikasi'
                          ? '#28a745'
                          : asesor.sertifikat === 'Tidak Tersertifikasi'
                          ? '#dc3545'
                          : '#6c757d',
                      fontWeight: '500',
                    }}
                  >
                    {asesor.sertifikat}
                  </span>
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    textAlign: 'center',
                    color: '#495057',
                    fontSize: '14px',
                  }}
                >
                  {asesor.tanggal}
                </td>
                <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                  <button
                    onClick={() => handleEdit(asesor)}
                    style={{
                      backgroundColor: '#ffc107',
                      color: '#212529',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
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

export default Asesor;