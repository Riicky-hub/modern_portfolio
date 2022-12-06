// Options
const selectedFlag = document.querySelector('.selected-lang > .flag_icon');
const allFlags = document.querySelectorAll('[wn-lang]');
const brazilFlag = document.querySelector('[wn-lang=portuguese]');

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

// localStorage function
export default function changeToPortuguese() {
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
