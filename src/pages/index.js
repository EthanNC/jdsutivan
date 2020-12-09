import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonial from "../components/testimonial"
import logo from "../images/icon.png"
import Modal from "../components/modal"
import Slider from "../components/slider"

const IndexPage = () => {
  const projectRef = React.useRef(null)

  const quote =
    "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives."
  return (
    <Layout>
      <SEO title="Home" />
      <Modal header="Projects" ref={projectRef}>
        <Slider />
      </Modal>
      <div class="hero flex shadow-lg py-48 justify-center">
        <div class="p-20 text-center">
          {/* <div class="text-4xl text-white underline">
            <a class=" font-extrabold uppercase">JDSutivan Specialized Framing</a>
          </div> */}
          <div class="text-2xl text-white font-semibold mt-4 shadow-sm italic">
            Because we love what we do, our quality comes from creating and
            building with passion, care, and attention to the details
          </div>
          <div class="mt-6 flex justify-center">
            <Link to="about">
              <button className="bg-primary text-black p-4 shadow-lg font-bold hover:text-white">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="flex items-center flex-col p-16 text-white ">
        <div class="pt-10 lg:max-w-screen-md">
          <div class="text-3xl uppercase"> Our Work </div>
          <span class="bg-gray-400"></span>
          <div class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem
            iusto alias! Saepe, explicabo? Excepturi eveniet, laborum iste
            veritatis, sapiente mollitia quae quod magnam unde, error debitis
            accusantium veniam quos!
          </div>
    
            <button
              class="float-right   bg-primary text-black px-8 py-4 shadow-lg font-bold hover:text-white"
              onClick={() => {
                projectRef.current.cleanModal()
              }}
            >
              View Projects
            </button>
  
        </div>
        <img src={logo} alt="logo" class="w-64 justify-center py-8" />
        <div class="pt-10 lg:max-w-screen-md">
          <div class="text-3xl uppercase">
            {" "}
            A Quote By <i>William A. Foster</i>
          </div>
          <span class="bg-gray-400"></span>
          <Testimonial quote={quote} />
          <Link to="testimony">
            <button class="float-right bg-primary text-black px-8 py-4 shadow-lg font-bold hover:text-white">
              Testimonials
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
