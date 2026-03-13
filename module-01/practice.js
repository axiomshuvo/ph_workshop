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

const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((data) => work(data));
};

const work = (data) => {
  const poster = document.getElementById("post-container");
  poster.innerHTML = "";

  data.forEach((elem) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${elem.title}</h2>
        <p>${elem.body}</p>
      </div>
    `;

    poster.appendChild(postCard);
  });
};
