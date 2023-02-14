const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    const emailId = document.getElementById('email')
    const password = document.getElementById('password')
    if (emailId.value == 'naimur.rezaa@gmail.com' && password.value == '12345'){
        const mainContent = document.getElementById('mainArea')
        location.href = 'home.html'
    }
    else {
        alert('Incorrect username & password')
    }

})