import BookCard from "@/components/BookCard";

export default async function BooksPage() {
  const res = await fetch("http://localhost:3001/books", {
    //     cache: "no-store",
    next: { revalidate: 5 },
  });

  /**
   * cache: no-store -> এইটা ব্যবহার করলে প্রতিবার পেজ লোড করার সময় নতুন করে ডেটা ফেচ হবে,
   * কোন ক্যাশ ব্যবহার হবে না। এটা তখনই দরকার যখন ডেটা খুব দ্রুত পরিবর্তন হয় এবং আপডেটেড ডেটা দেখানো জরুরি।
   *  উদাহরণস্বরূপ, যদি বইয়ের তথ্য খুব দ্রুত পরিবর্তন হয় বা নতুন বই যোগ হয়, তাহলে এই অপশনটি ব্যবহার করা উচিত যাতে ইউজার সর্বদা সর্বশেষ তথ্য দেখতে পারে।
   *  এইটাকে বলে  SSR (Server-Side Rendering)
   *
   * next: { revalidate: 10 } -> এইটা ব্যবহার করলে ডেটা প্রথমবার ফেচ করার পর 10 সেকেন্ডের জন্য ক্যাশে থাকবে।
   * এর মানে হলো, যদি একই পেজ আবার 10 সেকেন্ডের মধ্যে লোড করা হয়, তাহলে ক্যাশে থাকা ডেটা দেখানো হবে
   * এবং নতুন করে ফেচ করা হবে না। তবে 10 সেকেন্ড পর গেলে, পরবর্তী লোড করার সময় নতুন করে ডেটা ফেচ হবে
   * এবং ক্যাশ আপডেট হবে। এটা তখনই দরকার যখন ডেটা মাঝে মাঝে পরিবর্তন হয় এবং আপডেটেড ডেটা দেখানো প্রয়োজন,
   * কিন্তু প্রতি লোডে নতুন করে ফেচ করা প্রয়োজন নেই। উদাহরণস্বরূপ, যদি বইয়ের তথ্য মাঝে মাঝে পরিবর্তন হয়,
   * তাহলে এই অপশনটি ব্যবহার করা উচিত যাতে ইউজার কিছুটা আপডেটেড তথ্য দেখতে পারে কিন্তু প্রতি লোডে নতুন করে ফেচ করার প্রয়োজন না পড়ে।
   *  এইটাকে বলে  ISR (Incremental Static Regeneration)
   *
   *
   *  ssr vs isr:
   *  ssr: প্রতিবার পেজ লোড করার সময় নতুন করে ডেটা ফেচ হয়, কোন ক্যাশ ব্যবহার হয় না।
   *  isr: ডেটা উল্লেখকৃত সময়ের জন্য ক্যাশে থাকে, তারপরও নতুন করে ফেচ হয়।
   *
   */

  const books = await res.json();

  return (
    <div className="container mx-auto p-4 text-center space-y-5">
      <h1 className="text-3xl font-bold">Books Page {books.length}</h1>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
