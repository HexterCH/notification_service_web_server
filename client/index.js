
const toggleAuth = () => {
    var fd = new FormData();
    fd.append('message', document.getElementById(
        'message'
       ).value);

    $.ajax({
        url: 'http://localhost:8000' + '/notification',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            console.log('==================');
            console.log(data);
            console.log('==================');
            // alert(data);
        }
    });
   
}
