$(document).ready(()=> {
    $.ajax({
        type: "GET",
        url: "api/auth/session_info.php",
        dataType: "json",
        encode: true,
        success: (response)=>{
            console.log('good')
            $('#status-label').html(`Welcome to the private area, here you can see private stuff<br>nickname: <code>${response.nickname}</code>`)
            $('#userid-label').html(`user_id: <code>${response.user_id}</code>`)
        },
        error: ()=>{
            $('#status-label').text(`You are not logged in, protected content is hidden!`)
        }
    })
})