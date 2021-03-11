import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import proxyMenu from "../PROXYDATA"
import StockPhotos from "../data/Stock"
import ItemModal from "./Add2CartModal"
import CartSideBar from "./CartSideBar"
import "../stylesheets/Menu.css"

function MenuSection() {
  const [open, setOpen] = useState(false)
  const [foodInfo, setFoodInfo] = useState({})
  const [cart, setCart] = useState([])

  const handleOpen = (categoryID, foodID) => {
    setFoodInfo(
      proxyMenu.categories
        .filter((category) => category.id === categoryID)
        .map((x) => x.menuItems)
        .flat()
        .filter((item) => item.id === foodID)
    )
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="menu" style={{ display: "flex" }}>
      <ItemModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        foodInfo={foodInfo}
        cart={cart}
        setCart={setCart}
      />
      <div className="menuSection">
        <div
          className="menuWrapper"
          style={{ maxWidth: "calc(100vw - 340px)" }}
        >
          <div className="header">HEADER STUFF INSIDE HERE</div>
          <Grid container>
            <Grid item xs className="menu">
              <section className="mainMenuSection">
                {proxyMenu.categories.map((category) => (
                  <div className="categoryBlock" key={category.id}>
                    <div className="categoryTitle">{category.name}</div>
                    <Grid container spacing={2} className="categorySubSection">
                      {category.menuItems.map((food) => {
                        const fImg =
                          food.images[0] === undefined
                            ? StockPhotos[
                                Math.floor(Math.random() * Math.floor(10))
                              ].img
                            : food.images[0]
                        return (
                          <Grid
                            item
                            xs={6}
                            key={food.id}
                            id={food.id}
                            onClick={() => handleOpen(category.id, food.id)}
                          >
                            <div className="foodItem">
                              <div className="foodName">
                                <div className="foodNameTitle">
                                  <span>{food.name}</span>
                                </div>
                                <div className="foodNameSubInfo">
                                  {food.subItems.length > 1
                                    ? food.subItems.map((x) => (
                                        <div key={x.id}>
                                          <span>{x.name}</span>
                                          <span> ${x.price}</span>
                                        </div>
                                      ))
                                    : food.subItems.map((x) => (
                                        <div key={x.id}>
                                          <span> ${x.price}</span>
                                        </div>
                                      ))}
                                </div>
                              </div>
                              <div
                                className="foodImage imgStyle"
                                style={{
                                  backgroundImage: `url(${fImg})`,
                                }}
                              />
                            </div>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </div>
                ))}
              </section>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="cartSection">
        <Grid item xs className="cartSidebar">
          <CartSideBar cart={cart} setCart={setCart} />
        </Grid>
      </div>
    </div>
  )
}

export default MenuSection
