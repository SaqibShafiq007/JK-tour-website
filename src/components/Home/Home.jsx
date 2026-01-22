import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            {/* 1. HERO SECTION (Full Screen Image) */}
            <div className='relative w-screen h-screen'>
                <img
                    src="https://img.freepik.com/free-photo/beautiful-shot-river-through-village-surrounded-by-hills-mountains-greenery_181624-41644.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="relative z-10 flex h-full items-start justify-start px-4 pt-24 md:pt-32 md:pl-12">
                    <h1 className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg max-w-xl text-left">
                        Plan Your Dream Trip – Customized Tour Packages from Lahore
                    </h1>
                </div>
            </div>

            

           

            {/* 4. TOP DESTINATIONS 2025 SECTION (New Code) */}
            <div className="py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-10 font-serif">Top Destinations 2025</h2>
                
                {/* Grid Container: 1 col on mobile, 4 cols on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    
                    {/* Card 1 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Hunza-Valley-Homepage-Destination-Image.webp" alt="Hunza Valley" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Hunza Valley</h3>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Skardu-Valley-Homepage-Destination-Image.webp" alt="Skardu Valley" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Skardu Valley</h3>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Kaghan-Valley-Homepage-Destination-Image.webp" alt="Kaghan Valley" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Kaghan Valley</h3>
                    </div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Swat-Valley-Homepage-Destination-Image.webp" alt="Swat Valley" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Swat Valley</h3>
                    </div>

                    {/* Card 5 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Azad-Kashmir-Homepage-Destination-Image.webp" alt="Azad Kashmir" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Azad Kashmir</h3>
                    </div>

                    {/* Card 6 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Chitral-Valley-Homepage-Destination-Image.webp" alt="Chitral Valley" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Chitral Valley</h3>
                    </div>

                    {/* Card 7 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Murree-Hills-Homepage-Destination-Image.webp" alt="Murree Hills" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Murree Hills</h3>
                    </div>

                    {/* Card 8 */}
                    <div className="flex flex-col items-center">
                        <img src="https://seepakistantours.com/wp-content/uploads/2024/04/Fairy-Meadows-Homepage-Destination-Image.webp" alt="Fairy Meadows" className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 duration-300" />
                        <h3 className="mt-3 text-lg font-bold">Fairy Meadows</h3>
                    </div>

                </div>
            </div>

             {/* 3. DOWNLOAD SECTION */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-10 space-y-8 text-center mx-auto">
                        
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg fill="white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" /></svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
            </aside>

        </div>
    );
}