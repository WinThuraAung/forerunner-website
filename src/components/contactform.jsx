import React, { useState } from "react";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch("https://forerunner-website.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
  
    const data = await res.json();
    if (data.success) {
      alert("Message sent!");
    } else {
      alert("Something went wrong.");
    }
  };


    return (
    <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
    <div>
      <label className="block text-gray-700 mb-1 font-medium">Name</label>
      <input
        type="text"
        placeholder="Your full name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1 font-medium">Email</label>
      <input
        type="email"
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <div>
      <label className="block text-gray-700 mb-1 font-medium">Message</label>
      <textarea
        value = {message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={5}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-200 font-semibold"
        onClick={handleSubmit}
    >
      Send Message
    </button>
  </form>
  );
}