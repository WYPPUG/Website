import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import React, { ReactNode } from "react";

import Layout from "../components/layout";
const MdxLayout: React.FunctionComponent<{
  pageContext: { title: string };
  children: ReactNode;
}> = ({ pageContext: { title }, children }) => {
  return (
    <Layout title={title}>
      <div className="space-y-6">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export default MdxLayout;
