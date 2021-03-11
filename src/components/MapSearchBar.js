/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    display: "inline-flex",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  searchSubmit: {
    maxWidth: "100%",
    margin: "0",
    minHeight: "40px",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    background: "red",
    width: "40px !important",
    height: "40px",
    padding: "0",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default function GoogleMapsSearch({ setInputText }) {
  const classes = useStyles()
  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
      <Link to={{ pathname: "/mainpage" }}>
        <button type="button" className={classes.searchSubmit}>
          <ArrowForwardRoundedIcon style={{ color: "white" }} />
        </button>
      </Link>
    </div>
  )
}
