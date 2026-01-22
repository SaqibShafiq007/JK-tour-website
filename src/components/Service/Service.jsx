import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-orange-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
             <img 
                src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Services Background" 
                className="w-full h-full object-cover opacity-20"
             />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Our Premium Services</h1>
          <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
            From luxury transport to 5-star accommodation, JK Tour handles every detail so you can focus on making memories.
          </p>
        </div>
      </div>


      {/* 2. WHAT WE OFFER (Grid) */}
      <div className="py-16 px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need for a Perfect Trip</h2>
            <p className="text-gray-500 mt-2">One-stop solution for all your travel needs in Pakistan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            {/* Service 1: Tour Packages */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tour Packages" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Tour Packages</h3>
                    <p className="text-gray-600">
                        Tailor-made itineraries for Hunza, Skardu, Swat, and Kashmir. Whether it's a 3-day weekend or a 10-day expedition.
                    </p>
                </div>
            </div>

            {/* Service 2: Car Rental */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Transport" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Transport</h3>
                    <p className="text-gray-600">
                        Comfortable rides for the mountains. We provide Prados, Land Cruisers, Grand Cabins, and Coasters with experienced drivers.
                    </p>
                </div>
            </div>

            {/* Service 3: Hotel Booking */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hotels" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Hotel Booking</h3>
                    <p className="text-gray-600">
                        We have partnered with the best hotels and resorts to get you exclusive discounts and the best views in the valley.
                    </p>
                </div>
            </div>
        </div>
      </div>


      {/* 3. SPECIAL CATEGORIES (Icons) */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Specialized For</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                
                {/* Category 1 */}
                <div className="p-6 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition cursor-pointer">
                    <span className="text-4xl">💍</span>
                    <h3 className="mt-4 font-bold text-gray-800">Honeymoon Trips</h3>
                </div>

                {/* Category 2 */}
                <div className="p-6 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition cursor-pointer">
                    <span className="text-4xl">🎒</span>
                    <h3 className="mt-4 font-bold text-gray-800">Group Adventures</h3>
                </div>

                {/* Category 3 */}
                <div className="p-6 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition cursor-pointer">
                    <span className="text-4xl">👨‍👩‍👧‍👦</span>
                    <h3 className="mt-4 font-bold text-gray-800">Family Vacations</h3>
                </div>

                {/* Category 4 */}
                <div className="p-6 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition cursor-pointer">
                    <span className="text-4xl">🏢</span>
                    <h3 className="mt-4 font-bold text-gray-800">Corporate Tours</h3>
                </div>

            </div>
        </div>
      </div>


      {/* 4. CTA (Call to Action) */}
      <div className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to start your adventure?</h2>
          <p className="mt-4 text-gray-600 mb-8">Contact us now to get a free quote for your next trip.</p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-orange-700 text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg"
          >
            Book Now
          </Link>
      </div>

    </div>
  )
}