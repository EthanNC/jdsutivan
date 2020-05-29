/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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
        <footer class="bg-black">
          <div class="pt-4 text-white md:flex md:justify-center">
              © {new Date().getFullYear()}, J.D Sutivan
          </div>
          <div class="pt-2 md:flex md:items-center md:justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </div>
          <div class="pt-2 md:flex md:items-center md:justify-center ">
            <ul class="">
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/about">About Us</Link></li>
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/projects">Projects</Link></li>
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/testimony">Testimony</Link></li>
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/biography">Story</Link></li>
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/community">Community</Link></li>
                <li class="md:mx-2 md:inline leading-7 text-sm" ><Link className="text-white underline text-small" to="/contact">Contact</Link></li>
            </ul>
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
