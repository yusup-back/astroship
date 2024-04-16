import {
    AppWindow,
    Bot,
    BriefcaseBusiness,
    Database,
    FileSearch2,
    UserRound,
} from "lucide-react";

const featuresList = [
    {
        title: "Bring Your Own Framework",
        description:
            "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
        icon: <BriefcaseBusiness />,
    },
    {
        title: "100% Static HTML, No JS",
        description:
            "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
        icon: <AppWindow />,
    },
    {
        title: "On-Demand Components",
        description:
            "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
        icon: <Database />,
    },
    {
        title: "Broad Integration",
        description:
            "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
        icon: <Bot />,
    },
    {
        title: "SEO Enabled",
        description:
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
        icon: <FileSearch2 />,
    },
    {
        title: "Community",
        description:
            "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
        icon: <UserRound />,
    },
];

const Features = () => {
    return (
        <div className="mt-16 md:mt-0">
            <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                Everything you need to start a website
            </h2>
            <p className="text-lg mt-4 text-slate-600">
                Astro comes batteries included. It takes the best parts of
                state-of-the-art tools and adds its own innovations.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
                {featuresList.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        <div className="mt-1 bg-black text-white p-2 rounded-full relative inline-flex items-center justify-center w-8 h-8 shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">
                                {item.title}
                            </h3>{" "}
                            <p className="text-slate-500 mt-2 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
