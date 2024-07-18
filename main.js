import header from "./components/header.js";
import container from "./components/container.js";
import helpMe from "./components/help.js";

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(header());
    document.body.append(container());
    document.body.append(helpMe());

    let lastTwoPressedKeys = [];
    let h1BeingCreated = false;
    let contentToAnalise = document.getElementById("contentToAnalise");

    contentToAnalise.addEventListener("input", (event) => {
        lastTwoPressedKeys.push(event.data);
        if (lastTwoPressedKeys.length > 2) {
            lastTwoPressedKeys.shift();
        }
        if (contentToAnalise.innerText.trim() === "") {
            contentToAnalise.classList.add("empty");
        } else {
            contentToAnalise.classList.remove("empty");
        }

        if (event.inputType === "insertLineBreak") {
            h1BeingCreated = false;
            moveCursor(contentToAnalise);//to end
            return;
        }

        if (h1BeingCreated) {
            let h1 = contentToAnalise.querySelector("h1:last-child");
            if (h1) {
                h1.innerHTML += event.data;
                moveCursor(h1);//inside
            }
        }

        if (lastTwoPressedKeys[0] === "/" && lastTwoPressedKeys[1] === "1") {
            h1BeingCreated = true;
            contentToAnalise.innerHTML = contentToAnalise.innerHTML.replace("/1", "<h1></h1>");
            let h1 = contentToAnalise.querySelector("h1:last-child");
            moveCursor(h1);//inside
        }
    });

    function moveCursor(element) {
        const range = document.createRange();
        console.log(range)
        const sel = window.getSelection();
        console.log('sel', sel)
        console.log(range.selectNodeContents(element));
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});
