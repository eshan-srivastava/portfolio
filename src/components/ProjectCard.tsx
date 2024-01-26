type ProjectCardProps = {
    title: string,
    desc: string,
    url: string,
};

//each projectcard component has -> title, button, desc
const ProjectCard = ({ title, desc, url }: ProjectCardProps) => {
    return (
        <div className="my-6 pb-4 pt-2 mx-14 w-5/6 lg:w-1/5 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-10 group-hover:opacity-50"></div>
            <div className="relative h-full bg-neutral-900 rounded-lg border-2 border-cyan-500">
                <h4 className="text-2xl font-medium py-3 w-3/4 mx-auto">{title}</h4>
                <p className="mb-3 pt-2 pb-1 w-4/6 mx-auto text-justify">{desc}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="px-3 py-2 mb-7 bg-cyan-500 text-white rounded-lg
                bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 
                shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:scale-110
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                dark:focus:ring-blue-800">Check it out</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;