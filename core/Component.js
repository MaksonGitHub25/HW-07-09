import { isArray } from '../utils/isArray';

export class Component {
    constructor({ tagName, className, id, events, attrs, children, ...other }) {
        if (!tagName) return;

        this.tagName = tagName;
        if (isArray(className)) this.className = className.join(' ');
        if (id) this.id = id;
        if (events) this.events = events;
        if (attrs) this.attrs = attrs;
    }
}
