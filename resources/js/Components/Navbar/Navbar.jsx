import Container from "@/Components/Container";
import MyLink from "@/Components/Ui/Link";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import React from "react";

const menuitems = [
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
    const [menu, setMenu] = React.useState(false);
    const [nav, setNav] = React.useState(true);
    return (
        <Container>
            <header className="flex flex-col lg:flex-row justify-between items-center my-5">
                {/* Header Logo */}
                <div className="flex w-full lg:w-auto items-center justify-between">
                    <Link href="/" className="text-lg">
                        <span className="font-bold text-slate-800">Astro</span>
                        <span className="text-slate-500">ship</span>
                    </Link>
                    <div
                        onClick={() => setNav(!nav)}
                        className="block lg:hidden"
                    >
                        {nav ? (
                            <Menu className="w-4 h-4 text-gray-800" />
                        ) : (
                            <X className="w-4 h-4 text-gray-800" />
                        )}
                    </div>
                </div>

                <ul className="flex flex-col w-full lg:w-auto lg:flex-row lg:gap-3">
                    {/* Dropdown menu */}
                    <li className="relative">
                        <button
                            onClick={() => setMenu(!menu)}
                            className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                        >
                            {" "}
                            <span>Features</span>{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="currentColor"
                                className="w-3 h-3 mt-0.5 group-open:rotate-180"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                ></path>{" "}
                            </svg>{" "}
                        </button>
                        {menu && (
                            <div className="lg:absolute w-full lg:w-48 z-10 lg:left-0 origin-top-left">
                                {" "}
                                <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
                                    {" "}
                                    <a
                                        href="/"
                                        className="py-1 text-gray-600 hover:text-gray-900"
                                    >
                                        {" "}
                                        Action{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="py-1 text-gray-600 hover:text-gray-900"
                                    >
                                        {" "}
                                        Another action{" "}
                                    </a>
                                    <a
                                        href="#"
                                        className="py-1 text-gray-600 hover:text-gray-900"
                                    >
                                        {" "}
                                        Dropdown Submenu{" "}
                                    </a>
                                    <Link
                                        href="/404"
                                        className="py-1 text-gray-600 hover:text-gray-900"
                                    >
                                        {" "}
                                        404 Page{" "}
                                    </Link>{" "}
                                </div>{" "}
                            </div>
                        )}
                    </li>

                    {/* Navigation links */}
                    {menuitems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.path}
                                className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
                            >
                                <span>{item.title}</span>
                                {item.badge && (
                                    <span className="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full">
                                        New
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}

                    {/* Navabr actions */}
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
