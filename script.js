const passwordBox = document.querySelector("#password")
const length = 12;
const allChar = "AB34CDtuvwEFGHQRS567TUVW)_+XYZ#$%^&abcdefghijklmnopIJKLMNOPqrsxyz01289!@*(-";


function generatePass(){
    let password = "";
    while(length>password.length) {
        password += allChar[Math.floor(Math.random()* allChar.length)]; // this will take value between 0 to allChar.length
}
passwordBox.value = password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}


// function copyPass() {
//     passwordBox.select();
//     navigator.clipboard.writeText(passwordBox.value).then(() => {
//       alert("Password copied to clipboard!");
//     }).catch(err => {
//       console.error("Failed to copy: ", err);
//     });
//   }
