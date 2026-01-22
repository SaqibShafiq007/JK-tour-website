import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        
       
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          {/* Left Side: Image */}
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="JK Tour Team"
              loading="lazy"
              className="rounded-xl shadow-lg w-full object-cover h-96 hover:scale-105 duration-300 transition-all"
            />
          </div>

          {/* Right Side: Our Story */}
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About <span className="text-orange-700">JK Tour</span>
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to <strong>JK Tour</strong>, your trusted partner in exploring the breathtaking landscapes of Pakistan and beyond. 
              Founded with a passion for adventure, we believe that travel is not just about reaching a destination—it's about the stories you create along the way.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you are looking for a serene getaway to <strong>Hunza Valley</strong>, a thrilling trekking experience in <strong>Fairy Meadows</strong>, 
              or a luxury family vacation in <strong>Azad Kashmir</strong>, we craft customized tour packages that fit your dreams and budget.
            </p>
            <div className="mt-8">
                <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 rounded-lg bg-orange-700 text-white font-medium hover:bg-gray-800 transition duration-300"
                >
                    Plan Your Trip Today
                </Link>
            </div>
          </div>
        </div>


        {/* 2. STATISTICS SECTION  */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gray-100 py-10">
            <div>
                <h3 className="text-4xl font-bold text-orange-700">5+</h3>
                <p className="text-gray-500 font-medium">Years Experience</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-orange-700">120+</h3>
                <p className="text-gray-500 font-medium">Destinations</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-orange-700">5k+</h3>
                <p className="text-gray-500 font-medium">Happy Travelers</p>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-orange-700">24/7</h3>
                <p className="text-gray-500 font-medium">Support</p>
            </div>
        </div>


        {/* 3. WHY CHOOSE US */}
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose JK Tour?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-gray-600 text-sm">We prioritize your safety with experienced guides, secure transport, and 24/7 on-trip support.</p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
                    <p className="text-gray-600 text-sm">Luxury experiences at budget-friendly rates. No hidden charges, just pure adventure.</p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Custom Packages</h3>
                    <p className="text-gray-600 text-sm">We don't believe in "one size fits all". We tailor every trip to your personal preferences.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}