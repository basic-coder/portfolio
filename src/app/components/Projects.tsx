import { projects } from "../data";
import { Slider } from "./ui/Slider";

export function Projects() {
 
    return (
        <>
            <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10 z-10 relative" id="projects">
                <h2 className="text-lg md:text-4xl font-bold mb-4 text-black dark:text-white max-w-4xl">
                    Some Personal Projects
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg lg-text-2xl max-w-4xl">

                </p>
            </div>
            <Slider Sliders={projects} />

        </>
    );
}
