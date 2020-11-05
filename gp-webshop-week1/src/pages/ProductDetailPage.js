import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'
import DummyData from '../dataset/data.json';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  useEffect(() => {
    const selectedProductData = DummyData.filter(product => product.id === productId);
    setSelectedProduct(selectedProductData[0]);
    console.log(selectedProductData[0]);

  }, [productId]);
  return (
    <div className="detail-container">
      <Link to="/">Back to Products</Link>
      <div className="row top">
        <div className="col-2">
          <img className="medium" src={`/images/${selectedProduct.image}`} alt={selectedProduct.slug} ></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{selectedProduct.name}</h1>
            </li>
            <li>
              Stars
          </li>
            {/* <li>
              {product.rating} Stars ({product.numReviews} Reviews)
          </li> */}
            <li>
              Price: <b>${selectedProduct.price}</b>
            </li>
            <li>
              Description:
            <div>
                {selectedProduct.description}
              </div>
            </li>
          </ul>
        </div>



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
              {/* 
               {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )} */}
            </ul>
          </div>
        </div>

      </div>

    </div >
  )
};


