import React from 'react'

function Skillpill({ name, icon }) {
    return (
        <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm sm:text-base md:px-6 md:py-3 md:text-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <img src={icon} alt={name} className="h-5 w-5 sm:h-8 sm:w-8 object-contain" />
            <span className="font-medium text-gray-800">{name}</span>
        </div>
    )
}

export default Skillpill