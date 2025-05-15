function daftar(){
    var nama = $('#nama').val()
    var email = $('#email').val()
    var password = $('#password').val()

    const register = $.parseJSON(
        $.ajax({
        url: 'https://herbaemas.com/register-karir',
        method: 'post',
        data:{
            nama: nama,
            email: email,
            password: password
        },
        dataType: 'json',
        async: false,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }}).responseText
    )
    if(register.status == 200){
        Swal.fire({
            title: "",
            text: `${ register.msg }`,
            icon: "success"
        });
    }else{
        Swal.fire({
            title: "",
            text: `${ register.msg }`,
            icon: "error"
        });
    }
}