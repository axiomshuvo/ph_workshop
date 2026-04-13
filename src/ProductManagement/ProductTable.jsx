export default function ProductTable({ products }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ fontSize: "3em", marginBottom: "20px" }}>
        Total Product - {products.length}
      </h2>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ margin: "0 auto", width: "80%", borderColor: "yellow" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
