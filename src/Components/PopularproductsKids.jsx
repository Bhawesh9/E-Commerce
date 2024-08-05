import React from 'react';

const PopularproductsKids = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="mt-8">
        <p className="text-xl font-bold text-center lg:text-left">Popular Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/eadd/de6f/78234b07962d/8d334bfde332/06061537251-e1/06061537251-e1.jpg?ts=1719389932334&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div>
            <p className="text-sm mt-3">BARBIE SHIMMERY ™ MATTEL T-SHIRT</p>
            <p className="font-semibold text-sm mt-3">$42.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/4b95/ccbc/fb9d495c9af9/02dd99170c86/02160700620-e1/02160700620-e1.jpg?ts=1717602705458&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div>
            <p className="text-sm mt-3">NIRVANA © T-SHIRT</p>
            <p className="font-semibold text-sm mt-3">$20.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/c5a4/bc7e/e58d47e08684/9766f47bfe1f/05431740807-e1/05431740807-e1.jpg?ts=1717660354087&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div>
            <p className="text-sm mt-3">FRUIT PRINT T-SHIRT</p>
            <p className="font-semibold text-sm mt-3">$25.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/2a1d/2f1a/1b3844baa100/e87fe5221126/07878593812-e1/07878593812-e1.jpg?ts=1718709504328&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div>
            <p className="text-sm mt-3">SWEATSHIRT WITH EMBROIDERED SLOGAN</p>
            <p className="font-semibold text-sm mt-3">$28.50</p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center opacity-85 mx-auto">
        <p className="text-sm">We offer a wide range of high-quality apparel to suit every style and occasion.</p>
        <button className="mt-3 text-sm font-semibold p-2 px-4 rounded-md text-white bg-slate-900">Browse All Collections</button>
      </div>
    </div>
  );
};

export default PopularproductsKids;
