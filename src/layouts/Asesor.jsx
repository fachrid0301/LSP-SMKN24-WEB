import React from 'react';

function Asesor({ onBack }) {
  const [activeMenu, setActiveMenu] = React.useState('Asesor');

  const handleMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
        if (onBack) onBack();
      }
      return;
    }
    setActiveMenu(menuName);
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
        position: 'fixed',
        top: '15px',
        left: '15px',
        height: 'calc(100vh - 30px)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        overflow: 'hidden'
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
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            marginBottom: '15px',
            backgroundColor: '#ff6b35',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            LSP
          </div>
        </div>

        {/* Menu Items */}
        <div style={{ flex: 1, paddingLeft: '20px', paddingRight: '20px', overflowY: 'auto' }}>
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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Dashboard</span>
          </div>

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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Manajemen data</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            marginBottom: '8px',
            backgroundColor: activeMenu === 'Asesor' ? '#ff6b35' : 'transparent',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: activeMenu === 'Asesor' ? 'white' : '#666'
          }}
          onClick={() => handleMenuClick('Asesor')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Asesor</span>
          </div>

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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>List Asesmen</span>
          </div>

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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Asesmen Diikuti</span>
          </div>
        </div>

        {/* Bottom Menu Items */}
        <div style={{ paddingLeft: '20px', paddingRight: '20px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Profile</span>
          </div>

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
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: '15px' }}>
              <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="16,17 21,12 16,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '15px', fontWeight: '500' }}>Log out</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1,
        marginLeft: '300px',
        padding: '20px',
        backgroundColor: '#fafafa',
        overflowY: 'auto',
        height: 'calc(100vh - 30px)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '20px' }}>Manajemen Data Asesor</h1>

        {/* Form Input */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Tambah Asesor Baru</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="text" placeholder="Nama Asesor" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input type="email" placeholder="Email" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
            <input type="text" placeholder="Nomor Telepon" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
            <button style={{ padding: '10px', backgroundColor: '#ff9500', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Simpan</button>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Daftar Asesor</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Nama</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Telepon</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>John Doe</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>john@example.com</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>08123456789</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Jane Smith</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>jane@example.com</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>08123456790</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Alice Johnson</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>alice@example.com</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>08123456791</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Bob Williams</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>bob@example.com</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>08123456792</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <button style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <button 
          onClick={onBack} 
          style={{ 
            marginTop: '20px',
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
          Kembali ke Home
        </button>
      </div>
    </div>
  );
}

export default Asesor;