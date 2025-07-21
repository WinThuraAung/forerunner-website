import ContactForm from "../components/contactform";

export default function Contact() {
  

  return (
    <section className="bg-white py-20 px-6 md:px-20 lg:px-40">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We'd love to hear from you. Whether you have a question about products, pricing, or anything else, our team is ready to assist.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Head Office</h2>
          <p className="text-gray-600 mb-4">
            Q4, Mya Kan Thar Street, Hlaing Township<br />
            Yangon, Myanmar<br />
            ZIP 11051
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +95 9 790 877 066, +95 9 790 877 266, +95 9 790 877 411
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> forerunner2005@gmail.com
          </p>
          <p className="text-gray-600">
            <strong>Office Hours:</strong> Mon – Fri, 9:00 AM – 5:00 PM
            <p>Sat, 9:00 AM - 3:00 PM</p>
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}
