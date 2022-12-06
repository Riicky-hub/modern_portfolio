export default function smoothLinkAnimation(position) {
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