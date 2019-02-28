var i = 0;
var slideTimer = 3000; // time represented in ms
var slideImgArr = [];

slideImgArr[0] = 'img/frosted-cookie.jpg';
slideImgArr[1] = 'img/chinook.jpg';
slideImgArr[2] = 'img/salmon.png';

function changeImg() {
  document.slide.src = slideImgArr[i];
  if (i < slideImgArr.length -1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', slideTimer);
}
window.onload = changeImg();
