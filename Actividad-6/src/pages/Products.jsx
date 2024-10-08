import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; 

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
];

const Products = () => {
  return (
    <div className="container">
      <h1>Lista de Productos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link className="product-link" to={`/products?id=${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
