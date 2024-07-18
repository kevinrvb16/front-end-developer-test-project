const createElement = (tag, className, content = null) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}

const verifyEmpty = (element, placeholder = "Type / for blocks, @ to link docs or people") => {
    if (element.innerText.trim() === "") {
        element.setAttribute("contentEditable", true);
        element.classList.add("empty");
        element.setAttribute("placeholder", placeholder);
        element.setAttribute("data-content-editable-leaf", true);
        element.setAttribute("spellcheck", true);
    } else {
        element.classList.remove("empty");
    }
}

export {createElement, verifyEmpty};