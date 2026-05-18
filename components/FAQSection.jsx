"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer: "I work with YouTube and Instagram creators — fitness coaches, educators, tech creators, and lifestyle vloggers. From people just starting to grow their channel to established creators with millions of subscribers. No brands for now — just creators who care about quality."
  },
  {
    question: "What software do you use?",
    answer: "Adobe Premiere Pro for video editing, Photoshop for thumbnail design, and After Effects for motion graphics and animations — the full Adobe Creative Suite plus DaVinci for color grading."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Reels and Shorts usually take 3–5 hours. Long-form YouTube videos can take 1 day to 1 week depending on the complexity and length."
  },
  {
    question: "How many revisions do you offer?",
    answer: "I offer unlimited revisions until you're fully satisfied with the results."
  },
  {
    question: "How do you determine pricing?",
    answer: "Pricing depends on the scope — video length, complexity, number of thumbnails, turnaround time, etc. Reach out on WhatsApp or email and I'll send a personalised quote."
  },
  {
    question: "How can I contact you?",
    answer: "WhatsApp: +91 9599326954 · Email: Rishabh@yomgupta.com · Instagram: @mr_yom_gupta. WhatsApp is the fastest way to reach me."
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer: "I offer revisions until you're happy. My goal is content that actually performs — not just something that looks good."
  },
  {
    question: "What's your creative philosophy?",
    answer: "I don't just edit videos — I think about why a viewer clicks, why they stay, and why they come back. That's what drives every cut, every color grade, and every thumbnail I make."
  }
];

export default function FAQSection() {
  return (
    <section className="py-10 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 max-w-[98%] mx-auto">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-3 sm:p-4 rounded-xl shadow-lg bg-gray-900 border border-gray-800 transition-all duration-300 open:bg-gray-800"
            >
              <summary className="flex justify-between items-center cursor-pointer text-white text-sm sm:text-base md:text-lg font-semibold list-none">
                {faq.question}
                <span className="text-primary transition-transform duration-300 group-open:rotate-180 ml-3 sm:ml-4 flex-shrink-0">
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </span>
              </summary>
              <p className="text-gray-400 mt-3 md:mt-4 leading-relaxed pr-6 md:pr-8 text-sm md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
