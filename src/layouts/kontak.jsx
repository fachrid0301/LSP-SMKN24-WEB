function Kontak({ onBack }) {
  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      {/* Hero Section with Building Image */}
      <div
        style={{
          position: 'relative',
          height: '500px',
          backgroundImage: "url('src/img/kontak.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Blue overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(44, 148, 255, 0.3)',
            zIndex: 1,
          }}
        ></div>
        {/* Orange Bar at Bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            backgroundColor: '#FF8C00',
            zIndex: 2,
          }}
        ></div>
      </div>

      {/* Breadcrumb Navigation */}
      <div
        style={{
          padding: '20px 60px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            onClick={onBack}
            style={{
              background: 'none',
              border: '1px solid #333',
              color: '#333',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#333';
            }}
          >
            Home
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>{'>'}</span>
          <span style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>
            Kontak
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          padding: '80px 60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Contact Card */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            marginBottom: '60px',
          }}
        >
          {/* Left Side - Contact Information */}
          <div 
            style={{ 
              flex: "1",
              background: "linear-gradient(135deg, #87CEEB 0%, #6BB6FF 100%)",
              padding: "50px 40px",
              color: "#333",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "600",
                marginBottom: "40px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Contact Information
            </h2>

            {/* Address */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#fff",
                    fontWeight: "400",
                  }}
                >
                  Jl. Bambu Hitam No.3, RT.3/RW.1, Bambu Apus,
                  <br />
                  Kec. Cipayung, Kota Jakarta Timur, Daerah
                  <br />
                  Khusus Ibukota Jakarta 13890
                </p>
              </div>
              {/* Decorative line below */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "-10px",
                  height: "1px",
                  backgroundColor: "#7EB3E9",
                }}
              ></div>
            </div>

            {/* Phone */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#fff",
                  fontWeight: "400",
                }}
              >
                (021)8441976
              </p>
              {/* Decorative line below */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "-10px",
                  height: "1px",
                  backgroundColor: "#7EB3E9",
                }}
              ></div>
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#fff",
                  fontWeight: "400",
                }}
              >
                info@smkn24jkt.sch.id
              </p>
              {/* Decorative line below */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "-10px",
                  height: "1px",
                  backgroundColor: "#7EB3E9",
                }}
              ></div>
            </div>

            {/* Website */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#fff",
                  fontWeight: "400",
                }}
              >
                https://smkn24jkt.sch.id/
              </p>
            </div>

            {/* Decorative elements */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "100px",
                height: "100px",
                background: "linear-gradient(45deg, rgba(255,255,255,0.1), transparent)",
                borderRadius: "50%",
                opacity: "0.5",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                left: "10px",
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
                borderRadius: "50%",
                opacity: "0.3",
              }}
            ></div>
          </div>

          {/* Right Side - Send Us Messages Form */}
          <div 
            style={{ 
              flex: "1",
              padding: "50px 40px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Send Us Messages
            </h2>

            <div>
              {/* Email Field */}
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    width: "100%",
                    padding: "15px 20px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2C94FF";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e0e0e0";
                  }}
                />
              </div>

              {/* Subject Field */}
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "15px 20px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2C94FF";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e0e0e0";
                  }}
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: "30px" }}>
                <textarea
                  placeholder="Message"
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "15px 20px",
                    border: "2px solid #e0e0e0",
                    borderRadius: "15px",
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.3s ease",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2C94FF";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e0e0e0";
                  }}
                ></textarea>
              </div>

              {/* Send Button */}
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "transparent",
                    color: "#2C94FF",
                    padding: "12px 30px",
                    border: "2px solid #2C94FF",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2C94FF";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#2C94FF";
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          style={{
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.760254037896!2d106.9445!3d-6.3064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecfa8b8b8b8b%3A0x1234567890abcdef!2sJl.%20Bambu%20Hitam%20No.3%2C%20RT.3%2FRW.1%2C%20Bambu%20Apus%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013890!5e0!3m2!1sen!2sid!4v1623456789013!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
        padding: '40px 60px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left Side - MyLSP Section */}
        <div style={{
          flex: '0 0 300px',
          paddingRight: '40px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: 'white'
          }}>
            MyLSP
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'white',
            opacity: '0.95',
            marginBottom: '25px'
          }}>
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>
          
          {/* Social Media Icons */}
          <div style={{
            display: 'flex',
            gap: '15px'
          }}>
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '20px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '20px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h2.5l.5-3h-3V8.5a.5.5 0 0 1 .5-.5H18V5z"/>
              </svg>
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '20px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Links and Contact */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '600px'
        }}>
          {/* Know More About Section */}
          <div style={{
            flex: '1',
            paddingRight: '40px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Know More About:
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                'Tentang Kami',
                'Visi dan Misi',
                'Struktur Organisasi',
                'Skema Sertifikasi'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <a 
                    href="#" 
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      opacity: '0.9',
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '1'}
                    onMouseOut={(e) => e.target.style.opacity = '0.9'}
                  >
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div style={{ marginTop: '25px' }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  'Syarat dan Ketentuan',
                  'Jadwal Asesmen',
                  'Berita',
                  'Kirim Foto dan Video'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <a 
                      href="#" 
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '14px',
                        opacity: '0.9',
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '1'}
                      onMouseOut={(e) => e.target.style.opacity = '0.9'}
                    >
                      <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div style={{
            flex: '0 0 180px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Contact Us:
            </h3>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                backgroundColor: '#6B7280',
                color: 'white',
                border: '2px solid #6B7280',
                borderRadius: '25px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#4B5563';
                e.target.style.borderColor = '#4B5563';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#6B7280';
                e.target.style.borderColor = '#6B7280';
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Kontak