import React, { useState } from 'react';

function AddListAsesmen({ onBack, onSave, assessmentData }) {
  const [newItem, setNewItem] = useState({
    id: assessmentData.length > 0 ? Math.max(...assessmentData.map(i => i.id)) + 1 : 1,
    namaJadwal: '',
    tuk: '',
    pembiayaan: 'Dibayar Penuh',
    tanggalUjian: '',
    lokasiUjian: '',
    asesor: '',
    jumlahPeserta: 0,
  });

  const handleChange = (e, field) => {
    let value = e.target.value;
    if (field === 'jumlahPeserta') {
      value = parseInt(value) || 0;
    }
    setNewItem({ ...newItem, [field]: value });
  };

  const handleSubmit = () => {
    onSave(newItem);
  };

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
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '40px'
      }}>
        Tambah Data Asesmen
      </h1>

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '30px',
        width: '600px',
        maxWidth: '90%',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1a1a1a',
          marginBottom: '20px',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
          Tambahkan Data Baru
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ fontSize: '14px', color: '#333', marginBottom: '5px', display: 'block' }}>Nama Jadwal</label>
              <input
                type="text"
                value={newItem.namaJadwal}
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
                value={newItem.tuk}
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
                  value={newItem.tanggalUjian}
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
                value={newItem.lokasiUjian}
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
                    checked={newItem.pembiayaan === 'Dibayar Penuh'}
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
                    checked={newItem.pembiayaan === 'Belum Dibayar'}
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
                value={newItem.asesor}
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
                value={newItem.jumlahPeserta}
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
            onClick={onBack}
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
            onClick={handleSubmit}
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
  );
}

export default AddListAsesmen;