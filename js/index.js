var userName = document.querySelector(".Signup-box .userName")
var userEmail = document.querySelector(".Signup-box .email")
var password = document.querySelector(".Signup-box .password")
var acountList = []

if (localStorage.getItem("acountList") != null) {
    acountList = JSON.parse(localStorage.getItem("acountList"))
}

function signUp() {
    if (validateUserName() === true && validateUserEmail() === true && validatePassword() === true && isExist() !== true) {
        var acount = {
            name: userName.value,
            email: userEmail.value,
            pass: password.value,
        }
        acountList.push(acount)
        localStorage.setItem('acountList', JSON.stringify(acountList))
        document.getElementById("success").classList.replace("d-none", "d-block")
        document.getElementById("worngName").classList.replace("d-block", "d-none")
        document.getElementById("worngEmail").classList.replace("d-block", "d-none")
        document.getElementById("worngPass").classList.replace("d-block", "d-none")
        document.getElementById("exist").classList.replace("d-blok", "d-none")
        document.getElementById("required").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("success").classList.replace("d-blok", "d-none")

        if (userName.value == "" && userEmail.value == "" && password.value == "") {
            document.getElementById("required").classList.replace("d-none", "d-block")
        } else {
            document.getElementById("required").classList.replace("d-block", "d-none")

            if (validateUserName() === false) {
                document.getElementById("worngName").classList.replace("d-none", "d-block")
            } else {
                document.getElementById("worngName").classList.replace("d-block", "d-none")
            }

            if (validateUserEmail() === false) {
                document.getElementById("worngEmail").classList.replace("d-none", "d-block")
            } else {
                document.getElementById("worngEmail").classList.replace("d-block", "d-none")
            }

            if (validatePassword() === false) {
                document.getElementById("worngPass").classList.replace("d-none", "d-block")
            } else {
                document.getElementById("worngPass").classList.replace("d-block", "d-none")
            }
        }
    }
}

function isExist() {
    for (var i = 0; i < acountList.length; i++) {
        if (acountList[i].name == userName.value ||
            acountList[i].email == userEmail.value
        ) {
            document.getElementById("exist").classList.replace("d-none", "d-block")
            return true

        }
    }
}


function validateUserName() {
    var regex = /^[a-z]{3,}$/;
    if (regex.test(userName.value)) {
        return true;
    } else {
        return false;
    }
}

function validateUserEmail() {
    var regex = /^[a-z]{3,}(\@gmail|\@yahoo)\.com$/;
    if (regex.test(userEmail.value)) {
        return true;
    } else {
        return false;
    }
}

function validatePassword() {
    var regex = /^[a-z]{6,}$/;
    if (regex.test(password.value)) {
        return true;
    } else {
        return false;
    }
}


var userNameSession = JSON.parse(localStorage.getItem("username"))
var loginEmail = document.getElementById("loginEmail")
var loginPass = document.getElementById("loginPass")
function login() {
    for (var i = 0; i < acountList.length; i++) {
        if (acountList[i].email == loginEmail.value &&
            acountList[i].pass == loginPass.value) {

            userNameSession = acountList[i].name
            localStorage.setItem("username", JSON.stringify(userNameSession))
            window.location.href = "index2.html"
            document.getElementById("wrong").classList.replace("d-block", "d-none")
            return true
        } else {
            if (loginEmail.value == '' || loginPass.value == '') {
                document.getElementById("requiredLogin").classList.replace("d-none", "d-block")

            } else {
                document.getElementById("requiredLogin").classList.replace("d-block", "d-none")
                document.getElementById("wrong").classList.replace("d-none", "d-block")
            }

        }
    }
}


function displayWelcome() {
    var cartona = `welcome ${userNameSession}`
    document.getElementById("welcomeUser").innerHTML = cartona


}




function logout() {
    localStorage.removeItem("username", JSON.stringify(userNameSession))
}