import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Homepage" />
    {/* <h1>MOVA</h1> */}
    <p>We are telling stories about Ukraine and Russian-Ukrainian war. Team based in Ukraine.</p> 
    <p>How we are unique? There are large media companies that highlight key events. They do it fast, but they miss a ton of useful and interesting content in social media in the Ukrainian and Russian languages. Such stories are not translated to English at all or with a huge delay, so you are getting only the part of the reality. We are here to fix this and help you be up to date.</p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>dff</p>
    <p>
      <Link to="/support/">Support</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
