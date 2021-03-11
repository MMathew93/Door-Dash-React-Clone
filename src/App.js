import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Main from "./pages/Main"
import Menu from "./pages/Menu"
import RestaurantCollection from "./pages/RestaurantCollection"

function App() {
  const [inputText, setInputText] = useState("")
  const [flag, setFlag] = useState(null)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage flag={flag} setInputText={setInputText} />
        </Route>
        <Route exact path="/mainpage">
          <Main setFlag={setFlag} inputText={inputText} />
        </Route>
        <Route exact path="/collection/:collection">
          <RestaurantCollection />
        </Route>
        <Route exact path="/:restaurant/menu">
          <Menu />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
