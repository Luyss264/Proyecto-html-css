const titlepets = document.getElementById("pets-title");
const button = document.getElementById("names-button");

button.addEventListener('click', () => {
    titlepets.innerHTML = "Lets know Amanda, Augusta, Doroteo, Marta, Mishu and Joaquin";
});