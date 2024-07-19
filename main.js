import header from "./components/header.js";
import container from "./components/container.js";
import helpMe from "./components/help.js";
import moveCursor from "./utils/cursor.js";
import { createElement, verifyEmpty } from "./utils/element.js";
import menuSelect from "./components/menu.js"

document.addEventListener("DOMContentLoaded", () => {
    const documentFragment = document.createDocumentFragment();
    documentFragment.prepend(header());
    const containerContent = container()
    documentFragment.append(containerContent);
    documentFragment.append(helpMe());
    document.body.appendChild(documentFragment);
    let lastTwoPressedKeys = [];
    let h1BeingCreated = false;
    let menu = null;
    const contentToAnalise = document.getElementById("contentToAnalise");
    verifyH1List()
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
            verifyH1List()
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
    function applyFocusEvent(father){
        const children = father.children;
        for (let element of children) {
            element.addEventListener("focus", function() {
                verifyEmpty(element, "Type / for blocks, @ to link docs or people");
            })
            element.addEventListener("blur", function() {
                element.classList.remove("empty");
            })
        }
    }
    const showMenuIcon = (h1) => {
        if (h1.querySelector(".hidden") != null) {
            h1.querySelector(".focusH1").classList.remove("hidden")
            h1.querySelector(".focusH1").classList.add("visible")
        } else if (h1.querySelector(".focusH1") == null) {
            const menuIcon = createElement("span", "material-icons smaller-icon focusH1 hidden", "menu")
            h1.prepend(menuIcon)
        }
    }
    const removeMenuIcon = (h1) => {
        if (h1.querySelector(".visible") != null) {
            h1.querySelector(".focusH1").classList.remove("visible")
            h1.querySelector(".focusH1").classList.add("hidden")
        }
    }

    function verifyH1List() {
        const allH1 = contentToAnalise.querySelectorAll("h1");
        allH1.forEach(function(h1) {
            h1.addEventListener("mouseover", function(){
                showMenuIcon(h1);
            })
            h1.addEventListener("click", function() {
                showMenuIcon(h1);
            })
            h1.addEventListener("mouseout", function() {
                removeMenuIcon(h1);
            })
        })
    }
});
