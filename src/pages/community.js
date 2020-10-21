import React from "react"
import Layout from "../components/layout"
import team from "../images/team.jpeg"
import team2 from "../images/team2.jpeg"
import Testimonial from "../components/testimonial"

const community = () => {
  const ppQuote =
    "Octavio is a great leader and a great teacher. By example, he taught me the importance of working hard and putting 100% into everything and anything I do. He is a kind, honest, and hardworking man."
  const ppAt = "Prashant Patel"
  const kpQuote =
    "Octavio was an amazing soccer coach, and he helped get my team our first ever undefeated season. He pushed us to be our best, and gave us great speeches before games about what it meant to be a team and work hard. Very grateful he was my coach!"
  const kpAt = "Katelyn Pennell"
  const mpQuote =
    "Coach Octavio taught me the skills of working hard, even when you feel defeated. His strong work ethic was deep-seated into our weekly training practices, from strength and agility training to team-building exercises. He would always show up early and stay late to make the most of the time we had to practice, and would always provide an encouraging and welcoming environment for the players. I learned alot about the mental and physical demands of soccer through his guidance."
  const mpAt = "Marisa Patel"
  const ecQuote =
    "Coach Octavio taught me how to push myself to be better on and off the soccer field. His dedication to improving our team physically and mentally is unmatched. I am forever grateful for Octavio’s lessons and anyone who has the opportunity to be on his team should consider themselves lucky."
  const ecAt = "Ethan Cumming"
  return (
    <Layout>
      <div class=" flex flex-col py-48 px-8 md:px-32 lg:px-64 space-y-6">
        <div class="text-white text-center text-3xl uppercase">Community</div>
        <img
          className
          src={team}
          alt="soccer-team"
          className="object-contain"
        />
        <div class="text-white text-center text-xl uppercase">
          Coaching Youth Soccer
        </div>
        <div>
          My name is Octavio Definis, I am a Soccer coach with a state D license
          and National Y Coaching License. I was engaged by Acton-Boxborough,
          Youth Soccer (ABYS) in Massachusetts. I worked for a number of years
          in Core Program, working with the travel team, as a volunteer coach. I
          also worked with the premier coaching program <i> Strikers United</i>.
        </div>
        <img
          className
          src={team2}
          alt="soccer-team"
          className="object-contain"
        />
        <div class="text-white text-center text-xl uppercase">
          {" "}
          Coaching Testimony
        </div>
        <Testimonial quote={ppQuote} attribution={ppAt} />
        <Testimonial quote={kpQuote} attribution={kpAt} />
        <Testimonial quote={mpQuote} attribution={mpAt} />
        <Testimonial quote={ecQuote} attribution={ecAt} />
      </div>
    </Layout>
  )
}

export default community
