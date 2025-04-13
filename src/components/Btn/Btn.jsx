import React from 'react'

export default function Btn() {



    return (
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-11 h-11 fixed bottom-5 end-5 flex items-center justify-center rounded-full bg-mowana opacity-70 hover:opacity-100 duration-200 cursor-pointer z-50">
            <i className="fa-solid fa-arrow-up text-white text-xl"></i>
        </div>
    )
}
