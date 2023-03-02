import React from "react"

import Layout from '../components/layout';

const App: React.FunctionComponent = () => {
  return (
    <Layout title="Contact">

      <p className="mb-3">
        Our primary channel for communication is currently our LinkedIn Group.
      </p>

      <p className="mb-3">
        <a href="https://www.linkedin.com/groups/12785894/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          LinkedIn Group <span aria-hidden="true">→</span>
        </a>
        <a href=""></a>
      </p>


    </Layout>
  )
}

export default App
