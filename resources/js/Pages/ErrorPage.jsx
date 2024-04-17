import Container from "@/Components/Container";
import Layout from "@/Layouts/Layouts";

export default function ErrorPage(params) {
    return (
        <Layout title="404 Not Found">
            <Container>
                <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
                    <div className="mt-16 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                            404
                        </h1>
                        <p className="text-lg mt-4 text-slate-600">
                            Page not found.
                        </p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
