// KONFIRMASI KATA SANDI
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    const password = document.getElementById('password');
    const konfirmasi = document.getElementById('konfirmasi');

    form.addEventListener('submit', (e) => {
        if (password.value !== konfirmasi.value) {
        konfirmasi.classList.remove('is-valid');
        konfirmasi.classList.add('is-invalid');
        e.preventDefault();
        } else {
        konfirmasi.classList.remove('is-invalid');
        konfirmasi.classList.add('is-valid');
        }
    });

    konfirmasi.addEventListener('input', () => {
        if (password.value === konfirmasi.value) {
        konfirmasi.classList.remove('is-invalid');
        konfirmasi.classList.add('is-valid');
        } else {
        konfirmasi.classList.remove('is-valid');
        konfirmasi.classList.add('is-invalid');
        }
    });
});

function daftar() {
    var nama = $("#nama").val().trim();
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();
    var konfirmasi = $("#konfirmasi").val().trim();

    // Validasi manual
    if (!nama || !email || !password || !konfirmasi) {
        Swal.fire({
            icon: 'warning',
            title: 'Form Belum Lengkap',
            text: 'Harap isi semua kolom.'
        });
        return;
    }

    if (password !== konfirmasi) {
        Swal.fire({
            icon: 'error',
            title: 'Konfirmasi Salah',
            text: 'Kata sandi dan konfirmasi tidak cocok.'
        });
        return;
    }

    // Spinner & disable tombol
    const btn = $(".btn-primary-custom");
    btn.html('<span class="spinner-border spinner-border-sm me-2" role="status"></span>Memproses...');
    btn.prop("disabled", true);

    $.ajax({
        url: "https://herbaemas.com/register-karir",
        type: "POST",
        data: {
            fullname: nama,
            email: email,
            password: password
        },
        dataType: "json",
        success: function (data) {
            Swal.fire({
                icon: data.status == 200 ? 'success' : 'error',
                title: data.status == 200 ? 'Berhasil!' : 'Gagal!',
                text: data.msg
            }).then(() => {
                if (data.status == 200) {
                    window.location.href = '/login';
                }
            });
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Kesalahan Server',
                text: 'Gagal menghubungi server. Coba lagi nanti.'
            });
        },
        complete: function () {
            btn.html('Daftar Sekarang');
            btn.prop("disabled", false);
        }
    });
}