// src/components/ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const productId = params.get('id');

    // Simulación de los datos del producto. En un caso real, podrías hacer una solicitud a una API.
    const product = { id: 1, name: 'Producto 1', price: 10, description: 'Descripción del Producto 1' };

    if (productId !== '1') {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
