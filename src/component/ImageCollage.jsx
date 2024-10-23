import React from 'react'

export default function ImageCollage({ onPricingClick }) {
  const images = [
    { src: '/imagecollage1.png', alt: 'imagecollage1', className: 'col-span-3 row-span-2' },
    { src: '/imagecollage2.png', alt: 'imagecollage2', className: 'col-span-1 row-span-1' },
    { src: '/imagecollage3.png', alt: 'imagecollage3', className: 'col-span-1 row-span-2' },
    { src: '/imagecollage4.png', alt: 'imagecollage4', className: 'col-span-1 row-span-1' },
    { src: '/imagecollage5.png', alt: 'imagecollage5', className: 'col-span-3 row-span-2' },
  ];

  return (
    <>
      <section className=" text-white py-16" style={{backgroundColor: '#1C1C1C'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Lora, serif' }}>Capture memories for Life</h2>
            <p className="text-xl" style={{ fontFamily: 'Lora, serif' }}>Sharing and celebrating your precious moments</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg ${image.className}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* pricing section */}
      <div className="text-white py-16 sm:py-24" style={{backgroundColor: '#1C1C1C'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Lora, serif' }}>
                Introducing the best Photo sharing app
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300" style={{ fontFamily: 'Lora, serif' }}>
                Deliver stunning, high-quality photos with our AI-powered, 
                photo sharing platform. Perfect for weddings, birthdays, 
                community meet-ups & more!
              </p>
              <button 
                className="w-full sm:w-auto text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-300"
                onClick={onPricingClick}
                style={{
                  background: 'linear-gradient(90deg, #E58179 0%, #DD6C87 100%)',
                  color: 'white',
                  maxWidth: '400px',
                  borderRadius: '8px',
                  fontFamily: 'Lora, serif'
                }}
              >
                Pricing
              </button>
            </div>
            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="w-full h-[300px] sm:h-[400px] relative">
                <img
                  src="/imagecollage6.png"
                  alt="Photo sharing app illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}