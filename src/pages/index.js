import React from "react"

import { Link } from "gatsby"

import headshot from "../images/kevin-elliott.jpg"
// import github from "../images/github-logo.png"
// import linkedin from "../images/linkedin-logo.png"


export default () => (
  <div className="sticky-footer-container py-8 lg:py-16 px-6 md:px-16 lg:px-24 font-sans text-black leading-tight antialiased">
    <header className="max-w-2xl">
      <div className="flex md:block lg:flex items-center">
        <div className="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
          <Link className="no-underline" to="/">
            <img src={headshot} alt="headshot" className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full" />
          </Link>
        </div>
        <div> {/* className="flex justify-between" */}
          <div>
            <Link className="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight" to="/">
              Kevin Elliott
            </Link>
            <div className="mt-3 lg:mt-2 uppercase tracking-wide text-xs text-gray-600 font-semibold">
              Junior software developer
            </div>
          </div>
          {/* <div>
            <div>
              <a href="https://github.com/remnantkevin">
                <img src={github} alt="github logo" className="h-5 w-5" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kevin-elliott">
                <img src={linkedin} alt="linkedin logo" className="h-5 w-5" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </header>
    <div className="sticky-footer-grower lg:pl-32 mt-8">
      <div className="max-w-2xl">
        <div className="text-lg text-gray-darkest leading-normal spaced-y">
          <p>
            Hi, I'm Kevin, a software developer from Cape Town, South Africa.
          </p>
          <p>
            Since the beginning of 2019, I've been working on a monolithic Ruby on Rails app at
            {" "}<a href="https://www.ixperience.co/" target="_blank" className="underline">iXperience</a>.
            The app houses student, admin, and community portals, and is backed by a PostgreSQL database.
            RSpec, FactoryBot, Code Climate, and CircleCI are used during testing, and the app is deployed to Heroku.
          </p>
          <p>
            At iXperience I have worked on projects such as upgrading from Rails 5.1 to 6, adding role-based
            authorisation using Pundit, migrating domains, and updating the integrations with HubSpot
            and a data warehouse on Google BigQuery.
          </p>
          <p>
            In April 2020 I am moving to Perth, Australia and am open to, and actively seeking, new job
            opportunities.
          </p>
        </div>
      </div>
    </div>
    <footer className="lg:pl-32 mt-6">
      Built using <a href="https://www.gatsbyjs.org/" target="_blank" className="underline">Gatsby</a> and
      {" "}
      <a href="https://tailwindcss.com/" target="_blank" className="underline">TailwindCSS</a>
    </footer>
  </div>
)
