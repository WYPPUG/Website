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
              
      {data.allFile.edges.map(n => (
        <Event title={n.node.childMdx?.frontmatter?.title ?? "TBC"} 
          location="TBC" date={(n.node.childMdx?.frontmatter?.displayDate ?? formatDate(n.node.childMdx?.frontmatter?.startDate) ?? "TBC") + (!n.node.childMdx?.frontmatter?.displayDate && n.node.childMdx?.frontmatter?.endDate ? " - " + formatDate(n.node.childMdx?.frontmatter?.endDate) : "") }
          description={n.node.childMdx?.frontmatter?.summary ?? ""}
          links={(n.node.childMdx?.isFuture ? n.node.childMdx?.frontmatter?.preMeetingLinks: n.node.childMdx?.frontmatter?.postMeetingLinks)}
        />
      ))}
      

    </>
  )

}

export default EventList


