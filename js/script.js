
import {ButtonGoTop} from './bottom_go_top.js.js';
import btnMenu from './btn_menu.js.js';

console.log("se cargo script");

function Main(){

    console.log("se cargo main");

    ButtonGoTop();
    btnMenu();
}

document.addEventListener('DOMContentLoaded',Main());

