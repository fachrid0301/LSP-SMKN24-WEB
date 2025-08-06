import React, { useState } from "react";

function CariSkema() {
  const [searchTerm, setSearchTerm] = useState("");

  // Data untuk setiap card dengan gambar dan judul yang berbeda
  const cardData = [
    {
      id: 1,
      title: "Contoh 1",
      image: "src/img/COMPANY.jpeg"
    },
    {
      id: 2,
      title: "Contoh 2",
      image: "src/img/navbar_lsp.jpg"
    },
    {
      id: 3,
      title: "Contoh 3",
      image: "src/img/kenapakami.jpg"
    },
    {
      id: 4,
      title: "Contoh 4x",
      image: "src/img/COMPANY.jpeg"
    }
  ];

  return (
    <div
      style={{
        padding: "80px 0",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "100px",
          }}
        >
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            fontFamily: 'Poppins, sans-serif',
            color: '#000000',
            marginBottom: '30px',
            letterSpacing: '-1px'
          }}>
            DAFTAR SKEMA SERTIFIKASI
          </h1>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              position: "relative",
              display: "flex",
              backgroundColor: "white",
              border: "2px solid #7EB3E9",
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}
          >
            <input
              type="text"
              placeholder="Cari skema sertifikasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: "1",
                padding: "15px 20px",
                fontSize: "1.1rem",
                border: "none",
                outline: "none",
                backgroundColor: "transparent"
              }}
            />
            <button
              style={{
                backgroundColor: "#2196f3",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "15px 30px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#1976d2";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#2196f3";
              }}
            >
              Cari
            </button>
          </div>

          {/* Scrollable Cards */}
          <div
            style={{
              marginTop: '40px',
              cursor: 'grab',
              overflow: 'hidden',
              position: 'relative',
            }}
            onMouseDown={(e) => {
              const container = e.currentTarget;
              container.isDown = true;
              container.startX = e.pageX - container.offsetLeft;
              container.scrollLeftStart = container.scrollLeft;
              container.style.cursor = 'grabbing';
            }}
            onMouseLeave={(e) => {
              const container = e.currentTarget;
              container.isDown = false;
              container.style.cursor = 'grab';
            }}
            onMouseUp={(e) => {
              const container = e.currentTarget;
              container.isDown = false;
              container.style.cursor = 'grab';
            }}
            onMouseMove={(e) => {
              const container = e.currentTarget;
              if (!container.isDown) return;
              e.preventDefault();
              const x = e.pageX - container.offsetLeft;
              const walk = (x - container.startX) * 1.5;
              container.scrollLeft = container.scrollLeftStart - walk;
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                padding: '10px 10px 30px 10px',
                overflow: 'visible',
                width: 'max-content',
              }}
            >
              {cardData.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  {/* Shadow Element */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      left: '10px',
                      right: '10px',
                      height: '20px',
                      background: 'rgba(0,0,0,0.15)',
                      borderRadius: '50%',
                      filter: 'blur(8px)',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Card */}
                  <div
                    style={{
                      width: '340px',
                      height: '480px',
                      borderRadius: '15px',
                      border: '3px solid #FF8303',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        height: '65%',
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)'
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div
                      style={{
                        padding: '20px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#2c3e50',
                        textAlign: 'center',
                        height: '35%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CariSkema;