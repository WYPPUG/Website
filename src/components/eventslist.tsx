import React from "react"

import Event from './event';

const EventList: React.FunctionComponent<{data:any}> = ({data}) => {



  return (
    <>
              
      {data.allFile.edges.map(n => (
        <Event {...n.node.childMdx?.frontmatter} 
          isFuture={n.node.childMdx?.isFuture}
          url={`/events/${n.node.name}`}
        />
      ))}
      

    </>
  )

}

export default EventList


