const express = require('express');
const app = express();
const path = require('path');

// Setting view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, JS, IMG)
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.get('/', (req, res) => {
    res.render('index', { title: 'KarirKu | Herba Emas Wahidatama' });
});
app.get('/login', (req, res) => {
    res.render('login', { title: 'KarirKu | Masuk' });
});
app.get('/signup', (req, res) => {
    res.render('signup', { title: 'KarirKu | Daftar' });
});
app.get('/detail-loker', (req, res) => {
    res.render('detail-loker', { title: 'KarirKu | Detail Lowongan' });
});
app.get('/user-index', (req, res) => {
    res.render('user-index', { activePage: 'user-index', title: 'Selamat Datang | KarirKu' });
});
app.get('/user-detail-loker', (req, res) => {
    res.render('user-detail-loker', { activePage: 'user-detail-loker', title: 'Detail Lowongan | KarirKu' });
});
app.get('/user-cara-melamar', (req, res) => {
  res.render('user-cara-melamar', { activePage: 'user-cara-melamar', title: 'Panduan Melamar | KarirKu' });
});
app.get('/user-informasi', (req, res) => {
    res.render('user-informasi', { activePage: 'user-informasi', title: 'Informasi Pelamar | KarirKu' });
});
app.get('/user-riwayat', (req, res) => {
    res.render('user-riwayat', { activePage: 'user-riwayat', title: 'Riwayat Lamaran | KarirKu' });
});
app.get('/user-edit-informasi', (req, res) => {
    res.render('user-edit-informasi', { activePage: 'user-informasi', title: 'Ubah Informasi | KarirKu' });
});
app.get('/user-akun', (req, res) => {
    res.render('user-akun', { activePage: 'user-akun', title: 'Kelola Akun | KarirKu' });
});
app.get('/api/search', (req, res) => {
    const q = req.query.q.toLowerCase();
    const jobs = [
      { title: 'Frontend Developer', company: 'PT Teknologi Maju', location: 'Jakarta' },
      { title: 'UI/UX Designer', company: 'CV Kreatif Digital', location: 'Bandung' },
      { title: 'Backend Developer', company: 'Startup Inovatif', location: 'Surabaya' }
    ];
    const results = jobs.filter(job =>
      job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q)
    );
    res.json(results);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
