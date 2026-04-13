import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  console.log(products);

  return (
    <div>
      <h1>ProductManagement</h1>
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable products={products} />
    </div>
  );
}
