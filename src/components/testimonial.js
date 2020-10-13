import React from "react"

const Testimonial = ({quote, attribution}) => {
  return (
    <div>
      <blockquote className=" p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-primary quote">
        <p className="mb-4">
          {quote}
        </p>
        { attribution && <cite>
            <a
              className="text-sm float-right"
            //   href="..."
            //   target="_blank"
            //   rel="noopener noreferrer"
            >
              {attribution}
            </a>
          </cite>}
      </blockquote>
    </div>
  )
}

export default Testimonial
