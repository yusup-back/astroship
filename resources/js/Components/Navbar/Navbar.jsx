import Container from "@/Components/Container";
import MyLink from "@/Components/Ui/Link";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";
// import Dropdown from './Dropdown';
// import { Astronav, MenuItems, MenuIcon } from 'astro-navbar'; // Replace with appropriate React components

const menuitems = [
    // {
    //     title: "Features",
    //     path: "#",
    //     children: [
    //         { title: "Action", path: "/" },
    //         { title: "Another action", path: "#" },
    //         { title: "Dropdown Submenu", path: "#" },
    //         { title: "404 Page", path: "/404" },
    //     ],
    // },
    {
        title: "Pricing",
        path: "/pricing",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Pro Version",
        badge: true,
        path: "https://astroship-pro.web3templates.com/",
    },
];

const Navbar = () => {
    return (
        <Container>
            <header className="flex flex-col lg:flex-row justify-between items-center my-5">
                <div className="flex w-full lg:w-auto items-center justify-between">
                    <Link href="/" className="text-lg">
                        <span className="font-bold text-slate-800">Astro</span>
                        <span className="text-slate-500">ship</span>
                    </Link>
                    <div className="block lg:hidden">
                        <Menu className="w-4 h-4 text-gray-800" />
                    </div>
                </div>
                <ul className="flex flex-col lg:flex-row lg:gap-3">
                    {menuitems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.path}
                                className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                            >
                                <span>{item.title}</span>
                                {item.badge && (
                                    <span className="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full">
                                        New
                                    </span>
                                )}
                            </a>
                        </li>
                    ))}
                    <div className="lg:hidden flex items-center mt-3 gap-4">
                        <MyLink href="#" style="muted" block size="md">
                            Log in
                        </MyLink>
                        <MyLink href="#" size="md" block>
                            Sign up
                        </MyLink>
                    </div>
                </ul>
                <div>
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="#">Log in</a>
                        <MyLink href="#" size="md">
                            Sign up
                        </MyLink>
                    </div>
                </div>
            </header>
        </Container>
    );
};

export default Navbar;
