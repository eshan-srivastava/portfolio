const Experience = () => {
    //collection of cards, but for now just samsung so using one Div
    return (
        <div id="experience" className="mx-auto">
            <h3 className="text-3xl my-8">Experience</h3>
            <div id="exp-list" className="flex flex-col md:flex-row justify-center">
                <div className=" w-5/6 md:w-1/3 my-2 mx-10 border border-zinc-600/80 border-solid rounded-md" id="exp1">
                    <h4 className="text-3xl font-semibold py-2 text-cyan-400">Samsung PRISM Intern</h4>
                    <span className="text-gray-400">Dec 2022 - Aug 2023</span>
                    <ul className="mx-auto w-8/12 px-0 mb-4 text-justify list-disc list-inside">
                        <li className="py-1.5 leading-snug">Making deep learning models to detect and classify food and fruit items kept in a fridge from their images, with an emphasis on Indian context</li>
                        <li className="py-1.5 leading-snug">Using CNN based models with custom weights and pre-trained weights (Transfer learning) to achieve high accuracy of 80% on test data</li>
                        <li className="py-1.5 leading-snug">Dealing with scattered and non-uniform image data for model training and combining it for further usage</li>
                        <li className="py-1.5 leading-snug">Incorporating feedback to drive project towards changing expectations of the company</li>
                    </ul>
                </div>
                <div className=" w-5/6 md:w-1/3 my-2 mx-10 border border-zinc-600/80 border-solid rounded-md" id="exp2">
                    <h4 className="text-3xl font-semibold py-2">Eager to add something here</h4>
                    <span>As soon as possible</span>
                    <ul className="mx-auto w-8/12 px-0 mb-4 text-justify list-disc list-inside py-3">
                        <li>What I will do</li>
                        <li>What I will contribute</li>
                        <li>What I will learn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;