import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = product =>{
    const rest = cart.filter(pb => pb.id !== product.id);
    setCart(rest)
    removeFromDb(product.id)
  }
  const navigate = useNavigate()

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem handleRemoveProduct={handleRemoveProduct} product={product} key={product.id}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
            <button onClick={()=> navigate('/shipment')}> Proceed Shipping</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
