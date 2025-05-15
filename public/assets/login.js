function login() {
  var email = $("#email").val().trim();
  var password = $("#password").val().trim();

  // Validasi dasar
  if (!email || !password) {
    Swal.fire({
        icon: 'warning',
        title: 'Form Belum Lengkap',
        text: 'Email dan kata sandi wajib diisi.'
    });
    return;
  }
  
  // Ganti isi tombol jadi spinner
    $("#btn-login").html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Memproses...');
    $("#btn-login").prop("disabled", true);

  // AJAX kirim ke API
  $.ajax({
    url: "https://herbaemas.com/login-karir",
    type: "POST",
    data: { email: email, password: password },
    dataType: "json",
    success: function (data) {
      if (data.kode == 500) {
        // Login gagal
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal',
            text: data.msg || 'Email atau kata sandi salah.'
        });
      } else {
        // Login berhasil
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil!',
            text: 'Selamat datang kembali.',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            localStorage.setItem("token", data.refreshToken);
            localStorage.setItem("email", email);
            localStorage.setItem("token", data.token);
            window.location.href = "/user-cara-melamar";
        });
      }
    },
    error: function () {
        Swal.fire({
            icon: 'error',
            title: 'Koneksi Gagal',
            text: 'Tidak dapat menghubungi server. Coba lagi nanti.',
            confirmButtonText: 'OK'
        });
    },
    complete: function () {
        // Kembalikan tombol seperti semula
        $("#btn-login").html("Masuk");
        $("#btn-login").prop("disabled", false);
    }
  });
}