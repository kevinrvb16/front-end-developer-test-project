import header from "./components/header.js";
import container from "./components/container.js";
import helpMe from "./components/help.js";
import moveCursor from "./utils/cursor.js";
import { verifyEmpty } from "./utils/element.js";
import menuSelect from "./components/menu.js"

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(header());
    const containerContent = container()
    document.body.append(containerContent);
    document.body.append(helpMe());

    let lastTwoPressedKeys = [];
    let h1BeingCreated = false;
    let menu = null;
    const contentToAnalise = document.getElementById("contentToAnalise");


    contentToAnalise.addEventListener("input", (event) => {
        applyFocusEvent(contentToAnalise);
        lastTwoPressedKeys.push(event.data);
        if (lastTwoPressedKeys.length > 2) {
            lastTwoPressedKeys.shift();
        }
        verifyEmpty(contentToAnalise);

        if (event.inputType === "insertLineBreak" || event.inputType === "insertParagraph") {
            h1BeingCreated = false;
            remove(menu)
            moveCursor(contentToAnalise);//to end
            const lastDIV = contentToAnalise.lastChild;
            verifyEmpty(lastDIV);
            return;
        }

        if (h1BeingCreated) {
            remove(menu)
            let h1 = contentToAnalise.querySelector("h1:last-of-type");
            if (h1 && event.inputType !== "deleteContentBackward") {
                moveCursor(h1);//to inside
            }
        }

        if (lastTwoPressedKeys[0] === "/" && lastTwoPressedKeys[1] === "1") {
            menu = menuSelect()
            containerContent.appendChild(menu)
            h1BeingCreated = true;
            contentToAnalise.innerHTML = contentToAnalise.innerHTML.replace("/1", "<h1></h1>");
            let h1 = contentToAnalise.querySelector("h1:last-of-type");
            verifyEmpty(h1, "Heading 1");
            verifyEmpty(contentToAnalise);
            moveCursor(h1);//to inside
        }
    });
    const remove = (menu) => {
        if (containerContent.contains(menu)) {
            containerContent.removeChild(menu);
        }
    }
    const applyFocusEvent = (father) => {
        const children = father.children;
        for (let element of children) {
            element.addEventListener("focus", () => {
                verifyEmpty(element, "Type / for blocks, @ to link docs or people");
            })
            element.addEventListener("blur", () => {
                element.classList.remove("empty");
            })
        }
    }
});
