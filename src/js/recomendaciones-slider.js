var recoSlideIndex = 1;
recoShowDivs(recoSlideIndex);

function recoPlusDivs(n) {
  recoShowDivs(recoSlideIndex += n);
}

function recoShowDivs(n) {
  var i;
  var x = document.getElementsByClassName("reco-my-slides");
  if (n > x.length) {recoSlideIndex = 1}
  if (n < 1) {recoSlideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[recoSlideIndex-1].style.display = "block";
}
