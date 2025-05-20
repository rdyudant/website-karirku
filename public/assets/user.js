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
    const pengalamans = res.pengalaman
    const berkas = res.berkas
    var cv = '#'
    var ktp = '#'
    var ijazah = '#'
    var kk = '#'
    var berkas_lain = '#'
    for (let b = 0; b < berkas.length; b++) {
        if(berkas[b].jenis == 'cv'){
            cv = `https://herbaemas.com/cv/${ berkas[b].fileberkas }`
        }
        if(berkas[b].jenis == 'ktp'){
            ktp = `https://herbaemas.com/ktp/${ berkas[b].fileberkas }`
        }
        if(berkas[b].jenis == 'ijazah'){
            ijazah = `https://herbaemas.com/ijazah/${ berkas[b].fileberkas }`
        }
        if(berkas[b].jenis == 'kk'){
            kk = `https://herbaemas.com/kk/${ berkas[b].fileberkas }`
        }
        if(berkas[b].jenis == 'berkas_lain'){
            berkas_lain = `https://herbaemas.com/berkas-lain/${ berkas[b].fileberkas }`
        }
    }


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
        <h6 class="fw-bold text-uppercase mb-3 mt-5 border-bottom pb-2">
            Pengalaman Kerja
        </h6>
        <div class="mb-4">
            <label class="form-label text-muted">Pengalaman Kerja Sebelumnya</label>
            <p class="fs-5 fw-semibold">${ pengalamans.lama == 1? 'Fresh Graduated': pengalamans.lama == 2? '&lt;1 Tahun':pengalamans.lama == 3? '1-2 Tahun (bidang yang sama)':pengalamans.lama == 4?'2-3 Tahun (bidang yang sama)':pengalamans.lama == 5?'3-5 Tahun (bidang yang sama)':'>5 Tahun (bidang yang sama)' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Pekerjaan Sebelumnya</label>
            <p class="fs-5 fw-semibold">${ pengalamans.pekerjaan_sebelumnya??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Jabatan/Posisi Pekerjaan Sebelumnya</label>
            <p class="fs-5 fw-semibold">${ pengalamans.jabatan??'-' }</p>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Uraian Tugas Pekerjaan Sebelumnya</label>
            <p class="fs-5 fw-semibold">${ pengalamans.uraian??'-' }</p>
        </div>

        <h6 class="fw-bold text-uppercase mb-3 mt-5 border-bottom pb-2">
            Berkas Lamaran
        </h6>
        <div class="mb-4">
            <label class="form-label text-muted">CV / Curriculum Vitae</label>
            <div>
                <a href="${ cv }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat CV
                </a>
            </div>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Kartu Tanda Penduduk</label>
            <div>
                <a href="${ ktp }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat KTP
                </a>
            </div>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Ijazah Terakhir</label>
            <div>
                <a href="${ ijazah }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat Ijazah
                </a>
            </div>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Kartu Keluarga</label>
            <div>
                <a href="${ kk }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat KK
                </a>
            </div>
        </div>
        <div class="mb-4">
            <label class="form-label text-muted">Surat / Dokumen Pendukung Lain</label>
            <div>
                <a href="${ berkas_lain }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat Surat
                </a>
            </div>
        </div>
    `
    $('#bio-view').html(bioView)   
            
    var bioLamar = `
        <div class="mb-3">
            <label for="namaLengkap" class="form-label">Nama Lengkap</label>
            <input type="text" class="form-control" id="namaLengkap" value="${ data_user.fullname??'-' }" disabled>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" value="${ data_user.email??'-' }" disabled>
        </div>
        <div class="mb-3">
            <label for="telepon" class="form-label">Nomor Telepon</label>
            <input type="text" class="form-control" id="telepon" value="${ data.no_hp??'-' }" disabled>
        </div>
        <div class="mb-3">
            <label class="form-label">CV / Curriculum Vitae</label>
            <div>
                <a href="${ cv }" target="_blank" class="btn btn-sm btn-outline-custom">
                    <i class="fas fa-file-pdf me-1"></i> Lihat CV
                </a>
            </div>
        </div>
    `
    $('#bio-lamar').html(bioLamar)
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