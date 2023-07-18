let user_name = prompt("Inserisci il tuo nome :");
let user_last_name = prompt("Inserisci il tuo cognome :")
let user_fav_color = prompt("Inserisci il tuo colore preferito :")
let age = prompt("Inserisci la tua età :")
let final_username = user_name + user_last_name + user_fav_color + age;
document.getElementById("username").innerHTML = final_username;