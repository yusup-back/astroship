import Container from "@/Components/Container";
import Cta from "@/Components/Cta";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Logos from "@/Components/Logos";
import Layout from "@/Layouts/Layouts";

export default function Index() {
    return (
        <Layout title="">
            <Container>
                <Hero />
                <Features />
                <Logos />
                <Cta />
            </Container>
        </Layout>
    );
}
