import { Products } from '../Products/Products';
import { Component } from '../../core/Component';

export class Main extends Component {
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
