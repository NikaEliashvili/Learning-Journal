let postFour = document.querySelector(".four");
let postFive = document.querySelector(".five");
let postSix = document.querySelector(".six");
let viewMore = document.getElementById("view-more");
let viewLess = document.getElementById("view-less");
let isViewMore = false;

viewMore.addEventListener("click", function () {
  postFour.classList.remove("four");
  postFive.classList.remove("five");
  postSix.classList.remove("six");
  viewLess.classList.remove("hidden");
  viewMore.classList.add("hidden");
});

viewLess.addEventListener("click", function () {
  postFour.classList.add("four");
  postFive.classList.add("five");
  postSix.classList.add("six");
  viewLess.classList.add("hidden");
  viewMore.classList.remove("hidden");
});
