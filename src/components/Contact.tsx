import { FormEvent, useState, ChangeEvent } from "react";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    //Fields to be asked from contact are: Name, Email, Message, reset,send button
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",
    });

    const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: typeof details[keyof typeof details] = event.target.value;
        //value checking
        setDetails({ ...details, [event.target.id]: value });
    };
    const removeText = () => {
        setDetails({ ...details, ["message"]: "" });
    }

    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value: typeof details[keyof typeof details] = event.target.value;
        setDetails({ ...details, [event.target.id]: value })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(details);
        //when doing actual form submission clear details data
        //setDetails({name: "", email: "", message: ""});
    };

    return (
        <div className="relative bg-fixed bg-cover bg-no-repeat lg:bg-center rounded-lg" style={{backgroundImage: `linear-gradient(to bottom, rgba(19, 17, 21, 0.3), rgba(19, 17, 21, 0.9)), url(/circle1.svg)`,}}>
            <div className="flex flex-col mt-10 h-[45vh]" id="contact">
                <h2 className="text-3xl">Contact Me</h2>
                <form method="post" onSubmit={handleSubmit}
                    className="flex flex-col my-2 py-4 items-center">
                    <div className="flex w-5/6 lg:w-2/6 justify-between">
                        <div className="w-1/2 relative mr-5">
                            <input type="text" id="name" placeholder=" " onChange={onFieldChange}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-indigo-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#131115] px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 left-1" htmlFor="name">Name</label>

                        </div>

                        <div className="relative w-1/2">
                            <input type="email" id="email" placeholder=" " onChange={onFieldChange}
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-indigo-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />

                            <label htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#131115] px-2 peer-focus:px-2 peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                    </div>

                    <div id="message-area" className="w-5/6 lg:w-2/6">
                        <label htmlFor="message"
                            className="block my-4 text-sm text-left font-medium text-gray-900 dark:text-white">Your Message</label>

                        <textarea rows={4} id="message" placeholder="Write it here" onChange={onTextChange}
                            className="block p-2 w-full text-sm outline-none text-white bg-neutral-800 rounded-lg border border-gray-600 focus:ring-cyan-500 focus:border-cyan-500 dark:placeholder-gray-400"
                            value={details.message}
                            maxLength={128} />
                    </div>
                    <div className="w-5/6 lg:w-2/6 flex justify-between">
                        <button
                            className="text-gray-900 hover:text-white border 
                border-gray-800 hover:bg-gray-900 
                focus:ring-4 focus:outline-none focus:ring-gray-300 
                font-medium rounded-lg w-auto lg:w-2/6 text-md p-3 text-center mr-2 my-4 
                dark:border-gray-600 dark:text-gray-400 dark:hover:text-white 
                dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                            type="reset"
                            onClick={removeText}
                        >
                            Clear
                        </button>
                        <button className="
                p-3 my-4 lg:w-1/2 grow text-lg font-medium rounded-lg
                bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-300
                hover:bg-cyan-500 hover:shadow-md hover:shadow-cyan-500/60"
                            type="submit">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="pb-6">
                <h2 className="text-2xl mb-4">Or Reach out to me via</h2>
                <div className="flex flex-row w-1/3 mx-auto justify-around">
                    <a href="https://www.linkedin.com/in/eshan-srivastava-08a352247/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={"4em"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;