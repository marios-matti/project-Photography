let headerImages = ["images/himg1.jpg", "images/himg2.jpg", "images/himg3.jpg"];
let i = 0;
function mySlider() {
  document.querySelector(".header-img").src = headerImages[i];
  if (i < headerImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("mySlider()", 5000);
}
mySlider();

let minu = document.querySelector(".list");
let minuBtn = document.querySelector(".minu-btn");
minuBtn.addEventListener("click", function () {
  minu.classList.toggle("open-minu");
});

let imgGallery = document.querySelectorAll(".gallery-img img");
let imgBox = document.querySelector(".view-img");
let myImg = document.querySelector(".view");

imgGallery.forEach((image) => {
  image.addEventListener("click", function (eve) {
    // eve.target.src = myImg.src;
    myImg.src = eve.target.src;
    imgBox.classList.add("open");
    console.log("hi");
  });
});

imgBox.addEventListener("click", function (ev) {
  if (ev.target == ev.currentTarget) {
    this.classList.remove("open");
  }
  // if (!ev.target.className === "open") {
  //   this.classList.remove("open");
  // }
});

let galleryBtn = document.querySelectorAll(".btn");

galleryBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    galleryBtn.forEach((btn) => {
      // btn.className = "";
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    // btn.className = "active";

    // show images
    let values = btn.textContent;
    imgGallery.forEach((show) => {
      show.style.display = "none";
      if (show.getAttribute("data-name") === values || values === "All") {
        show.style.display = "block";
      }
    });
  });
});
