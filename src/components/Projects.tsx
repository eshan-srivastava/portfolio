import ProjectCard from "./ProjectCard";
import { AiOutlineGithub } from "react-icons/ai";

const projectdata = [{
    "title": "AirBNB price predictor",
    "desc": "Tested various regression models such as ridge, lasso, decision-tree to predict airbnb price prediction for a given user input consisting of listing options",
    "url": "https://github.com/eshan-srivastava/dac-airbnb-project",
}, {
    "title": "Arrhythmia detector with blockchain storage",
    "desc": "Detected arrhythmia from ECG signal using CNN and storing arrhythmia heartbeats on a blockchain based secure storage (link to be added)",
    "url": "https://www.github.com/eshan-srivastava/",
}, {
    "title": "Business Review",
    "desc": "Leveraged Neo4j's synergy with GraphQL to make a GRANDstack web application where users can post reviews and ratings of different businesses for their reference",
    "url": "https://github.com/eshan-srivastava/business-review",
}]

const Projects = () => {
    //return three divs side by side -> short term solution
    //a grid of project cards or carousel of project cards -> long term

    return (
        <div id="projects">
            <h2 className="text-3xl pt-10">Projects</h2>
            <div className="flex flex-col lg:flex-row">
                {/* replace this div with a project list component in future */}
                <ProjectCard {...projectdata[0]} />
                <ProjectCard {...projectdata[1]} />
                <ProjectCard {...projectdata[2]} />
            </div>
            <div>
                <p className="text-xl">Check out more of my work at</p>
                <a href="https://github.com/eshan-srivastava"
                    target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub size={"4em"} className="mx-auto mt-3"/>
                </a>
            </div>
        </div>
    )
}

export default Projects;