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
        <h1>Hi, I'm <span className="text-6xl bg-clip-text text-transparent font-bold bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">Eshan Srivastava</span></h1>
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
