import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import useDocumentScrollThrottled from '../util/useDocumentScrollThrottled'
import Modal from "../components/modal"

import logo from "../images/icon.png"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);


  const MINIMUM_SCROLL = 1;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown =  currentScrollTop > 0;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const hiddenStyle = shouldHideHeader ? 'transform scale-0' : '';

  return (
    <div class="fixed w-full ">
    <Modal ref={ref}/>
    <div class="fixed bg-black flex w-full items-center justify-between flex-wrap p-4">
      <div class="w-24">
        <Link to="/">
        <img src={logo} alt="J.D Sutivan" />
        </Link>
      </div>
      <div class={`transition duration-500 linear absolute pl-32 font-bold text-2xl text-white uppercase ${hiddenStyle}`} >J.D Sutivan</div>
      {/* <Logo/> */}
      {/* <button class="transition duration-500 linear bg-blue-500 transform scale-0">
  Hover me
</button> */}
      <div class="px-4">
      <button class="hover:text-primary text-white" onClick={() => setIsOpen(!isOpen)}>
      {!isOpen && <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M639.965 82.56c-129.734-.035-510.16 0-639.965 0v93.12h639.965V82.56zM.036 464.368h639.929L640 557.44c-213.31 0-426.655.012-639.965.012v-93.084zm.012-190.904c213.298 0 426.608-.024 639.917-.024l.023 93.12H.048v-93.096z"/></svg>}
      {isOpen && <svg class="fill-current" xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 2541 2541" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M29 172c-39-39-39-103 0-142s103-39 142 0l1099 1099L2369 30c39-39 103-39 142 0s39 103 0 142L1412 1271l1099 1099c39 39 39 103 0 142s-103 39-142 0L1270 1413 171 2512c-39 39-103 39-142 0s-39-103 0-142l1099-1099L29 172z" fill-rule="nonzero"/></svg>}
      </button>
      </div>
    </div>
    <div class="bg-black bg-opacity-75 float-right pt-24">
    <ul class={isOpen ? 'md:flex flex-col flex-wrap overflow-x-hidden font-semibold ' : 'hidden'}>
      <li class="p-2 m-4">
          <Link to='/' activeClassName="text-primary" class="text-white hover:text-primary">Home</Link>
        </li>
        <li class="p-2 m-4">
          <Link to='/about/' activeClassName="text-primary" class="text-white hover:text-primary ">About Us</Link>
        </li>
        <li class="p-2 m-4">
          <Link to='/projects/' activeClassName="text-primary" class="text-white hover:text-primary" >Projects</Link>
        </li>
        <li class="p-2 m-4">
          <Link to='/testimony/' activeClassName="text-primary"class="text-white hover:text-primary" >Testimonials</Link>
        </li>
        <li class="p-2 m-4">
          <Link to='/biography/' activeClassName="text-primary"class="text-white hover:text-primary" >Biography</Link>
        </li>
        <li class="p-2 m-4">
          <Link to='/community/' activeClassName="text-primary"class="text-white hover:text-primary" >Community</Link>
        </li>
        <li class="p-2 m-4">
          <button onClick={() => {ref.current.cleanModal()}} activeClassName="text-primary" class="font-bold text-white hover:text-primary" >Contact</button>
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
