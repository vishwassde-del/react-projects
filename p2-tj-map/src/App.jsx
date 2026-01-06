import React from 'react'
import Entry from './components/Entry'
import data from './components/data'
import Header from './components/Header'


const App = () => {
  const entries = data.map(item => {
    return (
      <Entry 
        key={item.id}
        src={item.src}
        alt={item.alt}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        date={item.date}
        description={item.description}
      />
    )
  })
  return (
    <div>
      <Header />
      {entries}
    </div>
  )
}

export default App