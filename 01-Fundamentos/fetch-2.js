// Petición GET

// fetch("https://reqres.in/api/users")
//     .then(resp => {
//         // console.log(resp);
//         resp.json().then(console.log);
//     });

// fetch("https://reqres.in/api/users")
//     .then(resp => resp.json())
//     .then(respObj => {
//         console.log(respObj);
//     });

fetch("https://www.wikipedia.org")
    .then(resp => resp.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })