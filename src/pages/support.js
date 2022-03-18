import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Support" />
    <h1>Here are three support options</h1>
    <p></p>
    <p>
      1. <Link to="/support-channel/">Help this channel</Link> to live and spread the word<br/>
    </p>
    <p>
      2. <Link to="/support-defenders/">Help Ukrainian defenders</Link> to save the free world<br />
    </p>
    <p>
      3. <Link to="/support-armor-production/">Support workshops production of body armor</Link>  in Ukraine: money is needed to buy steel, textile and furniture. URGENT NEED (!)
    </p>
  </Layout>
)

export default SecondPage
