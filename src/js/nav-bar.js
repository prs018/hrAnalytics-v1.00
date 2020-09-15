let prevScrollpos = window.pageYOffset;
window.onscroll = function() {

    let currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
      document.getElementById("barra-de-navegacion").style.top = "0";
    } else {
        document.getElementById("barra-de-navegacion").style.top = "-100px";
      }
      prevScrollpos = currentScrollpos;

}
