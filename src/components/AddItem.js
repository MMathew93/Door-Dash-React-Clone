import React, { useState } from "react"
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox"
import AddBoxIcon from "@material-ui/icons/AddBox"
import "../stylesheets/AddItem.css"

// eslint-disable-next-line react/prop-types
function AddItem({ setOpen, price, cart, setCart, foodInfo }) {
  const [numberOfItems, setNumberOfItems] = useState(1)

  const decrement = () => {
    setNumberOfItems(numberOfItems - 1)
  }

  const increment = () => {
    setNumberOfItems(numberOfItems + 1)
  }

  const updateInput = (e) => {
    setNumberOfItems(+e.currentTarget.value < 1 ? 1 : +e.currentTarget.value)
  }

  const addToCart = () => {
    setCart([
      ...cart,
      { details: foodInfo, total: numberOfItems, value: numberOfItems * price },
    ])
    setOpen(false)
  }

  return (
    <div>
      <div>
        <div className="counterWrapper">
          <div className="counterBox">
            <div>
              <button
                type="button"
                className="decrement addStyle"
                onClick={decrement}
                disabled={numberOfItems <= 1}
              >
                <IndeterminateCheckBoxIcon />
              </button>
            </div>
            <div>
              <input
                type="text"
                pattern="[0-9]*"
                className="inputBox"
                value={numberOfItems || 1}
                onInput={(e) => updateInput(e)}
              />
            </div>
            <div>
              <button
                type="button"
                className="increment addStyle"
                onClick={increment}
              >
                <AddBoxIcon />
              </button>
            </div>
          </div>
          <div className="add2cartButton">
            <button type="button" onClick={addToCart}>
              Add to Cart ${(price * numberOfItems).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItem
