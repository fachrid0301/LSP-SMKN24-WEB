import React, { useState } from 'react';

function ListAsesmen({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data untuk tabel
  const assessmentData = [
    {
      id: 1,
      namaJadwal: "Sertifikasi Web Developer - Batch 1",
      tuk: "TUK LSP Digital",
      pembayaran: "Lunas",
      tanggalUjian: "15 Sept 2025",
      lokasiUjian: "Jakarta Pusat",
    },
    {
      id: 2,
      namaJadwal: "Sertifikasi Mobile App Developer",
      tuk: "TUK LSP Mobile",
      pembayaran: "Pending",
      tanggalUjian: "22 Sept 2025",
      lokasiUjian: "Bandung",
    },
    {
      id: 3,
      namaJadwal: "Sertifikasi Data Analyst",
      tuk: "TUK LSP Data",
      pembayaran: "Lunas",
      tanggalUjian: "30 Sept 2025",
      lokasiUjian: "Surabaya",
    }
  ];

  // Filter data berdasarkan search term
  const filteredData = assessmentData.filter(item =>
    item.namaJadwal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lokasiUjian.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '30px 40px',
      boxSizing: 'border-box'
    }}>
        {/* Back Arrow */}
        <div style={{ marginBottom: '30px' }}>
          <span 
            onClick={onBack}
            style={{
              fontSize: '20px',
              cursor: 'pointer',
              color: '#666',
              padding: '5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#333'}
            onMouseLeave={(e) => e.target.style.color = '#666'}
          >
            ← Kembali
          </span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0'
          }}>
            List Asesmen
          </h1>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: '200px',
            flex: '1'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '20px',
                marginRight: '10px'
              }}>📊</span>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Total Assessment</span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>50</div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: '200px',
            flex: '1'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '20px',
                marginRight: '10px'
              }}>👥</span>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Jumlah Asesor</span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>10</div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ position: 'relative', maxWidth: '400px' }}>
            <input
              type="text"
              placeholder="Cari asesmen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 40px 12px 16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: '#ffffff',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: '16px'
            }}>🔍</span>
          </div>
        </div>

        {/* Assessment List Header */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1a1a1a',
            margin: 0
          }}>
            Daftar Asesmen
          </h2>
        </div>

        {/* Table */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '800px'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#f8f9fa'
                }}>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0',
                    width: '60px'
                  }}>No</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0'
                  }}>Nama Jadwal</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0'
                  }}>TUK</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0'
                  }}>Pembayaran</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0'
                  }}>Tanggal Ujian</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0'
                  }}>Lokasi Ujian</th>
                  <th style={{
                    padding: '16px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderBottom: '1px solid #e0e0e0',
                    width: '100px'
                  }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={item.id} style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9'
                    }}>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px',
                        color: '#666'
                      }}>{index + 1}</td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px',
                        color: '#333',
                        fontWeight: '500'
                      }}>{item.namaJadwal}</td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px',
                        color: '#666'
                      }}>{item.tuk}</td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px'
                      }}>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: item.pembayaran === 'Lunas' ? '#d4edda' : '#fff3cd',
                          color: item.pembayaran === 'Lunas' ? '#155724' : '#856404'
                        }}>
                          {item.pembayaran}
                        </span>
                      </td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px',
                        color: '#666'
                      }}>{item.tanggalUjian}</td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '14px',
                        color: '#666'
                      }}>{item.lokasiUjian}</td>
                      <td style={{
                        padding: '16px',
                        borderBottom: '1px solid #f0f0f0',
                        textAlign: 'center'
                      }}>
                        <button style={{
                          padding: '6px 16px',
                          backgroundColor: '#007bff',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '12px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{
                      padding: '40px',
                      textAlign: 'center',
                      color: '#999',
                      fontSize: '14px'
                    }}>
                      {searchTerm ? 'Tidak ada data yang sesuai dengan pencarian' : 'Belum ada data asesmen'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      {/* Add Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: '1000'
      }}>
        <button style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: '#ffffff',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0056b3';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#007bff';
          e.target.style.transform = 'scale(1)';
        }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ListAsesmen;