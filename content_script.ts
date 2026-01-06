window.onload = function () {
    walk(document.body);
};
function walk(node: HTMLElement | ChildNode) {
    let child, next;
    if (node instanceof HTMLElement) {
        let tagName = node.tagName ? node.tagName.toLowerCase() : "";
        if (tagName == 'input' || tagName == 'textarea') {
            return;
        }
        if (node.classList && node.classList.contains('ace_editor')) {
            return;
        }
    }
    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node (ChildNode)
            handleText(node);
            break;
    }
}
function handleText(textNode: ChildNode) {
    let v = textNode.nodeValue;
    if (v != null) {
        v = v.replace(/\bCopilot\b/gi, "Slop");
        textNode.nodeValue = v;
    }
}

