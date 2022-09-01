export class Render {
    static toNode(parentNode, children) {
        const element = document.createElement(children.tagName);
        element.className = children.className;
        element.id = children.id;
        element.textContent = children.children;

        const events = children.events;

        for (const event in events) {
            const handler = events[event];
            element.addEventListener(event, handler);
        }

        parentNode.append(element);
    }

    static toHTML(app, html) {
        app.innerHTML += `${html}`;
    }
}
