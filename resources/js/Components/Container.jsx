const Container = ({ className, ...rest }) => {
    return (
        <div
            className={["max-w-screen-xl mx-auto px-5", className].join(" ")}
            {...rest}
        >
            {rest.children}
        </div>
    );
};

export default Container;
