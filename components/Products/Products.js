import { Component } from '../../core/Component';

import productDb from '../../database/products.json';

const PRODUCTS = productDb;

class Products extends Component {
    constructor({ tagName, className, id, events, attrs, children, ...other }) {
        super({ tagName, className, id, events, attrs, children, ...other });
        if (!tagName) return;

        this.tagName = tagName;
        this.className = className;
        this.id = id;
        this.events = events;
        this.attrs = attrs;
        this.children = children;
    }
}

export default Products;
