document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.className = "notionHeader"
    const doubleArrowIcon = document.createElement("span");
    doubleArrowIcon.className = "material-icons icon-pattner-color";
    doubleArrowIcon.textContent = "keyboard_double_arrow_right"
    header.appendChild(doubleArrowIcon);
    document.body.prepend(header)
})