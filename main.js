import { toHTML, toNode } from './core/render';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Input } from './components/Input/Input';
import { Form } from './components/Form/Form';
import { Button } from './components/Button/Button';
import { Paragraph } from './components/Paragraph/Paragraph';
import './main.scss';
import { checkData } from './register';

const app = document.querySelector('#app');


const header = new Header({
    tagName: 'header',
    className: 'header',
    children: [`<ul><li>Home</li><li>About us</li><li>Bag</li></ul>`]
});

const main = new Main({
    tagName: 'main',
    className: 'main'
});

const footer = new Footer({
    tagName: 'footer',
    className: 'footer',
    children: [`<h2>Copyright © 2022</h2>`]
});




const mainPhotoLine = new Form({
    tagName: 'div',
    className: 'photo_line'
});

const photoLineTitle = new Paragraph({
    tagName: 'p',
    className: 'photo_line_title',
    children: ['View our novelty and buy something for yourselves']
});

const mainPhotoLineElement = new Form({
    tagName: 'div',
    className: 'photo_line_element'
});

const photoLineElementWrapper = new Form({
    tagName: 'div',
    className: 'photo_line_element_wrapper'
});

const cardWrapper = new Form({
    tagName: 'div',
    className: 'card_wrapper'
});

const cardTitle1 = new Paragraph({
    tagName: 'p',
    className: 'card_title',
    children: ['Pillow']
});

const cardTitle2 = new Paragraph({
    tagName: 'p',
    className: 'card_title',
    children: ['iPhone']
});

const cardTitle3 = new Paragraph({
    tagName: 'p',
    className: 'card_title',
    children: ['CUMera']
});

const cardPhoto1 = new Form({
    tagName: 'div',
    className: 'card_photo',
    children: ['<img src="https://media.istockphoto.com/photos/white-pillow-isolated-on-white-background-picture-id1018424252?k=20&m=1018424252&s=612x612&w=0&h=Q2g1Ht1n-1xw0pGUM02f3lZnjFhLj1xMocg8e-oYSeo=">']
});

const cardPhoto2 = new Form({
    tagName: 'div',
    className: 'card_photo',
    children: ['<img src="https://mcstore.com.ua/image/cache/catalog/MNCT3-1649700652-600x600.jpg">']
});

const cardPhoto3 = new Form({
    tagName: 'div',
    className: 'card_photo',
    children: ['<img src="https://m.media-amazon.com/images/I/61HRnUdvv6L._AC_SY355_.jpg">']
});




const form = new Form({
    tagName: 'div',
    className: 'form_wrapper'
});

const textTitle = new Paragraph({
    tagName: 'p',
    className: 'title',
    children: ['Leave your contact there and we will phone you']
});

const inputWrapper = new Form({
    tagName: 'div',
    className: 'input_wrapper'
});

const mainInput1 = new Input({
    tagName: 'input',
    className: 'main_input',
    id: 'main_input1'
});

const mainInput2 = new Input({
    tagName: 'input',
    className: 'main_input',
    id: 'main_input2'
});

const mainButton = new Button({
    tagName: 'button',
    className: 'main_button',
    children: ['Leave'],
    events: {
        'click': function () {
            checkData(mainInput1, mainInput2);
        }
    }
});



// основная структура
const htmlHeader = toNode(app, header);
const htmlMain = toNode(app, main);
const htmlFooter = toNode(app, footer);


// информационный блок
const htmlPhotoLine = toNode(htmlMain, mainPhotoLine);
const htmlPhotoLineTitle = toNode(htmlPhotoLine, photoLineTitle);

const htmlPhotoLineTitleWrapper = toNode(htmlPhotoLine, photoLineElementWrapper);

const htmlElement1 = toNode(htmlPhotoLineTitleWrapper, mainPhotoLineElement);
const htmlElement2 = toNode(htmlPhotoLineTitleWrapper, mainPhotoLineElement);
const htmlElement3 = toNode(htmlPhotoLineTitleWrapper, mainPhotoLineElement);


// карточки товаров
const htmlCard1 = toNode(htmlElement1, cardWrapper);
const htmlCard2 = toNode(htmlElement2, cardWrapper);
const htmlCard3 = toNode(htmlElement3, cardWrapper);


const htmlCardPhoto1 = toNode(htmlCard1, cardPhoto1);
const htmlCardText1 = toNode(htmlCard1, cardTitle1);

const htmlCardPhoto2 = toNode(htmlCard2, cardPhoto2);
const htmlCardText2 = toNode(htmlCard2, cardTitle2);

const htmlCardPhoto3 = toNode(htmlCard3, cardPhoto3);
const htmlCardText3 = toNode(htmlCard3, cardTitle3);


// форма
const htmlMainFormWrapper = toNode(htmlMain, form);
const htmlTextTitle = toNode(htmlMainFormWrapper, textTitle);
const htmlInputWrapper = toNode(htmlMainFormWrapper, inputWrapper);
const htmlMainInput1 = toNode(htmlInputWrapper, mainInput1);
const htmlMainInput2 = toNode(htmlInputWrapper, mainInput2);
const htmlMainButton = toNode(htmlMainFormWrapper, mainButton);