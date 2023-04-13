import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

//! add product to localStorage start
(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
})();
//! add product to localStorage end


//! add cartItems and hearItems to localStorage start
const heartItems = document.querySelector(".bi-heart");
const cartItems = document.querySelector(".header-cart-count");
const favoriTitle = document.querySelector(".favorite-title");
const favoriTitleEmoji = document.querySelector(".favorite-header i");


if (localStorage.getItem("favorite")) {
  heartItems.style.color = "red";
  heartItems.setAttribute("class", "bi bi-heart-fill");
}
if (JSON.parse(localStorage.getItem("products").includes(JSON.parse(localStorage.getItem("favorite"))))) {
  heartItems.style.color = "black";
  heartItems.setAttribute("class", "bi bi-heart");
  favoriTitle.innerHTML = ("Your favorite list is still empty");
  favoriTitleEmoji.setAttribute("class", "bi bi-emoji-frown")

}

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems and heartItems to localStorage end


//! modal dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 1000);
//! modal dialog end
