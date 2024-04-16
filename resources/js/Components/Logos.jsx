import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { RiSvelteFill } from "react-icons/ri";
import { SiAlpinedotjs, SiAstro, SiTailwindcss } from "react-icons/si";
const Logos = () => {
    return (
        <div className="mt-24">
            <h2 className="text-center text-slate-500">
                Works with your technologies
            </h2>
            <div className="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
                <FaReact className="h-[48px] w-[48px]" />
                <RiSvelteFill className="h-[48px] w-[48px]" />
                <SiTailwindcss className="h-[48px] w-[48px]" />
                <SiAlpinedotjs className="h-[48px] w-[48px]" />
                <IoLogoVercel className="h-[48px] w-[48px]" />
                <SiAstro className="h-[48px] w-[48px]" />
            </div>
        </div>
    );
};

export default Logos;
