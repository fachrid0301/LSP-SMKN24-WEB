import React, { useState } from 'react';

function AddJurusan({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    kompetensiKeahlian: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.kompetensiKeahlian.trim()) {
      newErrors.kompetensiKeahlian = 'Kompetensi keahlian harus diisi';
    }
    
    if (!formData.jumlahSiswa.trim()) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Generate new ID (you might want to use a better ID generation method)
      const newItem = {
        id: Date.now(),
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: formData.jumlahSiswa.trim()
      };
      
      onSave(newItem);
      alert('Data berhasil ditambahkan!');
    }
  };

  const handleReset = () => {
    setFormData({
      kompetensiKeahlian: '',
      jumlahSiswa: ''
    });
    setErrors({});
  };

  return (
    <div style={{ 
      padding: '0', 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 30px',
        borderBottom: '1px solid #e0e0e0',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <button 
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              marginRight: '15px',
              cursor: 'pointer',
              color: '#333'
            }}
          >
            ←
          </button>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            color: '#333'
          }}>
            TAMBAH DATA JURUSAN
          </h1>
        </div>
      </div>

      {/* Form */}
      <div style={{ 
        padding: '30px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          maxWidth: '600px'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333'
              }}>
                Kompetensi Keahlian <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="kompetensiKeahlian"
                value={formData.kompetensiKeahlian}
                onChange={handleInputChange}
                placeholder="Masukkan kompetensi keahlian"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: errors.kompetensiKeahlian ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FF8A50'}
                onBlur={(e) => e.target.style.borderColor = errors.kompetensiKeahlian ? '#dc3545' : '#ddd'}
              />
              {errors.kompetensiKeahlian && (
                <div style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '5px'
                }}>
                  {errors.kompetensiKeahlian}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333'
              }}>
                Jumlah Siswa <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                name="jumlahSiswa"
                value={formData.jumlahSiswa}
                onChange={handleInputChange}
                placeholder="Masukkan jumlah siswa"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: errors.jumlahSiswa ? '1px solid #dc3545' : '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FF8A50'}
                onBlur={(e) => e.target.style.borderColor = errors.jumlahSiswa ? '#dc3545' : '#ddd'}
              />
              {errors.jumlahSiswa && (
                <div style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '5px'
                }}>
                  {errors.jumlahSiswa}
                </div>
              )}
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '10px',
              flexWrap: 'wrap'
            }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#FF8A50',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  minWidth: '120px'
                }}
              >
                Simpan Data
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  minWidth: '120px'
                }}
              >
                Reset
              </button>
              
              <button
                type="button"
                onClick={onBack}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  minWidth: '120px'
                }}
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJurusan;
