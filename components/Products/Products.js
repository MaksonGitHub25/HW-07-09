import { Component } from '../../core/Component';

import productDb from '../../database/products.json';

const PRODUCTS = productDb;

export class Products extends Component {
    constructor({ tagName, className, id, events, attrs, children, ...other }) {
        super({ tagName, className, id, events, attrs, children, ...other });
        if (!tagName) return;

        this.children = PRODUCTS;
    }
}

export default Products;
