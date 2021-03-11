/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import Navbar from "../components/NavBar"
import MapSearch from "../components/MapSearchBar"
import LoadingSpinner from "../components/Loading"
import StockPhotos from "../data/Stock"
import "../stylesheets/HomePage.css"
import dasher1 from "../media/images/dasher.png"
import dasher2 from "../media/images/dasher2.png"
import dasher3 from "../media/images/dasher4.png"

function HomePage({ flag, setInputText }) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [restaurants, setRestaurants] = useState([])
  const url = `https://developers.zomato.com/api/v2.1/search?count=6&category=Delivery`
  // const API = `${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(url, {
        headers: {
          "user-key": "API KEY",
          "content-type": "application/json",
        },
      })
      const data = await result.json()
      try {
        setIsLoaded(true)
        setRestaurants(data.restaurants)
      } catch (error) {
        setIsLoaded(true)
        setError(error)
      }
    }
    fetchData()
  }, [url])

  if (error) {
    return <div>{error.message}</div>
  }
  if (!isLoaded) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
  }
  return (
    <div className="homepage">
      <Navbar />
      <div className="display">
        <div className="hero">
          <div className="heroContentContainer">
            <div className="title">
              <span>Your favorite restuarants, delivered</span>
            </div>
            <div className="searchBox">
              <MapSearch setInputText={setInputText} />
              {flag === 2 && <p>Address is not valid try again!</p>}
            </div>
          </div>
        </div>
        <section className="content">
          <div className="localFaves">
            <div className="contentTitle" style={{ margin: "16px 0" }}>
              <span className="title">Local Favorites</span>
            </div>
            <div className="faveWrapper">
              {restaurants
                .map((x) => x.restaurant)
                .map((restaurant, i) => (
                  <Link
                    className="restaurant"
                    key={restaurant.id}
                    to={`/${restaurant.id}/menu`}
                  >
                    <div>
                      <img
                        src={StockPhotos[i].img}
                        alt={StockPhotos[i].name}
                        style={{
                          maxWidth: "400px",
                          maxHeight: "400px",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                    {restaurant.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className="becomeBox">
            <div className="wrapperOptions">
              <div className="box">
                <div className="imgBox">
                  <img src={dasher1} alt="become a dasher" />
                </div>
                <div className="detailsWrapper">
                  <div>
                    <h2>Become a Dasher</h2>
                    <h3>
                      As a delivery driver, you'll make reliable money-working
                      anytime, anywhere.
                    </h3>
                  </div>
                  <Button>Start earning</Button>
                </div>
              </div>
              <div className="box">
                <div className="imgBox">
                  <img src={dasher2} alt="become a partner" />
                </div>
                <div className="detailsWrapper">
                  <div>
                    <h2>Become a Partner</h2>
                    <h3>
                      Grow your business and reach new customers by partnering
                      with us.
                    </h3>
                  </div>
                  <Button>Sign up your store</Button>
                </div>
              </div>
              <div className="box">
                <div className="imgBox">
                  <img src={dasher3} alt="try the app" />
                </div>
                <div className="detailsWrapper">
                  <div>
                    <h2>Try the App</h2>
                    <h3>
                      Get the best DashDoor experience with live order tracking.
                    </h3>
                  </div>
                  <Button>Get the app</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
