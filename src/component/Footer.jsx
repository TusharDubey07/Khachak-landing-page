import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white py-8" style={{backgroundColor: '#1C1C1C'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>Khachak</h2>
            <p className="mb-4 text-sm sm:text-base" style={{ fontFamily: 'Lora, serif' }}>Perfect for weddings, birthdays, community meet ups & more!</p>
            <p className="text-xs sm:text-sm" style={{ fontFamily: 'Lora, serif' }}>
              2024 © khachak Ltd. All rights Reserved{' '}
              <a href="/learn-more" className="text-pink-500 hover:underline" style={{ fontFamily: 'Lora, serif' }}>
                Learn more
              </a>
            </p>
          </div>

          {/* Middle column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: 'Lora, serif' }}>Discover More</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com/khachak" className="hover:underline text-sm sm:text-base" style={{ fontFamily: 'Lora, serif' }}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/khachak" className="hover:underline text-sm sm:text-base" style={{ fontFamily: 'Lora, serif' }}>
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ fontFamily: 'Lora, serif' }}>Let's Connect</h3>
            <p className="mb-2 text-sm sm:text-base" style={{ fontFamily: 'Lora, serif' }}>Contact Us: 1234 5678</p>
            <p className="text-sm sm:text-base">
              Email Us:{' '}
              <a href="mailto:khachak@gmail.com" className="hover:underline" style={{ fontFamily: 'Lora, serif' }}>
                khachak@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}