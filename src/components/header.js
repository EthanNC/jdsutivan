import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"


import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <nav class="header flex justify-around items-center">
      <div class="logo w-24 md:w-32 lg:w-48 ">
        <Link to="/">
        <img src={logo} alt="J.D Sutivan" />
        </Link>
      </div>
      <Link activeClassName="text-primary item text-white font-bold" to="about" class="item text-white font-bold hover:text-primary">About Us</Link>
      <Link activeClassName="text-primary item text-white font-bold" to="projects" class="item text-white font-bold hover:text-primary">Projects</Link>
      <Link activeClassName="text-primary item text-white font-bold" to="testimony" class="item text-white font-bold hover:text-primary">Testimony</Link>
      <Link activeClassName="text-primary item text-white font-bold" to="biography" class="item text-white font-bold hover:text-primary">Story</Link>
      <Link activeClassName="text-primary item text-white font-bold" to="community" class="item text-white font-bold hover:text-primary">Community</Link>
      <Link activeClassName="text-primary item text-white font-bold" to="contact" class="item text-white font-bold hover:text-primary">Contact</Link>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
