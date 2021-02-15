import "./styles.css";
import { useState } from "react";
const items = [
  {
    id: "1",
    name: "Pen",
    price: "20"
  },
  {
    id: "2",
    name: "Pencil",
    price: "10"
  }
];
export default function App() {
  const [wishlist, setWishlist] = useState([]);
  function addToWishlist(e, item) {
    let q = 0;
    for (let i = 0; i < wishlist.length; ++i) {
      if (wishlist[i].id === item.id) {
        let qtemp = wishlist[i].quantity;
        //wishlist[i].quantity = qtemp + 1;
        let tlist = wishlist.filter((itm) => {
          return itm.id !== item.id;
        });
        setWishlist([...tlist, { ...item, quantity: qtemp + 1 }]);
        q = 1;
      }
    }
    if (q === 0) {
      setWishlist([...wishlist, { ...item, quantity: 1 }]);
    }
  }
  return (
    <div className="App">
      <div className="container-items">
        <h1>items</h1>
        {items.map((item) => {
          return (
            <div className="item">
              <h3>{item.name}</h3>
              <p>Price : {item.price} Rs. </p>
              <button onClick={(e) => addToWishlist(e, item)}>
                Add to wishlist
              </button>
            </div>
          );
        })}
      </div>
      <div className="wishlist">
        <h1>wishlist</h1>
        {wishlist.map((item) => {
          return (
            <div className="item">
              <h3>{item.name}</h3>
              <p>Price : {item.price} Rs. </p>
              <p>Quantity : {item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
