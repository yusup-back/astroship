const Button = ({
    size = "md",
    style = "primary",
    block,
    className,
    ...rest
}) => {
    const sizes = {
        md: "px-5 py-2.5",
        lg: "px-6 py-3",
    };

    const styles = {
        outline:
            "border-2 border-black hover:bg-black text-black hover:text-white",
        primary:
            "bg-black text-white hover:bg-slate-900  border-2 border-transparent",
    };

    return (
        <button
            {...rest}
            className={[
                "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
                block && "w-full",
                sizes[size],
                styles[style],
                className,
            ].join(" ")}
        />
    );
};

export default Button;
