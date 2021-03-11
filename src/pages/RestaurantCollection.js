import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import Navbar from "../components/NavBar"
import LoadingSpinner from "../components/Loading"
import StockPhotos from "../data/Stock"
import "../stylesheets/RestaurantCollection.css"

function RestaurantCollection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  let rCollection = ""
  if (location.state.categories === undefined) {
    rCollection = location.state.collections.findIndex(
      (collection) => collection.collection.title === location.state.title
    )
  } else {
    rCollection = location.state.categories.findIndex(
      (category) => category.categories.name === location.state.title
    )
  }
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <section style={{ marginTop: "64px" }}>
        <div className="restaurantsWrapper">
          <div className="leftSide">
            <div className="leftSideBox">
              <a className="backLink" href="/mainpage">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "64px",
                    marginBottom: "20px",
                  }}
                >
                  <ArrowBackIosIcon />
                  BACK
                </div>
              </a>
              <span className="categoryTitle">{location.state.title}</span>
            </div>
          </div>
          <div className="rightSide">
            <div
              style={{
                margin: "0px auto",
                maxWidth: "960px",
              }}
            >
              {location.state.restaurants[rCollection].map((restaurant) => {
                const rImg =
                  restaurant.restaurant.featured_image === ""
                    ? StockPhotos[5].img
                    : restaurant.restaurant.featured_image
                return (
                  <div
                    className="restaurantItem"
                    key={restaurant.restaurant.id}
                  >
                    <div key={restaurant.restaurant.id}>
                      <Link to={`/${restaurant.restaurant.id}/menu`}>
                        <div style={{ display: "flex" }}>
                          <div
                            className="rImgStyle"
                            style={{
                              backgroundImage: `url(${rImg})`,
                            }}
                          />
                          <div
                            className="rImgStyle"
                            style={{
                              backgroundImage: `url(${rImg})`,
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="restaurantInfo">
                      <div className="restaurantDetails">
                        <span> {restaurant.restaurant.name} </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RestaurantCollection
