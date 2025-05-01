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
    res.render('user-index', { title: 'KarirKu - Selamat Datang' });
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'KarirKu - Selamat Datang' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
