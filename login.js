var userName = {
    password: 'Resi@2018'
}

function preencherForm() {
    document.getElementById("inputEmail").value = document.getElementById("selectEmail").value
    document.getElementById("password").value = userName.password
}