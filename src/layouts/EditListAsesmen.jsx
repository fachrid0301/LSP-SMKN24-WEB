import React, { useState } from 'react';

function EditListAsesmen({ onBack, onSave, item }) {
  const [currentItem, setCurrentItem] = useState({ ...item });

  const handleChange = (e, field) => {
    let value = e.target.value;
    if (field === 'jumlahPeserta') {
      value = parseInt(value) || 0;
    }
    setCurrentItem({ ...currentItem, [field]: value });
  };

  const handleSubmit = () => {
    onSave(currentItem);
  };

  const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      boxSizing: 'border-box',
      overflow: 'auto',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        Edit Data Asesmen
      </h2>
      
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        flex: 1,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px',
          flex: 1,
          alignContent: 'start',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Nama Jadwal
              </label>
              <input
                type="text"
                value={currentItem.namaJadwal}
                onChange={(e) => handleChange(e, 'namaJadwal')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                TUK
              </label>
              <input
                type="text"
                value={currentItem.tuk}
                onChange={(e) => handleChange(e, 'tuk')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Tanggal Ujian
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  value={currentItem.tanggalUjian}
                  onChange={(e) => handleChange(e, 'tanggalUjian')}
                  style={{
                    padding: '15px',
                    border: '2.5px solid #d6d8db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    width: '100%',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                  onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                />
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Lokasi Ujian
              </label>
              <textarea
                value={currentItem.lokasiUjian}
                onChange={(e) => handleChange(e, 'lokasiUjian')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  minHeight: '120px',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="Masukkan lokasi ujian..."
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '12px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Pembiayaan
              </label>
              <div style={{ 
                display: 'flex', 
                gap: '30px',
                padding: '10px 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    id="dibayarPenuh"
                    name="pembiayaan"
                    value="Dibayar Penuh"
                    checked={currentItem.pembiayaan === 'Dibayar Penuh'}
                    onChange={(e) => handleChange(e, 'pembiayaan')}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="dibayarPenuh" style={{ 
                    fontSize: '16px', 
                    color: '#34495e',
                    fontWeight: '500'
                  }}>
                    Dibayar Penuh
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="radio"
                    id="belumDibayar"
                    name="pembiayaan"
                    value="Belum Dibayar"
                    checked={currentItem.pembiayaan === 'Belum Dibayar'}
                    onChange={(e) => handleChange(e, 'pembiayaan')}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <label htmlFor="belumDibayar" style={{ 
                    fontSize: '16px', 
                    color: '#34495e',
                    fontWeight: '500'
                  }}>
                    Belum Dibayar
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Asesor
              </label>
              <input
                type="text"
                value={currentItem.asesor}
                onChange={(e) => handleChange(e, 'asesor')}
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="Nama asesor..."
              />
            </div>
            
            <div>
              <label style={{ 
                fontSize: '16px', 
                color: '#34495e', 
                marginBottom: '8px', 
                display: 'block',
                fontWeight: '600'
              }}>
                Jumlah Peserta
              </label>
              <input
                type="number"
                value={currentItem.jumlahPeserta}
                onChange={(e) => handleChange(e, 'jumlahPeserta')}
                min="0"
                style={{
                  padding: '15px',
                  border: '2.5px solid #d6d8db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  width: '100%',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                onBlur={(e) => e.target.style.borderColor = '#d6d8db'}
                placeholder="0"
              />
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          paddingTop: '20px',
          borderTop: '2px solid #e9ecef'
        }}>
          <button
            onClick={onBack}
            style={{
              padding: '15px 30px',
              backgroundColor: '#6c757d',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(108, 117, 125, 0.3)',
              fontSize: '16px',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a6268';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(108, 117, 125, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6c757d';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(108, 117, 125, 0.3)';
            }}
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            style={{
              padding: '15px 30px',
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(253, 126, 20, 0.3)',
              fontSize: '16px',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e96a00';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(253, 126, 20, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(253, 126, 20, 0.3)';
            }}
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditListAsesmen;