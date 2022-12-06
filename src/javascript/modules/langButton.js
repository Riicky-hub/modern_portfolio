export default function langButton(flag, lang, name) {
    flag.addEventListener('click', (event) => {
        event.preventDefault();
        lang();
        localStorage.setItem('language', name);
    });
}
