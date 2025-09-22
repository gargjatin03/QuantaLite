import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a mailto link
    const mailtoLink = `mailto:gargj968@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      "Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message
    )}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-500 hover:text-blue-700 duration-200 dark:text-blue-400">
        Contact Us
      </h1>

      <p className="text-center mb-8 text-gray-500 dark:text-gray-600 ">
        Have questions, suggestions, feeling lonely or just want to say hi?  
        Feel free to reach out! We'll get back to you as soon as possible.
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 rounded-lg text-center ">
          Thank you! Your email client has been opened.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg bg-white hover:border-amber-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg bg-white hover:border-amber-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 border rounded-lg bg-white hover:border-amber-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-gray-600 dark:text-gray-500">
        <p>Email: <a href="mailto:gargj968@gmail.com" className="text-blue-600 dark:text-blue-500 hover:text-green-500 hover:underline"> gargj968@gmail.com</a></p>
      </div>
    </div>
  );
}

export default Contact;
