import { CreateSchemaCustomizationArgs, GatsbyNode, graphql } from "gatsby";
import path from "path";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions, schema, getNode }) => {
    actions.createTypes([
      schema.buildObjectType({
        name: "Mdx",
        interfaces: ["Node"],
        fields: {
          isFuture: {
            type: "Boolean!",
            resolve: (s: any) => new Date(s.frontmatter.endDate) >= new Date(),
          },
        },
      }),
    ]);
  };

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  async function makePagesWithQuery<T>(
    query: Promise<{ errors?: any; data?: T }>,
    templatePath: string,
    pathPrefix: string,
    contextGetter: (page: T) => any
  ) {
    const result: any = await query;
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const pages = result.data?.allFile.edges;

    pages.forEach((edge: any) => {
      createPage({
        path: `${pathPrefix}/${edge.node.name}`,
        component:
          path.resolve(templatePath) +
          `?__contentFilePath=${edge.node.childMdx.internal.contentFilePath}`,
        context: contextGetter(edge),
      });
    });
  }

  await makePagesWithQuery<any>(
    graphql(`
      query PagesQuery {
        allFile(
          filter: {
            sourceInstanceName: { eq: "mdxpages" }
            childMdx: { id: { ne: null } }
          }
        ) {
          edges {
            node {
              internal {
                contentFilePath
              }
              id
              name
              childMdx {
                internal {
                  contentFilePath
                }
                id
                isFuture
                frontmatter {
                  title
                }
                body
              }
            }
          }
        }
      }
    `),
    "./src/templates/mdxlayout.tsx",
    "",
    (edge) => ({ title: edge.node.childMdx.frontmatter.title })
  );

  await makePagesWithQuery<any>(
    graphql(`
      query EventPagesQuery {
        allFile(
          filter: {
            sourceInstanceName: { eq: "mdxevents" }
            childMdx: { id: { ne: null } }
          }
        ) {
          edges {
            node {
              internal {
                contentFilePath
              }
              id
              name
              childMdx {
                internal {
                  contentFilePath
                }
                id
                isFuture
                frontmatter {
                  title
                  summary
                  startDate
                  endDate
                  displayDate
                  preMeetingLinks {
                    url
                    name
                  }
                  postMeetingLinks {
                    url
                    name
                  }
                }
                body
              }
            }
          }
        }
      }
    `),
    "./src/templates/mdxeventlayout.tsx",
    "/events",
    (edge) => ({ event: edge.node.childMdx })
  );
};
