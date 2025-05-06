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
    res.render('index', { title: 'KarirKu - Herba Emas Wahidatama' });
});
app.get('/login', (req, res) => {
    res.render('login', { title: 'KarirKu - Masuk' });
});
app.get('/signup', (req, res) => {
    res.render('signup', { title: 'KarirKu - Daftar' });
});
app.get('/user-index', (req, res) => {
    res.render('user-index', { activePage: 'user-index', title: 'KarirKu - Selamat Datang' });
});
app.get('/user-riwayat', (req, res) => {
    res.render('user-riwayat', { activePage: 'user-riwayat', title: 'KarirKu - Riwayat Lamaran' });
});
app.get('/user-biodata', (req, res) => {
    res.render('user-biodata', { activePage: 'user-biodata', title: 'KarirKu - Biodata' });
});
app.get('/user-edit-biodata', (req, res) => {
    res.render('user-edit-biodata', { activePage: 'user-biodata', title: 'KarirKu - Edit Biodata' });
});
app.get('/user-akun', (req, res) => {
    res.render('user-akun', { activePage: 'user-akun', title: 'KarirKu - Kelola Akun' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
