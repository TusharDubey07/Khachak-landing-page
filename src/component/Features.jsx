import React from 'react';

export default function Features() {
  return (
    <section className="py-16 text-white" style={{backgroundColor: '#1C1C1C'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>AI Facial Recognition with Quality Retention</h2>
            <p className="mb-4" style={{ fontFamily: 'Lora, serif' }}>
              Khachak's uses facial recognition to find photos of just you! It handles individual collections, group photos, and family photos to create your event gallery. No quality loss when viewing and downloading photos. Download high-res images with no visual quality loss unlike other platforms.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/feature1.png" alt="AI Facial Recognition" className="w-full max-w-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>Deliver Photos to your Clients in a hassle free way</h2>
            <p className="mb-4" style={{ fontFamily: 'Lora, serif' }}>
              Clicking photos is one half of the task. The second half is delivering them to your clients. Choose the modern way of delivering photos smartly using AI.
              With our paid plans, unlock Khachak's best features to grow your business. Create custom galleries, choose from a range of gallery templates to best represent your style, get different download settings and much more!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/feature2.png" alt="Photo Delivery" className="w-full max-w-sm" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>Create multiple event groups & serve lots of clients all at once!</h2>
            <p className="mb-4" style={{ fontFamily: 'Lora, serif' }}>
              You can create multiple event groups for easy browsing. Store photos like an event directory for quick access and sharing. Plus, upload multiple folders at once, have our face finder feature automatically sort photos into the right folders, creating an entire event directory at one go!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/feature3.png" alt="Event Groups" className="w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}