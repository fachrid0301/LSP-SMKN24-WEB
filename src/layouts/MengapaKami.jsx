import React from 'react';

function MengapaKami() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "80px 40px",
        backgroundColor: "#fff",
      }}
    >
      {/* Judul Mengapa Kami */}
      <div
        style={{
          background: `linear-gradient(to right, #2C94FF, #00C4FF), url('/src/img/kenapakami.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Mengapa Kami?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#fff",
            textAlign: "center",
            margin: "10px 0 0",
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          Karenom komitmen kami untuk meningkatkan kompetensi dan memberikan pelayanan terbaik dalam bidang teknologi informasi nasional maupun internasional.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "600",
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          <span>16,533 Asesi</span>
          <span>218 Asesor</span>
          <span>35 Skema</span>
          <span>103 TUK</span>
        </div>
      </div>

      {/* Proses Sertifikasi */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#111",
            marginBottom: "20px",
          }}
        >
          UJI SERTIFIKASI KOMPETENSI
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "#ccc",
              zIndex: 0,
            }}
          ></div>
          <div
            style={{
              flex: "1",
              backgroundColor: "#F5A623",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>📋</div>
            <h4 style={{ fontSize: "18px", margin: "0 0 10px" }}>SKEMA SERTIFIKASI</h4>
            <p style={{ fontSize: "14px", margin: 0 }}>
              Pelaksanaan uji kompetensi berdasarkan skema sertifikasi yang telah disusun oleh BNSP.
            </p>
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#F5A623",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              flex: "1",
              backgroundColor: "#F5A623",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>🔗</div>
            <h4 style={{ fontSize: "18px", margin: "0 0 10px" }}>300 + LINK DUDI</h4>
            <p style={{ fontSize: "14px", margin: 0 }}>
              Penyediaan link DUDI untuk meningkatkan kompetensi tenaga kerja profesional dan menciptakan peluang kerja.
            </p>
          </div>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#F5A623",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              flex: "1",
              backgroundColor: "#F5A623",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>💻</div>
            <h4 style={{ fontSize: "18px", margin: "0 0 10px" }}>1000 + SOM TERVERIFIKASI</h4>
            <p style={{ fontSize: "14px", margin: 0 }}>
              Dukungan tenaga profesional yang terverifikasi oleh LSP untuk memproses data Digital Skill industri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MengapaKami;