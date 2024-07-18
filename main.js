import header from "./components/header.js";
import container from "./components/container.js";
import helpMe from "./components/help.js";
import moveCursor from "./utils/cursor.js";
import { verifyEmpty } from "./utils/element.js";

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(header());
    document.body.append(container());
    document.body.append(helpMe());

    let lastTwoPressedKeys = [];
    let h1BeingCreated = false;
    const contentToAnalise = document.getElementById("contentToAnalise");

    contentToAnalise.addEventListener("input", (event) => {
        lastTwoPressedKeys.push(event.data);
        if (lastTwoPressedKeys.length > 2) {
            lastTwoPressedKeys.shift();
        }
        verifyEmpty(contentToAnalise);
        console.log(event.inputType)
        if (event.inputType === "insertLineBreak" || event.inputType === "insertParagraph") {
            h1BeingCreated = false;
            moveCursor(contentToAnalise);//to end
            console.log(event.inputType)
            const lastDIV = contentToAnalise.lastChild;
            verifyEmpty(lastDIV);
            return;
        }

        if (h1BeingCreated) {
            let h1 = contentToAnalise.querySelector("h1:last-child");
            if (h1 && event.inputType !== "deleteContentBackward") {
                moveCursor(h1);//inside
            }
        }

        if (lastTwoPressedKeys[0] === "/" && lastTwoPressedKeys[1] === "1") {
            h1BeingCreated = true;
            contentToAnalise.innerHTML = contentToAnalise.innerHTML.replace("/1", "<h1></h1>");
            let h1 = contentToAnalise.querySelector("h1:last-child");
            verifyEmpty(h1, "Heading 1");
            verifyEmpty(contentToAnalise);
            moveCursor(h1);//inside
        }
    });
});
