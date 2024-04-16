import Container from "@/Components/Container";
import Cta from "@/Components/Cta";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Logos from "@/Components/Logos";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Navbar />
            <Container>
                <Head title="Welcome" />
                <Hero />
                <Features />
                <Logos />
                <Cta />
            </Container>
            <Footer />
        </>
    );
}
