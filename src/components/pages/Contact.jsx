import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim();
    const message = formData.get("message").trim();

    if (!name) {
      toast.error("Name is required.");
      return false;
    }

    if (!email) {
      toast.error("Email is required.");
      return false;
    }

    // Basic email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Enter a valid email address.");
      return false;
    }

    // Basic phone number validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    if (!message) {
      toast.error("Message cannot be empty.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setLoading(true);

    emailjs
      .sendForm(
        "service_m5t0l1n",
        "template_5benpod",
        form.current,
        "5DQaugFiuGf4lO4YC"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: "top-center",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Try again.", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center py-10 px-4 sm:py-16 sm:px-6">
      <div className="text-center mb-10 mt-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-400 mb-2">
          Contact <span className="text-white">Me</span> 
        </h2>
        <p className="text-sm sm:text-base text-gray-300">
          Feel free to contact me for collaboration, project ideas, or any queries.
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-900 border border-sky-500 rounded-xl shadow-2xl p-6 sm:p-8 md:p-12">
        <form ref={form} onSubmit={sendEmail} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border border-sky-600 rounded-md text-white focus:ring-2 focus:ring-sky-500 outline-none text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="gmail.com"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border border-sky-600 rounded-md text-white focus:ring-2 focus:ring-sky-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="10 digit phone number"
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border border-sky-600 rounded-md text-white focus:ring-2 focus:ring-sky-500 outline-none text-sm sm:text-base"
            />

            <input
              type="text"
              name="company"
              placeholder="Company name (optional)"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border border-sky-600 rounded-md text-white focus:ring-2 focus:ring-sky-500 outline-none text-sm sm:text-base"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-900 border border-sky-600 rounded-md text-white focus:ring-2 focus:ring-sky-500 outline-none text-sm sm:text-base resize-none"
          />

          <div className="flex justify-center w-full">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[linear-gradient(290deg,_#00c6ff,_#0072ff)] px-6 py-2 sm:px-8 sm:py-3 rounded-md text-white w-full font-semibold shadow-md hover:bg-[linear-gradient(290deg,_#00c6ff,_#0032fd)] transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } text-sm sm:text-base`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
