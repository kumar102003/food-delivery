import React, { useState, useRef, useEffect } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options || {};
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  //let foodItem = props.foodItems;
  const handleAddToCart = async () => {
    let food = null; // To track if the item with same size exists
    for (const item of data) {
      if (item.id === props.foodItem._id && item.size === size) {
        food = item; // Match both id and size
        break;
      }
    }
  
    if (food) {
      // If the same item and size exist, update it
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        size: size,
        price: finalPrice,
        qty: qty,
      });
    } else {
      // If not, add as a new item
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    }
  };
  
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div>
        <div
          className="card mt-3 mx-3"
          style={{ width: "16rem", maxHeight: "360px" }}
        >
          <img
            className="card-img-top"
            src={props.foodItem.img}
            alt="Card image cap"
            style={{
              //width: "120px", // Ensures the image takes full card width
              height: "120px", // Fixed height for all images
              objectFit: "fill", // Maintains aspect ratio, crops if needed
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>

            <div className="container w-100"></div>
            <select
              className="m-2 h-10  bg-success rounded"
              name=""
              id=""
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-10  bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100">{finalPrice} /-</div>
          </div>
          <hr></hr>
          <button
            className={`btn btn-success justify-center  ms-2 mb-3`}
            style={{ width: "fit-content" }}
            onClick={handleAddToCart}
          >
            {" "}
            Add to Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
