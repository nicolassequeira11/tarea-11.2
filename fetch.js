document.addEventListener("DOMContentLoaded", function () {  

const form = document.getElementById("form");
const url = "https://jsonplaceholder.typicode.com/users";

form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("inputName").value;
    const apellido = document.getElementById("inputApellido").value;
    const date = document.getElementById("inputDate").value;

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            Fecha: date,
          }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(datos => console.log(datos))
})

});