
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

const sendPush = () => {
   const pushText = document.getElementById(
        'push'
       ).value
    $.ajax({
        url: 'http://localhost:8088' + '/api/push',
        type: 'POST',
        data: JSON.stringify({
            "notifications": [{
                "tokens": ["2b4c2ee343dc02147cb560c8252149dcf59c1419f896a1507bd07a11cc4c8882", "df34e4841150e469f1d0349f37bbf2d7ab83fbbd247117d977f4c519014339ed"],
                "platform": 1,
                "message": pushText
            }]
        }),
        contentType: 'application/json',
        async: false,
        success: function(data) {
           alert('好啦')
        },
        error: function(error) {
          console.log(error)
          alert('錯啦')
        }
      });
}