import React, { useState, useEffect } from "react"
import Navbar from "../components/NavBar"
import LoadingSpinner from "../components/Loading"
import MenuSection from "../components/MenuSection"

import "../stylesheets/Menu.css"

function Menu() {
  const [isLoaded, setIsLoaded] = useState(false)

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
      <MenuSection />
    </div>
  )
}

export default Menu
