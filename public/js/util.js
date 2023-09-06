const toggle =  document.querySelector('.toggle');
const toggleMenu = document.querySelector('.toggle-menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    toggleMenu.classList.toggle('active')

})

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  

  let scrollY = window.pageYOffset;
  

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
  
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar .ul li a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar .ul li a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}