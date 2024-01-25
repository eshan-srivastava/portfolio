import htmllogo from "../assets/html-icon.svg"
import csslogo from "../assets/css-icon.svg"
import tslogo from "../assets/typescript-icon.svg"
import reactlogo from "../assets/react.svg"
import cpplogo from "../assets/cplusplus-icon.svg"
import pylogo from "../assets/python.svg"

const imgstyles = "w-20 my-4 py-2 mx-auto";
const About = () => {
    return (
        <div id="about" className="w-5/6 md:w-4/5 mx-auto">
            <div className="w-full h-auto lg:w-4/12 my-8 inset-y-0">
                <h2 className="text-3xl">About Me</h2>
                <p className="py-4 text-xl w-full text-left leading-relaxed">
                    I am a final year ECE student at VIT Chennai,
                    with a passion for solving problems and making stuff
                    by coding. I have worked on Deep Learning and Web Development
                    projects.
                    I'm constantly seeking new challenges and opportunities
                    to expand my skills, whether it involves improving myself as a
                    full-stack developer, planning the next trending technology to learn (like GO for devops) or driving
                    analytics problems by using data analysis tools.
                </p>
            </div>
            <div
                className="grid grid-cols-2 place-items-center mx-auto w-5/6 md:flex md:flex-row md:w-full md:justify-evenly">
                <img src={htmllogo} alt="html skill logo"
                    className={imgstyles} />
                <img src={csslogo} alt="css skill logo"
                    className={imgstyles} />
                <img src={tslogo} alt="typescript skill logo"
                    className={imgstyles} />
                <img src={reactlogo} alt="react skill logo"
                    className={imgstyles} />
                <img src={pylogo} alt="python skill logo"
                    className={imgstyles} />
                <img src={cpplogo} alt="c++ skill logo"
                    className={imgstyles} />
            </div>
        </div>
    )
}

export default About;