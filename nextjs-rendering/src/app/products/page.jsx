import Product from "@/components/Product";

const getProducts = async () => {
  const res = await fetch("http://localhost:3001/products", {
    cache: "force-cache",
  });
  return res.json();
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className=" container mx-auto p-4 text-center space-y-5 ">
      <h2>This is the Products Page</h2>
      <p>Total Products: {products.length}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
