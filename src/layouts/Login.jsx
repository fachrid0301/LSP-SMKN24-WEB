import { useState } from 'react';

function Login() {
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
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fef3c7',
        padding: '40px',
        borderRadius: '12px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center',
          marginBottom: '30px',
          margin: '0 0 30px 0'
        }}>
          Login
        </h1>

        {/* Username */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
            fontWeight: '500'
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
              padding: '12px 16px',
              border: '2px solid #FFA730',
              borderRadius: '25px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
            fontWeight: '500'
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
              padding: '12px 16px',
              border: '2px solid #FFA730',
              borderRadius: '25px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* NIK */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
            fontWeight: '500'
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
              padding: '12px 16px',
              border: '2px solid #FFA730',
              borderRadius: '25px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            fontSize: '14px',
            color: '#666',
            marginBottom: '8px',
            fontWeight: '500'
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
              padding: '12px 16px',
              border: '2px solid #FFA730',
              borderRadius: '25px',
              fontSize: '14px',
              backgroundColor: 'white',
              outline: 'none',
              boxSizing: 'border-box'
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
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#ea580c'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f97316'}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;