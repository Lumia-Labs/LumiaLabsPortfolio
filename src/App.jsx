import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero } from './components'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer />  */}
      </div>
    </BrowserRouter>
  )
}

export default App
