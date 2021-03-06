import '@scss/styles.scss';
import logoImg from '@img/logo.png';

const fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove',
};
const collapse = (selector, cmd) => {
    document.querySelector(selector).classList[fnmap[cmd]]('show');
};

window.addEventListener(
    'click',
    (ev) => {
        const elm = ev.target;
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
    },
    false,
);

const filename = logoImg.substring(logoImg.lastIndexOf('/') + 1);
const logo = document.querySelector('#logo');
logo.src = `assets/img/${filename}`;

const message = 'Hello Webpack';
console.log(` Message is: ${message}`);
