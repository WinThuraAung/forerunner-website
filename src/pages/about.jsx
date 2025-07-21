import TaxCertificates from "../components/tax-certicates";

export default function About() {
  return (
    <div className="mx-auto px-6 py-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <section className="mb-16 px-6 md:px-20 lg:px-40">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Our Story</h2>

  <div className="flex flex-col md:flex-row md:items-start md:gap-10">
    <img
      src="/images/warehouse.jpg"
      alt="Forerunner Warehouse"
      className="w-140 rounded-md shadow-md object-cover object-center"
    />

    <p className="text-lg leading-relaxed text-gray-800 font-medium md:flex-1 text-left">
      <span className="font-semibold text-gray-900">Forerunner International Co., Ltd</span> was established in 2005 in the commercial heart of Yangon, Myanmar, and has grown into a trusted leader in the petrochemical trading industry. With nearly two decades of operational excellence, we have positioned ourselves as a pivotal force in sourcing and distributing high-quality plastic resins throughout the region. Our journey is defined by resilience, innovation, and an enduring dedication to the success of our partners and clients.
    </p>
  </div>
</section>

<section className="px-6 md:px-20 lg:px-40 bg-white">
  <div className="grid md:grid-cols-3 gap-10 text-center">

    {/* Global Sourcing */}
    <div className="p-8 rounded-lg shadow-md bg-gray-50">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Sourcing</h3>
      <p className="text-gray-700 leading-relaxed text-sm">
        We proudly import premium-grade plastic resins from a curated network of partners across the UAE, South Korea, Oman, Thailand, India, Malaysia, Singapore, China, and the U.S. Our global reach and deep regional insight allow us to deliver tailored solutions with speed, consistency, and care.
      </p>
    </div>

    {/* Our Mission */}
    <div className="p-8 rounded-lg shadow-md bg-gray-50">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
      <p className="text-gray-700 leading-relaxed text-sm">
        To be the most reliable partner in the supply chain of plastic resins—empowering industries across Asia with materials that meet global standards. We are committed to long-term relationships grounded in integrity, efficiency, and mutual success.
      </p>
    </div>

    {/* Our Vision */}
    <div className="p-8 rounded-lg shadow-md bg-gray-50">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
      <p className="text-gray-700 leading-relaxed text-sm">
        To become Asia’s premier petrochemical trading house—recognized for global partnerships, regional expertise, and unwavering commitment to quality and innovation.
      </p>
    </div>

  </div>
</section>

<TaxCertificates />



    </div>
  );
}
