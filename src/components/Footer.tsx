const Footer = () => {   
    return (
        <footer className="footer footer-center p-10 bg-gray-900 border-t border-t-gray-500/80 text-base-content rounded mt-8">
            <p className="pb-4">
                Made with React + TailwindCSS + Typescript
                <br /><i>by Eshan Srivastava</i>
            </p>
            <nav className="p-4 md:w-1/2 mx-auto grid grid-flow-col">
                <a className="link link-hover" href="#about">About</a>
                <a className="link link-hover" href="#experience">Experience</a>
                <a className="link link-hover" href="#projects">Projects</a>
                <a className="link link-hover" href="#contact">Contact</a>
            </nav>
            <aside>
                <p>Icons from:</p>
                <a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer" className="link link-hover">simpleicons.org</a>
                <span> | </span>
                <a href="https://uxwing.com" target="_blank" rel="noopener noreferrer" className="link link-hover">uxwing.com</a>
            </aside>
        </footer>
    )
}

export default Footer