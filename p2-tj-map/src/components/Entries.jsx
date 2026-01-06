import React from 'react'
import data from './data'
import Entry from './Entry'

const Entries = () => {
    const items=data.map(item=>{
        return(
            <Entry
            key={item.id}
            src={item.src}
            alt={item.alt}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            title={item.title}
            date={item.date}
            description={item.description}/>
        )
    })
  return (
    <div>
        {items}
    </div>
  )
}

export default Entries