import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import useDocumentScrollThrottled from "../util/useDocumentScrollThrottled"
import Contact from "./contact"
import Modal from "./modal"
import Slider from "../components/slider"

import logo from "../images/icon.png"

const Header = ({ siteTitle }) => {
  // Hamburger
  const [isOpen, setIsOpen] = useState(false)

  const contactRef = useRef(null)
  const projectRef = useRef(null)

  /*
  Header Animation Start
  */
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const MINIMUM_SCROLL = 1
  const TIMEOUT_DELAY = 200

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = currentScrollTop > 0
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const hiddenStyle = shouldHideHeader ? "transform scale-0" : ""
  const hiddenBackground = shouldHideHeader ? "" : "bg-black"

  /*
  Header Animation End
  */

  return (
    <div class="fixed w-full ">
      <Contact ref={contactRef} />
      <Modal header="Projects" ref={projectRef}>
        <Slider />
      </Modal>
      
      <div
        class={`transition duration-500 ease-in-out fixed flex w-full items-center justify-between flex-wrap p-4 ${hiddenBackground}`}
      >
        <div class={`transition duration-500 linear w-24 ${hiddenStyle}`}>
          <Link to="/">
            <img src={logo} alt="J.D Sutivan" />
          </Link>
        </div>
        <h1
          class={`transition duration-500 linear text-3xl text-white uppercase ${hiddenStyle} `}
        >
          JD Sutivan
        </h1>
      
        <div class="px-4 pt-2">
          <button
            class="hover:text-primary text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            )}
            {isOpen && (
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 2541 2541"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M29 172c-39-39-39-103 0-142s103-39 142 0l1099 1099L2369 30c39-39 103-39 142 0s39 103 0 142L1412 1271l1099 1099c39 39 39 103 0 142s-103 39-142 0L1270 1413 171 2512c-39 39-103 39-142 0s-39-103 0-142l1099-1099L29 172z"
                  fill-rule="nonzero"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div class="bg-black bg-opacity-75 float-right pt-32">
        <ul
          class={
            isOpen
              ? "md:flex flex-col flex-wrap overflow-x-hidden font-semibold "
              : "hidden"
          }
        >
          <li class="p-2 m-4">
            <Link
              to="/"
              activeClassName="text-primary"
              class="text-white hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li class="p-2 m-4">
            <Link
              to="/about/"
              activeClassName="text-primary"
              class="text-white hover:text-primary "
            >
              About Us
            </Link>
          </li>
          <li class="p-2 m-4">
            {/* <Link to='/projects/' activeClassName="text-primary" class="text-white hover:text-primary" >Projects</Link> */}
            <button
              onClick={() => {
                projectRef.current.cleanModal()
              }}
              activeClassName="text-primary"
              class="font-bold text-white hover:text-primary"
            >
              Projects
            </button>
          </li>
          <li class="p-2 m-4">
            <Link
              to="/testimony/"
              activeClassName="text-primary"
              class="text-white hover:text-primary"
            >
              Testimonials
            </Link>
          </li>
          <li class="p-2 m-4">
            <Link
              to="/biography/"
              activeClassName="text-primary"
              class="text-white hover:text-primary"
            >
              Biography
            </Link>
          </li>
          <li class="p-2 m-4">
            <Link
              to="/community/"
              activeClassName="text-primary"
              class="text-white hover:text-primary"
            >
              Community
            </Link>
          </li>
          <li class="p-2 m-4">
            <button
              onClick={() => {
                contactRef.current.cleanModal()
              }}
              activeClassName="text-primary"
              class="font-bold text-white hover:text-primary"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>

    //     <Link activeClassName="text-primary item text-white font-bold" to="about" class="item text-white font-bold hover:text-primary">About Us</Link>
    // <Link activeClassName="text-primary item text-white font-bold" to="projects" class="item text-white font-bold hover:text-primary">Projects</Link>
    // <Link activeClassName="text-primary item text-white font-bold" to="testimony" class="item text-white font-bold hover:text-primary">Testimony</Link>
    // <Link activeClassName="text-primary item text-white font-bold" to="biography" class="item text-white font-bold hover:text-primary">Story</Link>
    // <Link activeClassName="text-primary item text-white font-bold" to="community" class="item text-white font-bold hover:text-primary">Community</Link>
    // <Link activeClassName="text-primary item text-white font-bold" to="contact" class="item text-white font-bold hover:text-primary">Contact</Link>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
