import React from 'react';

const PopularproductsWomens = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="mt-8">
        <p className="text-xl font-bold text-center lg:text-left">Popular Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/22e2/acd3/e8f04203886c/1596777582dc/08741036307-017-e1/08741036307-017-e1.jpg?ts=1718894121897&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div className="p-3">
            <p className="text-sm mt-3">BASIC SATIN SHIRT</p>
            <p className="font-semibold text-sm mt-3">$42.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/c6f6/0085/43b34959bafd/639189ac58dd/08508136330-e1/08508136330-e1.jpg?ts=1721394694651&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div className="p-3">
            <p className="text-sm mt-3">FLORAL PRINT MINI DRESS</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/4fe1/3e45/4f8f45bcba31/e2beda99668c/03057422046-e1/03057422046-e1.jpg?ts=1714403333642&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div className="p-3">
            <p className="text-sm mt-3">BASIC POPLIN SHIRT</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
          </div>
        </div>
        <div className="bg-zinc-300">
          <img
            src="https://static.zara.net/assets/public/ce16/2b79/8d9d45129aae/79fb54104320/02753530450-e1/02753530450-e1.jpg?ts=1711475954584&w=315"
            alt=""
            className="object-cover h-[320px] sm:h-[380px] md:h-[450px] w-full"
          />
          <div className="p-3">
            <p className="text-sm mt-3">LINEN BLEND ROLL-UP SLEEVE OPEN BLAZER</p>
            <p className="font-semibold text-sm mt-3">$2.50</p>
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

export default PopularproductsWomens;
