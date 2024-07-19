import { createElement } from "../utils/element.js";
import barCard from "./barCard.js";
const container = () => {
    const container = createElement("div", "max-w-45-vw d-flex flex-column margin-auto");
    const h1 = createElement("h1", "border-bottom pb-forty-percent", "Front-end developer test project");
    const explanationText = 
        createElement(
            "p",
            "deffault-color",
            "Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter."
        );
    const textarea = createElement("div", "pt-2 mt-2 deffault-color");
    const nextLine = createElement("p", "empty", "");
    textarea.id = "contentToAnalise";
    textarea.setAttribute("contentEditable", true)
    container.appendChild(barCard());
    textarea.appendChild(h1);
    textarea.appendChild(explanationText);
    container.appendChild(textarea);
    textarea.appendChild(nextLine);

    return container;
}

export default container;