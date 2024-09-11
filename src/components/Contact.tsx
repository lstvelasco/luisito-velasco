import { useState, useRef } from "react";
import Toast from "./Toast"; // Assuming Toast is in the same directory

const Contact = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    // Trigger the toast with a message when the submit button is clicked
    setToastMessage("Your message has been sent!");

    // Clear form fields
    if (formRef.current) {
      formRef.current.reset(); // This will reset the form fields
    }

    // Clear the toast after 3 seconds (optional)
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);

    // You can add form submission logic here (e.g., sending the form data)
  };

  return (
    <section className="hero bg-base-200 min-h-screen" id="contact">
      <div className="hero-content min-w-12 flex-col gap-16">
        <h1 className="text-3xl lg:text-5xl font-bold font-sans">CONTACT</h1>
        <form
          ref={formRef} // Attach the form reference here
          id="contact-form"
          name="contact-form"
          method="POST"
          className="form-control flex flex-wrap flex-col gap-8 justify-center"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <label className="input input-bordered input-primary w-full lg:w-[600px] flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              className="grow"
              placeholder="Name"
              required
            />
          </label>
          <label className="input input-bordered w-full lg:w-[600px] input-primary flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>
          <textarea
            placeholder="Message"
            name="message"
            className="textarea w-full lg:w-[600px] textarea-bordered textarea-primary textarea-lg resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="btn w-full m-auto lg:w-fit btn-primary text-2xl transform transition-transform duration-300 hover:scale-105"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        {/* Display the toast if a message is set */}
        {toastMessage && <Toast message={toastMessage} />}
      </div>
    </section>
  );
};

export default Contact;
