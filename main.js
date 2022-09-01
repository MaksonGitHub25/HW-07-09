import Button from './components/Button/Button';
import { Render } from './core/render';

import './main.scss';

const onClickHandler = () => {
    console.log("I'm working here");
};

const app = document.querySelector('#app');
const button = new Button({
    tagName: 'button',
    className: ['btn', 'warning'],
    children: 'Send',
    events: {
        click: onClickHandler
    }
});

Render.toHTML(
    app,
    `
    <h2>
      Here we are!
    </h2>
    `
);

Render.toNode(app, button);
