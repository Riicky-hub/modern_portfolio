// AOS
AOS.init({
    offset: 300
});

// Functions Imports
import changeToEnglish from './modules/en-gb/changeLang.js';
import changeToPortuguese from './modules/pt-br/changeLang.js';
import smoothLinkAnimation from './modules/animation/smoothLink.js';
import langButton from './modules/langButton.js';

// Available languages
/* <-------Portuguese-------> */
const brazilFlag = document.querySelector('[wn-lang=portuguese]');
langButton(brazilFlag, changeToPortuguese, 'PT-BR');
/* <-------English-------> */
const unitedKingdomFlag = document.querySelector('[wn-lang=english]');
langButton(unitedKingdomFlag, changeToEnglish, 'EN-GB');


// Animações
smoothLinkAnimation('first');
smoothLinkAnimation('second');
smoothLinkAnimation('third');
smoothLinkAnimation('fourth');

// LocalStorage
switch(localStorage.language) {
    case 'PT-BR':
        changeToPortuguese();
        break;
    case 'EN-GB':
        changeToEnglish();
        break;
}