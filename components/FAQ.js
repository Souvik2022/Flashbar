import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is it?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        It's a lightweight popup tool that lets you show bold, attention-grabbing messages on your website—without writing any code. Think of it as a wake-up call for your visitors.
      </div>
    ),
  },
  {
    question: "What are the benefits?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        It helps you grab attention, highlight pain points, and drive more clicks, signups, or sales—exactly when visitors are most likely to bounce. Plus, it's fast, easy, and runs on any website.
      </div>
    ),
  },
  {
    question: "Is it a subscription?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Nope. You pay once, and it's yours forever.
      </div>
    ),
  },
  {
    question: "Is it compatible with my platform?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes. WordPress, Shopify, Carrd, Webflow, Bubble, Wix, Squarespace—any site where you can paste a code snippet.
      </div>
    ),
  },
  {
    question: "Do I need to code?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Not at all. Just copy and paste a tiny JavaScript snippet into your site's &lt;head&gt; tag.
      </div>
    ),
  },
  {
    question: "Does it work on mobile?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutely! Only one popup is shown at a time on mobile to keep things clean and clear.
      </div>
    ),
  },
  {
    question: "How does it adapt to my brand?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You can match it to your website's look and feel with custom text, colors, emojis, and timing controls—so every popup feels like it belongs exactly where it appears.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 hover:bg-base-100/50 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content font-medium ${isOpen ? "font-semibold" : ""}`}
          style={isOpen ? { color: '#CBED0F' } : {}}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current text-base-content`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-base-content/80">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100 border-t border-base-300" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
