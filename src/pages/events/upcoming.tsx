import React from "react"

import Layout from '../../components/layout';
import Event from '../../components/event';

import { graphql, PageProps } from 'gatsby';
import EventList from "../../components/eventslist";

const App: React.FunctionComponent<PageProps<Queries.EventQueryQuery>> = ({ data }) => {

  return (
    <>
      <Layout title="Upcoming Sessions">
            
      <EventList data={data}/>
      </Layout>
    </>
  )


}

export default App

export const query = graphql`
query EventQuery {
  allMdx(
    sort: {frontmatter: {startDate: ASC}}
    filter: {isFuture: {eq:true}}
  ) {
    nodes {
      id
      isFuture,
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
`
