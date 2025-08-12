import React from 'react';

function AddJurusan({ formData, setFormData, handleSave, handleCancel }) {
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        padding: '40px',
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 30px 0',
          color: '#333',
          textTransform: 'uppercase'
        }}>
          TAMBAHKAN DATA BARU
        </h2>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '30px',
          border: '1px solid #ddd'
        }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px'
                }}>
                  Kompetensi Keahlian
                </label>
                <input
                  type="text"
                  value={formData.kompetensiKeahlian}
                  onChange={(e) => handleInputChange('kompetensiKeahlian', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#f8f9fa',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px'
                }}>
                  Jumlah Siswa
                </label>
                <input
                  type="text"
                  value={formData.jumlahSiswa}
                  onChange={(e) => handleInputChange('jumlahSiswa', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    backgroundColor: '#f8f9fa',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '30px'
          }}>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Batal
            </button>
            <button
              onClick={() => handleSave(formData)}
              style={{
                backgroundColor: '#FF8A50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Simpan Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJurusan;