import React, { useState } from 'react';

function ListAsesmen({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [assessmentData, setAssessmentData] = useState([
    {
      id: 1,
      namaJadwal: "Sertifikasi Web Developer - Batch 1",
      tuk: "TUK LSP Digital",
      pembiayaan: "Dibayar Penuh",
      tanggalUjian: "15 Sept 2025",
      lokasiUjian: "Jakarta Pusat",
      asesor: "Asesor A",
      jumlahPeserta: 20,
    },
    {
      id: 2,
      namaJadwal: "Sertifikasi Mobile App Developer",
      tuk: "TUK LSP Mobile",
      pembiayaan: "Belum Dibayar",
      tanggalUjian: "22 Sept 2025",
      lokasiUjian: "Bandung",
      asesor: "Asesor B",
      jumlahPeserta: 15,
    },
    {
      id: 3,
      namaJadwal: "Sertifikasi Data Analyst",
      tuk: "TUK LSP Data",
      pembiayaan: "Dibayar Penuh",
      tanggalUjian: "30 Sept 2025",
      lokasiUjian: "Surabaya",
      asesor: "Asesor C",
      jumlahPeserta: 25,
    }
  ]);
  const [modalMode, setModalMode] = useState(null); // 'add' or 'edit'
  const [currentItem, setCurrentItem] = useState(null);

  // Filter data berdasarkan search term
  const filteredData = assessmentData.filter(item =>
    item.namaJadwal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lokasiUjian.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.asesor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.jumlahPeserta.toString().includes(searchTerm.toLowerCase()) ||
    item.pembiayaan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin menghapus data ini?')) {
      setAssessmentData(assessmentData.filter(item => item.id !== id));
    }
  };

  const handleOpenModal = (mode, item = null) => {
    if (mode === 'add') {
      const newId = assessmentData.length > 0 ? Math.max(...assessmentData.map(i => i.id)) + 1 : 1;
      setCurrentItem({
        id: newId,
        namaJadwal: '',
        tuk: '',
        pembiayaan: 'Dibayar Penuh',
        tanggalUjian: '',
        lokasiUjian: '',
        asesor: '',
        jumlahPeserta: 0,
      });
    } else {
      setCurrentItem({ ...item });
    }
    setModalMode(mode);
  };

  const handleSave = () => {
    if (modalMode === 'add') {
      setAssessmentData([...assessmentData, currentItem]);
    } else {
      setAssessmentData(assessmentData.map(i => i.id === currentItem.id ? currentItem : i));
    }
    setModalMode(null);
  };

  const handleChange = (e, field) => {
    let value = e.target.value;
    if (field === 'jumlahPeserta') {
      value = parseInt(value) || 0;
    }
    setCurrentItem({ ...currentItem, [field]: value });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: 'calc(100vw - 250px)',
      margin: '0',
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
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          flex: '1',
          minWidth: '180px',
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
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          flex: '1',
          minWidth: '180px',
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
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
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

      {/* Assessment List Header with Add Button */}
      <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: 0
        }}>
          Daftar Asesmen
        </h2>
        <button
          onClick={() => handleOpenModal('add')}
          style={{
            backgroundColor: '#fd7e14',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
        >
          <span style={{ fontSize: '20px' }}>+</span> Tambah Data Baru
        </button>
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
            minWidth: '600px'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#f8f9fa'
              }}>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0',
                  width: '60px'
                }}>No</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Nama Jadwal</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>TUK</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Pembiayaan</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Tanggal Ujian</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Lokasi Ujian</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Asesor</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0'
                }}>Jumlah Peserta</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  borderBottom: '1px solid #e0e0e0',
                  width: '150px'
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
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{index + 1}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#333',
                      fontWeight: '500'
                    }}>{item.namaJadwal}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{item.tuk}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px'
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: item.pembiayaan === 'Dibayar Penuh' ? '#d4edda' : '#fff3cd',
                        color: item.pembiayaan === 'Dibayar Penuh' ? '#155724' : '#856404'
                      }}>
                        {item.pembiayaan}
                      </span>
                    </td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{item.tanggalUjian}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{item.lokasiUjian}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{item.asesor}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '14px',
                      color: '#666'
                    }}>{item.jumlahPeserta}</td>
                    <td style={{
                      padding: '12px',
                      borderBottom: '1px solid #f0f0f0',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <button style={{
                        padding: '6px 16px',
                        backgroundColor: '#ffc107',
                        color: '#333',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#ffc107'}
                      onClick={() => handleOpenModal('edit', item)}
                      >
                        Edit
                      </button>
                      <button style={{
                        padding: '6px 16px',
                        backgroundColor: '#dc3545',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
                      onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{
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

      {/* Modal for Add/Edit */}
      {modalMode && currentItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '30px',
            width: '500px',
            maxWidth: '90%',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              {modalMode === 'add' ? 'Tambah Data Baru' : 'Edit Data'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Nama Jadwal"
                value={currentItem.namaJadwal}
                onChange={(e) => handleChange(e, 'namaJadwal')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="text"
                placeholder="TUK"
                value={currentItem.tuk}
                onChange={(e) => handleChange(e, 'tuk')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <select
                value={currentItem.pembiayaan}
                onChange={(e) => handleChange(e, 'pembiayaan')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              >
                <option value="Dibayar Penuh">Dibayar Penuh</option>
                <option value="Belum Dibayar">Belum Dibayar</option>
              </select>
              <input
                type="text"
                placeholder="Tanggal Ujian"
                value={currentItem.tanggalUjian}
                onChange={(e) => handleChange(e, 'tanggalUjian')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="text"
                placeholder="Lokasi Ujian"
                value={currentItem.lokasiUjian}
                onChange={(e) => handleChange(e, 'lokasiUjian')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="text"
                placeholder="Asesor"
                value={currentItem.asesor}
                onChange={(e) => handleChange(e, 'asesor')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="number"
                placeholder="Jumlah Peserta"
                value={currentItem.jumlahPeserta}
                onChange={(e) => handleChange(e, 'jumlahPeserta')}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
              marginTop: '20px'
            }}>
              <button
                onClick={() => setModalMode(null)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAsesmen;