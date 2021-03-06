import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3C55FF`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        {" "}
        <Link
          to="/"
          style={{
            color: `#FFDE00`,
            textDecoration: `none`,
            position: `relative`,
          }}
        >

          <span
          style={{
            marginLeft: `32px`
          }}
          >
          ova
          </span>
          
          
          <span
          style={{
            position: `absolute`,
            top: `10px`,
            left: `0px`,
          }}
          >M</span>
          <span
          style={{
            position: `absolute`,
            top: `-10px`,
            left: `0px`,
          }}
          >M</span>

        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
