import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Fund Ukrainian defenders" />
    <h1>Fund Ukrainian defenders</h1>
    <p>
      You can send funds to well-established fonds like  <a href="https://savelife.in.ua/en/donate/">SafeLifes</a> or directly to the <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi">Government</a>. It's a good option if you need a high level of trustworthiness to the beneficiary.
    </p>
    <p>
      Where are mid-size funds like <a href="https://koloua.com/en/">KOLO</a>, which utilize funds faster then large funds.
    </p>
    <p>
      You can even send fund to os and we well resend them to local volunteers so they will be in business in a matter of hours. How to do that? Use payment information from the <Link to="/support-channel">"Support our channel"</Link>page, but change "Purpose of payment" to "support defenders". Event if you forget to do this, we will send all extra money to volunteers anyway.<br />
    </p>
  </Layout>
)

export default SecondPage
