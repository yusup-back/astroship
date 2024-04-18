import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "./Ui/Button";

const ContactFormSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    email: Yup.string()
        .email("Please provide a valid email address.")
        .required("Please provide your email address."),
});

const ContactForm = () => {
    return (
        <Formik
            validateOnBlur={false}
            initialValues={{
                fullName: "",
                email: "",
                message: "",
            }}
            onSubmit={(data) => {
                console.log(data);

                axios
                    .post("http://localhost:8000/contact", data)
                    .then(function (res) {
                        console.log(res);
                        alert("Successfully sent!");
                        // router.replace("/");
                    })
                    .catch(function (res) {
                        console.log(res);
                    });
            }}
            validationSchema={ContactFormSchema}
        >
            {({ errors }) => (
                <Form method="post" action="/contact">
                    <div className="mb-5">
                        <Field
                            type="text"
                            placeholder="Full Name"
                            className={`w-full ${
                                errors.fullName &&
                                "focus:border-[#dc3545] border-[#dc3545]"
                            } px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100`}
                            name="fullName"
                        />

                        {errors.fullName ? (
                            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                Please provide your full name.
                            </div>
                        ) : null}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email_address" className="sr-only">
                            Email Address
                        </label>
                        <Field
                            id="email_address"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            className={`w-full ${
                                errors.email &&
                                "focus:border-[#dc3545] border-[#dc3545]"
                            } px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100`}
                        />
                        {errors.email ? (
                            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <Field
                            as="textarea"
                            name="message"
                            placeholder="Your Message"
                            className={`w-full ${
                                errors.message
                                    ? "focus:border-[#dc3545] border-[#dc3545]"
                                    : " "
                            } px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100`}
                        />
                        {errors.message ? (
                            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                                Please enter your message.
                            </div>
                        ) : null}
                    </div>
                    <Button type="submit" size="lg" block>
                        Send Message
                    </Button>
                    {/* <div className="mt-3 text-center">
                    {formState.resultMessage}
                </div> */}
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
