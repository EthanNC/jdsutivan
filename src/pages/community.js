import React from 'react'
import Layout from '../components/layout'
import team from '../images/team.jpeg'
import Testimonial from '../components/testimonial'


const community = () => {
    const ppQuote = "Octavio is a great leader and a great teacher. By example, he taught me the importance of working hard and putting 100% into everything and anything I do. He is a kind, honest, and hardworking man."
    const ppAt = "Prashant Patel"
    const kpQuote = "Octavio was an amazing soccer coach, and he helped get my team our first ever undefeated season. He pushed us to be our best, and gave us great speeches before games about what it meant to be a team and work hard. Very grateful he was my coach!"
    const kpAt = "Katelyn Pennell"
    const mpQuote = "Coach Octavio taught me the skills of working hard, even when you feel defeated. His strong work ethic was deep-seated into our weekly training practices, from strength and agility training to team-building exercises. He would always show up early and stay late to make the most of the time we had to practice, and would always provide an encouraging and welcoming environment for the players. I learned alot about the mental and physical demands of soccer through his guidance."
    const mpAt = "Marisa Patel"
    return (
        <Layout>
            <div class=" flex flex-col py-48 px-8 md:px-32 lg:px-64 space-y-6">
                <div class="text-white text-center text-3xl uppercase">
                    Community
                </div>
                <img className src={team} alt="soccer-team" className="object-contain"/>
                <div class="text-white text-center text-xl uppercase">
                    Coaching Youth Soccer
                </div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia omnis, ea similique ab eius doloribus ex ipsa illum reiciendis distinctio provident tenetur dolorum beatae? Vitae eius consequuntur dolores aut in?</div>
                <div class="text-white text-center text-xl uppercase"> Coaching Testimony</div>
                <Testimonial quote={ppQuote} attribution={ppAt}/>
                <Testimonial quote={kpQuote} attribution={kpAt}/>
                <Testimonial quote={mpQuote} attribution={mpAt}/>
                
            </div>
        </Layout>
    )
}

export default community

