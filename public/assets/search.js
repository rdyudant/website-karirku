// Hapus Keyword
const input = document.getElementById('keyword');
const clearBtn = document.getElementById('clearKeyword');

input.addEventListener('input', function () {
  if (this.value.length > 0) {
    clearBtn.classList.remove('d-none');
  } else {
    clearBtn.classList.add('d-none');
  }
});

clearBtn.addEventListener('click', function () {
  input.value = '';
  input.focus();
  clearBtn.classList.add('d-none');
  // Jika kamu ingin reset hasil pencarian juga, tambahkan:
  document.getElementById('searchResults').innerHTML = '';
});

// Loading Pencarian
$('#searchForm').on('submit', function(e) {
    e.preventDefault();

    const keyword = $('#keyword').val().trim();
    const btn = $('#btnSearch');

    // Tampilkan loading
    btn.prop('disabled', true);
    btn.html('<i class="fas fa-spinner fa-spin me-2"></i>');

    if (!keyword) {
    $('#searchResults').html('<p class="text-muted mt-2">Masukkan kata kunci terlebih dahulu.</p>');
    btn.prop('disabled', false).html('Cari');
    return;
    }

    $.ajax({
    url: '/api/search',
    type: 'GET',
    data: { q: keyword },
    dataType: 'json',
    success: function(data) {
        let html = '';
        if (data.length > 0) {
        data.forEach(job => {
            html += `
            <div class="card mb-3">
                <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <p class="card-text">${job.company} - ${job.location}</p>
                </div>
            </div>`;
        });
        } else {
        html = '<p class="text-muted mt-2">Tidak ada hasil untuk kata kunci tersebut.</p>';
        }
        $('#searchResults').html(html);
    },
    error: function() {
        $('#searchResults').html('<p class="text-danger mt-2">Terjadi kesalahan saat mencari data.</p>');
    },
    complete: function() {
        btn.prop('disabled', false);
        btn.html('Cari');
    }
    });
});