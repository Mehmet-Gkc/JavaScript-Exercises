const pass = document.getElementById("pass");
const checkbox = document.getElementById("check");

check.addEventListener("click", e => {
    console.log(checkbox.checked);
    if(checkbox.checked === true) {
        pass.setAttribute("type", "text");
    } else {
        pass.setAttribute("type", "password");
    }
})