import React, { useState } from 'react';

function AddAsesor({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nama: '',
    pekerjaan: '',
    sertifikasi: 'Tersertifikasi',
    tanggal_daftar: '',
  });

  const handleSubmit = () => {
    if (formData.nama.trim()) {
      onSave(formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '0',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          textAlign: 'center',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            margin: 0,
          }}
        >
          TAMBAH DATA
        </h1>
      </div>

      {/* Form Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '20px',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                value={formData.nama}
                onChange={(e) => handleChange('nama', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Pekerjaan
              </label>
              <input
                type="text"
                value={formData.pekerjaan}
                onChange={(e) => handleChange('pekerjaan', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Sertifikasi
              </label>
              <select
                value={formData.sertifikasi}
                onChange={(e) => handleChange('sertifikasi', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <option value="Tersertifikasi">Tersertifikasi</option>
                <option value="Tidak Tersertifikasi">Tidak Tersertifikasi</option>
                <option value="-">-</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Tanggal Daftar
              </label>
              <input
                type="date"
                value={formData.tanggal_daftar}
                onChange={(e) => handleChange('tanggal_daftar', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px' }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Simpan
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAsesor;