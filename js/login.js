//step 1
document.getElementById('sumbit-btn').addEventListener('click', function(){
    //step2
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value
    
    //step 3
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value
    
    //step 4

    if(email === 'baperbank@gmail.com' && password === '123456'){
        location.href = "bank.html"
    }

})