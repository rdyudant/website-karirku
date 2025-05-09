// Cek token saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    if (!token) {
    Swal.fire({
        icon: 'warning',
        title: 'Akses Ditolak',
        text: 'Silakan login terlebih dahulu.'
    }).then(() => {
        window.location.href = '/login';
    });
    }
});

// Fungsi logout
function logout() {
    Swal.fire({
        icon: 'question',
        title: 'Konfirmasi Logout',
        text: 'Anda yakin ingin keluar dari akun?',
        showCancelButton: true,
        confirmButtonText: 'Ya, keluar',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
        localStorage.removeItem('token');
        Swal.fire({
            icon: 'success',
            title: 'Logout Berhasil',
            text: 'Anda telah keluar dari akun.',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = '/';
        });
        }
    });
}