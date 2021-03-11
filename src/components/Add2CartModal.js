/* eslint-disable react/prop-types */
import React from "react"
import Modal from "@material-ui/core/Modal"
import CloseIcon from "@material-ui/icons/Close"
import AddItem from "./AddItem"
import "../stylesheets/Modal.css"

function ItemModal({ open, setOpen, handleClose, foodInfo, cart, setCart }) {
  const body = (
    <div className="modalContent">
      <div style={{ padding: "8px" }}>
        <button className="cancelButton" type="button" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <div style={{ maxWidth: "100%", padding: "8px 16px" }}>
        <h2>{foodInfo[0] === undefined ? "null" : foodInfo[0].name}</h2>
        <p>{foodInfo[0] === undefined ? "null" : foodInfo[0].description}</p>
        {
          // eslint-disable-next-line no-nested-ternary
          foodInfo[0] === undefined
            ? "null"
            : foodInfo[0].subItems.length > 1
            ? foodInfo[0].subItems.map((x) => (
                <div key={x.id}>
                  <span>{x.name}</span>
                  <span> ${x.price}</span>
                </div>
              ))
            : foodInfo[0].subItems.map((x) => (
                <div key={x.id}>
                  <span> ${x.price}</span>
                </div>
              ))
        }
      </div>
      <AddItem
        setOpen={setOpen}
        price={
          foodInfo[0] === undefined ? "null" : foodInfo[0].subItems[0].price
        }
        cart={cart}
        setCart={setCart}
        foodInfo={foodInfo[0]}
      />
    </div>
  )

  return (
    <Modal
      className="modal"
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}

export default ItemModal
