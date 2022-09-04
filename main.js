import { toHTML, toNode } from './core/render';
import { Header } from './components/Header/Header';

import './main.scss';

const app = document.querySelector('#app');

const header = new Header({
    tagName: 'header',
    className: 'header',
    children: [`<ul>Home</ul>`]
});

const htmlHeader = toNode(app, header);
console.log(htmlHeader);
