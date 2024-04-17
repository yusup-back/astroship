import { Link } from "@inertiajs/react";

const MyLink = ({
    href,
    size = "lg",
    style = "primary",
    block,
    className,
    ...rest
}) => {
    const sizes = {
        lg: "px-5 py-2.5",
        md: "px-4 py-2",
    };

    const styles = {
        outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
        primary:
            "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
        inverted: "bg-white text-black border-2 border-transparent",
        muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
    };

    return (
        <Link
            href={href}
            {...rest}
            className={[
                "flex items-center gap-2 rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
                block && "w-full justify-center",
                sizes[size],
                styles[style],
                className,
            ].join(" ")}
        >
            {rest.children}
        </Link>
    );
};

export default MyLink;
