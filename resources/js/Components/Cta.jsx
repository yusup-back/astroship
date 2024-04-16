import MyLink from "./Ui/Link";

const Cta = () => {
    return (
        <div className="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
            <h2 className="text-white text-4xl md:text-6xl tracking-tight">
                Build faster websites.
            </h2>
            <p className="text-slate-400 mt-4 text-lg md:text-xl">
                Pull content from anywhere and serve it fast with Astro's
                next-gen island architecture.
            </p>
            <div className="flex mt-5">
                <MyLink href="#" style="inverted">
                    Get Started
                </MyLink>
            </div>
        </div>
    );
};

export default Cta;
