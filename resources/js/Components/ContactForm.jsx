import Button from "./Ui/Button";

const ContactForm = () => {
    return (
        <div>
            <form noValidate>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                        name="name"
                    />
                    {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                        Please provide your full name.
                    </div> */}
                </div>
                <div className="mb-5">
                    <label htmlFor="email_address" className="sr-only">
                        Email Address
                    </label>
                    <input
                        id="email_address"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                    />
                    {/* <div className="empty-feedback text-red-400 text-sm mt-1">
                        Please provide your email address.
                    </div>
                    <div className="invalid-feedback text-red-400 text-sm mt-1">
                        Please provide a valid email address.
                    </div> */}
                </div>
                <div className="mb-3">
                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                    ></textarea>
                    {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                        Please enter your message.
                    </div> */}
                </div>
                <Button type="submit" size="lg" block>
                    Send Message
                </Button>
                {/* <div className="mt-3 text-center">
                    {formState.resultMessage}
                </div> */}
            </form>
        </div>
    );
};

export default ContactForm;
