import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Support" />
    <h1>Hi from the second page</h1>
    <p></p>
    <p>
      <Link to="/support-defenders/">Help Ukrainian defenders</Link> to save the free world<br />
    </p>
    <p>
      <Link to="/support-channel/">Help this channel running</Link> to spread the word<br/>
    </p>
    <p>
      (!) SPECIAL NEED: Support small armor production facilities in Ukraine; Money is needed to supply them with steel, textile and furniture. <Link to="/support-armor-production/">More details here</Link> <br />
    </p>
  </Layout>
)

export default SecondPage
