function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


 

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin:30,
      loop:true,
      autoplay:true,
      autoplayTimeout: 1500,
      responsive:{
        0:{
          items:1,
        },
        600:{
          items:1,
        },
        1000:{
          items:3,
        },
      },
    });
  });



  const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".humburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

const body = document.body;
const modeToggle = document.querySelector(".switch-mode");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});




function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:30,
    loop:true,
    autoplay:true,
    autoplayTimeout: 1500,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:1,
      },
      1000:{
        items:3,
      },
    },
  });
});



// const loading = document.getElementById("loading");

//   const loadingDuration = 2000; // 2s
  
//   setTimeout(() => {
//     loading.classList.add('loading-none');
//   }, loadingDuration);