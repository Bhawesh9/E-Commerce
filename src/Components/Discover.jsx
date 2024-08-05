import React from 'react'

const Discover = () => {
  return (
    <div className="bg-zinc-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
              src='/Discover.png' 
              alt='Discover illustration' 
            />
          </div>

          <div className="lg:w-2/3">
            <h1 className="font-bold text-2xl sm:text-3xl mb-4">Discover the Difference</h1>
            <p className="text-sm sm:text-base mb-6 opacity-85">
              At Kwaan, we believe that fashion is more than just clothing; it's a statement, a lifestyle, and an
              expression of individuality. Our commitment to quality, style, and sustainability sets us apart, making
              every piece you purchase a unique addition to your wardrobe.
            </p>

            <div className="space-y-6">
              {[
                { icon: 'Frame1.png', title: 'Unmatched Quality' },
                { icon: 'Frame2.png', title: 'Exclusive Designs' },
                { icon: 'Frame3.png', title: 'Sustainable Fashion' },
                { icon: 'Frame4.png', title: 'Affordability Without Compromise' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img className="w-6 h-6 object-contain" src={item.icon} alt="" />
                  <div>
                    <h2 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h2>
                    <p className="text-sm">
                      We use the finest fabrics and precise stitching for clothing that looks great, lasts long, and
                      feels comfortable.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover