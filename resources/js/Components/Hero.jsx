// Ensure the path is correct based on your project structure
import { CloudDownload, Github } from "lucide-react";
import MyLink from "./Ui/Link";
import heroImage from "/public/hero.png";
const Hero = () => {
    return (
        <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
            <div className="py-6 md:order-1 hidden md:block">
                <img
                    src={heroImage}
                    alt="Astronaut in the air"
                    // widths={[200, 400, 600]}
                    sizes="(max-width: 800px) 100vw, 620px"
                    loading="eager"
                    format="avif"
                />
            </div>
            <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
                    Marketing website done with Astro
                </h1>
                <p className="text-lg mt-4 text-slate-600 max-w-xl">
                    Astroship is a starter template for startups, marketing
                    websites & landing pages. Built with Astro.build and
                    TailwindCSS. You can quickly create any website with this
                    starter.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <MyLink
                        href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
                        target="_blank"
                        className="flex gap-1 items-center justify-center"
                        rel="noopener"
                    >
                        <CloudDownload />
                        Download for Free
                    </MyLink>
                    <MyLink
                        size="lg"
                        style="outline"
                        rel="noopener"
                        href="https://github.com/surjithctly/astroship"
                        className="flex gap-1 items-center justify-center"
                        target="_blank"
                    >
                        {/* <Icon  name="bx:bxl-github" /> */}
                        <Github className="text-black w-4 h-4" />
                        GitHub Repo
                    </MyLink>
                </div>
            </div>
        </main>
    );
};

export default Hero;
