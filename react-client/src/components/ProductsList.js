import React from 'react';
import data from "../data.json";
const ProductsList = () => {
    return (
        <div>
        <div className='products-list'>
            <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVsv9PuVFEe0bhgG4SB6Oi7oqR1pRlUHOoQ&usqp=CAU" alt="image" />
                <h2>MacBook Pro</h2>
                <p>The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer</p>
                <p className='card-item-price'>Price: $1999</p>
                <p className='card-item-cat'>Categories: computers</p>
                <div className="product-card-buttons">
                    <button>Update Product</button>
                    <button >Delete Product</button>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGm32C8hfCRf47-7RVjnvDlUoHjMGybWwA&usqp=CAU" alt="image" />
                <h2>iPhone 13</h2>
                <p>The iPhone 13 is the latest smartphone from Apple with a high-quality camera, long battery life, and a fast processor.</p>
                <p className='card-item-price'>Price: $799</p>
                <p className='card-item-cat'>Categories: phones</p>
                <div className="product-card-buttons">
                    <button>Update Product</button>
                    <button >Delete Product</button>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5l6VLwLJZDSSdZYIRtP70NdqtdiPxs_nvw&usqp=CAU" alt="image" />
                <h2>Samsung QLED TV</h2>
                <p>The Samsung QLED TV is a 4K TV with a stunning display, high-quality sound, and smart features.</p>
                <p className='card-item-price'>Price: $1499</p>
                <p className='card-item-cat'>Categories: electronics</p>
                <div className="product-card-buttons">
                    <button>Update Product</button>
                    <button >Delete Product</button>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVsv9PuVFEe0bhgG4SB6Oi7oqR1pRlUHOoQ&usqp=CAU" alt="image" />
                <h2>Dell Inspiron</h2>
                <p>The Dell Inspiron is a mid-range laptop with a solid build quality, decent performance, and good battery life.</p>
                <p className='card-item-price'>Price: $899</p>
                <p className='card-item-cat'>Categories: computers</p>
                <div className="product-card-buttons">
                    <button>Update Product</button>
                    <button >Delete Product</button>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfVK9_xK-hLyYbivEeLI1O5K9glRdJyRkqA&usqp=CAU" alt="image" />
                <h2>Google Pixel 6</h2>
                <p>The Google Pixel 6 is the latest smartphone from Google with a powerful camera, long battery life, and a beautiful design.</p>
                <p className='card-item-price'>Price: $699</p>
                <p className='card-item-cat'>Categories: phones</p>
                <div className="product-card-buttons">
                    <button>Update Product</button>
                    <button >Delete Product</button>
                    <button >Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductsList