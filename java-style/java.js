document.getElementById('login-btn').addEventListener('click', function (e) {
  e.preventDefault()
  const email = document.getElementById('email-input');
  const newEmail = email.value.toLowerCase()
  const pass = document.getElementById('password-input');
  const newPass = pass.value
  const convertedNewPass = parseInt(newPass)
  if (newEmail && newPass) {
    if (newEmail === "mujo2025@gmail.com" && convertedNewPass === 12345) {
       window.location.href = 'profile.html'; 
    } else {
      console.log('this nai')
    }
  } else {
    alert('fill both')
  }
})





