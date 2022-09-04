export class Component {
    constructor({
        tagName,
        className,
        id,
        events,
        attrs,
        textContent,
        children,
        ...other
    }) {
        if (!tagName) return;

        this.tagName = tagName;
        this.className = className;
        this.id = id;
        this.events = events;
        this.attrs = attrs;
        this.other = other;
        this.textContent = textContent;
        this.children = children;
    }
}
