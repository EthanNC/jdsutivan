/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header siteTitle={data.site.siteMetadata.title} />
      <div class="flex min-h-screen flex-col">
        <main class="flex-grow">{children}</main>
        <footer class="bg-black py-4 pl-2">
          <div class="text-white font-bold md:flex md:items-center md:justify-center ">
            Follow us
          </div>
          <div class=" flex items-center md:justify-center ">
          <a href="https://instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="https://facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm18069 106436h30115V70296h-30115c-23244 0-42158 18913-42158 42158v18070h-24095v36143h24089v96371h36142v-96371h30115l6022-36142h-36137v-18070c0-3266 2757-6022 6022-6022v4z" fill="#ffff"/></svg></a>
          </div>
          <div class="pt-4 text-white md:flex md:justify-center">
              © {new Date().getFullYear()}, J.D Sutivan
          </div>
        </footer>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
