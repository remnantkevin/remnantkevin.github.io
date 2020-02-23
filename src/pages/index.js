// React
import React from "react"

// Gatsby
import { Link, graphql } from "gatsby"

// External packages and components
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

// Internal Components
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import ExternalLinkDecorated from "../components/external-link-decorated"

// Internal other
import headshot from "../images/kevin-elliott.png"


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
              <Link className="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight hover:text-teal-600" to="/">
                Kevin Elliott
              </Link>
              <div className="mt-3 lg:mt-2 uppercase tracking-wide text-xs text-gray-600 font-semibold">
                Software developer
              </div>
            </div>
            
            <div className="flex">
              <div>
                <ExternalLink url="https://github.com/remnantkevin">
                  <FaGithub className="h-5 w-5 hover-teal-600" />
                </ExternalLink>
              </div>
              <div className="ml-2">
                <ExternalLink url="https://www.linkedin.com/in/kevin-elliott">
                  <FaLinkedin className="h-5 w-5 hover-teal-600" />
                </ExternalLink>
              </div>
              <div className="ml-2">
                <ExternalLink url="https://twitter.com/KevinElliott19">
                  <FaTwitter className="h-5 w-5 hover-teal-600" />
                </ExternalLink>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className="sticky-footer-grower lg:pl-32 mt-8">
        <div className="max-w-2xl">
          <div className="text-lg text-gray-900 leading-normal spaced-y">
            <p>
              Hi, I'm Kevin, a junior software developer from Cape Town, South Africa.
              I am excited by the opportunities and challenges web development provides,
              and passionate about building efficient, well-designed software.
            </p>
            <p>
              Since early 2019, I've been working on a monolithic Ruby on Rails app at
              {" "}<ExternalLinkDecorated url="https://www.ixperience.co" text="iXperience"></ExternalLinkDecorated>.
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
              To grow and expand my skill set I am currently taking
              {" "}<ExternalLinkDecorated url="https://acad.link/js" text="JavaScript"></ExternalLinkDecorated>{" "}
              and
              {" "}<ExternalLinkDecorated url="https://acad.link/reactjs" text="React"></ExternalLinkDecorated>{" "}
              courses by Academind, and reading
              {" "}<ExternalLinkDecorated url="https://www.poodr.com" text="Practical Object-Orientated Design"></ExternalLinkDecorated>{" "}
              by
              {" "}<ExternalLinkDecorated url="https://www.sandimetz.com" text="Sandi Metz"></ExternalLinkDecorated>.
            </p>
            <p>
              In mid-April 2020 I am moving to Perth, Australia and am open to, and actively seeking, new job
              opportunities.
              Feel free to
              {" "}<ExternalLinkDecorated url="https://twitter.com/KevinElliott19" text="contact me"></ExternalLinkDecorated>.
            </p>
          </div>
        </div>
      </div>
      <footer className="lg:pl-32 mt-6 text-gray-700">
        Built using
        {" "}<ExternalLinkDecorated url="https://www.gatsbyjs.org" text="GatsbyJS"></ExternalLinkDecorated>{" "}
        and
        {" "}<ExternalLinkDecorated url="https://tailwindcss.com" text="TailwindCSS"></ExternalLinkDecorated>.
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