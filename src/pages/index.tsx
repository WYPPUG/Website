import React from "react"

import Layout from '../components/layout';
import logoBig from "../images/logo.png"

const App: React.FunctionComponent = () => {
  return (
    <Layout title="Home" hideTitle>


      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <img src={logoBig} alt="WYPPUG" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Share the power!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a group of like-minded Power Platform users who aim to meet regularly to share our experience with the Microsoft Power Platform and Dynamics.
            All levels of experience are welcome.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
              <a href="/events/upcoming" className="text-sm font-semibold leading-6 text-gray-900">
                Upcoming sessions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* <div className="px-4 py-5 my-5 text-center">
        <StaticImage className="d-block mx-auto mb-4" src={logoBig} alt="WYPPUG logo" />
        <h1 className="display-6 fw-bold"></h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">We are a group of like-minded Power Platform users who aim to meet regularly to share our experience with the Microsoft Power Platform and Dynamics.</p>
          <p>All levels of experience are welcome.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button href="/events/upcoming" variant="primary" size="lg" className="px-4 gap-3">Upcoming sessions</Button>
            <Button href="/events/previous" variant="outline-secondary" size="lg" className="px-4">Previous sessions</Button>
          </div>
        </div>
      </div> */}


    </Layout>
  )
}

export default App
