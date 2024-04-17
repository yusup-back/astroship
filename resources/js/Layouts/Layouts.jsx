import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";

const Layout = ({ children, title }) => {
    return (
        <>
            <Head title={title} />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
