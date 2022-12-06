// Options
const selectedFlag = document.querySelector('.selected-lang > .flag_icon');
const allFlags = document.querySelectorAll('[wn-lang]');
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

// localStorage function
export default function changeToEnglish() {
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