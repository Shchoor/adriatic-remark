import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styles from "./Hero.module.scss"
import ContactForm from "../ContactForm"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      backgroundImage: file(absolutePath: { regex: "/banner.jpg/" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      map: file(absolutePath: { regex: "/map.png/" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
      markdownRemark {
        frontmatter {
          subtitle
          title
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const imageData = data.backgroundImage.childImageSharp.fluid
  const md = data.markdownRemark.frontmatter
  const map = data.map.childImageSharp.fixed
  return (
    <BackgroundImage Tag="section" className={styles.Hero} fluid={imageData}>
      <div className="container fluid">
        <div className="row">
          <div className="col-md-7">
            <h1>{md.title}</h1>
            <p  dangerouslySetInnerHTML={{ __html: md.subtitle }}></p>
          </div>
          <div className="col-md-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
