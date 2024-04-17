import ContactForm from "@/Components/ContactForm";
import Container from "@/Components/Container";
import Layout from "@/Layouts/Layouts";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <Layout title="Contact">
            <Container>
                <div className={"mt-16 text-center"}>
                    <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                        Contact
                    </h1>
                    <p className="text-lg mt-4 text-slate-600">
                        We are a here to help.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
                    <div>
                        <h2 className="font-medium text-2xl text-gray-800">
                            Contact Astroship
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-500 mt-3">
                            Have something to say? We are here to help. Fill up
                            the form or send email or call phone.
                        </p>
                        <div className="mt-5">
                            <div className="flex items-center mt-2 space-x-2 text-gray-600">
                                <MapPin className="text-gray-400 w-4 h-4" />
                                <span>1734 Sanfransico, CA 93063</span>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-gray-600">
                                <Mail className="text-gray-400 w-4 h-4" />
                                <a href="mailto:hello@astroshipstarter.com">
                                    hello@astroshipstarter.com
                                </a>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-gray-600">
                                <Phone className="text-gray-400 w-4 h-4" />
                                <a href="tel:+1 (987) 4587 899">
                                    +1 (987) 4587 899
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}
