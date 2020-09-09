let trabajosSlideIndex = 1;
trabajosShowDivs(trabajosSlideIndex);

function trabajosPlusDivs(n) {
  trabajosShowDivs(trabajosSlideIndex += n);
}

function trabajosShowDivs(n) {
  let i;
  let x = document.getElementsByClassName("graph-my-slides");
  if (n > x.length) {trabajosSlideIndex = 1}
  if (n < 1) {trabajosSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[trabajosSlideIndex-1].style.display = "block";
}
