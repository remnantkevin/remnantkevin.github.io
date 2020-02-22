import React from "react"

import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import headshot from "../images/kevin-elliott.png"
import github from "../images/github-logo.png"
import linkedin from "../images/linkedin-logo.png"
import twitter from "../images/twitter-logo.png"


export default ({ data }) => (
  <div>
    <SEO title={data.site.siteMetadata.title} />
    <div className="sticky-footer-container py-8 lg:py-12 px-6 md:px-16 lg:px-24 font-sans text-black leading-tight antialiased">
      <header>
        <div className="flex md:block lg:flex items-center">
          <div className="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
            <Link className="no-underline" to="/">
              <img src={headshot} alt="headshot" className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full" />
            </Link>
          </div>
          <div className="flex flex-grow justify-between max-w-2xl">

            <div>
              <Link className="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight" to="/">
                Kevin Elliott
              </Link>
              <div className="mt-3 lg:mt-2 uppercase tracking-wide text-xs text-gray-600 font-semibold">
                Software developer
              </div>
            </div>
            
            <div className="flex grayscale">
              <div>
                <a href="https://github.com/remnantkevin" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github logo" className="h-5 w-5"  />
                </a>
              </div>
              <div className="ml-2">
                <a href="https://www.linkedin.com/in/kevin-elliott" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin logo" className="h-5 w-5" />
                </a>
              </div>
              <div className="ml-2">
                <a href="https://twitter.com/KevinElliott19" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter logo" className="h-5 w-5"  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className="sticky-footer-grower lg:pl-32 mt-8">
        <div className="max-w-2xl">
          <div className="text-lg text-gray-darkest leading-normal spaced-y">
            <p>
              Hi, I'm Kevin, a junior software developer from Cape Town, South Africa.
            </p>
            <p>
              Since early 2019, I've been working on a monolithic Ruby on Rails app at
              {" "}<a href="https://www.ixperience.co/" target="_blank" className="underline" rel="noopener noreferrer">iXperience</a>.
              The app houses student, admin, and community portals, and is backed by a PostgreSQL database.
              We use RSpec, FactoryBot, and CircleCI during testing, and the app is deployed to Heroku.
            </p>
            <p>
              Most of my contributions have been on the backend, with some opportunities to work with
              JavaScript, jQuery, and CSS on the frontend.
              I have also been a part of significant projects such as upgrading from Rails 5.1 to 6.0, adding role-based
              authorisation to our portals, and updating and expanding integrations with HubSpot, YouCanBook.me,
              and a Google BigQuery data warehouse.
            </p>
            <p>
              I am excited by the opportunities and challenges web development provides,
              and passionate about building efficient, well-designed software.
              To grow and expand my skill set I am currently taking
              {" "}<a href="https://acad.link/js" target="_blank" className="underline" rel="noopener noreferrer">JavaScript</a>{" "}
              and
              {" "}<a href="https://acad.link/reactjs" target="_blank" className="underline" rel="noopener noreferrer">React</a>{" "}
              courses by Academind, and reading
              {" "}<a href="https://www.poodr.com" target="_blank" className="underline" rel="noopener noreferrer">Practical Object-Orientated Design</a>{" "}
              by {" "}<a href="https://www.sandimetz.com" target="_blank" className="underline" rel="noopener noreferrer">Sandi Metz</a>.
            </p>
            <p>
              In mid-April 2020 I am moving to Perth, Australia and am open to, and actively seeking, new job
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <footer className="lg:pl-32 mt-6">
        Built using <a href="https://www.gatsbyjs.org/" target="_blank" className="underline" rel="noopener noreferrer">Gatsby</a> and
        {" "}
        <a href="https://tailwindcss.com/" target="_blank" className="underline" rel="noopener noreferrer">TailwindCSS</a>
      </footer>
    </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`