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
/* About Me */
const aboutMeTitle = document.querySelector('.aboutMe__header > h2');
const aboutMeDesc = document.querySelector('.aboutMe__header > p');
const aboutMeCards = document.querySelectorAll('.cards__paragraph');
const aboutMeCardsArr = Array.from(aboutMeCards);

/* Footer */
const footerNavLinks = document.querySelectorAll('a[wn-footer]');
const footerNavLinksArr = Array.from(footerNavLinks);
const footerContact = document.querySelectorAll('.footer__div--contact');
const footerContactArr = Array.from(footerContact);
const footerTitle = document.querySelector('.footer__title > h2');

/* <-------English-------> */
// localStorage function
function changeToEnglish() {
    const navEnglish = ['Home', 'Projects', 'My skills', 'About me', 'Contact'];
    const skillsEnglish = ['MongoDB, Express, React, Node and layouts Front-end', 'Workflow automation', 'Front-end and Back-end integration', 'Development and testing with Express, Postgres and APIs', 'NoSQL and database'];
    const footerEnglish = ['Professional contact<span class="span--color">:</span>', 'My social networks<span class="span--color">:</span>'];
    const aboutMeEnglish = ['With a well-written, organized and descriptive code, it is a synonymous of efficient work', 'Using MongoDB, Express, React and Node, you can build any application in a modern way', 'For each new function or change, there will be tests to ensure the security of the application', 'At the end of all development, a project build will be created to always achieve the best optimization'];

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
    aboutMeTitle.innerHTML = `My development methodology<span class="span--color">!</span>`;
    aboutMeDesc.innerHTML = `I learned from many professionals and teachers in the field of web development, at educational institutions such as <strong>'Escola Britânica de Artes Criativas e Tecnologia'(EBAC)</strong>, <strong>Alura</strong> and <strong>Udemy</strong> courses. My main methods are:`;
    aboutMeCardsArr.map((el, index) => {
        el.innerHTML = aboutMeEnglish[index];
    });

    footerTitle.innerHTML = `Let's get your <span class="span--color" data-aos="fade-in" data-aos-once="false" data-aos-duration="2000" data-aos-delay="30">business</span><br> where you <span class="span--color" data-aos="fade-in" data-aos-once="false" data-aos-duration="2000" data-aos-delay="30" data-aos-offset="250">want</span> it to be`;
    footerContactArr.map((el, index) => {
        el.innerHTML = footerEnglish[index];
    });
    footerNavLinksArr.map((el, index) => {
        el.innerHTML = navEnglish[index];
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
    const footerBrazil = ['Contato profissional<span class="span--color">:</span>', 'Minhas redes sociais<span class="span--color">:</span>'];
    const aboutMeBrazil = ['Com um código bem escrito, organizado e descritivo, é sinônimo de um trabalho eficiente', 'Utilizando MongoDB, Express, React e Node, poderá construir qualquer aplicação de um jeito moderno', 'Para cada função nova ou alteração, haverá testes para garantir a segurança da aplicação', 'Ao final de todo desenvolvimento, será criado uma build do projeto para atingir sempre a melhor otimização'];

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
    aboutMeTitle.innerHTML = `Minha metodologia de desenvolvimento<span class="span--color">!</span>`;
    aboutMeDesc.innerHTML = `Aprendi com vários profissionais e professores da área de desenvolvimento web, nas instituições de ensino como a <strong>Escola Britânica de Artes Criativas</strong>, <strong>Alura</strong> e cursos da <strong>Udemy</strong>. Meus principais métodos são:`;
    aboutMeCardsArr.map((el, index) => {
        el.innerHTML = aboutMeBrazil[index];
    });
    footerTitle.innerHTML = `Transforme suas <span class="span--color" data-aos="fade-in" data-aos-once="false" data-aos-duration="2000" data-aos-delay="30" data-aos-offset="250">ideias</span><br> em <span class="span--color" data-aos="fade-in" data-aos-once="false" data-aos-duration="2000" data-aos-delay="30" data-aos-offset="250">négocios</span> lucrativos`;
    footerContactArr.map((el, index) => {
        el.innerHTML = footerBrazil[index];
    });
    footerNavLinksArr.map((el, index) => {
        el.innerHTML = navBrazil[index];
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
AOS.init({
    offset: 300
});

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