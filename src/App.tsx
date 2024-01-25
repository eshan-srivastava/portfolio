import Navbar from "./components/Navbar.tsx"
import './App.css'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import About from "./components/About.tsx"
import Projects from "./components/Projects.tsx"
import Experience from "./components/Experience.tsx"

//flow of app for screen 1 ->
// Navbar | Hello H1 | About | Experience | Projects | Contact | Footer

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-8 w-5/6 md:w-full mx-auto">
        <h1>Hi, I'm Eshan Srivastava</h1>
        <h3 className="text-xl mt-4">I know C++ ⭐ javaScript 🔑 and python 🐍</h3>
        <p className="text-md mt-2">And I have done projects and assignments in typescript, MERN, c#(unity)</p>
      </div>
      <About />
      <Experience />
      <Projects />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
