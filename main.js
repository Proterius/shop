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
let suma = 0;
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
      price.innerHTML += `Cena: ` + productId1.price + ` zł`;
      opis.innerHTML = productId1.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId1.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
    if (e.target == input[1]) {
      img.innerHTML = productId2.image;
      price.innerHTML += `Cena: ` + productId2.price + " zł";
      opis.innerHTML = productId2.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId2.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
    if (e.target == input[2]) {
      img.innerHTML = productId3.image;
      price.innerHTML += `Cena: ` + productId3.price + ` zł`;
      opis.innerHTML = productId3.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId3.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
    if (e.target == input[3]) {
      img.innerHTML = productId1.image;
      price.innerHTML = productId1.price;
      opis.innerHTML = productId1.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId1.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
    if (e.target == input[4]) {
      img.innerHTML = productId1.image;
      price.innerHTML = productId1.price;
      opis.innerHTML = productId1.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId1.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
    if (e.target == input[5]) {
      img.innerHTML = productId1.image;
      price.innerHTML = productId1.price;
      opis.innerHTML = productId1.description;
      del.innerHTML = `<button class="usun">❌</button>`;
      console.log("1");
      suma += productId1.price;
      console.log(suma);
      document.getElementById("suma").innerHTML = suma;
    }
  });

  console.log(input[i]);
}
const productId1 = {
  description: "Blue Jeans Heart Pattern",
  price: Number(199),
  image: `<img src="jeans2.jpg" alt="" class="item-photo" />`,
};
const productId2 = {
  description: "Carrot Jeans",
  price: Number(99),
  image: `<img src="jeans1.jpg" alt="" class="item-photo" />`,
};
const productId3 = {
  description: "Blue Baggy Jeans",
  price: Number(129),
  image: `<img src="jeans3.jpg" alt="" class="item-photo" />`,
};
// console.log(productId1);
document.getElementById("submit").addEventListener("click", function () {
  alert("Payment acceptation: " + suma + "zł");
});
