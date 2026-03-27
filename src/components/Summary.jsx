//  Components
//  JSX
//  Props
//  State
//  Events
//  [Conditional Rendering]

/**
 * api:
 *
 *
 *
 *
 *  1. just write a simple fetch with json coversion
 *  2. wrap the data loading component under suspense
 *  3.
 */

// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const loadData = async () => {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// };

// Suspense কি ?
// Suspense হল একটি React কম্পোনেন্ট যা অ্যাসিঙ্ক্রোনাস ডেটা লোডিং এবং কোড স্প্লিটিং এর জন্য ব্যবহৃত হয়। এটি একটি ফallback UI প্রদান করে যখন ডেটা বা কোড লোড হচ্ছে, এবং যখন লোড সম্পন্ন হয় তখন মূল UI প্রদর্শন করে।
// Suspense এর মাধ্যমে আপনি অ্যাসিঙ্ক্রোনাস ডেটা লোডিং এর সময় একটি লোডিং স্পিনার বা অন্য কোন ফallback UI প্রদর্শন করতে পারেন, যা ব্যবহারকারীর অভিজ্ঞতাকে উন্নত করে। এটি React 16.6 থেকে উপলব্ধ এবং React 18 এ আরও উন্নত করা হয়েছে।
