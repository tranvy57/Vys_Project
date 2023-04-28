let nav = document.querySelector('.nav-elements');
document.querySelector('.menu').onclick = () =>{
    nav.classList.toggle('active');
}


// nút vị trí

window.addEventListener("scroll", function() {
    var scrollPositionIndicator = document.querySelector(".scroll-position-indicator");
    var scrollTop =  document.body.scrollTop||  document.documentElement.scrollTop;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / totalHeight) * 100;
    console.log(scrollPercentage);
    scrollPositionIndicator.style.top = scrollPercentage + "%";
});

document.querySelector(".scroll-position-indicator").addEventListener("click", function() {
  window.scrollTo(0, 0);
});