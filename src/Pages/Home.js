import React from 'react'
import Movies from '../components/Movies'

function Home() {
  return (
    <div><h2 className='heading'>
    welcome to movies app
    </h2>
    <section >
    <Movies/>
    </section>
    </div>
  )
}

export default Home