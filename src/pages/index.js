import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="hero flex shadow-lg py-48 justify-center">
      <div class="p-20 text-center">
        {/* <div class="font-bold text-5xl text-primary uppercase ">J.D Sutivan</div> */}
        <div class="md:text-3xl text-3xl text-white">
          In need of <a class="text-primary">specialized framing?</a>
        </div>
        <div class="text-xl text-white font-normal mt-4 shadow-sm italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </div>
        <div class="mt-6 flex justify-center">
          <Link to="about">
          <button className="bg-primary text-black p-4 shadow-lg font-bold hover:text-white">About Us</button>
          </Link>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col p-16 text-white">
      <div class="pt-10 lg:max-w-screen-md">
      <div class="text-3xl uppercase"> Our Work </div>
      <span class="bg-gray-400"></span>
      <div class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem iusto alias! Saepe, explicabo? Excepturi eveniet, laborum iste veritatis, sapiente mollitia quae quod magnam unde, error debitis accusantium veniam quos!
      </div>
      <Link to="projects">
      <button class="float-right mr-32 bg-primary text-black px-8 py-4 shadow-lg font-bold hover:text-white">
        Projects
      </button>
      </Link>
      </div>
      <div class="pt-10 lg:max-w-screen-md">
      <div class="text-3xl uppercase"> Testimonial </div>
      <span class="bg-gray-400"></span>
      <blockquote className=" p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-primary quote">
      <p className="mb-4">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet sunt doloremque nisi nulla maxime mollitia totam quos dolorum pariatur, corporis quidem eligendi laboriosam id unde molestiae explicabo commodi aliquam?"
      </p>
      <cite>
      <a className="text-sm" href="..." target="_blank" rel="noopener noreferrer">
      ethan
      </a>  
      </cite>
      </blockquote>
      <Link to="testimony">
      <button class="float-right mr-32 bg-primary text-black px-8 py-4 shadow-lg font-bold hover:text-white">
        More Testimonials
      </button>
      </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
