import { cn } from "../../../../lib/utils";
import React from "react";
import { TextGenerateEffect } from "./TextGenerationEffect";
import BorderMagicButton from "./BorderMagicButton";

type Props = {
    title: string
    description: string
    subTitle: string
    buttonTitle: string
    buttonPosition: string
    buttonIcon: React.ReactNode
    handleClick?: () => void;
    otherClasses: string
}

export function GridBackground(props: Props) {
    return (
        <>
            <div
                className={cn(
                    "absolute inset-0 ",
                    "[background-size:50px_50px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-custom-black"></div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-wider text-xs text-center text-blue-100 max-w-80">{props.title}</h2>
                    <TextGenerateEffect className="text-center text-[24px] md:text-5xl lg:text-6xl" words={props.description} />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg-text-2xl" >{props.subTitle}</p>
                    <a href="#projects">
                        <BorderMagicButton title={props.buttonTitle} icon={props.buttonIcon} position={props.buttonPosition} otherClasses={props.otherClasses} />
                    </a>
                </div>
            </div>
        </>
    );
}
