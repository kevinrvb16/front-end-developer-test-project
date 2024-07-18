import header from "./components/header.js";
import container from "./components/container.js";
import helpMe from "./components/help.js";

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(header());
    document.body.append(container());
    document.body.append(helpMe());

    let lastTwoPressedKeys = [];
    let h1BeingCreated = false;
    let editableDiv = document.getElementById("contentToAnalise");

    editableDiv.addEventListener("input", (event) => {
        // Atualiza as teclas pressionadas recentemente
        lastTwoPressedKeys.push(event.data);
        if (lastTwoPressedKeys.length > 2) {
            lastTwoPressedKeys.shift();
        }

        // Verifica se o conteúdo está vazio para mostrar ou ocultar o placeholder
        if (editableDiv.innerText.trim() === "") {
            editableDiv.classList.add("empty");
        } else {
            editableDiv.classList.remove("empty");
        }

        // Verifica se o usuário pressionou Enter para finalizar a criação do <h1>
        if (event.inputType === "insertLineBreak") {
            h1BeingCreated = false;
            moveCursorToEnd(editableDiv);
            return;
        }

        // Verifica se está no modo de criação do <h1>
        if (h1BeingCreated) {
            let h1 = editableDiv.querySelector("h1:last-child");
            if (h1) {
                h1.innerHTML += event.data;
                moveCursorInside(h1);
            }
        }

        // Verifica se as teclas pressionadas foram "/" e "1" para iniciar a criação do <h1>
        if (lastTwoPressedKeys[0] === "/" && lastTwoPressedKeys[1] === "1") {
            h1BeingCreated = true;
            editableDiv.innerHTML = editableDiv.innerHTML.replace("/1", "<h1></h1>");
            let h1 = editableDiv.querySelector("h1:last-child");
            moveCursorInside(h1);
        }
    });

    function moveCursorInside(element) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function moveCursorToEnd(element) {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});
