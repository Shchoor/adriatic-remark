import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"


const Index = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />

    <h1>Hi people</h1>  
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Index
