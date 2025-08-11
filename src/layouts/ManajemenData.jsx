import React, { useState } from 'react';

function ManajemenData() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const styles = {
    container: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: 'white',
      padding: '40px 0',
      textAlign: 'center',
      borderBottom: '1px solid #e0e0e0'
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#000',
      margin: 0,
      letterSpacing: '2px'
    },
    content: {
      height: 'calc(100vh - 140px)',
      overflowY: 'auto',
      padding: '0'
    },
    section: {
      backgroundColor: 'white',
      padding: '30px 40px',
      borderBottom: '1px solid #d0d0d0'
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#000',
      margin: '0 0 20px 0'
    },
    dataContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      maxWidth: '600px'
    },
    dataItem: {
      color: '#333',
      fontSize: '1rem'
    },
    dataLabel: {
      fontWeight: '500'
    },
    button: {
      backgroundColor: '#ff9500',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s'
    },
    buttonHover: {
      backgroundColor: '#e6850e'
    },
    backButton: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '20px',
      transition: 'all 0.2s'
    },
    pageContainer: {
      backgroundColor: 'white',
      margin: '20px',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      minHeight: 'calc(100vh - 200px)'
    },
    pageTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#ff9500',
      marginBottom: '30px',
      borderBottom: '3px solid #ff9500',
      paddingBottom: '10px'
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontWeight: '500',
      color: '#333',
      fontSize: '14px'
    },
    input: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      transition: 'border-color 0.2s'
    },
    select: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: 'white',
      transition: 'border-color 0.2s'
    },
    textarea: {
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      fontSize: '14px',
      minHeight: '100px',
      resize: 'vertical',
      transition: 'border-color 0.2s'
    },
    formActions: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px'
    },
    submitButton: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '14px',
      transition: 'background-color 0.2s'
    },
    resetButton: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '14px',
      transition: 'background-color 0.2s'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    th: {
      backgroundColor: '#ff9500',
      color: 'white',
      padding: '15px',
      textAlign: 'left',
      fontWeight: '600',
      fontSize: '14px'
    },
    td: {
      padding: '12px 15px',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '14px'
    },
    actionBtn: {
      padding: '6px 12px',
      margin: '0 3px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: '500',
      transition: 'all 0.2s'
    },
    editBtn: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    deleteBtn: {
      backgroundColor: '#dc3545',
      color: 'white'
    },
    viewBtn: {
      backgroundColor: '#17a2b8',
      color: 'white'
    },
    breadcrumb: {
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      fontSize: '14px',
      borderBottom: '1px solid #e9ecef'
    },
    breadcrumbLink: {
      color: '#ff9500',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  };

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  const goBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover
      ? styles.buttonHover.backgroundColor
      : styles.button.backgroundColor;
  };

  // Dashboard Page
  const renderDashboard = () => (
    <div style={styles.content}>
      {/* ASESOR Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ASESOR</h2>
        <div style={styles.dataContainer}>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Peserta: </span>
            <span>67</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Aktif: </span>
            <span>67</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Tervalidasi: </span>
            <span>61</span>
          </div>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => navigateToPage('asesor')}
        >
          Kelola Data
        </button>
      </div>

      {/* ASESI Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ASESI</h2>
        <div style={styles.dataContainer}>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Peserta: </span>
            <span>4000</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Terdaftar: </span>
            <span>3800</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Lulus: </span>
            <span>3200</span>
          </div>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => navigateToPage('asesi')}
        >
          Kelola Data
        </button>
      </div>

      {/* ASESMEN Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ASESMEN</h2>
        <div style={styles.dataContainer}>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Skema: </span>
            <span>25</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Aktif: </span>
            <span>20</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Selesai: </span>
            <span>15</span>
          </div>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => navigateToPage('asesmen')}
        >
          Kelola Data
        </button>
      </div>

      {/* JURUSAN Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>JURUSAN</h2>
        <div style={styles.dataContainer}>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Program: </span>
            <span>5</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Fakultas: </span>
            <span>3</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Akreditasi A: </span>
            <span>4</span>
          </div>
        </div>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => navigateToPage('jurusan')}
        >
          Kelola Data
        </button>
      </div>

      {/* SKEMA Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>SKEMA</h2>
        <div style={styles.dataContainer}>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Total Skema: </span>
            <span>15</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Aktif: </span>
            <span>12</span>
          </div>
          <div style={styles.dataItem}>
            <span style={styles.dataLabel}>Draft: </span>
            <span>3</span>
          </div>
        </div>  
        <button
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
          onClick={() => navigateToPage('skema')}
        >
          Kelola Data
        </button>
      </div>
    </div>
  );

  // Asesor Page
  const renderAsesorPage = () => (
    <div style={{backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px'}}>
      {/* Header with back button and title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <button 
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            marginRight: '15px',
            color: '#333'
          }}
          onClick={goBackToDashboard}
        >
          ←
        </button>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#333',
          margin: 0
        }}>
          ASESOR
        </h1>
        <div style={{marginLeft: 'auto'}}>
          <button style={{
            backgroundColor: '#ff9500',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            + Tambah Data Baru
          </button>
        </div>
      </div>
      
      {/* Table Container */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{backgroundColor: '#f8f9fa'}}>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>No</th>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>Nama Lengkap</th>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>Pekerjaan</th>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>Sertifikasi</th>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>Tanggal Daftar</th>
              <th style={{
                padding: '15px',
                textAlign: 'left',
                fontWeight: '600',
                borderBottom: '2px solid #dee2e6',
                color: '#333'
              }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, index) => (
              <tr key={index} style={{borderBottom: '1px solid #f0f0f0'}}>
                <td style={{
                  padding: '12px 15px',
                  color: '#333'
                }}>1</td>
                <td style={{
                  padding: '12px 15px',
                  color: '#333'
                }}>Arul Maulio Singo, M.Kom</td>
                <td style={{
                  padding: '12px 15px',
                  color: '#333'
                }}>Guru</td>
                <td style={{
                  padding: '12px 15px',
                  color: '#333',
                  fontStyle: index === 1 ? 'italic' : 'normal'
                }}>{index === 1 ? 'Tidak Tersertifikasi' : 'Tersertifikasi'}</td>
                <td style={{
                  padding: '12px 15px',
                  color: '#333'
                }}>22/8/2004</td>
                <td style={{
                  padding: '12px 15px'
                }}>
                  <button style={{
                    backgroundColor: '#ffc107',
                    color: '#333',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
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
    </div>
  );

  // Asesi Page
  const renderAsesiPage = () => (
    <div>
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink} onClick={goBackToDashboard}>Dashboard</span> / Kelola Data Asesi
      </div>
      <div style={styles.pageContainer}>
        <button style={styles.backButton} onClick={goBackToDashboard}>
          ← Kembali ke Dashboard
        </button>
        
        <h1 style={styles.pageTitle}>Kelola Data Asesi</h1>
        
        <div style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nama Lengkap Asesi *</label>
            <input style={styles.input} type="text" placeholder="Masukkan nama lengkap asesi" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>NIM/NIP *</label>
            <input style={styles.input} type="text" placeholder="Masukkan NIM atau NIP" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email *</label>
            <input style={styles.input} type="email" placeholder="Masukkan email" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>No. Telepon *</label>
            <input style={styles.input} type="tel" placeholder="Masukkan nomor telepon" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Jurusan/Program Studi *</label>
            <select style={styles.select}>
              <option value="">Pilih Jurusan</option>
              <option value="ti">Teknik Informatika</option>
              <option value="si">Sistem Informasi</option>
              <option value="manajemen">Manajemen</option>
              <option value="akuntansi">Akuntansi</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Tahun Angkatan</label>
            <input style={styles.input} type="number" placeholder="Contoh: 2021" min="2015" max="2024" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Jenis Kelamin *</label>
            <select style={styles.select}>
              <option value="">Pilih Jenis Kelamin</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Alamat</label>
            <textarea style={styles.textarea} placeholder="Masukkan alamat lengkap"></textarea>
          </div>
        </div>
        
        <div style={styles.formActions}>
          <button style={styles.submitButton}>Simpan Data Asesi</button>
          <button style={styles.resetButton}>Reset Form</button>
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Asesi</th>
              <th style={styles.th}>NIM/NIP</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Jurusan</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Sari Wahyuni</td>
              <td style={styles.td}>20210001</td>
              <td style={styles.td}>sari.wahyuni@student.univ.ac.id</td>
              <td style={styles.td}>Teknik Informatika</td>
              <td style={styles.td}>Aktif</td>
              <td style={styles.td}>
                <button style={{...styles.actionBtn, ...styles.viewBtn}}>Lihat</button>
                <button style={{...styles.actionBtn, ...styles.editBtn}}>Edit</button>
                <button style={{...styles.actionBtn, ...styles.deleteBtn}}>Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Render other pages (Asesmen, Jurusan, Skema) with similar structure
  const renderAsesmenPage = () => (
    <div>
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink} onClick={goBackToDashboard}>Dashboard</span> / Kelola Data Asesmen
      </div>
      <div style={styles.pageContainer}>
        <button style={styles.backButton} onClick={goBackToDashboard}>
          ← Kembali ke Dashboard
        </button>
        <h1 style={styles.pageTitle}>Kelola Data Asesmen</h1>
        <p>Halaman untuk mengelola data asesmen...</p>
      </div>
    </div>
  );

  const renderJurusanPage = () => (
    <div>
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink} onClick={goBackToDashboard}>Dashboard</span> / Kelola Data Jurusan
      </div>
      <div style={styles.pageContainer}>
        <button style={styles.backButton} onClick={goBackToDashboard}>
          ← Kembali ke Dashboard
        </button>
        <h1 style={styles.pageTitle}>Kelola Data Jurusan</h1>
        <p>Halaman untuk mengelola data jurusan...</p>
      </div>
    </div>
  );

  const renderSkemaPage = () => (
    <div>
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink} onClick={goBackToDashboard}>Dashboard</span> / Kelola Data Skema
      </div>
      <div style={styles.pageContainer}>
        <button style={styles.backButton} onClick={goBackToDashboard}>
          ← Kembali ke Dashboard
        </button>
        <h1 style={styles.pageTitle}>Kelola Data Skema</h1>
        <p>Halaman untuk mengelola data skema kompetensi...</p>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          {currentPage === 'dashboard' ? 'MANAJEMEN DATA' : 
           currentPage === 'asesor' ? 'DATA ASESOR' :
           currentPage === 'asesi' ? 'DATA ASESI' :
           currentPage === 'asesmen' ? 'DATA ASESMEN' :
           currentPage === 'jurusan' ? 'DATA JURUSAN' :
           currentPage === 'skema' ? 'DATA SKEMA' : 'MANAJEMEN DATA'}
        </h1>
      </div>

      {/* Content based on current page */}
      {currentPage === 'dashboard' && renderDashboard()}
      {currentPage === 'asesor' && renderAsesorPage()}
      {currentPage === 'asesi' && renderAsesiPage()}
      {currentPage === 'asesmen' && renderAsesmenPage()}
      {currentPage === 'jurusan' && renderJurusanPage()}
      {currentPage === 'skema' && renderSkemaPage()}
    </div>
  );
}

export default ManajemenData;