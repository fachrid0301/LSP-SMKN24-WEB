import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nik: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login data:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '0',
      margin: '0',
      width: '100vw'
    }}>
      <div style={{
        backgroundColor: '#fef3c7',
        padding: '40px',
        borderRadius: '12px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#000',
          marginBottom: '30px'
        }}>
          Register
        </h1>

        {/* Username */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#000',
            marginBottom: '5px',
            fontWeight: 'normal'
          }}>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #FFA730',
              borderRadius: '20px',
              fontSize: '14px',
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#000',
            marginBottom: '5px',
            fontWeight: 'normal'
          }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #FFA730',
              borderRadius: '20px',
              fontSize: '14px',
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
        </div>

        {/* NIK */}
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#000',
            marginBottom: '5px',
            fontWeight: 'normal'
          }}>
            NIK
          </label>
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #FFA730',
              borderRadius: '20px',
              fontSize: '14px',
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#000',
            marginBottom: '5px',
            fontWeight: 'normal'
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #FFA730',
              borderRadius: '20px',
              fontSize: '14px',
              backgroundColor: 'transparent',
              outline: 'none'
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Register;