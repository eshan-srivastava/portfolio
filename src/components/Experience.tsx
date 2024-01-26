const Experience = () => {
    //collection of cards, but for now just samsung so using one Div
    return (
        <div id="experience" className="mx-auto">
            <h3 className="text-3xl my-8">Experience</h3>
            <div id="exp-list" className="flex flex-col md:flex-row justify-center">
                <div className=" w-5/6 md:w-1/3 my-2 mx-10 border border-zinc-600/80 border-solid rounded-md" id="exp1">
                    <h4 className="text-4xl bg-clip-text text-transparent font-bold bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient py-2">Samsung PRISM Intern</h4>
                    <span className="text-gray-400">Dec 2022 - Aug 2023</span>
                    <ul className="mx-auto w-8/12 px-0 mb-4 text-justify list-disc list-inside">
                        <li className="py-1.5 leading-snug">Utilized deep learning models to detect and classify food and fruit items from their images captured in fridge</li>
                        <li className="py-1.5 leading-snug">Meticulously merged fragmented data across three sources, established a well-defined dataset of 56 North and South Indian food items, contributing to improved data infrastructure and culinary representation.</li>
                        <li className="py-1.5 leading-snug">Capitalized on using transfer learning models for better performance such as ResNet, EfficientNet, DenseNet etc for image classification and YOLO for object detection</li>
                        <li className="py-1.5 leading-snug">Actively engaged with teammates and Samsung mentors to refine the project to align with their vision and objectives</li>
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