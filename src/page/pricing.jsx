import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const plans = [
  {
    name: "Basic",
    price: 200,
    features: [
      "Decent Quality",
      "Medium Storage",
      "Limited Features",
      "Cancel & pause any time"
    ]
  },
  {
    name: "Pro",
    price: 350,
    features: [
      "High Quality",
      "Medium Storage",
      "Access all Features",
      "Cancel & pause any time"
    ]
  },
  {
    name: "Enterprise",
    price: 500,
    features: [
      "Top Quality Resolution",
      "Unlimited Storage",
      "Access all Features",
      "Cancel & pause any time"
    ]
  }
];

function PricingCard({ plan }) {
  return (
    <div className="bg-black p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4"style={{ fontFamily: 'Lora, serif' }}>{plan.name}</h3>
      <p className="text-3xl font-bold mb-4">${plan.price}<span className="text-sm font-normal"style={{ fontFamily: 'Lora, serif' }}>/m</span></p>
      <ul className="mb-6 space-y-2"style={{ fontFamily: 'Lora, serif' }}>
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full text-white py-2 px-4 rounded transition duration-300"style={{ fontFamily: 'Lora, serif',
        background: 'linear-gradient(90deg, #E58179 0%, #DD6C87 100%)'
       }}>
        Continue with Plan
      </button>
    </div>
  );
}

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className=" text-white py-16 min-h-screen" style={{backgroundColor: '#1C1C1C'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 pt-28"style={{ fontFamily: 'Lora, serif' }}>Affordable Subscription Plans</h2>
        <p className="text-center mb-8 text-gray-400"style={{ fontFamily: 'Lora, serif' }}>Sharing and celebrating your memories everyday</p>
        
        <div className="flex justify-end mb-8">
          <div className="flex items-center">
            <span className="mr-2"style={{ fontFamily: 'Lora, serif' }}>Check Annually</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;