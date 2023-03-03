import { graphql, PageProps } from "gatsby";
import React from "react";

import Layout from "../components/layout";

import ContactPageContent from "../data/pages/contact.mdx";

const App: React.FunctionComponent = () => {
  return (
    <Layout title="Contact">
      <div className="space-y-6">
        <ContactPageContent />
      </div>
    </Layout>
  );
};

export default App;
