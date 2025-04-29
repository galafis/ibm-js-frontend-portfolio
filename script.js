// Script básico com interação

const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeButton");

let messageChanged = false;

changeButton.addEventListener("click", () => {
    if (!messageChanged) {
        messageParagraph.textContent = "Mensagem alterada pelo JavaScript!";
        messageChanged = true;
    } else {
        messageParagraph.textContent = "Demonstração de HTML, CSS e JavaScript.";
        messageChanged = false;
    }
});

console.log("Script com interação carregado!");
