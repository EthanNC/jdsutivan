import React from 'react'
import Layout from '../components/layout'
import { collage2 } from "../images/collage";
import Gallery from "react-photo-gallery";

const Work = () => {
    return (
        <Layout>
            <div class="py-48 px-8 md:px-32 lg:px-64">
                <div class="text-white text-3xl uppercase">
                    Our Work
                </div>
                <Gallery photos={collage2}/>
            </div>
        </Layout>
    )
}

export default Work
