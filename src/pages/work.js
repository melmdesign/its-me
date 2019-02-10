import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `black` }}>
    <Header headerText="Works" />
    <Header headerText="and works and works" />
    <p>It's my work</p>
    <Link to="/">Home</Link>
  </div>
)
