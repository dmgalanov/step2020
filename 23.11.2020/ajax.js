

$('form').submit(function (i){
    i.preventDefault();
    let name = $('.name').val();
    let pos = $('.pos').val();
    let age = $('.age').val();
    let pass1 = $('.psw').val();
    let pass2 = $('.psw-repeat').val();
    let name2 = 'dima';



    if (pass1 != pass2) {
        return false;
    }
    $.ajax({
        url: 'http://194.58.122.219/test/jq.php',
        method: 'GET',
        data: {'name': name,
            'staff': pos,
            'age': age,
            'pass1': pass1,
            'pass2': pass2,
            'token': name2},
        success: function (data) {
            console.log(data);
        },
        error: function (error){
            console.log(error);
        }
    });
});



