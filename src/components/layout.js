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
        <footer class="bg-black py-4 ">
        <div class="text-white font-bold md:flex md:items-center md:justify-center pb-2">
            About J.D Sutivan 
          </div>
          <div class="border-t border-solid border-primary rounded-b py-4">
          <div class="text-white font-bold md:flex md:items-center md:justify-center pb-2">
            Follow us
          </div>
          <div class="flex items-center md:justify-center ">
          <a href="https://instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <a href="https://facebook.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 19h5V5H5v14h7v-5h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 13.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H16c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(255,255,255,1)"/></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z" fill="rgba(255,255,255,1)"/></svg></a>
          </div>
          </div>
          <div class="border-t border-solid border-primary rounded-b py-4">
          <div class="text-white font-bold md:flex md:items-center md:justify-center ">
            Address
          </div>
          <div class="flex items-center md:justify-center md:text-center text-white ">
            P.O. Box 1020 
            <br/>
            20 Florece St.
            <br/>
            Marlborough, MA 01752
          </div>
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
