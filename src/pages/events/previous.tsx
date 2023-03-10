import { graphql, PageProps } from "gatsby";
import React from "react"
import Event from "../../components/event";
import EventList from "../../components/eventslist";

import Layout from '../../components/layout';


const App: React.FunctionComponent<PageProps<Queries.EventQueryQuery>> = ({ data }) => {
  return (
    <Layout title="Previous sessions">

{data.allFile.edges.length && (
<EventList data={data}/>
) || (

  <p>
  We're a brand-new group so we've not had any sessions yet!
  See <a href="/events/upcoming">upcoming events</a> for details of our upcoming sessions.
  </p>
)}

    </Layout>
  )
}

export default App


export const query = graphql`
query EventQuery {
  allFile(
    sort: {childMdx: {frontmatter: {startDate: ASC}}}
    filter: {sourceInstanceName: {eq: "mdxevents"}, childMdx: {isFuture: {eq: false}}}
  ) {
    edges {
      node {
        id
        name
        childMdx {
          id
          isFuture
          frontmatter {
            title
            summary
            location
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
`
