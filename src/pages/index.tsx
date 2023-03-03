import React from "react";

import Layout from "../components/layout";
import logoBig from "../images/logo.png";

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
              We are a group of like-minded Power Platform users who aim to meet
              regularly to share our experience with the Microsoft Power
              Platform and Dynamics. All levels of experience are welcome.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/events/upcoming"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Upcoming sessions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
