import React, { useState, useEffect, useRef } from 'react';
import Navbar from './layouts/Navbar';
import Dashboard, { DashboardSidebar } from './layouts/Dashboard';
import Home from './layouts/Home';
import Profil from './layouts/Profil';
import MengapaKami from './layouts/MengapaKami';
import Skema from './layouts/Skema';
import CariSkema from './layouts/CariSkema';
import FooterPage from './layouts/FooterPage';
import Register from './layouts/Register';
import Login from './layouts/Login';
import SertifikasiCTA from './layouts/SertifikasiCTA';
import LandingPage from './layouts/DetailSertifikasi';
import Kontak from './layouts/kontak';
import ManajemenData from './layouts/ManajemenData';
import Asesor from './layouts/Asesor';
import AddAsesor from './layouts/AddAsesor';
import EditAsesor from './layouts/EditAsesor';
import Asesi from './layouts/Asesi';
import AddAsesi from './layouts/AddAsesi';
import EditAsesi from './layouts/EditAsesi';
import Asesmen from './layouts/Asesmen';
import Jurusan from './layouts/Jurusan';
import AddJurusan from './layouts/AddJurusan';
import EditJurusan from './layouts/EditJurusan';
import Kompetensi from './layouts/Kompetensi';
import ListAsesmen from './layouts/ListAsesmen';
import AsesmenDiikuti from './layouts/AsesmenDiikuti';
import Berita from './layouts/Berita';
import AddListAsesmen from './layouts/AddListAsesmen';
import EditListAsesmen from './layouts/EditListAsesmen';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [pendingScroll, setPendingScroll] = useState(null);
  const [editData, setEditData] = useState(null);
  const [asesorData, setAsesorData] = useState([
    { id: 1, no: 1, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { id: 2, no: 2, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2024' },
    { id: 3, no: 3, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },
    { id: 4, no: 4, nama: 'Arul Maulita Singo, M.kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2024' },    
  ]);
  const [asesiData, setAsesiData] = useState([
    { id: 1, no: 1, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '12' },
    { id: 2, no: 2, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '11' },
    { id: 3, no: 3, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Rekayasa Perangkat Lunak', kelas: '10' },
    { id: 4, no: 4, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Perhotelan', kelas: '11' },
    { id: 5, no: 5, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Busana', kelas: '11' },
    { id: 6, no: 6, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Usaha Layanan Pariwisata', kelas: '11' },
    { id: 7, no: 7, nama: 'Erwin Abristor Mega', pekerjaan: 'Siswa', jurusan: 'Kuliner', kelas: '11' }
  ]);
  const [jurusanData, setJurusanData] = useState([
    { id: 1, kompetensiKeahlian: 'Rekayasa Perangkat Lunak', jumlahSiswa: '45' },
    { id: 2, kompetensiKeahlian: 'Teknik Komputer dan Jaringan', jumlahSiswa: '38' },
    { id: 3, kompetensiKeahlian: 'Multimedia', jumlahSiswa: '42' },
    { id: 4, kompetensiKeahlian: 'Perhotalan', jumlahSiswa: '35' },
    { id: 5, kompetensiKeahlian: 'Busana', jumlahSiswa: '28' },
    { id: 6, kompetensiKeahlian: 'Usaha Layanan Pariwisata', jumlahSiswa: '30' },
    { id: 7, kompetensiKeahlian: 'Kuliner', jumlahSiswa: '32' },
  ]);
  const [assessmentData, setAssessmentData] = useState([
    {
      id: 1,
      namaJadwal: 'Sertifikasi Web Developer - Batch 1',
      tuk: 'TUK LSP Digital',
      pembiayaan: 'Dibayar Penuh',
      tanggalUjian: '2025-09-15',
      lokasiUjian: 'Jakarta Pusat',
      asesor: 'Asesor A',
      jumlahPeserta: 20,
    },
    {
      id: 2,
      namaJadwal: 'Sertifikasi Mobile App Developer',
      tuk: 'TUK LSP Mobile',
      pembiayaan: 'Belum Dibayar',
      tanggalUjian: '2025-09-22',
      lokasiUjian: 'Bandung',
      asesor: 'Asesor B',
      jumlahPeserta: 15,
    },
    {
      id: 3,
      namaJadwal: 'Sertifikasi Data Analyst',
      tuk: 'TUK LSP Data',
      pembiayaan: 'Dibayar Penuh',
      tanggalUjian: '2025-09-30',
      lokasiUjian: 'Surabaya',
      asesor: 'Asesor C',
      jumlahPeserta: 25,
    },
  ]);

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const sertifikasiRef = useRef(null);
  const galeriRef = useRef(null);
  const kontakRef = useRef(null);

  const pagesWithSidebar = [
    'manajemenData',
    'asesor',
    'asesi',
    'asesmen',
    'jurusan',
    'kompetensi',
    'listasesmen',
    'asesmenDiikuti',
  ];

  const scrollToSection = (section) => {
    if (['register', 'dashboard', 'login', 'manajemenData'].includes(section)) {
      setCurrentPage(section);
      if (section === 'dashboard') {
        setActiveMenu('Dashboard');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === 'kontak') {
      setCurrentPage('kontak');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (section === 'berita') {
      setCurrentPage('berita');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setPendingScroll(section);
    } else {
      const refs = {
        home: homeRef,
        profile: profileRef,
        sertifikasi: sertifikasiRef,
        galeri: galeriRef,
        kontak: kontakRef,
      };
      refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (currentPage === 'home' && pendingScroll) {
      const refs = {
        home: homeRef,
        profile: profileRef,
        sertifikasi: sertifikasiRef,
        galeri: galeriRef,
        kontak: kontakRef,
      };
      refs[pendingScroll]?.current?.scrollIntoView({ behavior: 'smooth' });
      setPendingScroll(null);
    }
  }, [currentPage, pendingScroll]);

  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setActiveMenu('Dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLandingPage = () => {
    setCurrentPage('landingPage');
  };

  const handleNavigate = (page, data = null) => {
    const pageLower = page.toLowerCase();
    setCurrentPage(pageLower);
    if (data) {
      setEditData(data);
    }

    const menuMap = {
      dashboard: 'Dashboard',
      manajemenData: 'ManajemenData',
      listasesmen: 'ListAsesmen',
      asesmenDiikuti: 'AsesmenDiikuti',
      profile: 'Profile',
      addlistasesmen: 'ManajemenData',
      addjurusan: 'ManajemenData',
      editjurusan: 'ManajemenData',
      editlistasesmen: 'ManajemenData',
      addasesor: 'ManajemenData',
      editasesor: 'ManajemenData',
      addasesi: 'ManajemenData',
      editasesi: 'ManajemenData',
    };

    if (['asesor', 'asesi', 'asesmen', 'jurusan', 'kompetensi', 'addlistasesmen', 'addjurusan', 'editjurusan', 'addasesor', 'editasesor', 'addasesi', 'editasesi'].includes(pageLower)) {
      setActiveMenu('ManajemenData');
    } else if (menuMap[pageLower]) {
      setActiveMenu(menuMap[pageLower]);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSidebarMenuClick = (menuName) => {
    if (menuName === 'Logout') {
      if (confirm('Apakah Anda yakin ingin logout?')) {
        alert('Logout berhasil!');
        handleBackToHome();
      }
      return;
    }

    setActiveMenu(menuName);

    const pageMap = {
      Dashboard: 'dashboard',
      ManajemenData: 'manajemenData',
      ListAsesmen: 'listasesmen',
      AsesmenDiikuti: 'asesmenDiikuti',
      Profile: 'dashboard',
    };

    if (pageMap[menuName]) {
      setCurrentPage(pageMap[menuName]);
    }
  };

  const handleAddAssessment = (newItem) => {
    setAssessmentData([...assessmentData, newItem]);
    handleNavigate('listasesmen');
  };

  const handleEditAssessment = (updatedItem) => {
    setAssessmentData(prevData =>
      prevData.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    handleNavigate('listasesmen');
  };

  const handleAddJurusan = (newItem) => {
    setJurusanData([...jurusanData, newItem]);
    handleNavigate('jurusan');
  };

  const handleEditJurusan = (updatedItem) => {
    setJurusanData(prevData =>
      prevData.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    handleNavigate('jurusan');
  };

  const handleAddAsesor = (newData) => {
    const newId = Math.max(...asesorData.map(a => a.id), 0) + 1;
    const newNo = Math.max(...asesorData.map(a => a.no), 0) + 1;
    setAsesorData([...asesorData, { ...newData, id: newId, no: newNo }]);
    handleNavigate('asesor');
  };

  const handleEditAsesor = (updatedData) => {
    setAsesorData(asesorData.map(asesor =>
      asesor.id === updatedData.id ? updatedData : asesor
    ));
    handleNavigate('asesor');
  };

  const handleAddAsesi = (newData) => {
    const newId = Math.max(...asesiData.map(a => a.id), 0) + 1;
    const newNo = Math.max(...asesiData.map(a => a.no), 0) + 1;
    setAsesiData([...asesiData, { ...newData, id: newId, no: newNo }]);
    handleNavigate('asesi');
  };

  const handleEditAsesi = (updatedData) => {
    setAsesiData(asesiData.map(asesi =>
      asesi.id === updatedData.id ? updatedData : asesi
    ));
    handleNavigate('asesi');
  };

  return (
    <>
      {(currentPage === 'home' || currentPage === 'kontak' || currentPage === 'berita' || currentPage === 'landingPage') && (
        <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
      )}

      {currentPage === 'home' && (
        <>
          <div ref={homeRef}>
            <Home
              goToRegister={() => setCurrentPage('register')}
              goToDashboard={() => {
                setCurrentPage('dashboard');
                setActiveMenu('Dashboard');
              }}
            />
          </div>
          <div ref={profileRef}>
            <Profil />
          </div>
          <div ref={sertifikasiRef}>
            <MengapaKami />
          </div>
          <div>
            <Skema />
          </div>
          <SertifikasiCTA
            goToRegister={() => setCurrentPage('register')}
            goToDashboard={() => {
              setCurrentPage('dashboard');
              setActiveMenu('Dashboard');
            }}
          />
          <div ref={galeriRef}>
            <CariSkema goToLandingPage={goToLandingPage} />
          </div>
          <div ref={kontakRef}>
            <FooterPage />
          </div>
        </>
      )}

      {currentPage === 'kontak' && <Kontak onBack={handleBackToHome} />}
      {currentPage === 'berita' && <Berita onBack={handleBackToHome} />}
      {currentPage === 'dashboard' && (
        <Dashboard onBack={handleBackToHome} onNavigate={handleNavigate} />
      )}

      {pagesWithSidebar.includes(currentPage) && (
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: '#f5f5f5',
          }}
        >
          <DashboardSidebar
            activeMenu={activeMenu}
            onMenuClick={handleSidebarMenuClick}
          />
          <div
            style={{
              flex: 1,
              backgroundColor: '#fafafa',
              padding: '20px',
            }}
          >
            {currentPage === 'manajemenData' && (
              <ManajemenData onNavigate={handleNavigate} onBack={handleBackToHome} />
            )}
            {currentPage === 'asesor' && (
              <Asesor
                onBack={handleBackToHome}
                onNavigate={handleNavigate}
                asesorData={asesorData}
                setAsesorData={setAsesorData}
              />
            )}
            {currentPage === 'asesi' && (
              <Asesi
                onBack={handleBackToHome}
                onNavigate={handleNavigate}
                asesiData={asesiData}
                setAsesiData={setAsesiData}
              />
            )}
            {currentPage === 'asesmen' && (
              <Asesmen 
                onBack={handleBackToHome} 
                onNavigate={handleNavigate}
                assessmentData={assessmentData}
                setAsesmenData={setAssessmentData}
              />
            )}
            {currentPage === 'jurusan' && (
              <Jurusan
                onBack={handleBackToHome}
                onNavigate={handleNavigate}
                jurusanData={jurusanData}
                setJurusanData={setJurusanData}
              />
            )}
            {currentPage === 'kompetensi' && <Kompetensi onBack={handleBackToHome} />}
            {currentPage === 'listasesmen' && (
              <ListAsesmen
                onBack={handleBackToHome}
                onNavigate={handleNavigate}
                assessmentData={assessmentData}
                setAssessmentData={setAssessmentData}
              />
            )}
            {currentPage === 'asesmenDiikuti' && (
              <AsesmenDiikuti onBack={handleBackToHome} />
            )}
          </div>
        </div>
      )}

      {currentPage === 'addasesor' && (
        <AddAsesor
          onSave={handleAddAsesor}
          onCancel={() => handleNavigate('asesor')}
        />
      )}
      {currentPage === 'editasesor' && (
        <EditAsesor
          data={editData}
          onSave={handleEditAsesor}
          onCancel={() => handleNavigate('asesor')}
        />
      )}
      {currentPage === 'addasesi' && (
        <AddAsesi
          onSave={handleAddAsesi}
          onCancel={() => handleNavigate('asesi')}
        />
      )}
      {currentPage === 'editasesi' && (
        <EditAsesi
          data={editData}
          onSave={handleEditAsesi}
          onCancel={() => handleNavigate('asesi')}
        />
      )}
      {currentPage === 'addjurusan' && (
        <AddJurusan
          onBack={() => handleNavigate('jurusan')}
          onSave={handleAddJurusan}
        />
      )}
      {currentPage === 'editjurusan' && (
        <EditJurusan
          onBack={() => handleNavigate('jurusan')}
          onSave={handleEditJurusan}
          initialData={editData}
        />
      )}
      {currentPage === 'addlistasesmen' && (
        <AddListAsesmen
          onBack={() => handleNavigate('listasesmen')}
          onSave={handleAddAssessment}
          assessmentData={assessmentData}
        />
      )}
      {currentPage === 'editlistasesmen' && (
        <EditListAsesmen
          onBack={() => handleNavigate('listasesmen')}
          onSave={handleEditAssessment}
          item={editData}
        />
      )}
      {currentPage === 'register' && <Register onBack={handleBackToHome} />}
      {currentPage === 'login' && <Login onBack={handleBackToHome} />}
      {currentPage === 'landingPage' && <LandingPage onBack={handleBackToHome} />}
    </>
  );
}

export default App;