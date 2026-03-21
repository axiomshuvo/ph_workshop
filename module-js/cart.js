const addProduct = () => {
  console.log("add prodcut");
  const productEl = document.getElementById("product");
  const quantityEL = document.getElementById("quantity");

  const product = productEl.value.trim().toLowerCase();
  const quantity = parseInt(quantityEL.value.trim());

  console.log("add prodcut", product, quantity);
  //   localStorage.setItem(product, quantity);

  displayProduct(product, quantity);

  addProductToCart(product, quantity);

  productEl.value = "";
  quantityEL.value = "";
};

const getCart = () => {
  let cart = {};
  const carJson = localStorage.getItem("cart");
  console.log(carJson);
  if (carJson) {
    cart = JSON.parse(carJson);
  }
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  console.log(typeof cart);
  const cartJson = JSON.stringify(cart);
  console.log(typeof cart);
  localStorage.setItem("cart", cartJson);
};

const displayProduct = (p, q) => {
  const li = document.createElement("li");
  li.innerText = `${p} : ${q}`;
  //
  const productList = document.getElementById("product-list");

  productList.append(li);
};

// display product from local Storage

const displyStoreProducts = () => {
  const cart = getCart();

  for (let product in cart) {
    let quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displyStoreProducts();

/*
 * to save object and array in localstorage -> first covert to string - JSON.Stringfy()
 *
 * to get oject/array from localstorage - JSON.parse() to covert string to array/object
 *
 */
