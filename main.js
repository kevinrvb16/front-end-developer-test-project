import header from "./components/header.js"
import container from "./components/container.js"
import helpMe from "./components/help.js";
document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(header());
    document.body.append(container());
    document.body.append(helpMe())
})