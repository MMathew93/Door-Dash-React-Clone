/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

function CategoriesBar({ categories, restaurants }) {
  return (
    <div className="categories" style={{ display: "flex" }}>
      {categories
        .map((x) => x.categories)
        .map((category) => (
          <Link
            key={category.id}
            to={{
              pathname: `/collection/${category.name
                .toLowerCase()
                .replace(/\s/gi, "-")}`,
              state: { title: category.name, categories, restaurants },
            }}
          >
            <Button
              id={category.id}
              style={{
                backgroundColor: "red",
                color: "white",
                margin: "15px",
                fontSize: "12px",
                width: "100%",
              }}
            >
              <div>{category.name}</div>
            </Button>
          </Link>
        ))}
    </div>
  )
}

export default CategoriesBar
