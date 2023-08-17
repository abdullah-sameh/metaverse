import Nav from './components/Nav'
import About from './sections/About'
import Landing from './sections/Landing'
import Started from './sections/Started'
import World from './sections/World'
import New from './sections/New'
import People from './sections/People'
import Insights from './sections/Insights'
import Code from './sections/Code'
import Footer from './sections/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  console.log(isLoading)

  return (
    <div className='overflow-hidden'>
      <Nav />
      <Landing />
      <About />
      <World />
      <Started />
      <New />
      <People />
      <Insights />
      <Code />
      <Footer />
    </div>
  )
}

export default App
