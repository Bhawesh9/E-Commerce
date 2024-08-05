import React from 'react'

const Popularproducts = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="mt-8">
        <p className="text-xl font-bold text-center lg:text-left">Popular Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-zinc-300">
          <img src="/Img3.png" alt="" className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full" />
          <div className="p-3">
            <p className="text-sm mt-3">ZARA Mens Shirt</p>
            <p className="font-semibold text-sm mt-3">$42.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full" />
          <div className="p-3">
            <p className="text-sm mt-3">Men Oversized Boxy Bonded Scuba Bomber Jacket</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img src="https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.webp?b=1&s=170667a&w=0&k=20&c=Z2QzjG00NPoQHYmdLVxL0DUVK49lBBb_TfWcPxmH9Js=" alt="" className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full" />
          <div className="p-3">
            <p className="text-sm mt-3">ZARA Mens Shorts</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGZhc2hpb24lMjBjbG90aGVzfGVufDB8fDB8fHww" alt="" className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full" />
          <div className="p-3">
            <p className="text-sm mt-3">Men Full Vest</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center opacity-85 mx-auto">
        <p className="text-sm">We offer a wide range of high-quality apparel to suit every style and occasion.</p>
        <button className="mt-3 text-sm font-semibold p-2 px-4 rounded-md text-white bg-slate-900">Browse All Collections</button>
      </div>
    </div>
  )
}

export default Popularproducts
