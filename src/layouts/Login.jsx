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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow-x: hidden;
          }
        `
      }} />
    <div style={{
      minHeight: '100vh',
      height: '100vh',
      backgroundImage: "url('src/img/ADM_LOGIN.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      margin: '0',
      width: '100vw',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '40px',
        borderRadius: '20px',
        width: '400px',
        maxWidth: '90vw',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 80px rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        }}>
          Sign in
        </h1>
        
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '30px',
          fontWeight: '400'
        }}>
          Sign in your account
        </p>

        {/* Email */}
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '16px 20px',
              border: 'none',
              borderBottom: '2px solid #e5e7eb',
              fontSize: '16px',
              backgroundColor: 'transparent',
              outline: 'none',
              fontFamily: 'inherit',
              color: '#333',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
            onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '16px 20px',
              border: 'none',
              borderBottom: '2px solid #e5e7eb',
              fontSize: '16px',
              backgroundColor: 'transparent',
              outline: 'none',
              fontFamily: 'inherit',
              color: '#333',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderBottomColor = '#f97316'}
            onBlur={(e) => e.target.style.borderBottomColor = '#e5e7eb'}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #ff7f50, #ff6b35)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
            letterSpacing: '0.5px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
          }}
        >
          Sign in
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;