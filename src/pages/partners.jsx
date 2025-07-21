export default function Partners() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Global Partners</h1>
      
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
        At Forerunner International Co., Ltd, we are proud to collaborate with a distinguished network of world-class suppliers. Our strategic partnerships with leading petrochemical producers ensure consistent access to high-quality materials that meet global standards across industries.
      </p>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center text-lg font-medium">
        <div>
          <img src="/images/ptt-globalchemical.jpg" className="mx-auto mb-2 h-30 object-contain" alt="PTT Global Chemical" />
        </div>
        <div>
          <img src="/images/indorama-ventures.png" className="mx-auto mb-2 h-30 object-contain" alt="Indorama Ventures" />
        </div>
        <div className="flex justify-center items-center h-40">
          <img src="/images/irpc.png" className="mx-auto mb-2 max-h-25 object-contain" alt="IRPC" />
        </div>

        <div className="flex justify-center items-center h-40">
          <img src="/images/reliance.png"  className="mx-auto mb-2 h-30 object-contain" alt="Sabic" />
        </div>  
        <div>
          <img src="/images/borouge.gif" className="mx-auto mb-2 h-20 object-contain" alt="Borouge" />
        </div>
        <div>
          <img src="/images/tricon-energy.png" className="mx-auto mb-2 h-50 object-contain" alt="Tricon Energy" />
        </div>
        <div>
          <img src="/images/vinmar-intl.png"  className="mx-auto mb-2 h-30 object-contain" alt="Vinmar International" />
        </div>
        <div>
          <img src="/images/yisheng.jpg"  className="mx-auto mb-2 h-30 object-contain" alt="Yisheng" />
        </div>        
        <div>
          <img src="/images/sabic.png"  className="mx-auto mb-2 h-20 object-contain" alt="Sabic" />
        </div>   

        <div>
          <img src="/images/opal.png"  className="mx-auto mb-2 h-25 object-contain" alt="OPaL (ONGC Petro additions Ltd.)" />
        </div>  
        <div>
          <img src="/images/hmc.svg"  className="mx-auto mb-2 h-25 object-contain" alt="HMC Polymer" />
        </div>  
      </div>

      {/* Bottom paragraph separated from the grid */}
      <p className="mt-16 text-center text-base text-gray-600">
        These valued partnerships enable us to maintain the highest levels of quality, consistency, and innovation in every shipment.
      </p>
    </div>
  );
}
