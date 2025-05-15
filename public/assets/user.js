$(document).ready(function(){
    const res = $.parseJSON(
        $.ajax({
        url: 'https://herbaemas.com/detail-bio',
        method: 'get',
        dataType: 'json',
        async: false,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).responseText
    )
    const data = res.data
    const data_user = res.data_user

    const date = new Date(data.tanggal_lahir);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const formatted = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    var bioView = `
        <h6 class="fw-bold text-uppercase mb-3 mt-4 border-bottom pb-2">
            Informasi Pribadi
        </h6>
        <div class="mb-4">
            <label class="form-label text-muted">Email</label>
            <p class="fs-5 fw-semibold">${ data_user.email??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Nama Lengkap</label>
            <p class="fs-5 fw-semibold">${ data_user.fullname??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Jenis Kelamin</label>
            <p class="fs-5 fw-semibold">${ data.jenis_kelamin == 1? 'Laki - Laki':'Perempuan' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Nomor HP (WA)</label>
            <p class="fs-5 fw-semibold">${ data.no_hp??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Tempat Lahir</label>
            <p class="fs-5 fw-semibold">${ data.tempat_lahir??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Tanggal Lahir</label>
            <p class="fs-5 fw-semibold">${ formatted }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Alamat Lengkap</label>
            <p class="fs-5 fw-semibold">${ data.alamat??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Desa/Kelurahan</label>
            <p class="fs-5 fw-semibold">${ data.desa??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Kecamatan</label>
            <p class="fs-5 fw-semibold">${ data.kecamatan??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Kabupaten</label>
            <p class="fs-5 fw-semibold">${ data.kabupaten??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Pendidikan Terakhir</label>
            <p class="fs-5 fw-semibold">${ data.pendidikan_terakhir??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Jurusan</label>
            <p class="fs-5 fw-semibold">${ data.jurusan??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Ketersediaan Penempatan di Purbalingga dan Sekitarnya</label>
            <p class="fs-5 fw-semibold">${ data.ketersediaan == 1? 'Ya, Bersedia': 'Tidak Bersedia' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Sumber Informasi Lowongan Pekerjaan Disini</label>
            <p class="fs-5 fw-semibold">
                                    ${
                                        data.sumber == 1 ? 'Media Sosial Official HEW':
                                        data.sumber == 2 ? 'Media Sosial Lainnya':
                                        data.sumber == 3 ? 'Saudara, Tetangga, Teman, dll':
                                        data.sumber == 4 ? 'Glints, JobStreet, Lumina, dll':
                                        data.sumber == 5 ? 'JobFair':
                                        data.sumber == 6 ? 'Surat Kabar, Majalah, Brosur, dll':'Lainnya'
                                    }
            </p>
        </div>
    `
    $('#bio-view').html(bioView)
})

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