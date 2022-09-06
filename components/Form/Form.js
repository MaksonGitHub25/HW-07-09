import { Component } from '../../core/Component';

export class Form extends Component {
    constructor({ tagName, className, id, events, attrs, textContent, children, ...other }) {
        super({
            tagName,
            className,
            id,
            events,
            attrs,
            textContent,
            children,
            ...other
        });
    }
}