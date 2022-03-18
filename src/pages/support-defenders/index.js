import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Support defenders" />
    <h1>Support defenders</h1>
    <p>You have two options how to help:</p>
    <p>
      <Link to="/support-defenders/with-goods/">1. By sending goods</Link> <br />
      <Link to="/support-defenders/with-money/">2. By funding</Link> <br />
    </p>
  </Layout>
)

export default SecondPage
 
