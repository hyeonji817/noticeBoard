function ProductList() {
  const Products = [
    { id: 1, name: "친환경 컵", price: 5000 },
    { id: 2, name: "재활용 가방", price: 10000 },
  ];

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <button>장바구니 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;