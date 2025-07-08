import React from "react";

const NotReadySection = () => (
  <section id="problem" className="w-full bg-base-200 py-16 px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6">
      Most Visitors Walk Away Without Acting
      </h2>
      <p className="text-lg md:text-xl text-base-content/90 mb-12">
      You invest in ads, SEO, and great content, but nearly all your traffic disappears without taking any action. They browse, hesitate, and leave&mdash;often for good.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">👀</span>
          <span className="font-bold text-base-content">They&apos;re curious about your<br />offer</span>
        </div>
        <span className="hidden md:inline-block text-3xl text-base-content">⇨</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">😕</span>
          <span className="font-bold text-base-content">They don&apos;t feel enough urgency to act<br /></span>
        </div>
        <span className="hidden md:inline-block text-3xl text-base-content">⇨</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🚶🏼‍♂️</span>
          <span className="font-bold text-base-content">They exit your site and forget<br />you exist</span>
        </div>
      </div>
    </div>
  </section>
);

export default NotReadySection; 