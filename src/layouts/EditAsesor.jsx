import React, { useState } from 'react';

function EditAsesor({ data, onSave, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    nama: data?.nama || '',
    pekerjaan: data?.pekerjaan || '',
    sertifikasi: data?.sertifikasi || 'Tersertifikasi',
    tanggal_daftar: data?.tanggal_daftar || ''
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
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama lengkap harus diisi';
    }
    
    if (!formData.pekerjaan.trim()) {
      newErrors.pekerjaan = 'Pekerjaan harus diisi';
    }
    
    if (!formData.tanggal_daftar.trim()) {
      newErrors.tanggal_daftar = 'Tanggal daftar harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const updatedItem = {
        ...data,
        nama: formData.nama.trim(),
        pekerjaan: formData.pekerjaan.trim(),
        sertifikasi: formData.sertifikasi,
        tanggal_daftar: formData.tanggal_daftar.trim()
      };
      
      if (onSave) {
        onSave(updatedItem);
      }
      alert('Data asesor berhasil diperbarui!');
    }
  };

  const handleCancel = () => {
    // Reset form to original data
    setFormData({
      nama: data?.nama || '',
      pekerjaan: data?.pekerjaan || '',
      sertifikasi: data?.sertifikasi || 'Tersertifikasi',
      tanggal_daftar: data?.tanggal_daftar || ''
    });
    setErrors({});
    
    if (onCancel) {
      onCancel();
    }
  };

  const handleDelete = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data asesor ini?')) {
      if (onDelete) {
        onDelete(data);
      }
      alert('Data asesor berhasil dihapus!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{
        padding: '40px 0 20px 0',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: '#f5f5f5',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          margin: '0',
          letterSpacing: '1px'
        }}>
          EDIT DATA ASESOR
        </h1>
      </div>

      {/* Form Container */}
      <div style={{
        margin: '0 20px 40px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        minHeight: '60vh'
      }}>
        {/* Form Content - 2 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Left Column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {/* Nama Lengkap */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
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
              {errors.nama && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.nama}
                </p>
              )}
            </div>

            {/* Pekerjaan */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Pekerjaan
              </label>
              <input
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
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
              {errors.pekerjaan && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.pekerjaan}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {/* Sertifikasi */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Sertifikasi
              </label>
              <select
                name="sertifikasi"
                value={formData.sertifikasi}
                onChange={handleInputChange}
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
              >
                <option value="Tersertifikasi">Tersertifikasi</option>
                <option value="Tidak Tersertifikasi">Tidak Tersertifikasi</option>
                <option value="-">-</option>
              </select>
            </div>

            {/* Tanggal Daftar */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Tanggal Daftar
              </label>
              <input
                type="date"
                name="tanggal_daftar"
                value={formData.tanggal_daftar}
                onChange={handleInputChange}
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
              {errors.tanggal_daftar && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.tanggal_daftar}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons - All buttons grouped together on the right */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingTop: '20px',
          borderTop: '1px solid #e0e0e0',
          gap: '12px'
        }}>
          <button
            onClick={handleCancel}
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
            onClick={handleDelete}
            style={{
              backgroundColor: '#dc3545',
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
              e.target.style.backgroundColor = '#c82333';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#dc3545';
            }}
          >
            Hapus Data
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
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAsesor;