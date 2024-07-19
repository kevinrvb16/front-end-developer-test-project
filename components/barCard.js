import { createElement } from "../utils/element.js";
const barCard = () => {
    const bar = createElement("div", "d-flex border-bar mt-2 p-bar secondary-color space-between");
    const leftSideBar = createElement("div", "d-flex align-center");
    const taskType = createElement("div", "bg-light-green bold color-green p-task border-radius", "P");
    const clockIcon = createElement("span", "smaller-icon material-icons", "schedule");
    const schedule = createElement("p", "ml-fifth", "0min");
    const avatar = createElement("img", "w-24 radius-50")
    const callReceived = createElement("span", "smaller-icon material-icons", "call_received");
    const n = createElement("p", "ml-fifth", "0");

    const rightSideHeader = createElement("div", "d-flex align-center");
    const taskAltIcon = createElement("span", "smaller-icon material-icons", "task_alt");
    const cloudQueueIcon = createElement("span", "smaller-icon material-icons ml-half color-green", "cloud_queue");
    const moreVertIcon = createElement("span", "material-icons ml-fifth black-color", "more_vert");

    avatar.src = "../assets/bunny-with-pink-ears-pink-nose-sits-green-background.jpg";
    avatar.alt = "bunny with pink ears pink nose sits green background";

    leftSideBar.appendChild(taskType);
    leftSideBar.appendChild(pipe());
    leftSideBar.appendChild(clockIcon);
    leftSideBar.appendChild(schedule);
    leftSideBar.appendChild(pipe());
    leftSideBar.appendChild(avatar);
    leftSideBar.appendChild(pipe());
    leftSideBar.appendChild(callReceived);
    leftSideBar.appendChild(n);

    rightSideHeader.appendChild(taskAltIcon);
    rightSideHeader.appendChild(cloudQueueIcon);
    rightSideHeader.appendChild(moreVertIcon);

    bar.appendChild(leftSideBar);
    bar.appendChild(rightSideHeader);
    return bar;
}

const pipe = () => {
    return createElement ("span", "color-gray mx-half", "|");
}

export default barCard;