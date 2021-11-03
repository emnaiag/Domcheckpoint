var moins = document.getElementsByClassName("min-btn");
var plus = document.getElementsByClassName("plus-btn");
var qty = document.getElementsByClassName("count");
var total = document.getElementById("montant");
var suppr = document.getElementsByClassName("croix");
var produit = document.getElementsByClassName("prod");
var prixU = document.getElementsByClassName("prices");
function totalPrice() {
  total.innerHTML = (
    +qty[0].innerHTML * parseFloat(prixU[0].innerHTML) +
    +qty[1].innerHTML * parseFloat(prixU[1].innerHTML) +
    +qty[2].innerHTML * parseFloat(prixU[2].innerHTML)
  ).toFixed(3);
}

// first count
moins[0].addEventListener("click", function () {
  if (+qty[0].innerHTML > 0) {
    var qt = parseInt(qty[0].innerHTML);
    qty[0].innerHTML = qt - 1;
    var x = document.getElementById("total-item");
    x.innerHTML = +x.innerHTML - 1;
  } else {
    alert("Quantité invalide");
  }

  totalPrice();
});

plus[0].addEventListener("click", function () {
  var qt = parseInt(qty[0].innerHTML);
  qty[0].innerHTML = qt + 1;
  var x = document.getElementById("total-item");
  x.innerHTML = +x.innerHTML + 1;

  totalPrice();
});
// second count
moins[1].addEventListener("click", function () {
  if (+qty[1].innerHTML > 0) {
    var qt = parseInt(qty[1].innerHTML);
    qty[1].innerHTML = qt - 1;
    var x = document.getElementById("total-item");
    x.innerHTML = +x.innerHTML - 1;
  } else {
    alert("Quantité invalide");
  }
 
  totalPrice();
});

plus[1].addEventListener("click", function () {
  var qt = parseInt(qty[1].innerHTML);
  qty[1].innerHTML = qt + 1;
  var x = document.getElementById("total-item");
  x.innerHTML = +x.innerHTML + 1;
  totalPrice();
});
// third count
moins[2].addEventListener("click", function () {
  if (+qty[2].innerHTML > 0) {
    var qt = parseInt(qty[2].innerHTML);
    qty[2].innerHTML = qt - 1;
    var x = document.getElementById("total-item");
    x.innerHTML = +x.innerHTML - 1;
    totalPrice();
  } else {
    alert("Quantité invalide");
  }
  
  totalPrice();
});

plus[2].addEventListener("click", function () {
  var qt = parseInt(qty[2].innerHTML);
  qty[2].innerHTML = qt + 1;
  var x = document.getElementById("total-item");
  x.innerHTML = +x.innerHTML + 1;
  totalPrice();
});
// fin comptage


//  suppr article
for (var i = 0; i < suppr.length; i++) {
  suppr[i].addEventListener("click", function (event) {
    var clickBtn = event.target;
    const element = clickBtn.parentElement.parentElement;
    element.style.display = "none";
    const quantity = clickBtn.parentElement.parentElement.children[6];
    const price = clickBtn.parentElement.parentElement.children[8];
    total.innerHTML = +total.innerHTML - +quantity.innerHTML * +price.innerHTML;
  });
}
