import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import DummyData from '../dataset/data.json';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { productId } = useParams();                    // get product id from URL
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {                                     // filter the product from data 
    const selectedProductData = DummyData.filter(product => product.id === productId);
    setSelectedProduct(selectedProductData[0]);
  }, [productId]);

  return (
    <div className="detail-container">
      <Link to="/">Back to Products</Link>
      <div className="row top">
        {/* product image */}
        <div className="col-2">
          <img className="medium" src={`/images/${selectedProduct.image}`} alt={selectedProduct.slug} ></img>
        </div>
        {/* product description */}
        <div className="col-1">
          <ul>
            <li>
              <h1>{selectedProduct.name}</h1>
            </li>
            <li>
              Stars
            </li>
            <li>
              Price: <b>${selectedProduct.price}</b>
            </li>
            <li>
              Description:
              <div>{selectedProduct.description}</div>
            </li>
          </ul>
        </div>
        {/* card section */}
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${selectedProduct.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    <span className="success">In Stock</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div >
  )
};


