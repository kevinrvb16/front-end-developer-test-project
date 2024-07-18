import createElement from "../utils/element.js";

const helpMe = () => {
    const help = createElement("span", "help-box");
    const helpIcon = createElement("span", "material-icons", "help_outline");
    help.appendChild(helpIcon);
    return help;
}

export default helpMe;