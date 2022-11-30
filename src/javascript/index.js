// Text
const navLinks = document.querySelectorAll('li.nav-item > a.link');
const navLinksArr = Array.from(navLinks);
const showcaseTitle = document.querySelector('.showcase__title');
const showcaseBottomParagraph = document.querySelector('.showcase__bottom--paragraph');
// Options
const selectedFlag = document.querySelector('.selected-lang > .flag_icon');
const allFlags = document.querySelectorAll('[wn-lang]');
const brazilFlag = document.querySelector('[wn-lang=portuguese]');
const unitedKingdomFlag = document.querySelector('[wn-lang=english]');




/* <-------English-------> */
const navEnglish = ['Home', 'Projects', 'My skills', 'About me', 'Contact'];
// Click event to change language
unitedKingdomFlag.addEventListener('click', (event) => {
    event.preventDefault();
    selectedFlag.setAttribute('src', './src/images/icons/flag_UK.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navEnglish[index];
    });
    showcaseTitle.innerHTML = `Welcome to my professional portfolio as a web developer<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `With broad knowledge in various technologies and in various aspects, such as front-end and back-end, I can transform your ideas into business`;
    allFlags.forEach(e => e.classList.remove('active'));
    unitedKingdomFlag.classList.add('active');
    localStorage.setItem('language', 'EN-GB');
});

// localStorage function
function changeToEnglish() {
    selectedFlag.setAttribute('src', './src/images/icons/flag_UK.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navEnglish[index];
    });
    showcaseTitle.innerHTML = `Welcome to my professional portfolio as a web developer<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `With broad knowledge in various technologies and in various aspects, such as front-end and back-end, I can transform your ideas into business`;
    allFlags.forEach(e => e.classList.remove('active'));
    unitedKingdomFlag.classList.add('active');
}

if(localStorage.language === 'EN-GB') {
    changeToEnglish();
}


/* <-------Portuguese-------> */
const navBrazil = ['Ínicio', 'Projetos', 'Habilidades', 'Sobre mim', 'Contato'];
// Click event to change language
brazilFlag.addEventListener('click', (event) => {
    event.preventDefault();
    selectedFlag.setAttribute('src', './src/images/icons/flag_brazil.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navBrazil[index];
    });
    showcaseTitle.innerHTML = `Bem-vindo ao meu portfolio<br> profissional como programador web<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `Com conhecimento amplo em várias tecnologias<br> e em várias vertentes, como front-end e back-end<br> transformo suas ideias em négocios`;
    allFlags.forEach(e => e.classList.remove('active'));
    brazilFlag.classList.add('active');
    localStorage.setItem('language', 'PT-BR');
});
// localStorage function
function changeToPortuguese() {
    selectedFlag.setAttribute('src', './src/images/icons/flag_brazil.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navBrazil[index];
    });
    showcaseTitle.innerHTML = `Bem-vindo ao meu portfolio<br> profissional como programador web<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `Com conhecimento amplo em várias tecnologias<br> e em várias vertentes, como front-end e back-end<br> transformo suas ideias em négocios`;
    allFlags.forEach(e => e.classList.remove('active'));
    brazilFlag.classList.add('active');
}

if(localStorage.language === 'PT-BR') {
    changeToPortuguese();
}
