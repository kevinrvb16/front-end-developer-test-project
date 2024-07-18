import createElement from "../utils/element.js";
const header = () => {
    const header = createElement("header", "notionHeader d-flex secondary-color space-between mx-1");
    const doubleArrowIcon = createElement("span", "material-icons smaller-icon icon-pattner-color", "keyboard_double_arrow_right");
    const menuBookIcon = createElement("span", "material-icons smaller-icon ml-1", "menu_book");
    const leftSideHeader = createElement("div", "d-flex column-gap-half align-center");
    const mainBreadcrumb = createElement("a", "underline", "Main");
    const gettingStartedBreadcrumb = createElement("p", null, "Getting started");
    const projectBreadcrumb = createElement("p", "truncate", "Front-end developer test project");
    const rightSideHeader = createElement("div", "d-flex column-gap-half align-center");
    const lockOpenIcon = createElement("span", "material-icons smaller-icon ml-1", "lock_open");
    const edit = createElement("div", "d-flex align-center");
    const editing = createElement("p", "ml-half", "Editing");
    const pipe = createElement ("span", "color-gray mx-1", "|");
    const publishSpace = createElement("a", "bold color-primary", "Publish Space")
    const keyboardArrowDownIcon = createElement("span", "material-icons smaller-icon color-primary", "keyboard_arrow_down");

    header.appendChild(leftSideHeader);
    header.appendChild(rightSideHeader);

    leftSideHeader.appendChild(doubleArrowIcon);
    leftSideHeader.appendChild(menuBookIcon);
    leftSideHeader.appendChild(mainBreadcrumb);
    leftSideHeader.appendChild(separator());
    leftSideHeader.appendChild(gettingStartedBreadcrumb);
    leftSideHeader.appendChild(separator());
    leftSideHeader.appendChild(projectBreadcrumb);

    rightSideHeader.appendChild(edit);
    edit.appendChild(lockOpenIcon)
    edit.appendChild(editing);

    rightSideHeader.appendChild(pipe);
    rightSideHeader.appendChild(publishSpace)
    rightSideHeader.appendChild(keyboardArrowDownIcon);
    return header;
}

const separator = () => {
    return createElement("span", "mx-half", "/");
}

export default header;