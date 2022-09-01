import Button from './components/Button/Button';

import { Render } from './core/render';

import './main.scss';

const onClickHandler = () => {
    console.log("I'm here!");
};

const app = document.querySelector('#app');
const button = new Button({
    tagName: 'button',
    className: ['btn', 'warning'],
    children: 'Create table',
    events: {
        click: onClickHandler
    }
});

Render.toNode(app, button);
