import React, { useRef } from "react";

export default function FrictionSection() {
  const snippet = `<script defer src=\"https://flashbar.com/embed.js\"></script>`;
  const inputRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script defer src=\"https://flashbar.com/embed.js\"></script>`);
    // Optionally, show a copied message
  };

  return (
    <section className="py-6 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Heading and sub-paragraph */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-base-content mt-2">
        Expose What’s Holding Visitors Back
      </h2>
      <p className="mx-auto mb-10 text-base sm:text-lg text-base-content/80 max-w-xs sm:max-w-2xl">
        Most users bounce without saying a word.<br className="hidden sm:inline" />
        We reveal their hidden friction points—then trigger the perfect popup to guide them toward action.
      </p>

      {/* "How to use" subheading */}
      <h3 className="text-2xl font-bold mb-6 text-base-content">How to use</h3>

      {/* YouTube Video */}
      <div className="w-full max-w-2xl mb-8">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/RXojQGBb4gg"
            title="How to use Flashbar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          />
        </div>
      </div>

      {/* Instructional text with arrows */}
      <div className="flex flex-col items-center my-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2 text-base-content/60" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14m0 0l6-6m-6 6l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="text-base text-base-content/80 font-medium">
          Use the snippet in your site to get the notifications.
        </p>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mt-2 text-base-content/60" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14m0 0l6-6m-6 6l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Code snippet box */}
      <div className="bg-base-200 rounded-2xl p-8 max-w-2xl w-full mx-auto shadow flex flex-col items-center">
        <div className="text-lg font-semibold mb-2 text-base-content">Make your Flashbar live 🎉</div>
        <div className="text-base-content/80 mb-4">
          Paste this snippet in the <code>&lt;head&gt;</code> of your website.
        </div>
        <div className="bg-base-300 rounded-md px-4 py-3 flex items-center w-full justify-between font-mono text-sm text-base-content">
          <span ref={inputRef}>{`<script defer src=\"https://flashbar.com/embed.js\"></script>`}</span>
          <button
            onClick={handleCopy}
            className="ml-4 bg-lime-300 text-black font-bold rounded px-4 py-2 hover:bg-lime-200 transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  );
} 