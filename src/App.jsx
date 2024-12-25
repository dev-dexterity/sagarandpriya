import React from 'react'
import Navbar from '../src/Components/navbar/navbar'
import HomePage from './Components/Home/home'
import Gallery from './Components/Gallery/gallery'
import Event from './Components/Events/event'
import Highlights from './Components/Highlights/highlights'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HomePage />
      <Gallery />
      <h1 className="gallery-title">Event</h1>
      <Event />
      <h1 className="gallery-title">Highlights</h1>
      <Highlights />
    </div>
  )
}

export default App