import { useState } from 'react';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '⬜' },
    { name: 'Profile Update', icon: '👤' },
    { name: 'List Assessment Aktif', icon: '📋' },
    { name: 'Assessment Diikuti', icon: '📖' }
  ];

  const handleMenuClick = (menuName) => {
    if (menuName !== activeMenu) {
      setIsLoading(true);
      setTimeout(() => {
        setActiveMenu(menuName);
        setIsLoading(false);
      }, 800); // 800ms loading animation
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Inter, sans-serif' }}>
      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInUp {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Top Header */}
      <nav style={{ 
        backgroundColor: 'white', 
        padding: '12px 24px',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px'
            }}>
              {/* Logo Image Placeholder */}
              <img 
                src="src/img/LOGO_LSP_SMKN_24.jpg" 
                alt="LSP Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  marginRight: sidebarOpen ? '12px' : '0'
                }}
              />
              {sidebarOpen && (
                <span style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  color: '#374151'
                }}>
                  LSP Media Informatika
                </span>
              )}
            </div>
            
            {/* Hamburger Menu */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSidebarOpen(prev => !prev);
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '4px',
                pointerEvents: 'none'
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '3px', 
                  backgroundColor: '#374151', 
                  borderRadius: '1px',
                  transition: 'all 0.2s ease'
                }}></div>
                <div style={{ 
                  width: '20px', 
                  height: '3px', 
                  backgroundColor: '#374151', 
                  borderRadius: '1px',
                  transition: 'all 0.2s ease'
                }}></div>
                <div style={{ 
                  width: '20px', 
                  height: '3px', 
                  backgroundColor: '#374151', 
                  borderRadius: '1px',
                  transition: 'all 0.2s ease'
                }}></div>
              </div>
            </button>
          </div>
          
          {/* Profile Avatar */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              R
            </div>
            
            {/* Dropdown Menu */}
            {showDropdown && (
              <div 
                style={{
                  position: 'absolute',
                  top: '50px',
                  right: '0',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  minWidth: '160px',
                  zIndex: 1000
                }}
              >
                <div style={{ padding: '8px 0' }}>
                  <button 
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#374151',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Profile
                  </button>
                  <button 
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#374151',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Settings
                  </button>
                  <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
                  <button 
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#dc2626',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    onClick={() => {
                      if (confirm('Apakah Anda yakin ingin logout?')) {
                        alert('Logout berhasil!');
                        setShowDropdown(false);
                      }
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{
          width: sidebarOpen ? '280px' : '70px',
          backgroundColor: 'white',
          minHeight: 'calc(100vh - 73px)',
          borderRight: '1px solid #e5e7eb',
          padding: '20px 0',
          transition: 'width 0.3s ease',
          overflow: 'hidden'
        }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMenuClick(item.name)}
              style={{
                padding: sidebarOpen ? '12px 24px' : '12px',
                margin: sidebarOpen ? '4px 16px' : '4px 8px',
                borderRadius: sidebarOpen ? '50px' : '12px',
                cursor: 'pointer',
                backgroundColor: activeMenu === item.name ? '#8b5cf6' : 'transparent',
                color: activeMenu === item.name ? 'white' : '#6b7280',
                fontWeight: activeMenu === item.name ? '500' : '400',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: sidebarOpen ? 'flex-start' : 'center',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                opacity: isLoading && activeMenu !== item.name ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (activeMenu !== item.name && !isLoading) {
                  e.target.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (activeMenu !== item.name) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                backgroundColor: activeMenu === item.name ? 'rgba(255,255,255,0.3)' : '#8b5cf6',
                borderRadius: '4px',
                marginRight: sidebarOpen ? '12px' : '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'white',
                  borderRadius: '2px'
                }}></div>
              </div>
              {sidebarOpen && (
                <span style={{ overflow: 'hidden' }}>{item.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ 
          flex: 1, 
          padding: '40px',
          backgroundColor: '#f5f5f5',
          transition: 'margin-left 0.3s ease',
          position: 'relative'
        }}>
          {/* Loading Overlay */}
          {isLoading && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(245, 245, 245, 0.8)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100,
              animation: 'fadeIn 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}>
                {/* Spinning Loader */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '4px solid #e5e7eb',
                  borderTop: '4px solid #8b5cf6',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <div style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  Loading...
                </div>
              </div>
            </div>
          )}

          {/* Welcome Header */}
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: '36px', 
              fontWeight: '600', 
              color: '#6b7280',
              margin: 0,
              textAlign: 'center',
              opacity: isLoading ? 0.3 : 1,
              transition: 'opacity 0.3s ease'
            }}>
              {activeMenu === 'Dashboard' && 'Hello, Welcome Rian Pioriandana'}
              {activeMenu === 'Profile Update' && 'Update Your Profile'}
              {activeMenu === 'List Assessment Aktif' && 'Active Assessments'}
              {activeMenu === 'Assessment Diikuti' && 'Joined Assessments'}
            </h1>
          </div>

          {/* Content based on active menu */}
          {!isLoading && (
            <div style={{
              animation: 'slideInUp 0.5s ease',
              opacity: 1
            }}>
              {activeMenu === 'Dashboard' && (
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                  <p>Welcome to your dashboard! Here you can see an overview of your activities.</p>
                </div>
              )}
              {activeMenu === 'Profile Update' && (
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                  <p>Update your personal information and preferences here.</p>
                  <div style={{
                    maxWidth: '400px',
                    margin: '0 auto',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Profile update form would go here...
                  </div>
                </div>
              )}
              {activeMenu === 'List Assessment Aktif' && (
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                  <p>View all your active assessments and their status.</p>
                </div>
              )}
              {activeMenu === 'Assessment Diikuti' && (
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                  <p>See all assessments you have participated in.</p>
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: 'auto',
            paddingTop: '200px',
            opacity: isLoading ? 0.3 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            <p style={{ 
              color: '#9ca3af', 
              fontSize: '14px',
              margin: 0
            }}>
              Copyright © LSP Media Informatika 2022
            </p>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;