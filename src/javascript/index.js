// Options
const selectedFlag = document.querySelector('.selected-lang > .flag_icon');
const allFlags = document.querySelectorAll('[wn-lang]');
const brazilFlag = document.querySelector('[wn-lang=portuguese]');
const unitedKingdomFlag = document.querySelector('[wn-lang=english]');
// Text
/* Nav */
const navLinks = document.querySelectorAll('li.nav-item > a.link');
const navLinksArr = Array.from(navLinks);
/* Showcase */
const showcaseTitle = document.querySelector('.showcase__title');
const showcaseBottomParagraph = document.querySelector('.showcase__bottom--paragraph');
/* Projects */
const projectsHeaderInfoTitle = document.querySelector('.projects__header--info > h3');
const projectsHeaderInfoParagraph = document.querySelector('.projects__header--info > p');
const eclipseLink = document.querySelector('.eclipse__link');
/* Skills */
const skillsTitle = document.querySelector('.skills__header--title');
const skillsAboutMe = document.querySelector('.skills__header--aboutMe');
const skillsInfo = document.querySelector('.skills__header--info');
const skillsListItems = document.querySelectorAll('.skills__header--list > li');
const skillsListItemsArr = Array.from(skillsListItems);

/* <-------English-------> */
// localStorage function
function changeToEnglish() {
    const navEnglish = ['Home', 'Projects', 'My skills', 'About me', 'Contact'];
    const skillsEnglish = ['MongoDB, Express, React, Node and layouts Front-end', 'Workflow automation', 'Front-end and Back-end integration', 'Development and testing with Express, Postgres and APIs', 'NoSQL and database'];

    selectedFlag.setAttribute('src', './src/images/icons/flag_UK.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navEnglish[index];
    });
    showcaseTitle.innerHTML = `Welcome to my professional portfolio as a web developer<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `With broad knowledge in various technologies and in various aspects, such as front-end and back-end, I can transform your ideas into business`;
    projectsHeaderInfoTitle.innerHTML = `The codes of my projects<br> are all available on GitHub`;
    projectsHeaderInfoParagraph.innerHTML = `My work as a programmer I take as an art, always paying attention to details.`;
    eclipseLink.innerHTML = `View all projects <img src="./src/images/draws/Eclipse(blackAndWhite)/Arrow.svg" class="eclipse__arrow">`
    skillsTitle.innerHTML = `My Skills`;
    skillsAboutMe.innerHTML = `I constantly grow my skills on IT/Development, B1 english and knowledge of several programming languages, always being flexible and learning new methodologies to improve myself. View my stack on the <span class="span--color">Mind Map Board</span> right bellow!`;
    skillsInfo.innerHTML = `I'm studying Full Stack MERN and getting more knowledge of technologies like:`;
    skillsListItemsArr.map((el, index) => {
        el.innerHTML = `<span class="span--color">-</span> ${skillsEnglish[index]}`;
    });
    allFlags.forEach(e => e.classList.remove('active'));
    unitedKingdomFlag.classList.add('active');
}

// Click event to change language
unitedKingdomFlag.addEventListener('click', (event) => {
    event.preventDefault();
    changeToEnglish();
    localStorage.setItem('language', 'EN-GB');
});

if(localStorage.language === 'EN-GB') {
    changeToEnglish();
}


/* <-------Portuguese-------> */

// localStorage function
function changeToPortuguese() {
    const navBrazil = ['Ínicio', 'Projetos', 'Habilidades', 'Sobre mim', 'Contato'];
    const skillsBrazil = ['MongoDB, Express, React, Node e layouts Front-end', 'Automatização de fluxos de trabalho', 'Integração Front e Back-end', 'Desenvolvimento e testes com Express, Postgres e APIs', 'NoSQL e bancos de dados'];
    selectedFlag.setAttribute('src', './src/images/icons/flag_brazil.png');
    navLinksArr.map((el, index) => {
        el.innerHTML = navBrazil[index];
    });
    showcaseTitle.innerHTML = `Bem-vindo ao meu portfolio<br> profissional como programador web<span class="span--color">.</span>`;
    showcaseBottomParagraph.innerHTML = `Com conhecimento amplo em várias tecnologias<br> e em várias vertentes, como front-end e back-end<br> transformo suas ideias em négocios`;
    projectsHeaderInfoTitle.innerHTML = `Os códigos dos meus projetos<br> estão todos no GitHub`;
    projectsHeaderInfoParagraph.innerHTML = `Meu trabalho como programador eu levo como uma arte, sempre dando atenção aos detalhes.`;
    eclipseLink.innerHTML = `Ver todos os projetos <img src="./src/images/draws/Eclipse(blackAndWhite)/Arrow.svg" class="eclipse__arrow">`;
    skillsTitle.innerHTML = `Minhas Habilidades`;
    skillsAboutMe.innerHTML = `Possuo carreira em evolução na área de TI/Desenvolvimento, inglês avançado e conhecimento em diversas linguagens de programação, sempre sendo flexível e aprendendo metodologias novas para me aprimorar. Visualize minha stack no <span class="span--color">Mind Map Board</span> logo abaixo!`;
    skillsInfo.innerHTML = `Estou cursando Full Stack MERN e ganhando mais conhecimento para aperfeiçoamento das minhas skills em:`;
    skillsListItemsArr.map((el, index) => {
        el.innerHTML = `<span class="span--color">-</span> ${skillsBrazil[index]}`;
    });
    allFlags.forEach(e => e.classList.remove('active'));
    brazilFlag.classList.add('active');
}

// Click event to change language
brazilFlag.addEventListener('click', (event) => {
    event.preventDefault();
    changeToPortuguese();
    localStorage.setItem('language', 'PT-BR');
});

if(localStorage.language === 'PT-BR') {
    changeToPortuguese();
}

// AOS
AOS.init();

// Animações
function smoothLinkAnimation(position) {
    const el = document.querySelector(`a[wn-position=${position}]`)
    const img = document.querySelector(`img[wn-position=${position}]`)
    
    el.addEventListener('mouseover', deslocateIn);
    el.addEventListener('mouseout', deslocateOut);
    function deslocateIn() {
        img.style.display = 'block';
        img.classList.add('addIn');
    }
    function deslocateOut() {
        img.style.display = 'none';
    }
}
smoothLinkAnimation('first');
smoothLinkAnimation('second');
smoothLinkAnimation('third');
smoothLinkAnimation('fourth');