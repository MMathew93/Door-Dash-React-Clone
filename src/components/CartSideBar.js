import React from "react"
import { Link } from "react-router-dom"
import "../stylesheets/CartSidebar.css"

// eslint-disable-next-line react/prop-types
function CartSideBar({ cart, setCart }) {
  const removeItemFromCart = (id) => {
    // eslint-disable-next-line react/prop-types
    const filteredCart = cart.filter((cartItem) => cartItem.details.id !== id)
    setCart(filteredCart)
  }
  // eslint-disable-next-line react/prop-types
  if (cart.length === 0) {
    return <div>NOTHING HERE</div>
  }
  return (
    <div>
      <div>
        <div
          style={{
            maxWidth: "100%",
            padding: "16px",
          }}
        >
          <span> Your Order ...</span>
        </div>
        <div style={{ padding: "0px 16px" }}>
          <div>
            <Link to="/" className="toCheckOut">
              <div className="toCheckOutWrapper">
                <div
                  style={{
                    maxWidth: "100%",
                    padding: "8px 16px",
                  }}
                >
                  <div className="toCheckOutStyle">
                    <div>
                      <span>Checkout</span>
                    </div>
                    <div>
                      <span>
                        $
                        {cart
                          // eslint-disable-next-line react/prop-types
                          .reduce(
                            (accumulatedTotal, cartItem) =>
                              accumulatedTotal + cartItem.value,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {cart.map((item) => (
        <div key={item.details.id} id={item.details.id}>
          <div className="itemContent">
            <div className="itemTotal">{item.total}x</div>
            <div className="itemDetails">{item.details.name}</div>
            <div
              className="removeItem"
              style={{
                gridArea: "3 / 2 / auto / auto",
              }}
            >
              <div
                style={{
                  marginTop: "5px",
                }}
              >
                <button
                  type="button"
                  className="removeItemFromCart"
                  onClick={() => removeItemFromCart(item.details.id)}
                >
                  <span className="buttonText">Remove</span>
                </button>
              </div>
            </div>
            <div className="itemValue">${item.value.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartSideBar
