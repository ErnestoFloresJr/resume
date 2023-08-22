setTimeout(() => {
let date= new Date();
let new_year = date.getFullYear();
let age = new_year - 1983;

document.getElementById("age1").innerHTML = age;
}, 1000);
