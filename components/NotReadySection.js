import React from "react";

const NotReadySection = () => (
  <section className="w-full bg-base-200 py-16 px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6">
        97% of visitors aren&apos;t ready to buy
      </h2>
      <p className="text-lg md:text-xl text-base-content/90 mb-12">
        All the time and money spent on ads, SEO, and content marketing goes to waste. Potential customers leave and never come back.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🥲</span>
          <span className="font-bold text-base-content">Potential customer is<br />interested</span>
        </div>
        <span className="hidden md:inline-block text-3xl text-base-content">⇨</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">😕</span>
          <span className="font-bold text-base-content">Doesn&apos;t find a reason to<br /><span className="underline">buy right now</span></span>
        </div>
        <span className="hidden md:inline-block text-3xl text-base-content">⇨</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">😁</span>
          <span className="font-bold text-base-content">Leaves and never<br />comes back</span>
        </div>
      </div>
    </div>
  </section>
);

export default NotReadySection; 