import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import React, { ReactNode } from "react";
import Event from "../components/event";

import Layout from "../components/layout";
const MdxEventLayout: React.FunctionComponent<{
  pageContext: { event: any };
  children: ReactNode;
}> = ({ pageContext: { event }, children }) => {
  return (
    <Layout title={"Event - " + event.frontmatter.title}>
      <div className="space-y-6">
        <Event hideTitle {...event.frontmatter} isFuture={event.isFuture} />
      </div>
      <div className="space-y-24">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </Layout>
  );
};

export default MdxEventLayout;
