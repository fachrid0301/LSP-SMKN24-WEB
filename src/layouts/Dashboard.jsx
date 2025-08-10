import { useState } from 'react';
import ManajemenData from './ManajemenData';
import ListAsesmen from './ListAsesmen';
import AsesmenDiikuti from './AsesmenDiikuti';
// import ProfileSettings from './ProfileSettings';

// Placeholder components untuk pages
const PlaceholderPage = ({ title, onBack }) => (
  <div style={{
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      width: '100%',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '20px', 
        color: '#1a1a1a',
        fontWeight: '700'
      }}>
        Halaman {title}
      </h1>
      <p style={{ 
        marginBottom: '30px', 
        color: '#666',
        fontSize: '1.2rem',
        lineHeight: '1.6'
      }}>
        Ini adalah halaman {title}. Di sini Anda dapat mengelola data {title.toLowerCase()}.
      </p>
      <button 
        onClick={onBack}
        style={{
          backgroundColor: '#ff6b35',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2b'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
      >
        ← Kembali ke Manajemen Data
      </button>
    </div>
  </div>
);

function Dashboard({ onBack }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [currentPage, setCurrentPage] = useState(null); // Untuk handle pages

  const handleMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
        if (onBack) onBack(); // Kembali ke home setelah logout
      }
      return;
    }
    setActiveMenu(menuName);
    setCurrentPage(null); // Reset page ketika ganti menu
  };

  // Function untuk handle navigasi dari ManajemenData ke pages
  const handlePageNavigation = (page) => {
    console.log('Dashboard - navigating to page:', page);
    setCurrentPage(page);
  };

  // Function untuk kembali dari pages ke ManajemenData
  const handleBackToManajemenData = () => {
    setCurrentPage(null);
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '20px',
        paddingBottom: '20px',
        position: 'relative',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        margin: '15px',
        height: 'calc(100vh - 30px)'
      }}>
        {/* Logo Section */}
        <div style={{
          padding: '20px 30px',
          marginBottom: '30px',
          textAlign: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#ff6b35',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            marginBottom: '15px'
          }}>
            <span style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              LSP
            </span>
          </div>
          <h3 style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: '#1a1a1a'
          }}>
            Logo
          </h3>
        </div>

        {/* Menu Items */}
        <div style={{ flex: 1, paddingLeft: '20px', paddingRight: '20px' }}>
          {/* Dashboard Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'Dashboard' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'Dashboard' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('Dashboard')}
          onMouseEnter={(e) => {
            if (activeMenu !== 'Dashboard') {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== 'Dashboard') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Dashboard</span>
          </div>

          {/* Manajemen Data Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'ManajemenData' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'ManajemenData' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('ManajemenData')}
          onMouseEnter={(e) => {
            if (activeMenu !== 'ManajemenData') {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== 'ManajemenData') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Manajemen data</span>
          </div>

          {/* List Asesmen Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'ListAsesmen' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'ListAsesmen' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('ListAsesmen')}
          onMouseEnter={(e) => {
            if (activeMenu !== 'ListAsesmen') {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== 'ListAsesmen') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <line x1="8" y1="6" x2="21" y2="6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <line x1="8" y1="12" x2="21" y2="12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <line x1="8" y1="18" x2="21" y2="18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="3.01" y2="6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <line x1="3" y1="12" x2="3.01" y2="12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <line x1="3" y1="18" x2="3.01" y2="18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>List Asesmen</span>
          </div>

          {/* Asesmen Diikuti Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'AsesmenDiikuti' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'AsesmenDiikuti' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('AsesmenDiikuti')}
          onMouseEnter={(e) => {
            if (activeMenu !== 'AsesmenDiikuti') {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== 'AsesmenDiikuti') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Asesmen Diikuti</span>
          </div>
        </div>

        {/* Bottom Menu Items */}
        <div style={{ paddingLeft: '20px', paddingRight: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
          {/* Profile Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'Profile' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'Profile' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('Profile')}
          onMouseEnter={(e) => {
            if (activeMenu !== 'Profile') {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== 'Profile') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Profile</span>
          </div>

          {/* Logout Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: '#666'
          }}
          onClick={() => handleMenuClick('Logout')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <polyline points="16,17 21,12 16,7" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
              <line x1="21" y1="12" x2="9" y2="12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Log out</span>
          </div>
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
        {/* Render Pages jika ada */}
        {currentPage === 'asesor' && (
          <PlaceholderPage title="Asesor" onBack={handleBackToManajemenData} />
        )}
        {currentPage === 'asesi' && (
          <PlaceholderPage title="Asesi" onBack={handleBackToManajemenData} />
        )}
        {currentPage === 'asesmen' && (
          <PlaceholderPage title="Asesmen" onBack={handleBackToManajemenData} />
        )}
        {currentPage === 'jurusan' && (
          <PlaceholderPage title="Jurusan" onBack={handleBackToManajemenData} />
        )}
        {currentPage === 'kompetensi' && (
          <PlaceholderPage title="Kompetensi" onBack={handleBackToManajemenData} />
        )}

        {/* Main Content based on active menu (jika tidak ada currentPage) */}
        {!currentPage && activeMenu === 'Dashboard' && (
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

        {!currentPage && activeMenu === 'ManajemenData' && (
          <ManajemenData onNavigate={handlePageNavigation} />
        )}
        {!currentPage && activeMenu === 'ListAsesmen' && <ListAsesmen />}
        {!currentPage && activeMenu === 'AsesmenDiikuti' && <AsesmenDiikuti />}
        {!currentPage && activeMenu === 'Profile' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#1a1a1a' }}>Profile Settings</h1>
            <p style={{ color: '#666' }}>Coming soon...</p>
          </div>
        )}
      </div>

      {/* Back to Home Button */}
      <button 
        onClick={onBack} 
        style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#ff6b35', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          fontSize: '16px', 
          fontWeight: '600', 
          cursor: 'pointer' 
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Dashboard;