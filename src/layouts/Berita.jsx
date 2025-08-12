import React, { useState } from 'react';

function Berita() {
  const [selectedNews, setSelectedNews] = useState(null);
  
  const newsData = [
    {
      id: 1,
      title: "Uji Sertifikasi Kompetensi (USK) di SMK",
      excerpt: "",
      fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "src/img/kotak1 kiri.jpg"
    },
    {
      id: 2,
      title: "Tes Kemampuan Akademik (TKA) di SMK",
      excerpt: "",
      fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "src/img/kotak2 kanan.png"
    },
    {
      id: 3,
      title: "SBMPTN untuk Siswa SMA/SMK",
      excerpt: "",
      fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "src/img/kotak3 kiri.png"
    },
    {
      id: 4,
      title: "AAS (Assemen Aktir Sekolah)",
      excerpt: "",
      fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "src/img/kotak3 kiri.png"
    }
  ];

  const sidebarNews = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "src/img/sidebarnews.jpg"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "src/img/sidebarnews.jpg"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit", 
      image: "src/img/sidebarnews.jpg"
    }
  ];

  if (selectedNews) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
        {/* Header with building image */}
        <div style={{
          position: "relative",
          height: "300px",
          backgroundImage: "url('src/img/auditoriums.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "60px" // Added margin for navbar space
        }}>
          {/* Blue diagonal overlay */}
          <div style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "300px",
            height: "100px",
            backgroundColor: "#1976D2",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}></div>
        </div>

        {/* Orange breadcrumb section */}
        <div style={{
          backgroundColor: "#FF5722",
          padding: "15px 40px",
          color: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            fontSize: "14px"
          }}>
            <span 
              onClick={() => setSelectedNews(null)}
              style={{ cursor: "pointer" }}
            >
              Home &gt; Berita Terkini
            </span>
            <span> &gt; {selectedNews.title}</span>
          </div>
        </div>

        {/* Detail Content */}
        <div style={{ padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <button 
              onClick={() => setSelectedNews(null)}
              style={{
                backgroundColor: "#FF5722",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "14px",
                cursor: "pointer",
                marginBottom: "30px"
              }}
            >
              ← Kembali ke Berita
            </button>

            <div style={{
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              <img 
                src={selectedNews.image}
                alt={selectedNews.title}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "40px" }}>
                <h1 style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "20px",
                  lineHeight: "1.4"
                }}>
                  {selectedNews.title}
                </h1>
                <p style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.6"
                }}>
                  {selectedNews.fullContent}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: "#FF5722",
          position: "relative",
          overflow: "hidden",
          padding: "50px 40px 40px 40px"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            backgroundColor: "#1976D2",
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }}></div>
          
          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            color: "white"
          }}>
            <div style={{ width: "35%", paddingRight: "60px" }}>
              <h3 style={{ 
                fontSize: "24px", 
                fontWeight: "bold", 
                marginBottom: "15px",
                color: "white"
              }}>
                MyLSP
              </h3>
              <p style={{ 
                fontSize: "13px", 
                lineHeight: "1.5", 
                marginBottom: "25px",
                opacity: 0.9
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}>📷</div>
                <div style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}>📘</div>
                <div style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}>❌</div>
              </div>
            </div>
            
            <div style={{ 
              width: "65%", 
              display: "flex",
              paddingLeft: "40px"
            }}>
              <div style={{ flex: 1, paddingRight: "40px" }}>
                <h4 style={{ 
                  fontSize: "18px", 
                  fontWeight: "bold", 
                  marginBottom: "20px",
                  color: "white"
                }}>
                  Know More About:
                </h4>
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "8px" 
                }}>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Program Sertifikasi</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Tempat Uji Kompetensi</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Skema Sertifikasi</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Asesor Kompetensi</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Jadwal Pelaksanaan</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Galeri</a>
                  <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Berita</a>
                </div>
              </div>
              
              <div>
                <h4 style={{ 
                  fontSize: "18px", 
                  fontWeight: "bold", 
                  marginBottom: "20px",
                  color: "white"
                }}>
                  Contact Us:
                </h4>
                <button style={{
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  padding: "12px 30px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      {/* Header with building image */}
      <div style={{
       position: "relative",
       height: "450px",
       backgroundImage: "url('src/img/auditoriums.png')",
       backgroundSize: "cover",
       backgroundPosition: "center",
       marginTop: "0px"
      }}>
      </div>

      {/* Orange breadcrumb section */}
      <div style={{
        backgroundColor: "#ff9324",
        padding: "15px 40px",
        color: "white"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: "14px"
        }}>
          
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "50px"
        }}>
          {/* Left Content - News Grid */}
          <div style={{ flex: "2.2" }}>
            <div style={{ 
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "40px"
            }}>
              <div>
                <h1 style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#A6B28B",
                  marginBottom: "5px",
                  textTransform: "uppercase",
                }}>
                  SMKN 24 JAKARTA
                </h1>

                <h1 style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "0",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  BERITA TERKINI
                </h1>
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "25px"
            }}>
              {newsData.map((news) => (
                <div
                  key={news.id}
                  onClick={() => setSelectedNews(news)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    style={{ 
                      width: "100%", 
                      height: "180px", 
                      objectFit: "cover" 
                    }} 
                  />
                  <div style={{ padding: "20px" }}>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "12px",
                      lineHeight: "1.4"
                    }}>
                      {news.title}
                    </h3>
                    <p style={{
                      fontSize: "13px",
                      color: "#666",
                      lineHeight: "1.5",
                      margin: 0
                    }}>
                      {news.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ flex: "1", marginTop: "60px" }}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "25px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#333",
                textAlign: "center"
              }}>
                Berita Terpopuler
              </h3>
              
              {sidebarNews.map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  gap: "12px",
                  paddingBottom: "18px",
                  marginBottom: "18px",
                  borderBottom: index !== sidebarNews.length - 1 ? "1px solid #eee" : "none",
                  cursor: "pointer"
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "55px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: "12px",
                      color: "#333",
                      lineHeight: "1.4",
                      margin: 0,
                      fontWeight: "500"
                    }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: "#ff9324",
        position: "relative",
        overflow: "hidden",
        padding: "50px 40px 40px 40px"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          backgroundColor: "#3196ff",
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}></div>
        
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          color: "white"
        }}>
          <div style={{ width: "35%", paddingRight: "60px" }}>
            <h3 style={{ 
              fontSize: "24px", 
              fontWeight: "bold", 
              marginBottom: "15px",
              color: "white"
            }}>
              MyLSP
            </h3>
            <p style={{ 
              fontSize: "13px", 
              lineHeight: "1.5", 
              marginBottom: "25px",
              opacity: 0.9
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{
                width: "35px",
                height: "35px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>📷</div>
              <div style={{
                width: "35px",
                height: "35px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>📘</div>
              <div style={{
                width: "35px",
                height: "35px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>❌</div>
            </div>
          </div>
          
          <div style={{ 
            width: "65%", 
            display: "flex",
            paddingLeft: "40px"
          }}>
            <div style={{ flex: 1, paddingRight: "40px" }}>
              <h4 style={{ 
                fontSize: "18px", 
                fontWeight: "bold", 
                marginBottom: "20px",
                color: "white"
              }}>
                Know More About:
              </h4>
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "8px" 
              }}>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Program Sertifikasi</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Tempat Uji Kompetensi</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Skema Sertifikasi</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Asesor Kompetensi</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Jadwal Pelaksanaan</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Galeri</a>
                <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "13px", opacity: 0.9 }}>• Berita</a>
              </div>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: "18px", 
                fontWeight: "bold", 
                marginBottom: "20px",
                color: "white"
              }}>
                Contact Us:
              </h4>
              <button style={{
                backgroundColor: "#333",
                color: "white",
                border: "none",
                padding: "12px 38px",
                borderRadius: "25px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita;