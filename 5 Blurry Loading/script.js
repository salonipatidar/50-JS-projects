const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let inter = setInterval(blurring, 30); // every 30 ms blurring function will be called

function blurring() {
  load++;

  //need to stop at 100 else infinite
  if (load > 99) {
    clearInterval(inter);
  }

  loadText.innerText = `${load}%`;
  //opacity goes from  1 to 0 load is from 0 to 100
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
