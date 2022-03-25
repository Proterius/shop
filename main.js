"use strict";
const cartItemList = document.querySelector(".cart-item-list");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".price");
const input = document.getElementsByTagName("button");
let element;
let cartItem;
let price;
let opis;
let img;
let del;
let cartItemImg = document.querySelector(".cart-item-img");

const createItemInCart = function () {
  element = document.createElement("div");
  element.classList.add("cart-item");

  cartItemList.appendChild(element);
  img = document.createElement("div");

  img.classList.add("cart-item-img");
  element.appendChild(img);
  opis = document.createElement("div");
  opis.classList.add("cart-item-descip");
  element.appendChild(opis);
  price = document.createElement("div");
  price.classList.add("cart-item-price");
  element.appendChild(price);
  del = document.createElement("div");
  del.classList.add("cart-item-del");
  element.appendChild(del);
};
// const addToCart = (e) =>{
//     createItemInCart()
//        if(e.target==input[0])console.log('casdasd');
//     }

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function (e) {
    createItemInCart();
    if (e.target == input[0]) {
      img.innerHTML = productId1.image;
      price.innerHTML = productId1.price;
      opis.innerHTML = productId1.description;
      del.innerHTML = `<button id="usun">❌</button>`;
      console.log("1");
    }
    if (e.target == input[1]) console.log("2");
    if (e.target == input[2]) console.log("3");
    if (e.target == input[3]) console.log("4");
    if (e.target == input[4]) console.log("5");
    if (e.target == input[5]) console.log("6");
  });
  console.log(input[i]);
}
const productId1 = {
  description: "jeans",
  price: Number(39.9),
  image: `<img src="item.jpg" alt="" class="item-photo" />`,
};
console.log(productId1);
