import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Homepage" />
    {/* <h1>MOVA</h1> */}
    <p>We are telling stories about Ukraine and Russian-Ukrainian war. We like eating <a href="https://www.google.com/search?q=palyanica&sxsrf=APq-WBs2lBIbNW2zHwUQqh3VZXa1DZ2XJA%3A1647634295367&ei=d-c0YoeFFpGarwSGnpiYBQ&ved=0ahUKEwjHnJSHvND2AhURzYsKHQYPBlMQ4dUDCA4&uact=5&oq=palyanica&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjELADECcyBwgjELADECcyCQgAELADEAcQHkoECEEYAUoECEYYAFAAWABgmARoA3AAeACAAQCIAQCSAQCYAQCgAQLIAQPAAQE&sclient=gws-wiz">palyanica</a></p> 
    <p>Why world needs this media? There are large media companies that highlight key events. They do it fast, but they miss a ton of useful and interesting content in social media in the Ukrainian and Russian languages. Such stories are not translated to English at all or with a huge delay, so you are getting only the part of the reality. We are here to fix this and help you be up to date.</p>
    <p>Built between the anvil of love and the hammers of anger in Ukraine</p>
    <p>
      <b><Link to="/support/">SUPPORT US</Link></b> <br />
    </p>
  </Layout>
)

export default IndexPage
