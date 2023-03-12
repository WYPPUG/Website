import { CreateSchemaCustomizationArgs, GatsbyNode, graphql } from "gatsby"
import path from "path"

export const createSchemaCustomization : GatsbyNode["createSchemaCustomization"] = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'Mdx',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s : any) => new Date(s.frontmatter.endDate) >= new Date(),
        },
      },
    }),
  ])
}

export const createPages : GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result : any = await graphql(`
  query PagesQuery {
    allFile(
      filter: {
        sourceInstanceName: {eq: "mdxpages"}
        childMdx:{id:{ne: null}}
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
  `)
  if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  
  const pages = result.data?.allFile.edges;

  pages.forEach( (edge:any) => {
      createPage({
          path: `/${edge.node.name}`,
          component: path.resolve('./src/components/mdxlayout.tsx') + `?__contentFilePath=${edge.node.childMdx.internal.contentFilePath}`,
          context: { title: edge.node.childMdx.frontmatter.title },
      })
  })
}