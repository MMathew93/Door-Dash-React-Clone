/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import { Button } from "@material-ui/core"
import StockPhotos from "../data/Stock"
import LoadingSpinner from "./Loading"
import "../stylesheets/CollectionSection.css"

function CollectionsSection({ collections, restaurants }) {
  const [filteredCollection, setFilteredCollection] = useState(null)
  const [filteredRestaurants, setFilteredRestaurants] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setFilteredCollection(collections.map((x) => x.collection))
    setFilteredRestaurants(
      restaurants.map((eachArr) => eachArr.map((x) => x.restaurant))
    )
    setIsLoaded(true)
  }, [collections, restaurants])
  if (!isLoaded) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    )
  }
  return (
    <div className="collectionsWrapper">
      {filteredCollection.map((collection, i) => (
        <div key={collection.collection_id} className="categoryBox">
          <div className="descriptionBox">
            <div>
              <span className="categoryTitle">{collection.title}</span>
              <div />
              <Link
                to={{
                  pathname: `/collection/${collection.title
                    .toLowerCase()
                    .replace(/\s/gi, "-")}`,
                  state: { title: collection.title, collections, restaurants },
                }}
              >
                <Button className="categoryButton">
                  <div className="buttonTextStyle">
                    <span>See All</span>

                    <ArrowForwardRoundedIcon style={{ color: "white" }} />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          {
            filteredRestaurants.map((eachArr) => (
              <div className="restaurantBox">
                <Grid
                  container
                  spacing={3}
                  styl={{ margin: "0 0 8px 0 !important" }}
                >
                  {eachArr.slice(0, 2).map((restaurant) => {
                    const rImg =
                      restaurant.featured_image === ""
                        ? StockPhotos[5].img
                        : restaurant.featured_image
                    return (
                      <Grid item xs={6} key={restaurant.id}>
                        <Link to={`/${restaurant.id}/menu`}>
                          <div
                            className="restaurantImage imgStyle"
                            style={{
                              backgroundImage: `url(${rImg})`,
                            }}
                          />
                        </Link>
                        <span> {restaurant.name} </span>
                      </Grid>
                    )
                  })}
                </Grid>
                <Grid container spacing={3}>
                  {eachArr.slice(2, 5).map((restaurant) => {
                    const rImg =
                      restaurant.featured_image === ""
                        ? StockPhotos[5].img
                        : restaurant.featured_image
                    return (
                      <Grid item xs={4} key={restaurant.id}>
                        <div
                          className="restaurantImage subImgStyle"
                          style={{
                            backgroundImage: `url(${rImg})`,
                          }}
                        />
                        <span> {restaurant.name} </span>
                      </Grid>
                    )
                  })}
                </Grid>
              </div>
            ))[i]
          }
        </div>
      ))}
    </div>
  )
}
export default CollectionsSection
