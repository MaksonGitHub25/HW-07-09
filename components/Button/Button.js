import { Component } from '../../core/Component';
import { isArray } from '../../utils/isArray';
import './Button.scss';

class Button extends Component {
    constructor({ tagName, className, id, events, attrs, children, ...other }) {
        super({ tagName, className, id, events, attrs, children, ...other });
        if (!tagName) return;

        this.tagName = tagName;
        if (isArray(className)) this.className = className.join(' ');
        if (id) this.id = id;
        if (events) this.events = events;
        if (attrs) this.attrs = attrs;
        if (children) this.children = children;
    }
}

export default Button;
