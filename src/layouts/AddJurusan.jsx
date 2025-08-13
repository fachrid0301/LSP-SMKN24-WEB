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
    } else if (isNaN(formData.jumlahSiswa) || parseInt(formData.jumlahSiswa) < 0) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus berupa angka positif';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newItem = {
        id: Date.now(),
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
      };
      
      onSave(newItem);
      alert('Data berhasil ditambahkan!');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      zIndex: 9999
    }}>
      {/* Header */}
      <div style={{
        padding: '40px 0 20px 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          margin: '0',
          letterSpacing: '1px'
        }}>
          TAMBAHKAN DATA BARU
        </h1>
      </div>

      {/* Form Container - Full rounded with exact margins */}
      <div style={{
        margin: '0 20px 0 20px', // 20px margin on left and right sides
        backgroundColor: '#ffffff',
        borderRadius: '30px 30px 0 0', // Only top corners rounded
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        minHeight: 'calc(100vh - 100px)', // Fill to bottom
        height: 'calc(100vh - 100px)', // Exact height to bottom
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Form Content */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {/* Kompetensi Keahlian */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Kompetensi Keahlian
            </label>
            <input
              type="text"
              name="kompetensiKeahlian"
              value={formData.kompetensiKeahlian}
              onChange={handleInputChange}
              placeholder=""
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.kompetensiKeahlian && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
                {errors.kompetensiKeahlian}
              </p>
            )}
          </div>

          {/* Jumlah Siswa */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Jumlah Siswa
            </label>
            <input
              type="number"
              name="jumlahSiswa"
              value={formData.jumlahSiswa}
              onChange={handleInputChange}
              placeholder=""
              min="0"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.jumlahSiswa && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
                {errors.jumlahSiswa}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons - Positioned at bottom right like in image */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: 'auto',
          paddingTop: '40px'
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6c757d',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#5a6268';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6c757d';
            }}
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJurusan;