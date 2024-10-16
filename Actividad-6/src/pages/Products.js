import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
];

const Products = () => {
    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products?id=${product.id}`}>{product.name}</Link> - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
