import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Projects, Members } from './components';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <About />
        {/* <Services /> */}
        <Projects />
        <Members />
        {/* <Contact /> */}
        {/* <Footer />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;