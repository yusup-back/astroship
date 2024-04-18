import Container from "@/Components/Container";
import Layout from "@/Layouts/Layouts";
import { Link } from "@inertiajs/react";

export default function Blog() {
    return (
        <Layout title="blog">
            <Container>
                <div className={"mt-16 text-center"}>
                    <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                        Our Blog
                    </h1>
                    <p className="text-lg mt-4 text-slate-600">
                        We write about building startups and thoughts going on
                        our mind.
                    </p>
                </div>

                <main className="mt-16">
                    <ul className="grid gap-16 max-w-4xl mx-auto">
                        <li>
                            <Link href="/blog/data structures & algorithms">
                                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240"
                                        alt="data structures & algorithms"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        width={800}
                                        height={600}
                                        // loading={index <= 2 ? "eager" : "lazy"}
                                        // decoding={index <= 2 ? "sync" : "async"}
                                        className="w-full rounded-md object-cover object-center bg-white"
                                    />
                                    <div>
                                        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                                            Courses
                                        </span>

                                        <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                                            Introduction to the Essential Data
                                            Structures & Algorithms
                                        </h2>

                                        <div className="flex gap-2 mt-3">
                                            <span className="text-gray-400">
                                                Marcell Ziemann
                                            </span>
                                            <span className="text-gray-400">
                                                •{" "}
                                            </span>
                                            <div className="text-gray-400">
                                                Wed Nov 09 2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog/data structures & algorithms">
                                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240"
                                        alt="data structures & algorithms"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        width={800}
                                        height={600}
                                        // loading={index <= 2 ? "eager" : "lazy"}
                                        // decoding={index <= 2 ? "sync" : "async"}
                                        className="w-full rounded-md object-cover object-center bg-white"
                                    />
                                    <div>
                                        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                                            Courses
                                        </span>

                                        <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                                            Introduction to the Essential Data
                                            Structures & Algorithms
                                        </h2>

                                        <div className="flex gap-2 mt-3">
                                            <span className="text-gray-400">
                                                Marcell Ziemann
                                            </span>
                                            <span className="text-gray-400">
                                                •{" "}
                                            </span>
                                            <div className="text-gray-400">
                                                Wed Nov 09 2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog/data structures & algorithms">
                                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240"
                                        alt="data structures & algorithms"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        width={800}
                                        height={600}
                                        // loading={index <= 2 ? "eager" : "lazy"}
                                        // decoding={index <= 2 ? "sync" : "async"}
                                        className="w-full rounded-md object-cover object-center bg-white"
                                    />
                                    <div>
                                        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                                            Courses
                                        </span>

                                        <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                                            Introduction to the Essential Data
                                            Structures & Algorithms
                                        </h2>

                                        <div className="flex gap-2 mt-3">
                                            <span className="text-gray-400">
                                                Marcell Ziemann
                                            </span>
                                            <span className="text-gray-400">
                                                •{" "}
                                            </span>
                                            <div className="text-gray-400">
                                                Wed Nov 09 2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog/data structures & algorithms">
                                <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?&fit=crop&w=430&h=240"
                                        alt="data structures & algorithms"
                                        sizes="(max-width: 800px) 100vw, 800px"
                                        width={800}
                                        height={600}
                                        // loading={index <= 2 ? "eager" : "lazy"}
                                        // decoding={index <= 2 ? "sync" : "async"}
                                        className="w-full rounded-md object-cover object-center bg-white"
                                    />
                                    <div>
                                        <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                                            Courses
                                        </span>

                                        <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                                            Introduction to the Essential Data
                                            Structures & Algorithms
                                        </h2>

                                        <div className="flex gap-2 mt-3">
                                            <span className="text-gray-400">
                                                Marcell Ziemann
                                            </span>
                                            <span className="text-gray-400">
                                                •{" "}
                                            </span>
                                            <div className="text-gray-400">
                                                Wed Nov 09 2022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </main>
            </Container>
        </Layout>
    );
}
