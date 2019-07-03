var namefilled = 0;
var phonefilled = 0;
var emailfilled = 0;
var passwordfilled = 0;
var acceptfilled = 0;
var submission = 0;

function validate() {
    if (
       firstNameFilled &&
        lastNameFilled &&
        phoneFilled &&
        emailFilled &&
        passwordFilled &&
        acceptFilled &&
        submission
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';

        window.open('index2.html', '_blank');
        return true;
    } else {
        return false;
    }
}

function nameTest() {
    let name = document.getElementById('fname').value;

    let re = /^[a-zA-z]{2,30}$/;

    if (re.test(name)) {
        document.getElementById('label-id').innerHTML = 'Valid';
        document.getElementById('label-id').style.color = 'green';
        namefilled = 1;
        localStorage.setItem('Name', name);
    } else {
        document.getElementById('label-id').innerHTML = 'Not Valid';
        document.getElementById('label-id').style.color = 'red';
        namefilled = 0;
    }
    if (
        namefilled &&
        phonefilled &&
        emailfilled &&
        passwordfilled &&
        acceptfilled
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';
    } else {
        document.getElementById('submitbutton').style.backgroundColor =
            'rgb(61, 248, 67)';
    }
}

function phoneTest() {
    let phone = document.getElementById('fphone').value;
    let re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (re.test(phone)) {
        document.getElementById('label1-id').innerHTML = 'Valid';
        document.getElementById('label1-id').style.color = 'green';
        phonefilled = 1;
        localStorage.setItem('Phone', phone);
    } else {
        document.getElementById('label1-id').innerHTML = 'Not Valid';
        document.getElementById('label1-id').style.color = 'red';
        phonefilled = 0;
    }
    if (
        namefilled &&
        phonefilled &&
        emailfilled &&
        passwordfilled &&
        acceptfilled
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';
    } else {
        document.getElementById('submitbutton').style.backgroundColor =
            'rgb(61, 248, 67)';
    }
}

function emailTest() {
    let email = document.getElementById('email').value;
    let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(email)) {
        document.getElementById('label3-id').innerHTML = 'Valid';
        document.getElementById('label3-id').style.color = 'green';
        emailfilled = 1;
        localStorage.setItem('Email', email);
    } else {
        document.getElementById('label3-id').innerHTML = 'Not Valid';
        document.getElementById('label3-id').style.color = 'red';
        emailfilled = 0;
    }
    if (
        namefilled &&
        phonefilled &&
        emailfilled &&
        passwordfilled &&
        acceptfilled
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';
    } else {
        document.getElementById('submitbutton').style.backgroundColor =
            'rgb(61, 248, 67)';
    }
}

function passwordTest() {
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('conpassword').value;
    if (pass !== conpass) {
        document.getElementById('label4-id').innerHTML = 'Password do not match';
        document.getElementById('label4-id').style.color = 'red';
        passwordfilled = 0;
    } else {
        document.getElementById('label4-id').innerHTML = '';
        passwordfilled = 1;
        localStorage.setItem('Password', pass);
    }
    if (
        namefilled &&
        phonefilled &&
        emailfilled &&
        passwordfilled &&
        acceptfilled
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';
    } else {
        document.getElementById('submitbutton').style.backgroundColor =
            'rgb(61, 248, 67)';
    }
}

function acceptTest() {
    var response = document.getElementById('accept').value;
    if (response == 'on') {
        acceptfilled = 1;
    } else {
        acceptfilled = 0;
    }
    if (
        namefilled &&
        phonefilled &&
        emailfilled &&
        passwordfilled &&
        acceptfilled
    ) {
        document.getElementById('submitbutton').style.backgroundColor = 'green';
    } else {
        document.getElementById('submitbutton').style.backgroundColor =
            'rgb(61, 248, 67)';
    }
}

function myFunction() {
    var x = document.getElementById('password');

    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}

function myFunction2() {
    var y = document.getElementById('conpassword');
    if (y.type === 'password') {
        y.type = 'text';
    } else {
        y.type = 'password';
    }
}

function toggleEye(x) {
    x.classList.toggle('fa-eye-slash');
}

// function newPage() {
//     if (submission) {
//         window.open('index2.html', '_blank');
//     }

// }