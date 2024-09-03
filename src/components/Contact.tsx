const Contact = () => {
  return (
    <section className="hero bg-base-200 min-h-screen" id="contact">
      <div className="hero-content min-w-12 flex-col gap-16">
        <h1 className="text-3xl lg:text-5xl font-bold font-sans">CONTACT</h1>
        <form
          action=""
          method="POST"
          id="contact-form"
          className="form-control flex flex-wrap flex-col gap-8 justify-center "
        >
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
              className="grow"
              placeholder="Username"
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
            <input type="text" className="grow" placeholder="Email" required />
          </label>
          <textarea
            placeholder="Message"
            className="textarea w-full lg:w-[600px] textarea-bordered textarea-primary textarea-lg resize-none"
            required
          ></textarea>

          <button
            type="button"
            className="btn w-full m-auto lg:w-fit btn-primary text-2xl cursor-not-allowed transform transition-transform duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;