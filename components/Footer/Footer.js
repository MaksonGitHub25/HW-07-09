import { Component } from '../../core/Component';

export class Footer extends Component {
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
