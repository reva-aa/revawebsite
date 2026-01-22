const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");
const sidebar = document.querySelector(".side-bar"); 
const menu = document.querySelector(".menu");

//untuk side-bar nav-bar mechanism

function showsidebar() {
  sidebar.style.display = "flex"; 
  menu.style.display = "none";    
}


function hidesidebar() {
  sidebar.style.display = "none"; 
  menu.style.display = "flex";   
}

//untuk magnet scroller dan perubahan warna navbarlist

window.onscroll = () => {
  let currentId = "";

  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    
   
    if (window.scrollY >= sectionTop - 150) {
      currentId = sec.getAttribute("id");
    }
  });

  navlinks.forEach((link) => {
    link.classList.remove("active");
    
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
};

