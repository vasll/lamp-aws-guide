$.ajax({
    type: "GET",
    url: "api/auth/session_info.php",
    dataType: "json",
    encode: true,
    success: (response)=>{
        $('#status-label').html(`nickname: <code>${response.nickname}</code><br>
        user_id: <code>${response.user_id}</code><br>
        session_id: <code>${response.session_id}</code>`)
    },
    error: ()=>{
        window.location.href = 'error.html';
    }
}).done((r)=>{console.log(r)})