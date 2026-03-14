// const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(res);
// res
//   .then((response) => {
//     console.log(response);
//     return response.json(); // why use return here? because we want to chain another .then() to handle the parsed JSON data. By returning response.json(), we are returning a promise that resolves to the parsed JSON data, which can then be accessed in the next .then() block.
//   })
//   .then((data) => {
//     console.log(data); // why no return here? because we are not chaining any further .then() blocks that need to access the data. We are simply logging the data to the console, and there is no need to return anything from this block.
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// const loadData = () => {
//   //# promise 1: fetch the data from the API
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     //@ promise 2: parse the response as JSON
//     .then((res) => res.json())
//     //@ promise 3: log the parsed JSON data to the console
//     .then((json) => console.log(json));
// };

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts/";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       //       console.log(data);
//       displayData(data);
//     });
// };

// const displayData = (data) => {
//   //   console.log(data);
//   data.forEach((post) => {
//     console.log(post);
//   });
// };

// @ const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts/";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayPost(data));
// };

// const displayPost = (posts) => {
//   console.log(posts);
//   for (let i = 0; i < posts.length; i++) {
//     const post = posts[i];
//     console.log(post);
//   }
//   for (let post of posts) {
//     console.log(post);
//   }
//   posts.forEach((post) => {
//     console.log(post);
//   });

// // # step-1 get the container
//   const postContainer = document.getElementById("post");
//     console.log(postContainer);

//   posts.forEach((post) => {
//     //step 2 destructing object and make element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     li.style.marginBottom = "10px";
//     //     console.log(li);
//     //step3 - add li to container or print
//     postContainer.appendChild(li);
//   });

// // };

//# const loadPost = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((Response) => Response.json())
//     .then((data) => work(data));
// };

// const work = (data) => {
//   const poster = document.getElementById("post-container");
//   poster.innerHTML = "";

//   data.forEach((elem) => {
//     const postCard = document.createElement("div");
//     postCard.innerHTML = `
//     <div class="post-card">
//         <h2>${elem.title}</h2>
//         <p>${elem.body}</p>
//       </div>
//     `;

//     poster.appendChild(postCard);
//   });
// };

// const loadPost = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((Response) => Response.json())
//     .then((data) => work(data));
// };

// const work = (data) => {
//   const poster = document.getElementById("todo-list");
//   poster.innerHTML = "";
//   console.log(data);
//   data.forEach((elem) => {
//     const postCard = document.createElement("li");
//     postCard.classList.add("todo-card");
//     postCard.innerHTML = `
//         ${elem.completed == true ? `&#10003;` : `&#10007;`} ${elem.title}
//       `;

//     poster.appendChild(postCard);
//   });
// };

// const loadPost = () => {
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((Response) => Response.json())
//     .then((data) => work(data));
// };

// const work = (data) => {
//   const poster = document.getElementById("photo-list");
//   poster.innerHTML = "";
//   console.log(data);

//   data.forEach((elem) => {
//     const postCard = document.createElement("div");
//     postCard.classList.add("card-basic");
//     postCard.innerHTML = `
//                 <div class="card-basic__image">
//                                 <img src="${elem.thumbnailUrl}" alt="${elem.title}">
//                 </div>
//                 <div class="card-basic__content">
//                         <h3>${elem.title}</h3>
//                         <a class="card-basic__btn" href="#">Read More</a>
//                 </div>
//                 `;

//     poster.appendChild(postCard);
//   });
// };

// const loadPost = () => {
//   fetch("https://dummyjson.com/users    ")
//     .then((Response) => Response.json())
//     .then((data) => user(data));
// };

// const user = (data) => {
//   const singleUser = document.getElementById("userlist");
//   console.log(data);

//   data.users.forEach((elem) => {
//     console.log(elem);
//     const div = document.createElement("div");
//     div.classList.add("usercard");

//     div.innerHTML = `
//       <img src="${elem.image}">
//       <h3>${elem.firstName} ${elem.lastName}</h3>
//       <p>${elem.email}</p>
//       <p>${elem.phone}</p>
//       <p>${elem.address.city}</p>
//     `;

//     singleUser.appendChild(div);
//   });
// };

// const loadPost = () => {
//   const url = "https://dummyjson.com/carts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       showCart(data.carts);
//     });
// };

// const showCart = (carts) => {
//   const cartContainer = document.getElementById("cartlist");
//   cartContainer.innerHTML = "";
//   //   console.log(carts);

//   carts.forEach((cart) => {
//     const cartCard = document.createElement("div");
//     cartCard.classList.add("cartcard");
//     cartCard.innerHTML = `<h2>Cart ID: ${cart.id} | User ID: ${cart.userId}</h2>`;
//     // products
//     cart.products.forEach((product) => {
//       console.log(product);
//       const productDiv = document.createElement("div");
//       productDiv.classList.add("product-card");
//       productDiv.innerHTML = `
//         <img src="${product.thumbnail}" alt="${product.title}">
//           <h3>${product.title}</h3>
//           <p>Price: $${product.price}</p>
//           <p>Quantity: ${product.quantity}</p>
//           <p>Total: $${product.total}</p>
//         `;

//       cartCard.appendChild(productDiv);
//     });

//     //cart summary
//     const summaryDiv = document.createElement("div");
//     summaryDiv.classList.add("cart-summary");
//     summaryDiv.innerHTML = `
//       <h3>Cart Summary</h3>
//       <p>Total Products: ${cart.totalProducts}</p>
//       <p>Total Quantity: ${cart.totalQuantity}</p>
//       <p>Total: $${cart.total}</p>
//       <p>Discounted Total: $${cart.discountedTotal}</p>
//     `;

//     cartCard.appendChild(summaryDiv);

//     cartContainer.appendChild(cartCard);
//   });
// };
