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
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f9f9f9',
      zIndex: 1000,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px',
        textTransform: 'uppercase'
      }}>
        Tambah Data Jurusan
      </h2>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '60px 80px',
        width: '90%',
        maxWidth: '1200px',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyContent: 'center'
      }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '15px'
          }}>
            Kompetensi Keahlian
          </label>
          <input
            type="text"
            name="kompetensiKeahlian"
            value={formData.kompetensiKeahlian}
            onChange={handleInputChange}
            placeholder="Masukkan kompetensi keahlian"
            style={{
              width: '100%',
              padding: '20px 25px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box',
              minHeight: '60px'
            }}
          />
          {errors.kompetensiKeahlian && (
            <p style={{
              color: '#e53e3e',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              {errors.kompetensiKeahlian}
            </p>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '15px'
          }}>
            Jumlah Siswa
          </label>
          <input
            type="number"
            name="jumlahSiswa"
            value={formData.jumlahSiswa}
            onChange={handleInputChange}
            placeholder="Masukkan jumlah siswa"
            min="0"
            style={{
              width: '100%',
              padding: '20px 25px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box',
              minHeight: '60px'
            }}
          />
          {errors.jumlahSiswa && (
            <p style={{
              color: '#e53e3e',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              {errors.jumlahSiswa}
            </p>
          )}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px'
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              minWidth: '80px',
              height: '35px',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#f4a261',
              color: '#fff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              minWidth: '80px',
              height: '35px',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e76f51'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f4a261'}
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJurusan;