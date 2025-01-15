import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      alert("ORDER PLACED SUCCESSFULLY!");
      dispatch(clearCart());
    } else {
      alert("Your cart is empty. Please add items to place an order.");
    }
  };
  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      item.card.info.price || item.card.info.defaultPrice || 0;
    return total + price / 100; 
  }, 0);

  return (
    <div className="my-2 p-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-4xl">Cart</h1>
        <div className="my-2 space-x-4">
          <button
            className="p-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button
            className="p-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
        {cartItems.length === 0 ? (
          <h5 className="mt-4 text-lg">Cart is empty, please add food items</h5>
        ) : null}
      </div>
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto mt-4 text-left">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold">
            Total Price: ₹ {totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
