import React from "react"
import Img from "./image"
import { Link } from "gatsby"
import Linkedin from "../assets/linkedin.svg"
import { Tooltip } from "@rmwc/tooltip"

import Bird from "../assets/bird-green.svg"

const About = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className=" relative w-full min-h-full items-center bg-lightPrimary pb-16 pt-12 "
    >
      {" "}
      <div className=" md:flex w-ful flex flex-col lg:flex-row flex-wrap">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full relative lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            {/* <Tooltip
              content="I also like to paint - take a look"
              showArrow
              open={true}
            >
              <a
                href="https://www.izabelleart.com/"
                className="bird"
                target="_blank"
              >
                {" "}
                <Bird className="bird" />
              </a>
            </Tooltip>{" "} */}
            <div className="p-4 md:p-12 text-center lg:text-left">
              <Img
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                src="../images/selfie.JPG"
              />

              <h1 className="text-3xl font-bold pt-8 lg:pt-0 barlow-cond uppercase">
                Izabelle Wilding
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
              <p className="pt-4 font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-teal-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Freelance Web Devleoper
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-teal-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                Bristol, UK
              </p>

              <p className="">
                Freelance front-end developer with a passion for building
                attractive user interfaces and keeping up to date with modern
                technologies. Currently working on an ecommerce store using
                Gatsby, Stripe, and Material UI.{" "}
                <a
                  href="https://pottery-ecommerce.netlify.app/"
                  target="__blank"
                >
                  Take a look here.
                </a>
              </p>

              <h3 className="mb-6 font-bold ">Currently Using:</h3>

              <div className="flex flex-row items-center mb-6 text-left justify-center lg:justify-start">
                <ul className="list-disc list-inside text-sm mr-4">
                  <li>Gatsby</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                </ul>
                <ul className="list-disc list-inside text-sm">
                  <li>Node</li>
                  <li>CSS/SASS</li>
                  <li>Component Libraries (Material UI, RMWC) </li>
                  <li>CSS Frameworks (Bulma, Tailwind)</li>
                </ul>
              </div>
              <Link to="/#contact" className="pt-12 pb-8">
                <button className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </Link>

              {/* <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
                  viewBox="0 0 24 24"
                  target="__blank"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-teal-700"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://twitter.com/izzywilding1"
                  data-tippy-content="@twitter_handle"
                  target="__blank"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-teal-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  className="link"
                  href="https://github.com/izabellewilding?tab=repositories"
                  data-tippy-content="@github_handle"
                  target="__blank"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-teal-700"
                    role="img"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <Img
              src="../images/selfie.JPG"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              style={{ minHeight: 575 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
