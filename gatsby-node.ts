import { graphql } from "gatsby"

export function createSchemaCustomization({ actions, schema, getNode }) {
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

/*
const async function createPages() {

}

export const createPages async ({ graphql :any, actions: any, reporter:any }) => void = ({ graphql, actions, reporter } {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allMdx {
      nodes {
        internal {
          contentFilePath
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      path: `/events/event/${node.parent.name}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: node.internal.contentFilePath,
      // You can use the values in this context in
      // our page layout component
      context: { },
    })
  })
}*/