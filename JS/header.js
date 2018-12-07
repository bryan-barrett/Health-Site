// JS for smooth scrolling and fixed position of site header

const header = document.querySelector('header');
const sticky = header.offsetTop;

window.onscroll = () => { stickyheader(); }

function stickyheader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.setAttribute('style', 'border-bottom: 2px solid #04949e;')
      } 
    else {
        header.classList.remove("sticky");
        header.setAttribute('style', 'border-bottom: none;')
      }
}