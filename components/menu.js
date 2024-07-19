import { createElement } from "../utils/element.js";
const menuSelect = () => {
    const menuDiv = createElement("div", "menu-select pt-075");
    const menuHeader = createElement("div", "bold pl-06", "Add blocks");
    const menuDescription = createElement("p", "pl-06 secondary-color resume", "keep typing to filter or escape to exit");
    const menuFilter = createElement("p", "pl-06 deffault-color pb-09", "Filtering keyword");
    const menuQuantityFiltered = createElement("span", "quantity ml-fourth font-system-ui", "1");
    const menuFilterContent = createElement("div");
    const itemFound1 = createElement("div", "d-flex secondary-color font-30 font-cursive pl-half py-025 pb-tenth mb-quarter selected", "T")
    const itemFound2 = createElement("div", "d-flex secondary-color font-30 font-cursive pl-half pb-tenth mb-quarter ", "T")
    const item1Description = createElement("div", "d-flex flex-column font-sans-serif ml-half");
    const item1Title = createElement("p", "bold black-color pb-forty-percent", "Heading 1");
    const item1Resume = createElement("p", "secondary-color font-12", "Shortcut: type # + space")
    const item2Title = createElement("p", "bold black-color pb-forty-percent", "Expandable Heading 1");
    const item2Description = createElement("div", "d-flex flex-column font-sans-serif ml-half");
    const item2Resume = createElement("p", "secondary-color font-12", "Shortcut: type >># + space");

    itemFound1.appendChild(item1Description);
    itemFound2.appendChild(item2Description);
    item1Description.appendChild(item1Title);
    item1Description.appendChild(item1Resume);
    item2Description.appendChild(item2Title);
    item2Description.appendChild(item2Resume);
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuDescription);
    menuDiv.appendChild(menuFilter);
    menuDiv.appendChild(menuFilterContent);
    menuFilter.appendChild(menuQuantityFiltered);
    menuFilterContent.appendChild(itemFound1);
    menuFilterContent.appendChild(itemFound2);

    return menuDiv
}
export default menuSelect;