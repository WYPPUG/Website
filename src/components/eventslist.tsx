import React from "react"

import Event from './event';

import { graphql, PageProps } from 'gatsby';

const EventList: React.FunctionComponent<{data:Queries.EventQueryQuery}> = ({data}) => {

  let formatDate = (dateString: string|null|undefined) : string|null => {
    if (!dateString) {
      return null;
    }

    return new Date(dateString).toLocaleString('en-GB', {timeZone: 'Europe/London', dateStyle: "medium", timeStyle: "short"})
  }

  return (
    <>
              
      {data.allMdx.nodes.map(n => (
        <Event title={n.frontmatter?.title ?? "TBC"} 
          location="TBC" date={(n.frontmatter?.displayDate ?? formatDate(n.frontmatter?.startDate) ?? "TBC") + (!n.frontmatter?.displayDate && n.frontmatter?.endDate ? " - " + formatDate(n.frontmatter?.endDate) : "") }
          description={n.frontmatter?.summary ?? ""}
          links={(n.isFuture ? n.frontmatter?.preMeetingLinks: n.frontmatter?.postMeetingLinks)}
        />
      ))}
      

    </>
  )

}

export default EventList


