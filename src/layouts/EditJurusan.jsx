import React, { useState, useEffect } from 'react';

function EditJurusan({ onBack, onSave, onDelete, initialData }) {
  const [formData, setFormData] = useState({
    kompetensiKeahlian: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});

  // Load initial data when component mounts
  useEffect(() => {
    if (initialData) {
      setFormData({
        kompetensiKeahlian: initialData.kompetensiKeahlian || '',
        jumlahSiswa: initialData.jumlahSiswa || ''
      });
    }
  }, [initialData]);

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
      const updatedItem = {
        ...initialData,
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
      };
      
      onSave(updatedItem);
      alert('Data berhasil diperbarui!');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      onDelete(initialData.id);
      alert('Data berhasil dihapus!');
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
        Edit Data Jurusan
      </h2>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '5px'
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
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          {errors.kompetensiKeahlian && (
            <p style={{
              color: '#e53e3e',
              fontSize: '12px',
              marginTop: '5px'
            }}>
              {errors.kompetensiKeahlian}
            </p>
          )}
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '5px'
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
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          {errors.jumlahSiswa && (
            <p style={{
              color: '#e53e3e',
              fontSize: '12px',
              marginTop: '5px'
            }}>
              {errors.jumlahSiswa}
            </p>
          )}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '30px'
        }}>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#f4a261',
              color: '#fff',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              minWidth: '150px',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e76f51'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f4a261'}
          >
            Simpan Perubahan
          </button>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              minWidth: '120px',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Hapus Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditJurusan;