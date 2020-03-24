// React
import React from "react"

// Gatsby
import { graphql } from "gatsby"

// External packages and components
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

// Internal Components
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import ExternalLinkDecorated from "../components/external-link-decorated"

// Internal other
import headshot from "../images/kevin-elliott.png"
import cv from "../docs/Kevin-Elliott-CV-March-2020.pdf"


export default ({ data }) => (
  <div>
    <SEO title={data.site.siteMetadata.title} />
    <div className="sticky-footer-container py-8 lg:py-12 px-6 md:px-16 lg:px-24 font-sans text-black">
      <header class="lg:pl-32">
        <div class="flex justify-center max-w-2xl">
           <img src={headshot} alt="headshot" className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full" />
        </div>

        <div className="flex justify-between max-w-2xl mt-8">
          <div>
            <div className="text-black font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
              Kevin Elliott
            </div>
            <div className="mt-3 lg:mt-2 uppercase tracking-wide text-xs text-gray-600 font-semibold">
              Software developer
            </div>
          </div>

          <div className="flex">
            <div>
              <ExternalLink url="https://github.com/remnantkevin">
                <FaGithub className="h-6 w-6 hover-teal-600" />
              </ExternalLink>
            </div>
            <div className="ml-2">
              <ExternalLink url="https://www.linkedin.com/in/kevin-elliott">
                <FaLinkedin className="h-6 w-6 hover-teal-600" />
              </ExternalLink>
            </div>
            <div className="ml-2">
              <ExternalLink url="https://twitter.com/KevinElliott19">
                <FaTwitter className="h-6 w-6 hover-teal-600" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </header>
      <div className="sticky-footer-grower lg:pl-32 mt-8">
        <div className="max-w-2xl">
          <div className="text-normal text-gray-900 leading-normal spaced-y">
            <p>
              Hi, I'm Kevin, a junior software developer.
              In March 2020 I moved from Cape Town, South Africa to Perth, Australia.
              I am currently seeking new software development job opportunities.
            </p>
            <p>
              From early 2019 to March 2020, I worked on a monolithic Ruby on Rails app at
              {" "}<ExternalLinkDecorated url="https://www.ixperience.co" text="iXperience"></ExternalLinkDecorated>.
              The app houses student, admin, and community portals, and is backed by a PostgreSQL database.
              RSpec, FactoryBot, and CircleCI were used during testing, and the app was deployed to Heroku.
            </p>
            <p>
              Most of my contributions were on the backend, with some opportunities to work with
              JavaScript, jQuery, and CSS on the frontend.
              I was also a part of more significant projects such as upgrading from Rails 5.1 to 6.0, adding role-based
              authorisation to our portals, updating and expanding integrations with HubSpot and YouCanBook.me,
              and working quite extensively on a Google BigQuery data warehouse.
            </p>
            <p>
              I am excited by the opportunities and challenges web development provides,
              and am passionate about building efficient, well-designed software.
              In order to grow my knowledge and skill set I am currently taking a
              {" "}<ExternalLinkDecorated url="https://acad.link/reactjs" text="React"></ExternalLinkDecorated>{" "}
              course by Academind, and reading
              {" "}<ExternalLinkDecorated url="https://www.poodr.com" text="Practical Object-Orientated Design"></ExternalLinkDecorated>{" "}
              by
              {" "}<ExternalLinkDecorated url="https://www.sandimetz.com" text="Sandi Metz"></ExternalLinkDecorated>.
            </p>
            <p>
              I can be contacted
              {" "}<ExternalLinkDecorated url="https://twitter.com/KevinElliott19" text="here"></ExternalLinkDecorated>,
              and my CV can be found
              {" "}<ExternalLinkDecorated url={cv} text="here"></ExternalLinkDecorated>.
            </p>
          </div>
        </div>
      </div>
      <footer className="lg:pl-32 mt-2 text-gray-700">
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