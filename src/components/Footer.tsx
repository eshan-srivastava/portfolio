const Footer = () => {   
    return (
        <footer className="footer footer-center py-5 relative border-t border-t-gray-500/80 text-base-content rounded bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(19, 17, 21, 0.2), rgba(13, 17, 21, 0.9)), url(/footer_bg.svg)`,
        }}>
            <p className="py-4">
                Made with React + TailwindCSS + Typescript
                <br /><i>by Eshan Srivastava</i>
            </p>
            <nav className="p-4 md:w-1/2 mx-auto grid grid-flow-col gap-8">
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