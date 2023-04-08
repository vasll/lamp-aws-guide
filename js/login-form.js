$(document).ready(()=> {
    $("#login-form").submit((event)=> {
        $.ajax({
            type: "POST",
            url: "api/auth/login.php",
            data: { nickname: $("#nickname-input").val(), password: $("#password-input").val() },
            dataType: "json",
            encode: true,
            success: (response)=>{
                $('#status-label-login').text(`Login successful!`)
            },
            error: ()=>{ $('#status-label-login').text(`Login error`) }
        })
    
        event.preventDefault();
    });
});