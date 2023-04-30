const form = document.getElementById("submit-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const postData = async (data) => {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    alert(`Post request is successful.!\nThank you ${name.value} :)` );
    console.log(json);
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = {
        name: name.value,
        email: email.value,
        password: password.value,
        message: message.value,
        checkbox: checkbox.checked
    }
    postData()
})



