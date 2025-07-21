import ResinSlideshow from "../components/resin-slideshow";


export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Plastic Resin Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* PP */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img 
            src="images/pp.png" 
            alt="Polypropylene (PP)" 
            className="h-52 mx-auto object-contain mb-4" 
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Polypropylene (PP)</h2>
          <p className="text-gray-600 text-sm">
            Used in packaging, textiles, automotive parts, and reusable containers.
          </p>

          <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
            <li>Injection Grade </li>
            <li>Yarn Grade </li>
            <li>Film Grade </li>
            <li>Thermoforming Grade</li>
          </ul>

        </div>

        {/* PE */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img 
            src="images/pe.png" 
            alt="Polyethylene (PE)" 
            className="h-52 mx-auto object-contain mb-4" 
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Polyethylene (PE)</h2>
          <p className="text-gray-600 text-sm">
            The most common plastic used in films, bags, and containers.
          </p>
          <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
            <li>LDPE</li>
            <li>LLDPE</li>
            <li>HDPE Film</li>
            <li>Injection Grade</li>
            <li>Blow Molding Grade</li>
          </ul>
        </div>

        {/* PET */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img 
            src="images/pet.jpg" 
            alt="Polyethylene Terephthalate (PET)" 
            className="h-52 mx-auto object-contain mb-4" 
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Polyethylene Terephthalate (PET)</h2>
          <p className="text-gray-600 text-sm">
            Widely used in beverage bottles, food containers, and fibers.
          </p>
          <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
            <li>Water Grade</li>
            <li>Oil Grade</li>
            <li>CSD Grade</li>

          </ul>
        </div>
      </div>
      <ResinSlideshow />
    </div>
  );
}
