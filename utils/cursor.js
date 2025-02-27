const moveCursor = (element) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element)
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

export default moveCursor;