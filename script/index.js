const toggleFeature = document.getElementById("Features");
const toggleCompany = document.getElementById("company");
const arrow = document.querySelectorAll(".clicked");
const arrowUp = document.querySelectorAll(".notclick");
const dropdown = document.querySelectorAll(".drop-down");

toggleFeature.addEventListener("click", () => {
  dropdown[0].classList.toggle("show");
  if (dropdown[0].classList.contains("show")) {
    arrow[0].style.display = "inline-block";
    arrowUp[0].style.display = "none";
  } else {
    arrow[0].style.display = "none";
    arrowUp[0].style.display = "inline-block";
  }
});

toggleCompany.addEventListener("click", () => {
  dropdown[1].classList.toggle("show");
  if (dropdown[1].classList.contains("show")) {
    arrow[1].style.display = "inline-block";
    arrowUp[1].style.display = "none";
  } else {
    arrow[1].style.display = "none";
    arrowUp[1].style.display = "inline-block";
  }
});

const icons = document.querySelector(".icon");
const display = document.querySelector(".primary-header");

icons.addEventListener("click", (event) => {
  icons.classList.toggle("open");
  if (icons.classList.contains("open")) {
    display.classList.add("hdr-show");
    console.log(arrow);
  } else {
    display.classList.remove("hdr-show");
  }
});
