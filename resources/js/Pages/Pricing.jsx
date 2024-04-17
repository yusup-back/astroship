import Container from "@/Components/Container";
import PricingCard from "@/Components/PricingCard";
import Layout from "@/Layouts/Layouts";

const pricing = [
    {
        name: "Personal",
        price: "Free",
        popular: false,
        features: [
            "Lifetime free",
            "Up to 3 users",
            "Unlimited Pages",
            "Astro Sub domain",
            "Basic Integrations",
            "Community Support",
        ],
        button: {
            text: "Get Started",
            link: "/",
        },
    },
    {
        name: "Startup",
        price: {
            monthly: "$19",
            annual: "$16",
            discount: "10%",
            original: "$24",
        },
        popular: true,
        features: [
            "All Free Features",
            "Up to 20 users",
            "20 Custom domains",
            "Unlimited Collaborators",
            "Advanced Integrations",
            "Priority Support",
        ],
        button: {
            text: "Get Started",
            link: "#",
        },
    },
    {
        name: "Enterprise",
        price: "Custom",
        popular: false,
        features: [
            "All Pro Features",
            "Unlimited Custom domains",
            "99.99% Uptime SLA",
            "SAML & SSO Integration",
            "Dedicated Account Manager",
            "24/7 Phone Support",
        ],
        button: {
            text: "Contact us",
            link: "/contact",
        },
    },
];

export default function Pricing() {
    return (
        <Layout title="Pricing">
            <Container>
                <div className={"mt-16 text-center"}>
                    <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
                        Pricing
                    </h1>
                    <p className="text-lg mt-4 text-slate-600">
                        Simple & Predictable pricing. No Surprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
                    {pricing.map((item) => (
                        <PricingCard key={item.name} plan={item} />
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
