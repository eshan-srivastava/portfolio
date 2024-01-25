// saving props code for later if needed
// type Props = {
//     children?: any;
// }
import DLicon from "../assets/download-white-svgrepo.svg"

const resumeUrl = "https://drive.google.com/file/d/1VoBbWcaylPaxE6UDi4MU31PLI_bsgPxT/view?usp=sharing";
function Navbar() {
    const openLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
        console.log("opened" + url);
    }

    // about, skills, projects, contact on right, icon on left-> can have the icon to resume
    return (
        <header className='py-2 mx-auto md:w-full text-lg
        md:flex md:flex-row justify-around border-b border-b-zinc-700/80'>
            <div className="mx-auto md:mx-0 md:flex md:flex-row">
                <button className="text-white bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 
                shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                dark:focus:ring-blue-800 font-medium rounded-lg text-md 
                px-5 py-2 text-center md:mb-2 peer"
                    onClick={() => openLink(resumeUrl)}>
                    Download Resume
                </button>
                <img src={DLicon} className="h-8 mb-2 -mt-3 ml-2 p-2 rounded-lg 
                bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 invisible peer-hover:visible
                shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80" 
                alt="" />
            </div>
            <div className='grid grid-cols-2 md:flex md:flex-row justify-between my-auto w-3/4 mx-auto md:mx-0 md:w-auto'>
                <a href="#about" className='basis-1/4 
                text-purple-700 hover:text-white border 
                border-purple-700 hover:bg-purple-800 
                focus:ring-4 focus:outline-none focus:ring-purple-300 
                font-medium rounded-lg text-md px-6 py-2 text-center mr-5 mb-2 
                dark:border-purple-400 dark:text-purple-400 
                dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>
                    About
                </a>

                <a href="#experience" className='basis-1/4 
                text-purple-700 hover:text-white border 
                border-purple-700 hover:bg-purple-800 
                focus:ring-4 focus:outline-none focus:ring-purple-300 
                font-medium rounded-lg text-md px-6 py-2 text-center mr-5 mb-2 
                dark:border-purple-400 dark:text-purple-400 
                dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>
                    Experience
                </a>

                <a href="#projects" className='basis-1/4 
                text-purple-700 hover:text-white border 
                border-purple-700 hover:bg-purple-800 
                focus:ring-4 focus:outline-none focus:ring-purple-300 
                font-medium rounded-lg text-md px-6 py-2 text-center mr-5 mb-2 
                dark:border-purple-400 dark:text-purple-400 
                dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>
                    Projects
                </a>

                <a href="#contact"
                    className='basis-1/4 
                text-purple-700 hover:text-white border 
                border-purple-700 hover:bg-purple-800 
                focus:ring-4 focus:outline-none focus:ring-purple-300 
                font-medium rounded-lg text-md px-6 py-2 text-center mr-5 mb-2 
                dark:border-purple-400 dark:text-purple-400 
                dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'>Contact</a>
            </div>
        </header>
    )
}

export default Navbar;