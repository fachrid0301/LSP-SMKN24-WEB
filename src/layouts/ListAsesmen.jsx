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

  // Simple icon components
  const EditIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );

  const DeleteIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  );

  const AddIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  // New icons for stats cards
  const AssessmentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const AsesorIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f42c1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

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
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0'
        }}>
          Assessment
        </h1>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        maxWidth: '50%', // Adjusted to half screen
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Total Assessment</span>
              <span style={{ 
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AssessmentIcon />
              </span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a',
            }}>50</div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Jumlah Asesor</span>
              <span style={{ 
                backgroundColor: 'rgba(111, 66, 193, 0.1)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AsesorIcon />
              </span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a',
            }}>10</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '30px', maxWidth: '300px' }}>
        <div style={{ 
          position: 'relative', 
          width: '100%',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '6px',
        }}>
          <input
            type="text"
            placeholder="Cari"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 35px 10px 12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '13px',
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
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#999',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <SearchIcon />
          </span>
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
            transition: 'background-color 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
        >
          <AddIcon /> Tambah Data Baru
        </button>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                        padding: '6px 12px',
                        backgroundColor: '#ffff00',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'background-color 0.2s ease',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e0d800'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#ffff00'}
                      onClick={() => handleOpenModal('edit', item)}
                      >
                        <EditIcon /> Edit
                      </button>
                      <button style={{
                        padding: '6px 12px',
                        backgroundColor: '#ff0000',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'background-color 0.2s ease',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#ff0000'}
                      onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon /> Hapus
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
            width: '600px',
            maxWidth: '90%',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '20px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              {modalMode === 'add' ? 'Tambahkan Data Baru' : 'Edit Data'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Nama Jadwal</label>
                  <input
                    type="text"
                    value={currentItem.namaJadwal}
                    onChange={(e) => handleChange(e, 'namaJadwal')}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>TUK</label>
                  <input
                    type="text"
                    value={currentItem.tuk}
                    onChange={(e) => handleChange(e, 'tuk')}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Tanggal Ujian</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      value={currentItem.tanggalUjian}
                      onChange={(e) => handleChange(e, 'tanggalUjian')}
                      style={{
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '100%'
                      }}
                    />
                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                      <CalendarIcon />
                    </span>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Lokasi Ujian</label>
                  <textarea
                    value={currentItem.lokasiUjian}
                    onChange={(e) => handleChange(e, 'lokasiUjian')}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '100%',
                      minHeight: '80px'
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Pembiayaan</label>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input
                        type="radio"
                        id="dibayarPenuh"
                        name="pembiayaan"
                        value="Dibayar Penuh"
                        checked={currentItem.pembiayaan === 'Dibayar Penuh'}
                        onChange={(e) => handleChange(e, 'pembiayaan')}
                      />
                      <label htmlFor="dibayarPenuh" style={{ fontSize: '14px', color: '#333' }}>Dibayar Penuh</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input
                        type="radio"
                        id="belumDibayar"
                        name="pembiayaan"
                        value="Belum Dibayar"
                        checked={currentItem.pembiayaan === 'Belum Dibayar'}
                        onChange={(e) => handleChange(e, 'pembiayaan')}
                      />
                      <label htmlFor="belumDibayar" style={{ fontSize: '14px', color: '#333' }}>Belum Dibayar</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Asesor</label>
                  <input
                    type="text"
                    value={currentItem.asesor}
                    onChange={(e) => handleChange(e, 'asesor')}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Jumlah Peserta</label>
                  <input
                    type="number"
                    value={currentItem.jumlahPeserta}
                    onChange={(e) => handleChange(e, 'jumlahPeserta')}
                    style={{
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '100%'
                    }}
                  />
                </div>
              </div>
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
                  transition: 'background-color 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
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
                  backgroundColor: '#fd7e14',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
              >
                Simpan Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAsesmen;