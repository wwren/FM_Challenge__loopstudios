document.querySelector(".bar").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".overlay").style.width = "100%";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".overlay").style.width = "0";
});
