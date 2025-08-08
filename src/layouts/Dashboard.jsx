import { useState } from 'react';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const handleMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
      }
      return;
    }
    setActiveMenu(menuName);
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '80px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        position: 'relative',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        margin: '15px',
        height: 'calc(100vh - 30px)'
      }}>
        {/* Logo Image */}
        <div style={{
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <img 
            src="src/img/image 12.png"
            alt="LSP Logo"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Logo Icon - Home */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: activeMenu === 'Dashboard' ? '#ff6b35' : '#f0f0f0',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Dashboard')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
                  stroke={activeMenu === 'Dashboard' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" 
                  stroke={activeMenu === 'Dashboard' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Profile Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: activeMenu === 'Profile' ? '#ff6b35' : 'transparent',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Profile')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Profile') {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Profile') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                  stroke={activeMenu === 'Profile' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" 
                    stroke={activeMenu === 'Profile' ? 'white' : '#666'} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
          </svg>
        </div>

        {/* List Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: activeMenu === 'Assessment' ? '#ff6b35' : 'transparent',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Assessment')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Assessment') {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Assessment') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="8" y1="6" x2="21" y2="6" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="8" y1="12" x2="21" y2="12" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="8" y1="18" x2="21" y2="18" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="3.01" y2="6" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="12" x2="3.01" y2="12" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <line x1="3" y1="18" x2="3.01" y2="18" 
                  stroke={activeMenu === 'Assessment' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Book Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: activeMenu === 'Reports' ? '#ff6b35' : 'transparent',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'auto',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Reports')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Reports') {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Reports') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" 
                  stroke={activeMenu === 'Reports' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
                  stroke={activeMenu === 'Reports' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Bottom Profile Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: activeMenu === 'Settings' ? '#ff6b35' : 'transparent',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Settings')}
        onMouseEnter={(e) => {
          if (activeMenu !== 'Settings') {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
          }
        }}
        onMouseLeave={(e) => {
          if (activeMenu !== 'Settings') {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                  stroke={activeMenu === 'Settings' ? 'white' : '#666'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" 
                    stroke={activeMenu === 'Settings' ? 'white' : '#666'} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Logout Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'transparent',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={() => handleMenuClick('Logout')}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
                  stroke="#666" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            <polyline points="16,17 21,12 16,7" 
                      stroke="#666" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" 
                  stroke="#666" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#fafafa'
      }}>
        {/* Main Content based on active menu */}
        {activeMenu === 'Dashboard' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '6rem',
              fontWeight: '900',
              color: '#1a1a1a',
              margin: 0,
              letterSpacing: '-0.02em',
              fontFamily: 'Georgia, serif'
            }}>
              Halo Sobat!
            </h1>
          </div>
        )}

        {activeMenu === 'Profile' && (
          <div style={{ 
            maxWidth: '600px',
            width: '100%',
            padding: '40px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Profile Settings
            </h2>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginBottom: '25px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  defaultValue="Rian Pioriandana"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Update Profile
              </button>
            </div>
          </div>
        )}

        {activeMenu === 'Assessment' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              Assessment Center
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px'
            }}>
              Kelola dan lihat semua assessment yang tersedia
            </p>
          </div>
        )}

        {activeMenu === 'Reports' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              Reports
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px'
            }}>
              Lihat laporan dan dokumentasi assessment
            </p>
          </div>
        )}

        {activeMenu === 'Settings' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '20px'
            }}>
              Settings
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px'
            }}>
              Kelola pengaturan aplikasi dan preferensi Anda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;